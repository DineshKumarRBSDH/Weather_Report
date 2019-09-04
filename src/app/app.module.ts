import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

import {NgModule} from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
