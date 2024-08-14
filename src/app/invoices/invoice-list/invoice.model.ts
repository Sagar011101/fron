export interface Invoice {
  invoice_id: number;
  client_name: string; // This will be displayed as "client name"
  client_email: string;
  client_address: string;
  usage: {
    number_of_e_signatures: number;
    number_of_stamp_papers: number;
  };
  unit_price: number;
  invoice_date: string; // Invoice date
  due_date: string; // Due date
  paymentInstructions: string;
  total_amount: number;
}
