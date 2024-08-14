// src/app/invoices/invoices.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component'; // Import if used

@NgModule({
  declarations: [
    InvoiceCreateComponent,
    InvoiceListComponent // Declare here if you use it
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
