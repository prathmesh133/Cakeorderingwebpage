import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cakeorder',
  imports: [CommonModule, FormsModule],
  templateUrl: './cakeorder.component.html',
  styleUrls: ['./cakeorder.component.scss']
})
export class CakeorderComponent {
  order = {
    orderId: '',  
    name: '',
    email: '',
    contactNo: '',
    address: '',
    date: '',
    time: '',
    pincode: '',
    cakeType: '',
    CashonDelivery: '',
    onlinePayment: '',
    quantity: 1,
    message: ''
  };
  
   submitted = false;

  submitOrder() {
    this.submitted = true;
    alert("Thank you for contacting me! I'll place your cake order and get back to you soon.");
  }

  resetOrder() {
    this.order = {
      orderId: '', 
      name: '',
      email: '',
      contactNo: '',
      address: '',
      date: '',
      time: '',
      pincode: '',
      cakeType: '',
      CashonDelivery: '',
      onlinePayment: '',
      quantity: 1,
      message: ''
    };
    this.submitted = false;
  }
  
  downloadReceipt() {
    const summary = document.querySelector('.order-summary') as HTMLElement;
    if (!summary) return;

    html2canvas(summary).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Cake_Order_Receipt.pdf');
    });
  }
}
