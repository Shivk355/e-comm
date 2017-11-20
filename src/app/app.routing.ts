import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { WomenComponent } from './component/women/women.component';
import { KidComponent } from './component/kid/kid.component';
import { LivingComponent } from './component/living/living.component';
import { TShirtComponent } from './component/men/tshirt/tshirt.component';

const appRoutes: Routes = [
	{
		path : '',
		component : HomeComponent
	},
	{
		path : 'men',
		component : MenComponent
	},
	{
		path : 'women',
		component : WomenComponent
	},
	{
		path : 'kid',
		component : KidComponent
	},
	{
		path : 'living',
		component : LivingComponent
	},
	{
		path : 'tshirt',
		component : TShirtComponent
	}
];

export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);