import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	@Input() open: boolean = false;
	@Input() width: number = 500;
	@Input() position: string = 'right';

  constructor() { }

  ngOnInit() {
  }

}
