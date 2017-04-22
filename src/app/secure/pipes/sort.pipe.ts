import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './../defines/user.interface';

@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {

	transform(users: IUser[], key: string, value: number): any {
		if(value > 0){
			users.sort((a,b) => {
				if(a[key] > b[key]) return 1;
				else return -1;
			})
		}else{
			users.sort((a,b) => {
				if(a[key] > b[key]) return -1;
				else return 1;
			})
		}
		return users;
	}

}
