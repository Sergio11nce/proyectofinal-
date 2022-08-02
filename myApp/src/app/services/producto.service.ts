import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private api="http://localhost:8080";
  constructor(private http:HttpClient) { }

getAllProductos(){
  const path=`${this.api}/productos`;
  return this.http.get<Producto[]>(path);
}

createProductos(producto:Producto){
  const path=`${this.api}/producto`;
  return this.http.post(path,producto);
}

updateProductos(producto:Producto){
  const path=`${this.api}/productos/${producto.id}`;
  return this.http.put<Producto>(path,producto);
}

deleteProductos(id:number){
  const path=`${this.api}/productos/${id}`;
  return this.http.delete(path);
}

}
