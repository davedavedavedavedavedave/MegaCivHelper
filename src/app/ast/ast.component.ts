import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameState } from '../game-state';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-ast',
  templateUrl: './ast.component.html',
  styleUrls: ['./ast.component.css']
})
export class AstComponent implements OnInit {

  gameState?: GameState;
  gameStateSubscription?: Subscription;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameStateSubscription = this.gameStateService.getGameState().subscribe(gameState => this.gameState = gameState);
  }
  
  ngOnDestroy(): void {
    this.gameStateSubscription?.unsubscribe();
  }

  setParticipantAstPosition(participant: number, astPosition: number): void {
    if (this.gameState) {
      this.gameState.participants[participant].astPosition = astPosition;
      this.gameStateService.setGameState(this.gameState);
    }
  }

}
