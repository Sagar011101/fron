// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    app-sidebar {
      width: 200px;
      background-color: #f0f0f0;
      padding: 20px;
      border-right: 1px solid #ddd;
    }
    router-outlet {
      flex: 1;
    }
  `]
})
export class AppComponent {
  title = 'Invoices App';
}