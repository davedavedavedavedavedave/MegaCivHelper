import { Civ } from "./civ";

export interface Participant {
  civ: Civ;
  active: boolean;
  astPosition: number;
  populationCnt: number;
  cityCnt: number;
}

export interface GameState {
  participants: Participant[];
  turn: number;
  generalMoveTime: number;
  playerMoveTime: number;
  tradeTime: number;
  countdownStart: number;
  countdownFor: number;
  countdownPaused: number;
}
