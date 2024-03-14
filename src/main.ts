import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

