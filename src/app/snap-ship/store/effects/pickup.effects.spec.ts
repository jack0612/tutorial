import { async, TestBed } from '@angular/core/testing';;
import { Observable, of, throwError } from 'rxjs';
import { PickupEffects } from './pickup.effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AppState } from '../state/app.state'
import { PickupService } from '../../common/services/pickup.service';
import { getBookedPickups, getBookedPickupsFailure, getBookedPickupsSuccess } from '../actions/pickup.action';
//import { HttpClientTestingModule } from ' @angular/common/http/testing';

fdescribe('PickupEffects success', () => {
    let actions$: Observable<any>;
    let effects: PickupEffects;
    let store: MockStore<AppState>;
    const bookedPickupsDto = getBookedPickupsApiResponse();

    const pickupService: Pick<PickupService, 'getBookedPickups'>
        = jasmine.createSpyObj<PickupService>(
            'PickupService',
            {
                getBookedPickups: of(bookedPickupsDto)
            }
        );
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                PickupEffects,
                provideMockActions(() => actions$),
                provideMockStore(),
                { provide: PickupService, useValue: pickupService }
            ],

        });
        effects = TestBed.inject(PickupEffects);
        store = TestBed.inject(MockStore);
    }));


    it('should success', (done) => {
        actions$ = of(getBookedPickups);
        effects.loadPickupDateTime$.subscribe((res) => {
            expect(res).toEqual(getBookedPickupsSuccess({ bookedPickupsDto }));
        });
        expect(pickupService.getBookedPickups).toHaveBeenCalledTimes(1);
        done();
    });



});


fdescribe('PickupEffects fail', () => {
    let actions$: Observable<any>;
    let effects: PickupEffects;
    let store: MockStore<AppState>;
    const bookedPickupsDto = getBookedPickupsApiResponse();

    const pickupService: Pick<PickupService, 'getBookedPickups'>
        = jasmine.createSpyObj<PickupService>(
            'PickupService',
            {
                getBookedPickups: throwError('error')
            }
        );
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                PickupEffects,
                provideMockActions(() => actions$),
                provideMockStore(),
                { provide: PickupService, useValue: pickupService }
            ],

        });
        effects = TestBed.inject(PickupEffects);
        store = TestBed.inject(MockStore);
    }));


    it('should fail', (done) => {
        actions$ = of(getBookedPickups);
        effects.loadPickupDateTime$.subscribe((res) => {
            expect(res).toEqual(getBookedPickupsFailure({ errorMessage: 'error' }));
        });
        expect(pickupService.getBookedPickups).toHaveBeenCalledTimes(1);
        done();
    });



});


function getBookedPickupsApiResponse() {
    let bookedPickupsDto = {
        bookedPickups: [{
            date: 'Jan 11, 2021',
            time: '12 pm - 1 pm',
            address: '365 March RD',
            location: 'Front door',
            instruction: 'knock front door'
        },
        {
            date: 'Jan 12, 2021',
            time: '1 pm - 2 pm',
            address: '365 March RD',
            location: 'Back door',
            instruction: 'knock back door'
        }],
        preferedBookedPickupIndex: 1
    };
    return bookedPickupsDto;
}
