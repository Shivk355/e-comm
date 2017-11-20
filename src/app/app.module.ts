import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { WomenComponent } from './component/women/women.component';
import { KidComponent } from './component/kid/kid.component';
import { LivingComponent } from './component/living/living.component';
import { TShirtComponent } from './component/men/tshirt/tshirt.component';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
	NavbarComponent,
	HomeComponent,
	MenComponent,
	WomenComponent,
	KidComponent,
	LivingComponent,
	TShirtComponent

  ],
  imports: [
    BrowserModule,
	Routing
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
