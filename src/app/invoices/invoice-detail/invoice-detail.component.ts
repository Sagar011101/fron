import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';

// Define an interface for the invoice to improve type safety
interface Invoice {
  user: {
    name: string;
    email: string;
    address: string;
  };
  usage: {
    number_of_e_signatures: number;
    number_of_stamp_papers: number;
  };
  charges: {
    unit_price: number;
    total_amount: number;
  };
  invoiceDate: string;
  dueDate: string;
  paymentInstructions: string;
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
