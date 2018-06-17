import { Component, OnInit, Inject  } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import {FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title = "Example Angular Material Dialog";
  myform: FormGroup;
  constructor(
    private _Service: CoreService,
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    ) {
    this.myform = fb.group({
      name: ['' , Validators.required],
      mobile: ['',Validators.compose([Validators.required, Validators.maxLength(10)])], 
      degree: ['' , Validators.required], 
      college: ['' , Validators.required],
      department: ['' , Validators.required],
       message: ['' , Validators.required]
    });
  }

  ngOnInit() {
    this.getDetails();
  }

  close() {
   
    this.dialogRef.close(this.myform.value);

    this._Service.addStudents(this.myform.value).subscribe(
      data => { console.log(data) },
      err => console.error(err),
       () => console.log('done ')
     );
  }

  getDetails() {
       this._Service.getStudents().subscribe(
         data => { console.log(data) },
         err => console.error(err),
          () => console.log('done ')
        );
     }

}
