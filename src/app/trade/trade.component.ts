import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameState, Participant } from '../game-state';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  gameState?: GameState;
  gameStateSubscription?: Subscription;
  participants: Participant[] = [];
  countdown$?: Observable<string>;
  tradeGroups: string[] = [];

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameStateSubscription = this.gameStateService.getGameState().subscribe(gameState => {
      this.gameState = gameState;
      this.participants = this.gameState.participants.filter(participant => participant.active).sort((a, b) => a.cityCnt - b.cityCnt);
      this.tradeGroups = this.participants.map(p => p.tradeGroup).filter((value, index, self) => self.indexOf(value) === index);
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
      this.gameState.countdownFor = this.participants.length;
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
      this.gameState.countdownFor = -1;
      this.gameState.countdownPaused = 0;
      this.setGameState();
    }
  }

}
