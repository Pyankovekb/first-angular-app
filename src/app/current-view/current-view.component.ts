import { Component, OnInit,OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { CityService } from '../shared/services/city.service';
import { CityModel } from '../shared/models/city.model';
import { dropStateTrigger } from '../shared/animation/drop.animation';

@Component({
  selector: 'app-current-view',
  templateUrl: './current-view.component.html',
  styleUrls: ['./current-view.component.scss'],
  animations: [dropStateTrigger]
})
export class CurrentViewComponent implements OnInit, OnDestroy {
  isLoaded = false;
  sub1: Subscription;
  sub2: Subscription;
  id;
  cities: CityModel[];
  city: CityModel;

  constructor(private route: ActivatedRoute,
              private cityService: CityService) { }

  
  ngOnInit() {

    this.sub1 = this.route.params.subscribe(params => this.getCity(params['id']));

  }
  getCity(id) {
    this.sub2 = this.cityService.getCities().subscribe((data)=> {
      this.cities = data;
      this.city = this.cities.find(item => item.id === +id);
      });
  }


  ngDoCheck(): void {

  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
