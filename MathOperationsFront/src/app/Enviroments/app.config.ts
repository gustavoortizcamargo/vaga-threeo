import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from '../app.routes';
import { HttpClientModule } from '@angular/common/http'; 
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(appRoutes), 
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),    
    { provide: 'apiUrl', useValue: 'https://localhost:55899/api' }
  ]
};


