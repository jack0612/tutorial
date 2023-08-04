import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalInfo } from './modal-info.model';
 
 

@Component({
  selector: 'app-new-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class SnapshipModalComponent implements OnInit {
  modalInfo: ModalInfo
  
 
  hideModal: boolean = true;

  constructor( @Inject(MAT_DIALOG_DATA) public _modalInfo: ModalInfo ) {
    
    //console.log('777777777777 modal')
    this.modalInfo=_modalInfo
  }

  ngOnInit() {
    //console.log('777777777777 modal')
  }

  onConfirm() {
   
  }

  onCancel() {
   
  }

  onClose() {
   
  }

 
  trapFocus(): void {
  
  }
}
