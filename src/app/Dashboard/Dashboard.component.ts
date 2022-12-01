import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HabitComponent} from "./habit.component/habit.component";



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
export class DashboardComponent implements AfterViewInit{

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  name: string;
  count: string;
  category?: string;

  constructor(
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
    ) {}

  ngAfterViewInit(): void {
      let stringJSON = localStorage.getItem('dashboard' + sessionStorage.getItem('token'));
      if(stringJSON !== null) {
        //localStorage.clear();
        let data: DialogData[] = JSON.parse(stringJSON)
        console.log(data)
        const helper = this.container
        data.forEach(function (value) {
          console.log(value)
          const habitRef = helper.createComponent(HabitComponent)
          habitRef.instance.name = value.name;
          habitRef.instance.count = value.count;
          if(value.category !== undefined) habitRef.instance.category = value.category;
        });
      }
    this.cdr.detectChanges();
  }

  openDialog() {
    this.count = "0";
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, count: this.count, category: this.category}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        const habitRef = this.container.createComponent(HabitComponent)
        habitRef.instance.name = result.name;
        habitRef.instance.count = result.count;
        habitRef.instance.category = result.category;
        this.writeToLocalStorage(result);
      }
    });
  }

  writeToLocalStorage (result: DialogData) {
    let dashboardMail = 'dashboard' + sessionStorage.getItem('token')
    let stringJSON = localStorage.getItem(dashboardMail);
    if(stringJSON === null) {
      localStorage.setItem(dashboardMail, JSON.stringify([result]))
      console.log(localStorage.getItem(dashboardMail))
    }
    else {
      let data: DialogData[] = JSON.parse(stringJSON);
      data.push(result);
      localStorage.setItem(dashboardMail, JSON.stringify(data))
      console.log(localStorage.getItem(dashboardMail))
    }
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

