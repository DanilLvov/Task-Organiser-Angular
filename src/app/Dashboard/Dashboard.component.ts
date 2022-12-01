import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ComponentRef,
  createComponent,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {M} from "@angular/cdk/keycodes";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HabitComponent} from "./habit.component/habit.component";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "../app.component";


export interface DialogData {
  name: string;
  count: string;
  category?: string;
}

@Component({
  selector: 'dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: [ './Dashboard.component.css' ]
})
export class DashboardComponent implements AfterViewChecked{

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  name: string;
  count: string;
  category?: string;

  constructor(
    private dialog: MatDialog,
    ) {}

  openDialog() {
    this.count = "0";
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, count: this.count, category: this.category}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.name !== ""){
        const habitRef = this.container.createComponent(HabitComponent)
        habitRef.instance.name = result.name;
        habitRef.instance.count = result.count;
        habitRef.instance.category = result.category;
      }
    });
  }

  ngAfterViewChecked(): void {
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
    //DashboardComponent.saveResult(this.habitForm.value);
  }

}

