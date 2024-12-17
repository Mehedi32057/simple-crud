import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/']);
  }


}
