import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserformComponent } from './components/userform/userform.component';
import { ValidformComponent } from './validform/validform.component';

const routes: Routes = [{path:'about', component: AboutComponent}, {path:'register', component:UserformComponent},
{path:'counter', component:CounterComponent} , {
  path:"valid", component:ValidformComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
