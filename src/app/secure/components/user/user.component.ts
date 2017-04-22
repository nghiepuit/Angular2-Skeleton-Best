import { Component, OnInit } from '@angular/core';
import { IUser } from './../../defines/user.interface';
import { PaginationInstance } from './../../../../../node_modules/ngx-pagination';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	title : string = 'Users';
	public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 5,
        currentPage: 1
    };
	users : IUser[] = [
		{ id : 1, name : 'nghiepuit', 'company' : 'gcs' },
		{ id : 2, name : 'test', 'company' : 'abc' },
		{ id : 3, name : 'quoc', 'company' : 'gcs' },
		{ id : 4, name : 'xit', 'company' : 'applancer' },
		{ id : 5, name : 'sang', 'company' : 'uit' },
		{ id : 6, name : 'john', 'company' : 'gcs' },
		{ id : 7, name : 'smith', 'company' : 'abc' },
		{ id : 8, name : 'zip', 'company' : 'gcs' },
		{ id : 9, name : 'pikachu', 'company' : 'abc' },
		{ id : 10, name : 'pokka', 'company' : 'def' },
		{ id : 11, name : 'module', 'company' : 'ghj' },
		{ id : 12, name : 'wappa', 'company' : 'zxc' },
		{ id : 13, name : 'snippi', 'company' : 'vbn' },
		{ id : 14, name : 'tipper', 'company' : 'qwerty' },
		{ id : 15, name : 'easy hoon', 'company' : 'asdfg' },
		{ id : 16, name : 'faker', 'company' : 'zaqxswcde' },
		{ id : 17, name : 'skt t1 bang', 'company' : 'rfvtgb' },
		{ id : 18, name : 'mata', 'company' : 'abcdefghj' },
		{ id : 19, name : 'wolf', 'company' : 'applancer' },
		{ id : 20, name : 'bengi', 'company' : 'uit' }
	];
	key : string = 'id';
	value : number = 1;

	constructor() { }

	ngOnInit() {

	}

	sort(key : string){
		this.key = key;
		this.value = -(this.value);
	}

}
