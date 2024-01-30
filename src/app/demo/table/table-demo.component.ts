import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { PRODUCTS, Product } from './products.mock';

@Component({
  selector: 'app-table-demo',
  standalone: true,
  imports: [FormsModule, TableModule, ButtonModule, CheckboxModule],
  templateUrl: './table-demo.component.html',
})
export class TableDemoComponent {
  products: Product[] = PRODUCTS;

  onAdd() {
    const counter = this.products.length + 1;
    this.products = [
      ...this.products,
      {
        name: 'Product ' + counter,
        category: 'Category ' + counter,
        image: 'https://picsum.photos/500?random=' + counter,
      },
    ];
  }
}
