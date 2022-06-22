import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './components/userform/userform.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { EllipsisPipe } from './ellipsis.pipe';
import { ValidformComponent } from './validform/validform.component';


@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    NavbarComponent,
    AboutComponent,
    CounterComponent,
    EllipsisPipe,
    ValidformComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
