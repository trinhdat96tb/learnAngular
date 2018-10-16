import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(private http: HttpClient) { }
    getUser(params): Observable<any> {
        return this.http.get('https://reqres.in/api/users?page=' + params.key);
    }
    createUser(user): Observable<any> {
        return this.http.post('https://reqres.in/api/users', user);
    }
    editUser(user): Observable<any> {
        return this.http.put('https://reqres.in/api/users/' + user.id, user);
    }
    deleteUser(id): Observable<any> {
        return this.http.delete('https://reqres.in/api/users/' + id);
    }
    
}