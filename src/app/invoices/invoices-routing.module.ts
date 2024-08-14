// src/app/invoices/invoices-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component'; // Import if used

const routes: Routes = [
  { path: 'create', component: InvoiceCreateComponent },
  { path: 'list', component: InvoiceListComponent }, // Route to list component
  { path: '', redirectTo: 'create', pathMatch: 'full' } // Default route for invoices
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
