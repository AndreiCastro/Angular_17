import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/user/filter-options.interface";

// THIS METHODS PODERIAM ESTAR NO app.component (onde é chamada o method filterUsersList), mas retirei os metodos
// de lá e movi para esse arquivo de utils para deixar o código mais limpo e organizado.

export const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);     
    return filteredList;    
  }


const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED)
        return usersList;

    const filteredList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;
    if (STATUS_NOT_SELECTED)
        return usersList;

    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if (DATE_NOT_SELECTED)
        return usersList;

    const filteredList = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate, end: endDate
    }
    ));
    return filteredList;
}