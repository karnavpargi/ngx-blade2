import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxBladeModule } from 'projects/ngx-blade/src/public-api';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBladeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
