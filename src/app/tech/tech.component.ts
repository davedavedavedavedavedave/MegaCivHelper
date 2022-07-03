import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameState } from '../game-state';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  gameState?: GameState;
  gameStateSubscription?: Subscription;
  selectedParticipant?: number;
  routeSubscription?: Subscription;

  constructor(private gameStateService: GameStateService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameStateSubscription = this.gameStateService.getGameState().subscribe(gameState => this.gameState = gameState);
    this.routeSubscription = this.activatedRoute.paramMap.subscribe(p => {
      let id = p.get("id");
      if (id) {
        this.selectedParticipant = parseInt(id);
      } else {
        this.selectedParticipant = undefined;
      }
    })
  }
  
  ngOnDestroy(): void {
    this.gameStateSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }

  setGameState(): void {
    if (this.gameState) {
      this.gameStateService.setGameState(this.gameState);
    }
  }

}
