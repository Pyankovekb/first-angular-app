import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CityImgService } from 'src/app/shared/services/city-img.service';
import { ColorService } from 'src/app/shared/services/color.service';
import { CityService } from 'src/app/shared/services/city.service';
import { Subscription, combineLatest } from 'rxjs';
import { ColorModel } from 'src/app/shared/models/color.model';
import { RndSelectService } from 'src/app/shared/services/rnd-select.service';
import { CityModel } from 'src/app/shared/models/city.model';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  message: Message;

  sub1: Subscription;
  @Output() onModalClose = new EventEmitter<any>();
  @Output() onMenuAdd = new EventEmitter<any>();

  constructor(private citiesService: CityService,
              private cityImgService: CityImgService,
              private colorService: ColorService,
              private rndService: RndSelectService,
              private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.message = new Message('', 'info');
  }
  onSubmit(form: NgForm) {
    let city = form.value.name;
    this.sub1 = combineLatest(
      this.colorService.getColors(),
      this.cityImgService.getCityImg(city),
      this.weatherService.getDailyWeather(city)
    ).subscribe((data: [ColorModel[], Object[], any]) => {
      let color: ColorModel = this.rndService.getRndItem(data[0]);
      let img = this.rndService.getRndItem(data[1]['value']);
      let weather = data[2];
      const newCity = new CityModel(
        city, {
          colorStart: color.colorStart,
          colorEnd: color.colorEnd,
          background: img.contentUrl
        }, {
          max: weather.main.temp_max,
          min: weather.main.temp_min
        }
      );
      this.citiesService.addCitites(newCity)
          .subscribe(() => {})
          this.onMenuAdd.emit(newCity);
    }, (error) => {
      this.message.text = 'Некорректное название города. Пожалуйста используйте кириллицу только для Российских городов';
      window.setTimeout(() =>
      this.message.text = '', 7000)
    });
      
  }
  modalClose() {
    this.onModalClose.emit();
  }
}
