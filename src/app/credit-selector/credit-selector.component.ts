import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-credit-selector',
  templateUrl: './credit-selector.component.html',
  styleUrls: ['./credit-selector.component.css']
})
export class CreditSelectorComponent implements OnInit {
  credits: any = {
    blue: 0,
    green: 0,
    yellow: 0,
    red: 0,
    orange: 0
  };

  creditSum: number = 0;
  creditOptions: number[] = [];
  colors: string[] = [ 'blue', 'yellow', 'orange', 'red', 'green' ];

  constructor(
    public dialogRef: MatDialogRef<CreditSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit(): void {
    this.creditOptions = [];
    for(let i = 0; i <= this.data; i += 5) {
      this.creditOptions.push(i);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  setCredit(color: string, credit: number): void {
    this.creditSum += credit - this.credits[color];
    this.credits[color] = credit;
    console.log(this.creditSum);
  }

}
