import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrentViewComponent } from './current-view/current-view.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ColorService } from './shared/services/color.service';
import { HttpModule } from '@angular/http';
import { CityService } from './shared/services/city.service';
import { AddCityComponent } from './navigate/add-city/add-city.component';
import { HttpClientModule } from '@angular/common/http';
import { CityImgService } from './shared/services/city-img.service';
import { NewsCityService } from './shared/services/news-city.service';
import { RndSelectService } from './shared/services/rnd-select.service';
import { AppRoutngModule } from './app-routing.module';
import { WeeklyWeatherComponent } from './current-view/weekly-weather/weekly-weather.component';
import { LocalNewsComponent } from './current-view/local-news/local-news.component';
import { WeatherService } from './shared/services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrentViewComponent,
    NavigateComponent,
    AddCityComponent,
    WeeklyWeatherComponent,
    LocalNewsComponent,
    
    ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutngModule,
    BrowserAnimationsModule
  ],
  providers: [
    ColorService,
    CityService,
    CityImgService,
    NewsCityService,
    WeatherService,
    RndSelectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
