import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-components',
  templateUrl: './custom-components.component.html',
  styleUrls: ['./custom-components.component.css']
})
export class CustomComponentsComponent implements OnInit {
	public selectOptions: any = [
		{value: 1, name: 'option 1'},
		{value: 2, name: 'option 2'},
		{value: 3, name: 'option 3'},
		{value: 4, name: 'option 4'},
		{value: 5, name: 'option 5'},
		{value: 6, name: 'option 6'},
		{value: 7, name: 'option 7'},
		{value: 8, name: 'option 8'},
		{value: 9, name: 'option 9'}
	];
	
  constructor() { }

  ngOnInit() {
  }

}
