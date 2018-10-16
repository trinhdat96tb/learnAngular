import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UsersComponent } from './users/users.component';

// Services
import { DemoService } from './services/demo.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [DemoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
