import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ButtonComponent } from './component/button/button.component';
import { BannerComponent } from './component/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './component/accordion/accordion.component';
import { TesteComponent } from './component/teste/teste.component';
import { SalasComponent } from './component/salas/salas.component';
import { MainComponent } from './component/main/main.component';
import { TestComponent } from './component/test/test.component';
import { ComponenteComponent } from './componente/componente.component';

  @NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    BannerComponent,
    AccordionComponent,
    TesteComponent,
    SalasComponent,
    MainComponent,
    TestComponent,
    ComponenteComponent,
  ],
  imports: [
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
