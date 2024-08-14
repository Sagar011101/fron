import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Invoice } from './invoice-list/invoice.model'; // Adjust the path if necessary

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'http://127.0.0.1:5000'; // Your actual API URL

  constructor(private http: HttpClient) { }

  createInvoice(invoiceData: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(`${this.baseUrl}/invoices/create-invoice`, invoiceData)
      .pipe(catchError(this.handleError));
  }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.baseUrl}/invoices/get-invoices`)
      .pipe(catchError(this.handleError));
  }

  getInvoice(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.baseUrl}/invoices/${id}`)
      .pipe(catchError(this.handleError));
  }

  filterInvoices(filterType: string, filterValue: string): Observable<Invoice[]> {
    const url = `${this.baseUrl}/invoices/filter?${filterType}=${filterValue}`;
    return this.http.get<Invoice[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
