import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { FunctionalPanelComponent } from './components/functional-panel/functional-panel.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { NullComponentComponent } from './components/null-component/null-component.component';
import { AppRoutingModule } from './app-routing.module';
import { UserCompanyComponent } from './components/user-company/user-company.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    UserdataComponent,
    FunctionalPanelComponent,
    ModalWindowComponent,
    NullComponentComponent,
    UserCompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
