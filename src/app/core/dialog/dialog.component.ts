import { Component, OnInit, Inject  } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import {FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title = "Example Angular Material Dialog";
  myform: FormGroup;
  constructor(fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog,public dialogRef: MatDialogRef<DialogComponent>,
    ) {
    this.myform = fb.group({
      name: ['' , Validators.required],
      mobile: ['',Validators.compose([Validators.required, Validators.maxLength(10)])], 
      degree: ['' , Validators.required], 
      department: ['' , Validators.required],
       message: ['' , Validators.required]
    });
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
