import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/user/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {  
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;  
  showUserDetails: boolean = false;

  //O OnInit sempre é executado assim que o component é carregado, e sempre deve ser implements na classe
  ngOnInit(){
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 3000);
  }

  onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions){
    console.log(filterOptions);

    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
    console.log(this.usersListFiltered);
  }
}
