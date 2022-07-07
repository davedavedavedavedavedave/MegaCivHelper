import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from './head/head.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AstComponent } from './ast/ast.component';
import { CensusComponent } from './census/census.component';
import { MoveComponent } from './move/move.component';
import { CityCountComponent } from './city-count/city-count.component';
import { TradeComponent } from './trade/trade.component';
import { TechComponent } from './tech/tech.component';
import { TechDetailsComponent } from './tech-details/tech-details.component';
import { CreditSelectorComponent } from './credit-selector/credit-selector.component';
import { VictoryPointsComponent } from './victory-points/victory-points.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SettingsComponent,
    NavigationComponent,
    AstComponent,
    CensusComponent,
    MoveComponent,
    CityCountComponent,
    TradeComponent,
    TechComponent,
    TechDetailsComponent,
    CreditSelectorComponent,
    VictoryPointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
