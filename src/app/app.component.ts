import { Component } from '@angular/core';

@Component({
    selector: 'app-comp',
    template: `
        <div class="container">
         <h1>This is main component</h1>
         <product-comp></product-comp>
         <dash-comp></dash-comp>
        </div>
    `
})
export class AppComponent { }
