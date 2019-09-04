import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  WeatherStatus : FormGroup;
  public weather:any;
  public location:any;
  public temp: any;
  public temp_max: any;
  public temp_min: any;
  getloc: string;
  forecastweather: any;
  date: string;
  temp1: string;
  temp2: string;
  temp3: string;
  day: string;
  night: string;
  temp4: string;
  public showData:boolean = false;
  public showlocation:boolean = false;

  
  constructor(private weatherservice : WeatherService) { 
    this.WeatherStatus = new FormGroup({
      'Location' : new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  currentWeather() {
    this.weatherservice.getWeather(this.WeatherStatus.get('Location').value)
    .subscribe(data => {this.weather = data;
      this.getloc=this.weather[0].Key;
      this.location=this.weather[0].LocalizedName;
      this.getWeatherByKey();
      this.showData=true;
    });
  }

  getWeatherByKey() {
    this.weatherservice.getstatus(this.getloc).subscribe(data => {this.forecastweather = data
       this.date=this.forecastweather.DailyForecasts[0].Date,
       this.temp=this.forecastweather.DailyForecasts[0].Temperature.Maximum.Value,
       this.temp_max=this.forecastweather.DailyForecasts[0].Temperature.Maximum.Value,
       this.temp_min=this.forecastweather.DailyForecasts[0].Temperature.Minimum.Value,
       this.temp1=this.forecastweather.DailyForecasts[1].Temperature.Maximum.Value,
       this.temp2=this.forecastweather.DailyForecasts[2].Temperature.Maximum.Value,
       this.temp3=this.forecastweather.DailyForecasts[3].Temperature.Maximum.Value,
       this.temp4=this.forecastweather.DailyForecasts[4].Temperature.Maximum.Value,
       this.day=this.forecastweather.DailyForecasts[0].Day.IconPhrase,
       this.night=this.forecastweather.DailyForecasts[0].Night.IconPhrase
  });
  }
}
