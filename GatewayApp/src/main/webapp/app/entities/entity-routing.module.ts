import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'personne',
        data: { pageTitle: 'gatewayApp.microServiceAppPersonne.home.title' },
        loadChildren: () => import('./MicroServiceApp/personne/personne.module').then(m => m.MicroServiceAppPersonneModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
