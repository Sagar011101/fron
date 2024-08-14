import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';

// Define an interface for the invoice to improve type safety
interface Invoice {
  client_name: string;
  client_email: string;
  client_address: string;
  e_signatures_used: number;
  stamp_papers_procured: number;
  unit_price: number;
  total_amount: number;
  invoice_date: string;
  due_date: string;
  payment_instructions: string;
}

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoice: Invoice | null = null; // Initialize with null

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.invoiceService.getInvoice(id).subscribe({
      next: (data: Invoice) => {
        this.invoice = data;
      },
      error: (err) => {
        console.error('Failed to load invoice', err);
        // Optionally navigate back or show an error message
        this.router.navigate(['/invoices/list']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/invoices/list']);
  }
}
