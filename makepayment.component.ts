import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-makepayment',
  imports: [CommonModule, FormsModule], 
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.scss']
})
export class MakepaymentComponent {
  card = {
    number: '',
    type: '',
    expiry: '',
    cvv: ''
  };

  confirmQRPayment() {
    alert("Your payment has been confirmed successfully!");
  }

  proceedCardPayment() {
    alert("Your card payment has been proceeded successfully!");
  }

  resetCard() {
    this.card = {
      number: '',
      type: '',
      expiry: '',
      cvv: ''
    };
  }
}

