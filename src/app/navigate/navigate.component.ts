import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { ColorModel } from '../shared/models/color.model';
import { CityService } from '../shared/services/city.service';
import { WeatherService } from '../shared/services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit, OnDestroy {
  isloaded = false;
  isModalIsVisible = false;
  currentWeather: string = '800';
  sub1: Subscription;
  colors: ColorModel[] = [];
  cities: CityModel[] = [];
  

  
  constructor(private citiesService: CityService,
              private weatgerService: WeatherService) { }

  ngOnInit() {
    this.getData();
    
  }

  getData(){
    this.sub1 = this.citiesService.getCities()
        .subscribe((cities: CityModel[]) => {
          this.cities = cities;
          
          this.cities.forEach((item) => {
            this.weatgerService.getDailyWeather(item.cityName)
                .subscribe((dailyWeather) => {
                  item.currentWeather = (dailyWeather.weather[0].id).toString();
                  item.weather.max = dailyWeather.main.temp_max;
                  item.weather.min = dailyWeather.main.temp_min;
                  this.isloaded = true;
                });
            });
        })
        
  }

  toggleAddMenu(dir: boolean) {
    this.isModalIsVisible = dir;
  }

  onMenuOpen() {
    this.toggleAddMenu(true);
  }
  onModalClose() {
    this.toggleAddMenu(false);
  }
  onMenuAdd(data) {
    this.toggleAddMenu(false);
    this.cities.push(data);
    window.setTimeout(() => {
      
      this.getData();
    }, 1000);
    
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }

}

