import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { MascotasService } from 'src/app/services/mascotas.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[]

  constructor(
    private userSrv: UsersService,
    private petSrv: MascotasService,
    private router: Router,
    private alertcontroller: AlertController) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.userSrv.getAllUsers()
      .subscribe(response => {
        console.log(response);
        this.users = response
      });
  }

  async openAlet() {
    const alert = await this.alertcontroller.create({
      header: 'FORMULARIO DE ADOPCION',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'lastname',
          type: 'text',
          placeholder: 'Apellido'
        },
        {
          name: 'contact',
          type: 'text',
          placeholder: 'Contacto'
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'Correo'
        },
        {
          name: 'address',
          type: 'text',
          placeholder: 'Direccion'
        }

      ], buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log('Crear', data);
            this.createNewUser(data)
            

            // this.createProducto(data.id,data.nombre,data.descripcion,data.precio);
          }

        }
      ]
    });

    await alert.present();
  }


  createNewUser(data:any) {
    const petId = this.userSrv.petId
    try {
      // this.userSrv.createUsers({...data,mascota:petId})
      this.userSrv.createUsers(data)
        .subscribe(response => {
          console.log(response);
          this.petSrv.deletePet(petId)
            .subscribe(res => {
              console.log(res);
              this.router.navigate(['/pets'])
              // this.getAllUsers()
            })

        })
    } catch (error) {
      console.error(error);

    }
  }

}
