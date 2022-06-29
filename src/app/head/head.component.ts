import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSettings(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {});
  }
}
