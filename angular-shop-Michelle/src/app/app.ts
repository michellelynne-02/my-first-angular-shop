import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Glow & Glaze Cosmetics';

  products = [
    {
      name: 'Silk Foundation',
      price: '$38.00',
      description: 'Flawless, breathable coverage',
      image: 'https://placehold.co/300x300/f5c6d0/8b4a6b?text=Silk+Foundation'
    },
    {
      name: 'Velvet Lipstick',
      price: '$22.00',
      description: 'Rich, long-lasting pigment',
      image: 'https://placehold.co/300x300/e8a0b0/8b4a6b?text=Velvet+Lipstick'
    },
    {
      name: 'Rose Blush',
      price: '$28.00',
      description: 'Soft, luminous flush of color',
      image: 'https://placehold.co/300x300/f2b5c5/8b4a6b?text=Rose+Blush'
    }
  ];

  cartCount = 0;

  addToCart(productName: string): void {
    this.cartCount++;
    alert(`${productName} added to cart! 🛍️`);
  }
}