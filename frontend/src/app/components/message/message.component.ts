import {Component, Inject, Injectable} from  '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export  class  MessageComponent {
  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string}) {
  };
  ngOnInit() {
    this.dialogRef.updateSize('50%', '50%');
  }
  public  closeMe() {
    this.dialogRef.close();
  }
}
