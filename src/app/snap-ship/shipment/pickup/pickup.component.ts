import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormBuilder, FormGroup } from '@angular/forms'


import * as fromPickupActions from '../../store/actions/pickup.action'
import { Store } from '@ngrx/store';
import * as fromPickupSelectors from '../../store/selectors/pickup.selector'
import { BookedPickup, BookedPickupsDto } from '../../ship-common/models/pickup/booked-pickups-dto.model';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { AppState } from '../../store/state/app.state';
import { deepCopy } from '../../ship-common/utils/deep-copy.util';
@Component({
    selector: 'pickup',
    templateUrl: './pickup.component.html',
    styleUrls: ['./pickup.component.scss'],
    providers: [DatePipe]
})

export class PickupComponent implements OnInit {
    dateFilter: (d: Date | null) => boolean = null;
    selectedDate: Date = null;
    minDate: Date = null;
    maxDate: Date = null;
    displayAddAnotherPickup: boolean = false;
    newPickupAdded: boolean = false;
    PickupTimeDropdownDeleted: boolean = false;
    SLOT_LIMIT: number = 4;
    NOT_SELECTED: string = '';
    DATE_FORMAT: string = "yyyy-MM-dd";

    private _intervalFunction = null;
    private _MAX_DAYS: number = 4;
    private _EARLIEST_TIMES: string[] = [
        '12 PM',
        '1 PM',
        '2 PM',
        '3 PM',
        '4 PM'
    ];
    earliestTimes: string[] = null;
    private _LATEST_TIMES: string[] = [
        '1 PM',
        '2 PM',
        '3 PM',
        '4 PM',
        '5 PM'
    ];
    latesttTimes: string[] = null;
    pickupTimeSlots: BookedPickup[] = [];
    selectedPickupTimeSlotIndex: number = null;
    PICKUP_LOCATIONS: string[] = ['Front door', 'Back door', 'Side door', 'Reception', 'Security office'];
    shouldEmailMe: boolean = true;
    emailAddress: string = "david.snap@test.com";
    pickupForm: FormGroup = null;
    isModalOpen: boolean = false;

    bookedPickupsDto: BookedPickupsDto = null;

    constructor(private _datePipe: DatePipe, private _fb: FormBuilder, private _store: Store<AppState>) {
        this.pickupForm = this._fb.group({
            manualInputDate: [''],
            pickupLocation: [this.NOT_SELECTED],
            earliestTime: [this.NOT_SELECTED],
            latestTime: [this.NOT_SELECTED],
            instruction: ['']
        });

        this._store.dispatch(fromPickupActions.getBookedPickups());
 
        this._store.select(fromPickupSelectors.getBookedPickupsDto).subscribe((bookedPickupsDto: BookedPickupsDto) => {
            if(!bookedPickupsDto){
                return
            }
            this.bookedPickupsDto = bookedPickupsDto;
            this.pickupTimeSlots = deepCopy(bookedPickupsDto.bookedPickups);
            this.selectedPickupTimeSlotIndex = bookedPickupsDto.preferedBookedPickupIndex;
            if (this.selectedPickupTimeSlotIndex != null) {
                this._updateForm(this.pickupTimeSlots[this.selectedPickupTimeSlotIndex], false);
                this._disableFields(true);
            }
        })
        
    }


