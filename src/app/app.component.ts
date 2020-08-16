import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue = 0;
  title = 'ng-ci-cd-aws-demo';
  increment() {
    this.counterValue += 1;
  }
  decrement() {
    this.counterValue -= 1;
  }
}
