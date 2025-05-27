import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phoneno: '',
    subject: '',
    message: ''
  };

  submitForm() {
    alert("Thank you for sharing your complaint! I'll get back to you soon.");
  }

  resetForm(form: any) {
    form.resetForm();
    alert("Your details have been reset.");
  }
}

