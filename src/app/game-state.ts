import { Civ } from "./civ";
import { Tech } from "./tech";

export interface Participant {
  civ: Civ;
  active: boolean;
  victoryPoints: number;
  astPosition: number;
  populationCnt: number;
  cityCnt: number;
  tradeGroup: string;
  ownedTechs: Tech[];
  selectedTechs: Tech[];
  budget: number;
  additionalBlueCredit: number;
  additionalRedCredit: number;
  additionalGreenCredit: number;
  additionalYellowCredit: number;
  additionalOrangeCredit: number;
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
  startingCreditBlue: number;
  startingCreditGreen: number;
  startingCreditYellow: number;
  startingCreditRed: number;
  startingCreditOrange: number;
}
