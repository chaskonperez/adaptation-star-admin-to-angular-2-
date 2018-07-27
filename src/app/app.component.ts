import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public loader: boolean = true;

  constructor(private router: Router) {
  	
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
      	this.loader = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loader = false;
      }
    });
  }
}
