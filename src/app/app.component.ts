import { Component } from '@angular/core';

//Component Decorator
//
@Component({
  selector: 'pm-root',
  //Any valid html can be a template
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a class="nav-link" routerLink='/welcome'>Home</a></li>
      <li><a class="nav-link" routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `, 
  
  styleUrls: ['./app.component.css']
})

// To ensure other parts of the application can use this class
export class AppComponent {
  pageTitle: string  = 'Acme: Product Management';
}
