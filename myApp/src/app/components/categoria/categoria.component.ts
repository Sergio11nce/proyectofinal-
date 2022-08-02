import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  categorias:any[]

  constructor(private categorySrv: CategoriaService) { }

  ngOnInit() {
    this.getAllCategories()
  }

  getAllCategories() {
    this.categorySrv.getAllCatagorys()
      .subscribe(response => {
        console.log(response);
        this.categorias = response
      });
  }
}
