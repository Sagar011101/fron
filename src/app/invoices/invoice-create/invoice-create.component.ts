import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private router: Router
  ) {
    this.invoiceForm = this.fb.group({
      user: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required]
      }),
      usage: this.fb.group({
        number_of_e_signatures: [0, [Validators.required, Validators.min(0)]],
        number_of_stamp_papers: [0, [Validators.required, Validators.min(0)]]
      }),
      charges: this.fb.group({
        unit_price: [0, [Validators.required, Validators.min(0)]],
        total_amount: [0, [Validators.required, Validators.min(0)]]
      }),
      invoiceDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      paymentInstructions: ['']
    });
  }

  ngOnInit(): void {
    // Additional initialization logic can be placed here
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      this.invoiceService.createInvoice(this.invoiceForm.value).subscribe(response => {
        console.log('Invoice created successfully', response);
        this.router.navigate(['/invoices/list']); // Redirect after successful creation
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/invoices/list']); // Navigate to the invoice list page
  }
}
