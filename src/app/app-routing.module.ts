import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstComponent } from './ast/ast.component';
import { CensusComponent } from './census/census.component';
import { CityCountComponent } from './city-count/city-count.component';
import { MoveComponent } from './move/move.component';
import { TradeComponent } from './trade/trade.component';

const routes: Routes = [
  { path: 'census', component: CensusComponent },
  { path: 'move', component: MoveComponent },
  { path: 'city-count', component: CityCountComponent },
  { path: 'trade', component: TradeComponent },
  { path: 'AST', component: AstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
