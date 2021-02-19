import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full'},
  { path: 'map', loadChildren: () => import('../../projects/map/src/lib/components/mapbox/mapbox.module').then(m => m.MapboxModule) },
  { path: '**', redirectTo: 'map' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
