import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ButtonComponent } from './component/button/button.component';
import { BannerComponent } from './component/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './component/accordion/accordion.component';
import { TesteComponent } from './component/teste/teste.component';
import { BlocosComponent } from './component/blocos/blocos.component';
import { MainComponent } from './component/main/main.component';
import { LaboratoriesComponent } from './component/laboratories/laboratories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    BannerComponent,
    AccordionComponent,
    TesteComponent,
    BlocosComponent,
    MainComponent,
    LaboratoriesComponent,
  ],
  imports: [
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
