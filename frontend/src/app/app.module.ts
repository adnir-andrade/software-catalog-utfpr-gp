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
import { BlocksComponent } from './component/blocks/blocks.component';
import { MainComponent } from './component/main/main.component';
import { LaboratoriesComponent } from './component/laboratories/laboratories.component';
import { FormComponent } from './component/form/form.component';
import { InputComponent } from './component/input/input.component';
import { SelectComponent } from './component/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    BannerComponent,
    AccordionComponent,
    BlocksComponent,
    MainComponent,
    LaboratoriesComponent,
    FormComponent,
    InputComponent,
    SelectComponent,
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