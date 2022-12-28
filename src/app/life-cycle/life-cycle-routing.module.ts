import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

const routes: Routes = [
  {
    path: 'create',
    component: LifeCycleComponent,
  },
  {
    path: 'show/:id',
    component: LifeCycleComponent,
  },
  {
    path: 'show',
    component: LifeCycleComponent,
  },
  {
    path: '',
    component: LifeCycleComponent,
  },
  {
    path: '**',
    redirectTo: '/life-cycle',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifeCycleRoutingModule {}
