import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ButtonComponent } from './component/button/button.component';
import { BannerComponent } from './component/banner/banner.component';
import { TesteComponent } from './component/teste/teste.component';
import { MainComponent } from './component/main/main.component';
import { BlocosComponent } from './component/blocos/blocos.component';

const routes: Routes = [
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'teste', component: TesteComponent },
  { path: '', component: MainComponent },
  { path: 'blocos', component: BlocosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
