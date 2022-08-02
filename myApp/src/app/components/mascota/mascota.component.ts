import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotasService } from 'src/app/services/mascotas.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {

  mascotas:Mascota[]

  constructor(
    private petSrv: MascotasService,
    private userSrv: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.getAllPets()
  }

  Adoptar( id:any) { 
    this.userSrv.petId= id
    this.router.navigate(['/users'])

  }

  getAllPets() {
    this.petSrv.getAllPets()
      .subscribe(response => {
        console.log(response);
        this.mascotas = response
      });
  }
}
