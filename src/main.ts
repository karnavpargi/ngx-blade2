import { enableProdMode, importProvidersFrom } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, FormsModule)]
})
  .catch(err => console.error(err));
