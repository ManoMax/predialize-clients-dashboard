import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';

import { MatCardModule } from  '@angular/material/card';

import { ListClientComponent } from '../../components/client/list-client/list-client.component'
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent, ListClientComponent],
  imports: [CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule],
  providers: [ClientService]
})
export class ClientModule {}
