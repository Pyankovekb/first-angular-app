import { trigger, transition, style, animate, state, query, group, animateChild } from "@angular/animations";


export const dropStateTrigger =  trigger('routeAnimation', [
  transition('*=> *', [
    query(
      '*',
      [style({ opacity: 0 }), animate('0.35s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
])
