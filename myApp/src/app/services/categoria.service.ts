import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  getAllCatagorys(){
    const path=`${environment.apiURL}/categorias`;
    return this.http.get<any[]>(path);
  }
  
  createCatagory(user:any){
    const path=`${environment.apiURL}/categorias`;
    return this.http.post(path,user);
  }
  
  updateCatagory(user:any){
    const path=`${environment.apiURL}/categorias/${user._id}`;
    return this.http.put<any>(path,user);
  }
  
  deleteCatagory(id:number){
    const path=`${environment.apiURL}/categorias/${id}`;
    return this.http.delete(path);
  }
}
