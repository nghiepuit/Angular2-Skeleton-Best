import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

	title:string = 'Customers';
	customers:string[] = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"];

	constructor() { }

	ngOnInit() {
		
	}

}
