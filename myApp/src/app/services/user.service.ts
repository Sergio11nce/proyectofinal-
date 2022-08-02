import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

petId : any

headers = new HttpHeaders({
  'Content-Type': 'application/json'
})

constructor(private http:HttpClient) { }

getAllUsers(){
  const path=`${environment.apiURL}/users`;
  return this.http.get<User[]>(path);
}

createUsers(user:User):Observable<any>{
  const path=`${environment.apiURL}/users`;
  return this.http.post(path,user,{headers: this.headers});
}

updateUsers(user:User){
  const path=`${environment.apiURL}/users/${user._id}`;
  return this.http.put<User>(path,user,{headers: this.headers});
}

deleteUsers(id:string){
  const path=`${environment.apiURL}/users/${id}`;
  return this.http.delete(path,{headers: this.headers});
}

}
