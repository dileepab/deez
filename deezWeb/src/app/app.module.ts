import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SDKBrowserModule} from './shared/sdk/index';
import {AppComponent} from './app.component';
import {MaterialModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TitleService} from './services/title.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AddRoleComponent } from './add-role/add-role.component';
import {AuthGuard} from "./services/auth.guard";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AddRoleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SDKBrowserModule.forRoot(),
        MaterialModule,
        RouterModule,
        RoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule
    ],
    providers: [TitleService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule {
}
