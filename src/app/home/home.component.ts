import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: Router) {}
  onInsert() {
    alert('Insert button clicked!');

  }

  onUpdate() {
    alert('Update button clicked!');

  }

  onDelete() {
    alert('Delete button clicked!');

  }

  onSubmit() {
    alert('Submit button clicked! Navigating to the Submit Page...');

    this.route.navigate(['/submit']);
  }

}
