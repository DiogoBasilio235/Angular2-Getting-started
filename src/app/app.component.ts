import { Component } from '@angular/core';

//Component Decorator
//
@Component({
  selector: 'pm-root',
  template: `<div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
  </div>`, //Any valid html can be a template
  styleUrls: ['./app.component.css']
})

// To ensure other parts of the application can use this class
export class AppComponent {
  pageTitle: string  = 'Acme: Product Management';
}
