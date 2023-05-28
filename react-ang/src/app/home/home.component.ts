import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data = [{
    id: 1,
    isExpanded: false,
    title: "first"
  },
  {
    id: 2,
    isExpanded: false,
    title: "second"
  },
  {
    id: 3,
    isExpanded: false,
    title: "third"
  }]
}
