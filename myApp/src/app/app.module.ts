import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { Camera} from '@ionic-native/camera/ngx';
import { PublicarComponent } from './components/publicar/publicar.component';
@NgModule({
  declarations: [AppComponent, UserComponent, CategoriaComponent, MascotaComponent, PublicarComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule ],
  providers: [Camera,StatusBar,SplashScreen,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
