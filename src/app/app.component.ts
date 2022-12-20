import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD_APP_MATERIAL';
  constructor(private dialog:MatDialog){

  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{width:"30%"});
  }
}

