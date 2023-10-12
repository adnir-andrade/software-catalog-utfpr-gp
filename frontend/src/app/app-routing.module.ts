import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ButtonComponent } from './component/button/button.component';
import { BannerComponent } from './component/banner/banner.component';
import { MainComponent } from './component/main/main.component';
import { BlocksComponent } from './component/blocks/blocks.component';
import { LaboratoriesComponent } from './component/laboratories/laboratories.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'banner', component: BannerComponent },
  { path: '', component: MainComponent },
  { path: 'blocos', component: BlocksComponent },
  { path: 'laboratories', component: LaboratoriesComponent},
  { path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}