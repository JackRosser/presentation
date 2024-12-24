import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { WhoamiComponent } from './pages/whoami/whoami.component';
import { CitComponent } from './pages/cit/cit.component';
import { LinksComponent } from './pages/links/links.component';
import { SecondcitComponent } from './pages/secondcit/secondcit.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  // Altre rotte...
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    WhoamiComponent,
    CitComponent,
    LinksComponent,
    SecondcitComponent,
    LanguagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
