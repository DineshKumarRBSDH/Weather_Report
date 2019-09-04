import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public mykey:any = "LbYNZLVIxkWJS166DVGXfO00V7VijJnv"

  constructor(private http:HttpClient) { }

  getWeather(location) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.mykey}&q=${location}`);
  }

  getstatus(key) {
    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${this.mykey}`);  
  }
}
