import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {M} from "@angular/cdk/keycodes";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {

  constructor(private dialog: MatDialog) {
  }

  addElement() {

  }

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog, { width: '250px' });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal-window.html',
})
export class DialogOverviewExampleDialog implements OnInit{
  habitForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.habitForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      count: ['0', Validators.required],
      category: ['']
    });
  }

  onSubmit() {
    console.log(this.habitForm.value)

  }

}

