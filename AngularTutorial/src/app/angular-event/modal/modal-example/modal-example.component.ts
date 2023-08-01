import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnapshipModalComponent } from '../modal.component'
import { ModalInfo } from '../modal-info.model'
@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {

  modalInfo: ModalInfo=new ModalInfo();

  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.modalInfo.headerText="modal header";
    this.modalInfo.bodyText="modal body";
    this.modalInfo.submitBtnText="OK";
    this.modalInfo.cancelBtnText="Cancel";
    const dialogRef = this.dialog.open(SnapshipModalComponent,{
      data:this.modalInfo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}


