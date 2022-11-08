import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent , title:'home'},
  {path:'portfolio' , component:PortfolioComponent , title:'portfolio'},
  {path:'about' , component:AboutComponent , title:'about'},
  {path:'contact' , component:ContactComponent , title:'contact'},
  {path:"data", component:DataComponent,title:'data'},
  {path:'**',component:NotfoundComponent, title:'notfound'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
