import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { ServicioPersonas } from './services/personas';
import { Personas } from './components/personas/personas';
import { PersonasStandalone } from './components/personas-standalone/personas-standalone';

@NgModule({
  declarations: [App, Personas],
  imports: [BrowserModule, AppRoutingModule, PersonasStandalone],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicioPersonas],
  bootstrap: [App],
})
export class AppModule {}
