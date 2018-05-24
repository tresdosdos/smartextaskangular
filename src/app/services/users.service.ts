import { Injectable } from '@angular/core';
import User from '../user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getInfo(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  chunkArray(arr, chunk): any {
    let i, j;
    const tmp = [];
    for (i = 0, j = arr.length; i < j; i += chunk) {
      tmp.push(arr.slice(i, i + chunk));
    }
    return tmp;
  }
  constructor(private http: HttpClient) { }
}
