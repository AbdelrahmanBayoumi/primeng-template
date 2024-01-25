import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppLayoutModule } from './layout/app.layout.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, AppLayoutModule),
    provideRouter(ROUTES),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
  ],
};
