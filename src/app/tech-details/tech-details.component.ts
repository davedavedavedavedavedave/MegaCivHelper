import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreditSelectorComponent } from '../credit-selector/credit-selector.component';
import { Participant } from '../game-state';
import { Tech } from '../tech';
import { TECHTREE } from '../techs';

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.component.html',
  styleUrls: ['./tech-details.component.css']
})
export class TechDetailsComponent implements OnInit {
  @Input() participant!: Participant;
  @Output() change = new EventEmitter<any>();

  techTree: Tech[][] = TECHTREE;
  blueCredit: number = 0;
  greenCredit: number = 0;
  yellowCredit: number = 0;
  redCredit: number = 0;
  orangeCredit: number = 0;
  budgetSpent: number = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.recalcCredits();
    this.recalcBudgetSpent();
  }
  
  ngOnDestroy(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.recalcCredits();
    this.recalcBudgetSpent();
  }

  update(): void {
    this.recalcBudgetSpent();
    this.recalcCredits();
    this.change.emit(this.participant);
  }

  recalcBudgetSpent(): void {
    this.budgetSpent = 0;
    for (let i = 0; i < this.participant.selectedTechs.length; i++) {
      this.budgetSpent += this.getRealTechCost(this.participant.selectedTechs[i]);
    }
  }

  recalcCredits(): void {
    this.blueCredit = this.participant.ownedTechs.reduce<number>((sum, t2) => sum + t2.blueCredit, 0) + this.participant.additionalBlueCredit;
    this.yellowCredit = this.participant.ownedTechs.reduce<number>((sum, t2) => sum + t2.yellowCredit, 0) + this.participant.additionalYellowCredit;
    this.greenCredit = this.participant.ownedTechs.reduce<number>((sum, t2) => sum + t2.greenCredit, 0) + this.participant.additionalGreenCredit;
    this.redCredit = this.participant.ownedTechs.reduce<number>((sum, t2) => sum + t2.redCredit, 0) + this.participant.additionalRedCredit;
    this.orangeCredit = this.participant.ownedTechs.reduce<number>((sum, t2) => sum + t2.orangeCredit, 0) + this.participant.additionalOrangeCredit;
  }

  getRealTechCost(t: Tech): number {
    let credit: number = 0;
    if (t.isBlue && this.blueCredit > credit) {
      credit = this.blueCredit;
    }
    if (t.isGreen && this.greenCredit > credit) {
      credit = this.greenCredit;
    }
    if (t.isYellow && this.yellowCredit > credit) {
      credit = this.yellowCredit;
    }
    if (t.isOrange && this.orangeCredit > credit) {
      credit = this.orangeCredit;
    }
    if (t.isRed && this.redCredit > credit) {
      credit = this.redCredit;
    }
    if (t.precursor > 0 && this.participant.ownedTechs.find(o => o.id == t.precursor)) {
      credit += t.precursorCredit;
    }
    return Math.max(t.cost - credit, 0);
  }

  setTech(t: Tech, checked: boolean): void {
    if (checked) {
      this.participant.selectedTechs.push(t);
    } else {
      this.participant.selectedTechs = this.participant.selectedTechs.filter(o => o.id != t.id);
    }
    this.update();
  }

  hasTech(t: Tech): boolean {
    return this.participant.ownedTechs.find(o => t.id == o.id) != undefined;
  }

  wantsTech(t: Tech): boolean {
    return this.participant.selectedTechs.find(o => t.id == o.id) != undefined;
  }
  
  canAffordTech(t: Tech): boolean {
    return this.getRealTechCost(t) <= this.participant.budget - this.budgetSpent;
  }

  buyTech(): void {
    let buysWrittenRecord = this.participant.selectedTechs.findIndex(t => t.id == 6) > -1;
    let buysMonument = this.participant.selectedTechs.findIndex(t => t.id == 18) > -1;
    if (buysMonument || buysWrittenRecord) {
      const dialogRef = this.dialog.open(CreditSelectorComponent, {
        data: (buysWrittenRecord ? 10 : 0) + (buysMonument ? 20 : 0)
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.participant.additionalBlueCredit += result.blue;
          this.participant.additionalGreenCredit += result.green;
          this.participant.additionalYellowCredit += result.yellow;
          this.participant.additionalRedCredit += result.red;
          this.participant.additionalOrangeCredit += result.orange;
          this.confirmTech();
        }
      });
    } else {
      this.confirmTech();
    }
  }

  confirmTech(): void {
    this.participant.ownedTechs = this.participant.ownedTechs.concat(this.participant.selectedTechs);
    this.participant.selectedTechs = [];
    this.participant.budget = 0;
    this.update();
  }

  resetTech(): void {
    this.participant.selectedTechs = [];
    this.participant.ownedTechs = [];
    this.participant.additionalBlueCredit = 0;
    this.participant.additionalYellowCredit = 0;
    this.participant.additionalGreenCredit = 0;
    this.participant.additionalRedCredit = 0;
    this.participant.additionalOrangeCredit = 0;
    this.participant.budget = 0;
    this.update();
  }

}
