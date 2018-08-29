import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	public loading: boolean = true;

	public menuItems:any = [
		{
			name: 'Dashboard',
			path: '/dashboard',
			icon: 'mdi mdi-television'
		},
		{
			name: 'Basic UI Elements',
			path: 'ui-features',
			icon: 'mdi mdi-content-copy',
			isCollapsed: false,
			children: [
				{
					name: 'Buttons',
					path: '/ui-features/buttons'
				},
				{
					name: 'Typography',
					path: '/ui-features/typography'
				}
			]
		},
		{
			name: 'Form Elements',
			path: '/forms',
			icon: 'mdi mdi-backup-restore'
		},
		{
			name: 'Charts',
			path: '/charts',
			icon: 'mdi mdi-chart-line'
		},
		{
			name: 'Tables',
			path: '/tables',
			icon: 'mdi mdi-table'
		},
		{
			name: 'Icons',
			path: '/icons',
			icon: 'mdi mdi-sticker'
		},
		{
			name: 'Sample Pages',
			icon: 'mdi mdi-restart',
			path: 'sample-pages',
			isCollapsed: false,
			children: [
				{
					name: 'Blank Page',
					path: '/sample-pages/blank-page'
				},
				{
					name: 'Login',
					path: '/sample-pages/login'
				},
				{
					name: 'Register',
					path: '/sample-pages/register'
				},
				{
					name: 'Login 2',
					path: '/sample-pages/login2'
				},
				{
					name: 'Register 2',
					path: '/sample-pages/register2'
				},
				{
					name: '404',
					path: '/sample-pages/not-found'
				},
				{
					name: '500',
					path: '/sample-pages/internal-server'
				},
			]
		},
		{
			name: 'Custom Components',
			path: '/custom-components',
			icon: 'mdi mdi-lightbulb-outline'
		},
	];

  	constructor() { }

  	ngOnInit() {
  		setTimeout(() => {
  			this.loading = false;
  		}, 3000);
  	}

}
