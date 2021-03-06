import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContainerComponent } from './components/container/container.component';
import { RecreacionComponent } from './pages/recreacion/recreacion.component';
import { TagMenuComponent } from './components/tag-menu/tag-menu.component';
import { CarShopComponent } from './components/car-shop/car-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    ContainerComponent,
    RecreacionComponent,
    TagMenuComponent,
    CarShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
