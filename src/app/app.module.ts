import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { DemoTableModule } from './modules/demo-table/demo-table.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UsersComponent } from './users/users.component';

// Services
import { DemoService } from './services/demo.service';
import { UserService } from './services/user.service';
import { HEROES } from './heroes/mock-heroes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UsersComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    DemoTableModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [DemoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
