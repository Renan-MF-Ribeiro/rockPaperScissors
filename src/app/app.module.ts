import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoredComponent } from './scored/scored.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { WeaponComponent } from './game/weapon/weapon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';
import { PlayerComponent } from './player/player.component';
import { RulesComponent } from './rules/rules.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ButtonSwitchComponent } from './button-switch/button-switch.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ScoredComponent,
    HeaderComponent,
    GameComponent,
    WeaponComponent,
    PlayerComponent,
    RulesComponent,
    ButtonSwitchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRippleModule,
    LayoutModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
