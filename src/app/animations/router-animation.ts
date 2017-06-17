import { trigger, state, animate, style, transition } from '@angular/animations';
export const routerTransitionSlideToLeft = slideToLeft();

function slideToRight() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
    ])
  ]);
}
