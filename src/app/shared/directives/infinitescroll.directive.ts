import {Directive, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[infinite-scroll]',
})

export class InfiniteScrollerDirective {
  @Output() scrolled = new EventEmitter();
  @HostListener('body:scroll', ['$event'])

  onScroll(event: any) {
    // do tracking
    // console.log('scrolled', event.target.scrollTop);
    // Listen to click events in the component
    // let tracker = event.target;

    // let limit = tracker.scrollHeight - tracker.clientHeight;
    // console.log(event.target.scrollTop, limit);
    // if (event.target.scrollTop === limit) {
      console.log('end reached');
      this.scrolled.emit({
        value: event
     });
    // }
  }
}
// import {Directive, Output, EventEmitter} from '@angular/core';

// @Directive({
//   selector: '[infinite-scroll]',
//   host: {'(window:scroll)': 'track($event)'},
// })

// export class InfiniteScrollerDirective {
//   @Output() scrolled = new EventEmitter();

//   track(event: Event) {
//     console.log('scrolling', event.offsetHeight);
//     let tracker = event.target;
//     let limit = tracker.scrollHeight - tracker.clientHeight;
//     console.log(limit,event.target.scrollTop);
//     if (event.target.scrollTop >= limit) {
//       this.scrolled.emit({
//         value: event
//     });
//     }
//   }
// }
