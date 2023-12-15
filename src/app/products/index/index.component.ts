import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(public productsService: ProductsService) {}

  products: MatTableDataSource<Products> = new MatTableDataSource<Products>();
  columns: string[] = ['imageart', 'designation', 'marque', 'prix', '_id'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.productsService.getAll().subscribe((data: Products[]) => {
      this.products = new MatTableDataSource<Products>(data);
      this.products.paginator = this.paginator;
      this.products.sort = this.sort;
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(_id: any) {
    this.productsService.delete(_id).subscribe(() => {
      this.products.data = this.products.data.filter(
        (item) => item._id !== _id
      );
      console.log('Product deleted successfully!');
    });
  }
}
