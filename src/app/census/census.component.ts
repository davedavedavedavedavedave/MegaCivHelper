import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameState } from '../game-state';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-census',
  templateUrl: './census.component.html',
  styleUrls: ['./census.component.css']
})
export class CensusComponent implements OnInit {

  gameState?: GameState;
  gameStateSubscription?: Subscription;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameStateSubscription = this.gameStateService.getGameState().subscribe(gameState => this.gameState = gameState);
  }
  
  ngOnDestroy(): void {
    this.gameStateSubscription?.unsubscribe();
  }

  setGameState(): void {
    if (this.gameState) {
      this.gameStateService.setGameState(this.gameState);
    }
  }

  formatLabel(value: number): string {
    return value + "/-" + (55 - value);
  }

  resetPopulation(): void {
    if (this.gameState) {
      for(let i = 0; i < this.gameState.participants.length; i++) {
        this.gameState.participants[i].populationCnt = 12;
      }
      this.setGameState();
    }
  }

}
