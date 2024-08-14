import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Invoice } from './invoice.model'; // Adjust the path if necessary
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  showFilterOptions = false;
  filterForm: FormGroup;

  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      filterType: ['invoice_id'],
      filterValue: ['']
    });
  }

  ngOnInit() {
    this.loadInvoices();
  }

  loadInvoices(): void {
    this.invoiceService.getInvoices().subscribe({
      next: (data: Invoice[]) => {
        console.log('Invoices data:', data); // Log the fetched data for debugging

        this.invoices = data.map(invoice => {
          // Ensure user and charges objects are initialized
          if (!invoice) {
            console.warn(`Invoice with ID ${invoice} is missing user data`);
            //invoice = { name: 'Unknown', email: '', address: '' }; // Provide default values
          }
          if (!invoice) {
            console.warn(`Invoice with ID ${invoice} is missing charges`);
            //invoice.charges = { unit_price: 0, total_amount: 0 }; // Provide default values
          }
          return invoice;
        });
      },
      error: (err) => {
        console.error('Failed to load invoices', err);
      }
    });
  }

  toggleFilterOptions(): void {
    this.showFilterOptions = !this.showFilterOptions;
  }

  applyFilter(): void {
    const filterType = this.filterForm.get('filterType')?.value;
    const filterValue = this.filterForm.get('filterValue')?.value;

    if (filterValue) {
      this.invoiceService.filterInvoices(filterType, filterValue)
        .subscribe({
          next: (filteredInvoices: Invoice[]) => {
            this.invoices = filteredInvoices;
          },
          error: (err) => {
            console.error('Failed to apply filter', err);
          }
        });
    }
  }

  viewInvoice(invoice_id: number) {
    if (invoice_id === undefined || invoice_id === null) {
      console.error('Cannot navigate to invoice details. ID is undefined.');
      return;
    }
    this.router.navigate(['/invoices/get-invoices', invoice_id]);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
