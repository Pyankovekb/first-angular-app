import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent implements OnInit {
  today = moment().format('YYYY-MM-DD');
  weekWeather = [];
  @Input() cityName; 
  constructor(private weatherService: WeatherService) { }


  ngOnChanges(changes): void {
    this.weekWeather = [];
    this.getWeather(this.cityName);

  }
  ngOnInit() {
  
  }

  getWeather(city) {
    this.weatherService.getWeaklyWeather(city)
    .subscribe((data) => {
        this.setWeekData(data);
    });
  }

  setWeekData(data: any) {
    for(let i = 0; i < 5; i++) {
      let date = moment().add(i, 'days').format('YYYY-MM-DD');
      let day = data.list.filter((item) => item['dt_txt'].indexOf(date) >= 0);

      let dayMin = day.length === 1 ? day[0].main.temp_min : day.reduce((acc, item) => {
          return acc < item.main.temp_min ? acc : item.main.temp_min});
      let dayMax = day.length === 1 ? day[0].main.temp_max : day.reduce((acc, item) => {
        return acc > item.main.temp_max ? acc : item.main.temp_max});

      let dayWeather = day.filter((item) => /([1-2]\d):\d*/gm.test(item['dt_txt']) )[0];

      this.weekWeather.push({
          date: date,
          minTemp: dayMin,
          maxTemp: dayMax,
          weatherIcon: dayWeather.weather[0].id.toString()
        })

    }
  }




}
