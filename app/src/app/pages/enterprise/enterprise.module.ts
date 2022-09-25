import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';

import { MatCardModule } from  '@angular/material/card';

import { ListEnterpriseComponent } from '../../components/enterprise/list-enterprise/list-enterprise.component';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardEnterpriseComponent } from 'src/app/components/enterprise/card-enterprise/card-enterprise.component';

export const EnterpriseRoutes: Routes = [
  {
    path: 'enterprise',
    component: EnterpriseComponent
  }
];

@NgModule({
  declarations: [EnterpriseComponent,
    ListEnterpriseComponent,
    CardEnterpriseComponent],
  imports: [CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule],
  providers: [EnterpriseService],
  exports: [ListEnterpriseComponent],
})
export class EnterpriseModule {}
