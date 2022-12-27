# Angular: Getting Started by Deborah Kurata on Pluralsight

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Course Modules

- Introduction to Components Module
- Data Bindings & Pipes
- More On Components
- Building Nested Components
- Services and Dependency Injection
- Retriving Data Using HTTP
- Navigation and Routing Additional Techniques
- Angular Modules
- Building, Testinhg and Deploying with the CLI


## Recapping Our Journey

The goal of this course was to guide you down the right path, making your own adventures with Angular more pleasant and productive.

Let's recap our journey and review the answers to the key questions we identified at the beginning of this course.

What is a component? We discovered that a component is a view defined with a template, logic defined with a class, and metadata defined with a decorator.

Where do we put the HTML for our user interface? Either in the metadata using the template property or in a separate HTML file using the templateUrl property in the metadata.

When should we use binding? Any time we want to display a component class property value in the view, when we want to control the DOM by setting a DOM element property in code, when we want to respond to user actions, and when we want to display a component class property and update the property when the user makes a change.

Why do we need a service? We uncovered several reasons for building a service, to implement functionality that is independent from any particular component, to share data and logic across components, and to encapsulate external interactions, such as with data access.

And how, how do we build an Angular application? With code that looks like this, export a class, attach a decorator, and import what we need.

Then put each component directive and pipe in its appropriate Angular module's declarations array.

As the application grows, break out features into feature modules and share common code with a shared module.

To aid productivity, leverage the Angular CLI for creating, executing, generating, and testing your application and to build it in preparation for deployment.

Along the way, each module provided a set of checklists.

They contain steps and tips.

Feel free to revisit and reference these checklists as you start building your own Angular applications.

Download the slides, including these checklists, using the Exercise files tab on the Pluralsight page for this course.
