import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameState } from '../game-state';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  gameState?: GameState;
  gameStateSubscription?: Subscription;
  tradeGroups: string[] = ['west', 'east'];

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameStateSubscription = this.gameStateService.getGameState().subscribe(gameState => this.gameState = gameState);
  }
  
  ngOnDestroy(): void {
    this.gameStateSubscription?.unsubscribe();
  }

  setParticipant(i: number, active: boolean): void {
    if (this.gameState) {
      this.gameState.participants[i].active = active;
      this.gameStateService.setGameState(this.gameState);
    }
  }

  setGameState(): void {
    if (this.gameState) {
      this.gameStateService.setGameState(this.gameState);
    }
  }

  reset(): void {
    localStorage.clear();
    location.reload();
  }
}
