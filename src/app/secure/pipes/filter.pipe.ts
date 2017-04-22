import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './../defines/user.interface';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(users: IUser[], nameFilter : string, companyFilter : string, idFilter : string): any {
		if(!nameFilter && !companyFilter && !idFilter){
			return users;
		}else{
			if(nameFilter){
				users = users.filter(user => user.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !==-1 );
			}
			if(companyFilter){
				users = users.filter(user => user.company.toLowerCase().indexOf(companyFilter.toLowerCase()) !==-1 );
			}
			if(idFilter){
				users = users.filter(user => user.id.toString().toLowerCase().indexOf(idFilter.toLowerCase()) !==-1 );
			}
			return users;
		}
	}

}
