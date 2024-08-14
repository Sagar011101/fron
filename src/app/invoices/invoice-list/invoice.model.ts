export interface Invoice {
  invoice_id: number;
  user: {
    name: string; // This will be displayed as "client name"
    email: string;
    address: string;
  };
  usage: {
    number_of_e_signatures: number;
    number_of_stamp_papers: number;
  };
  charges: {
    unit_price: number;
    total_amount: number; // Total amount to be displayed
  };
  invoiceDate: string; // Invoice date
  dueDate: string; // Due date
  paymentInstructions?: string;
}
