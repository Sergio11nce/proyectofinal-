import { Component,OnInit} from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  productos:Producto[]=[];
  foto: any;

  constructor(private productoService:ProductoService,private alertcontroller:AlertController,
      private Toastcontroller:ToastController,
      private camera:Camera) {}

      hacerFoto() {
        const options: CameraOptions = {
          destinationType: this.camera.DestinationType.DATA_URL
        }
        this.camera.getPicture(options).then((imageData) => {
          this.foto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          console.log(err);
        });
      }

  ngOnInit(): void {
    this.getAllProductos();
    
  }

  getAllProductos(){
    this.productoService.getAllProductos().subscribe(productos=>{
      this.productos=productos;
      console.log(this.productos);
    })
  }
}
