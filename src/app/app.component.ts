import { Component } from '@angular/core';
import { dropStateTrigger } from './shared/animation/drop.animation';
import { ActivatedRoute, RouterOutlet, Router, RouterState } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [dropStateTrigger]
})
export class AppComponent  {

  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  prepRouteState(outlet: RouterOutlet) {

   return this.router.url ;
  }
}
