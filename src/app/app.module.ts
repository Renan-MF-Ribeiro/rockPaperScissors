import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoredComponent } from './scored/scored.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { WeaponComponent } from './game/weapon/weapon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ScoredComponent,
    HeaderComponent,
    GameComponent,
    WeaponComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatRippleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
