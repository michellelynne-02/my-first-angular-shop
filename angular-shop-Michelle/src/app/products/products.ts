import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

  products = [
    { name: 'Laptop',      price: 45000, available: true,  category: 'Electronics', image: 'https://placehold.co/300x200/f5c6d0/6b3050?text=Laptop' },
    { name: 'Phone',       price: 15000, available: false, category: 'Electronics', image: 'https://placehold.co/300x200/e8a0b0/4a1f38?text=Phone' },
    { name: 'Headphones',  price: 2000,  available: true,  category: 'Accessories', image: 'https://placehold.co/300x200/f2b5c5/6b3050?text=Headphones' },
    { name: 'Keyboard',    price: 1200,  available: true,  category: 'Accessories', image: 'https://placehold.co/300x200/f5c6d0/4a1f38?text=Keyboard' }
  ];

  cartCount: number = 0;
  cartItems: { name: string; price: number }[] = [];
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Electronics', 'Accessories'];

  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  addToCart(product: any) {
    this.cartItems.push({ name: product.name, price: product.price });
    this.cartCount++;
    alert(product.name + ' added to cart!');
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
  }
}