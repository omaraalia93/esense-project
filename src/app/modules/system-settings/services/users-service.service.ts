import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserData } from '../models/user-data.model';
import { usersList } from '../consts/users-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private data: IUserData[] = [];
  private dataSubject: BehaviorSubject<IUserData[]> = new BehaviorSubject<IUserData[]>([]);

  constructor() {
    this.fetchData(); 
  }

  getData(): Observable<any[]> {
    return this.dataSubject.asObservable();
  }

  fetchData(): void {
    this.data = usersList;
    this.dataSubject.next(this.data); 
  }

  addData(newData: any): void {
    const newId = this._generateNewId(); 
    const newDataWithId = { ...newData, id: newId };

    this.data.push(newDataWithId);    this.dataSubject.next(this.data); 
    this.dataSubject.next(this.data); 
  }

  deleteData(id: number): void {
    this.data = this.data.filter(item => item.id !== id);
    this.dataSubject.next(this.data); 
  }

  updateData(id: number, updatedData: any): void {
    this.data = this.data.map(item => (item.id === id ? { ...item, ...updatedData } : item));
    this.dataSubject.next(this.data); 
  }

  searchByName(name: string): void {
    const filteredData = this.data.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    this.dataSubject.next(filteredData);
  }
  
  private _generateNewId(): number {
    const maxId = this.data.reduce((max, item) => (item.id > max ? item.id : max), 0);
    return maxId + 1;
  }
}