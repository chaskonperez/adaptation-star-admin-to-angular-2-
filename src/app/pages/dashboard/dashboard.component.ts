import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public popupDismiss: boolean = true;

	public lineChartData:Array<any> = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	];
	public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartType:string = 'line';
	public lineChartOptions:any = {
    	responsive: true,
    	scales: {
            xAxes: [{
            	gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
            	gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        }
  	};
  	public lineChartLegend:boolean = false;
	
  	constructor() { }

  	ngOnInit() {
  	}

  	public chartClicked(e:any):void {
    	console.log(e);
  	}
 
  	public chartHovered(e:any):void {
    	console.log(e);
  	}

}
