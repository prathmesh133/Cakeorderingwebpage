import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trackorder',
  imports: [CommonModule, FormsModule],
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss']
})
export class TrackorderComponent {
  orderId = '';
  customerName = '';
  orderStatus = '';

  trackOrder() {
    if (!this.orderId || !this.customerName) return;
    this.orderStatus = 'Fetching order status...';

    setTimeout(() => {
      const statuses = [
        ' Order Received',
        ' Baking in Progress',
        ' Decorating the Cake',
        ' Out for Delivery',
        ' Delivered'
      ];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      this.orderStatus = ` Cake ID: ${this.orderId},  Customer: ${this.customerName} → ${randomStatus}`;
    }, 2000);
  }
}

