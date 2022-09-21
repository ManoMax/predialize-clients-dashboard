import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';

import { MatCardModule } from  '@angular/material/card';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ListClientComponent } from '../../components/client/list-client/list-client.component'
import { CardClientComponent } from '../../components/client/card-client/card-client.component';
import { CardTotaisComponent } from '../../components/client/card-totais/card-totais.component';
import { PageClientComponent } from '../../components/client/page-client/page-client.component';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'page/:id',
    component: PageClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent,
    ListClientComponent,
    PageClientComponent,
    CardClientComponent,
    CardTotaisComponent],
  imports: [CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule],
  providers: [ClientService]
})
export class ClientModule {}
