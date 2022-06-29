import { Component, OnInit } from '@angular/core';
import { MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { count, interval, Observable, Subscription } from 'rxjs';
import { Civ } from '../civ';
import { GameState } from '../game-state';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {

  gameState?: GameState;
  gameStateSubscription?: Subscription;
  civOrder: Civ[] = [];
  countdown$?: Observable<string>;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameStateSubscription = this.gameStateService.getGameState().subscribe(gameState => {
      this.gameState = gameState;
      this.civOrder = this.gameState.participants.filter(participant => participant.active).sort((a, b) => b.populationCnt - a.populationCnt).map(participant => participant.civ);
    });
    this.countdown$ = this.gameStateService.getCountdown();
  }
  
  ngOnDestroy(): void {
    this.gameStateSubscription?.unsubscribe();
  }

  setGameState(): void {
    if (this.gameState) {
      this.gameStateService.setGameState(this.gameState);
    }
  }

  resetTimer(): void {
    if (this.gameState) {
      this.gameState.countdownFor = -1;
      this.gameState.countdownPaused = 0;
      this.setGameState();
    }
  }

  resumeTimer(): void {
    if (this.gameState && this.gameState.countdownPaused >= 0) {
      this.gameState.countdownStart = Date.now() - this.gameState.countdownPaused;
      this.gameState.countdownPaused = -1;
      this.setGameState();
    }
  }

  pauseTimer(): void {
    if (this.gameState && this.gameState.countdownPaused < 0) {
      this.gameState.countdownPaused = Date.now() - this.gameState.countdownStart;
      this.setGameState();
    }
  }

  nextTimer(): void {
    if (this.gameState) {
      this.gameState.countdownFor += 1;
      if (this.gameState.countdownPaused >= 0 || this.gameState.countdownFor >= this.civOrder.length) {
        this.gameState.countdownPaused = 0;
      } else {
        this.gameState.countdownStart = Date.now();
      }
      this.setGameState();
    }
  }

}
