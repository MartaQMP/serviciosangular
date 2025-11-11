import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { ServicioPersonas } from './services/personas';
import { Personas } from './components/personas/personas';
import { PersonasStandalone } from './components/personas-standalone/personas-standalone';
import { Coches } from './components/coches/coches';
import { CochesService } from './services/coches-service';

@NgModule({
  declarations: [App, Personas, Coches],
  imports: [BrowserModule, AppRoutingModule, PersonasStandalone],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicioPersonas, CochesService],
  bootstrap: [App],
})
export class AppModule {}
