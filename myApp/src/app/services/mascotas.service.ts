import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mascota } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http:HttpClient) { }

  getAllPets(){
    const path=`${environment.apiURL}/mascotas`;
    return this.http.get<Mascota[]>(path);
  }
  
  createPet(user:Mascota){
    const path=`${environment.apiURL}/mascotas`;
    return this.http.post(path,user,{headers: this.headers});
  }
  
  updatePet(user:Mascota){
    const path=`${environment.apiURL}/mascotas/${user._id}`;
    return this.http.put<Mascota>(path,user,{headers: this.headers});
  }
  
  deletePet(id:string){
    const path=`${environment.apiURL}/mascotas/${id}`;
    return this.http.delete(path,{headers: this.headers});
  }
  
}
