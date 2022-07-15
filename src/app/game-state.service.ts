import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CIVS } from './civs';
import { GameState, Participant } from './game-state';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  gameState$: BehaviorSubject<GameState>;
  countdown$: BehaviorSubject<string> = new BehaviorSubject('00:00.000');
  animationFrame: number = -1;
  alarm: HTMLAudioElement = new Audio('assets/alarm.mp3');

  constructor() {
    let gameState: GameState;
    try {
      gameState = JSON.parse(localStorage.getItem('gameState') || '');
    } catch (e) {
      gameState = {
        participants: CIVS.map(civ => {
          const participant: Participant = {
            civ: civ, active: true, astPosition: 0, populationCnt: 12, cityCnt: 0, tradeGroup: civ.id > 9 ? 'east' : 'west', victoryPoints: 0,
            budget: 0, ownedTechs: [], selectedTechs: [], additionalBlueCredit: 0, additionalRedCredit: 0, additionalGreenCredit: 0, additionalYellowCredit: 0, additionalOrangeCredit: 0
          };
          return participant;
        }),
        turn: 0,
        generalMoveTime: 300,
        playerMoveTime: 180,
        tradeTime: 600,
        countdownFor: -1,
        countdownStart: Date.now(),
        countdownPaused: 0
      }
    }
    this.gameState$ = new BehaviorSubject(gameState);
    this.gameState$.subscribe((gameState: GameState) => {
      if (gameState.countdownPaused < 0) {
        this.updateCountdown();
      } else {
        this.pauseCountdown();
      }
    });
  }

  getGameState(): Observable<GameState> {
    return this.gameState$;
  }

  setGameState(gameState: GameState): void {
    localStorage.setItem('gameState', JSON.stringify(gameState));
    this.gameState$.next(gameState);
  }

  getCountdown(): Observable<string> {
    return this.countdown$;
  }

  private pauseCountdown(): void {
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    this.setCountdown();
  }
  private updateCountdown(): void {
    this.setCountdown();
    this.animationFrame = requestAnimationFrame(this.updateCountdown.bind(this));
  }
  private setCountdown(): void {
    const gameState: GameState = this.gameState$.value;
    const participantCnt: number = gameState.participants.filter(p => p.active).length;

    let duration: number = 0;
    if (gameState.countdownFor < 0) {
      duration = gameState.generalMoveTime;
    } else if (gameState.countdownFor >= participantCnt) {
      duration = gameState.tradeTime;
    } else {
      duration = gameState.playerMoveTime;
    }
    
    let countdown: number = 0;
    if (gameState.countdownPaused < 0) {
      countdown = duration*1000 - (Date.now() - gameState.countdownStart);
    } else {
      countdown = duration*1000 - gameState.countdownPaused;
    }

    if (countdown <= 0) {
      this.alarm.currentTime = 0;
      this.alarm.play();
      gameState.countdownFor += 1;
      if (gameState.countdownFor < participantCnt) {
        gameState.countdownStart = Date.now();
      } else {
        gameState.countdownPaused = 0;
      }
      this.setGameState(gameState);
    }

    this.countdown$.next(Math.floor(countdown/60000) + ':' + ('0' + Math.floor(countdown/1000)%60).slice(-2) + '.' + ('00' + countdown%1000).slice(-3));
  }
}
