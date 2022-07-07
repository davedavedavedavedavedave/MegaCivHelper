import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Civ } from '../civ';
import { Participant } from '../game-state';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-victory-points',
  templateUrl: './victory-points.component.html',
  styleUrls: ['./victory-points.component.css']
})
export class VictoryPointsComponent implements OnInit {

  gameStateSubscription?: Subscription;
  ranking: Participant[] = [];

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameStateSubscription = this.gameStateService.getGameState().subscribe(gameState => {
      let inLastASTPosition: number[] = [];
      for (let i = 0; i < gameState.participants.length; i++) {
        const p = gameState.participants[i];
        p.victoryPoints = p.astPosition * 5 + p.ownedTechs.reduce<number>((sum, t) => sum + t.victoryPoints, 0) + p.cityCnt;
        if (p.astPosition == 15) {
          inLastASTPosition.push(i);
        }
      }
      if (inLastASTPosition.length == 1) {
        gameState.participants[inLastASTPosition[0]].victoryPoints += 5;
      }
      this.ranking = gameState.participants.filter(p => p.active).sort((p1, p2) => {
          return p2.victoryPoints - p1.victoryPoints;
      });
    });
  }
  
  ngOnDestroy(): void {
    this.gameStateSubscription?.unsubscribe();
  }

}