    ngOnInit() {
        this.dateFilter = (d: Date | null): boolean => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        }
        this._setMinDateMaxDate(true);
    }


    private _setMinDateMaxDate(disabled: boolean): void {
        if (disabled) {
            if (this._intervalFunction) {
                clearInterval(this._intervalFunction);
            }
            this.minDate = new Date();
            this.maxDate = this._getAnotherDate(-1);
            return;
        }
        let hour = this._getHour();
        if (hour <= 12) {
            this.earliestTimes = this._EARLIEST_TIMES;
            this.latesttTimes = this._LATEST_TIMES;
            this.minDate = new Date();
            this.maxDate = this._getAnotherDate(this._MAX_DAYS);
        } else if (hour < 15) {
            hour -= 12;
            this.earliestTimes = this._EARLIEST_TIMES.filter(item => {
                let arr = item.split(' ');
                return Number(arr[0]) >= hour && Number(arr[0]) != 12;
            });
            this.latesttTimes = this._LATEST_TIMES.filter(item => {
                let arr = item.split(' ');
                return Number(arr[0]) >= hour + 1;
            });
            this.minDate = new Date();
            this.maxDate = this._getAnotherDate(this._MAX_DAYS);
        } else {
            //select time slot on next day
            this.earliestTimes = this._EARLIEST_TIMES;
            this.latesttTimes = this._LATEST_TIMES;
            this.minDate = this._getAnotherDate(1)
            this.maxDate = this._getAnotherDate(this._MAX_DAYS + 1);
        }

    }

    private _getHour(): number {
        let date = new Date();
        let min = date.getMinutes();
        let hour = date.getHours();
        if (min > 0) {
            hour++;
        }
        return hour;
    }

    private _getAnotherDate(offset: number): Date {
        let anotherDayDate = new Date();
        if (offset < 0) {
            anotherDayDate.setDate(anotherDayDate.getDate() + offset);
        } else {
            let sum: number = 0;
            while (sum != offset) {
                anotherDayDate.setDate(anotherDayDate.getDate() + 1);
                if (this.dateFilter(anotherDayDate)) {
                    sum++;
                }
            }
        }
        return anotherDayDate;
    }

    private _disableFields(value: boolean): void {
        if (value) {
            this.pickupForm.controls['manualInputDate'].disable();
            this.pickupForm.controls['pickupLocation'].disable();
            this.pickupForm.controls['instruction'].disable();
            this._setMinDateMaxDate(true);
        } else {
            this.pickupForm.controls['manualInputDate'].enable();
            this.pickupForm.controls['pickupLocation'].enable();
            this.pickupForm.controls['instruction'].enable();
        }
    }

    private _updateForm(bookedPickup: BookedPickup, all: boolean): void {
        this.pickupForm.get('instruction').setValue(bookedPickup.instruction);
        let pickupLocaltion = bookedPickup.location;
        let index = this.PICKUP_LOCATIONS.indexOf(pickupLocaltion);
        if (index >= 0) {
            this.pickupForm.get('pickupLocation').setValue(this.PICKUP_LOCATIONS[index]);
        }
        let preferedDate = new Date(bookedPickup.date);
        this._updatemanualInputDate(preferedDate);
        if (all) {
            let dateString = this._datePipe.transform(preferedDate, this.DATE_FORMAT);
            this._updateCalendar(dateString);
        }
    }

    //dateString: the format is yyyy-MM-dd
    private _updateCalendar(dateString: string): void {
        let temps = dateString.split('-');
        if (temps.length == 3) {
            this.selectedDate = new Date();
            this.selectedDate.setFullYear(Number(temps[0]), Number(temps[1]) - 1, Number(temps[2]));
        }
    }

    private _updatemanualInputDate(date: Date): void {
        const isoDate = this._datePipe.transform(date, this.DATE_FORMAT);
        this.pickupForm.get('manualInputDate').setValue(isoDate);
    }



    //  date: 'Jan 11, 2021',
    getHilightedDateClass(): (date: Date) => MatCalendarCellCssClasses {
        return (date: Date): MatCalendarCellCssClasses => {
            const highlightDate = this.pickupTimeSlots
                .map(slot => new Date(slot.date))
                .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
            return (highlightDate ? 'booked-pickup-date' : '');
        };
    }

    goBack(event): void {
    }

    get backImg(): string {
        return '';
    }

    blurManualInputDate(): void {
        let dateString = this.pickupForm.get('manualInputDate').value;
        this._updateCalendar(dateString);
    }

    onSelectDate(event: Date): void {
        this.selectedDate = event;
        this._updatemanualInputDate(this.selectedDate);
    }

    onSelectTime(): void {
        let latest = this.pickupForm.get('latestTime').value;
        let earliest = this.pickupForm.get('earliestTime').value;
        if (earliest != this.NOT_SELECTED && latest != this.NOT_SELECTED) {
            let selectedEh = Number(earliest.split(' ')[0]);
            let selectedLh = Number(latest.split(' ')[0]);
            if (selectedEh < selectedLh || selectedEh == 12) {

            }
        }
    }

    onMakeTimeSlotActive(index: number): void {
        this.selectedPickupTimeSlotIndex = index;
        this._updateForm(this.pickupTimeSlots[this.selectedPickupTimeSlotIndex], false);
    }

    clickAddAnotherSlotButton(): void {
        this.PickupTimeDropdownDeleted = false;
        this.displayAddAnotherPickup = true;
        this.pickupForm.patchValue({
            pickupLocation: this.NOT_SELECTED,
            earliestTime: this.NOT_SELECTED,
            latestTime: this.NOT_SELECTED,
            instruction: ''
        });
        this._disableFields(false);
        this._setMinDateMaxDate(false);
        this._intervalFunction = setInterval(() => this._setMinDateMaxDate(false), 60 * 1000);
    }

    clickDeletePickupTimeDropdownButton(): void {
        this.PickupTimeDropdownDeleted = true;
        this.displayAddAnotherPickup = false;
        if (this.selectedPickupTimeSlotIndex != null) {
            this._updateForm(this.pickupTimeSlots[this.selectedPickupTimeSlotIndex], false);
            this._disableFields(true);
        }
    }

    submit(): void {
    }


    cancel(): void {
    }

    openModal(ModalStatus: boolean): void {
        this.isModalOpen = ModalStatus;
        if (!ModalStatus) {

        }
    }



}