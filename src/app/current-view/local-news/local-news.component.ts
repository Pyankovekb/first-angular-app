import { Component, OnInit, Input } from '@angular/core';
import { NewsCityService } from 'src/app/shared/services/news-city.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-local-news',
  templateUrl: './local-news.component.html',
  styleUrls: ['./local-news.component.scss']
})
export class LocalNewsComponent implements OnInit {
  sub1: Subscription;
  idx = 0;
  localNews = [];
  @Input() cityName; 
  constructor(private newsCityService: NewsCityService) { }

  ngOnChanges(changes): void {
    this.idx = 0;
    this.localNews = [];
    this.getNews(this.cityName);
  }
  ngOnInit() {
  }

  getNews(city) {
    this.newsCityService.getCityNews(city)
    .subscribe((data) => {
      data.value.forEach(element => {
          element.image ? this.localNews.push(element) : null
      });
    }, (error) => {
      console.log(error);
    })
  }
  nextNews(curr) {
    this.idx = curr + 1;
  }
  prevNews(curr) {
    this.idx = curr - 1;
  }


  ngOnDestroy(): void {

    this.sub1.unsubscribe();
  }

}
