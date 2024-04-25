import { Component } from '@angular/core';
import { ProfileDataComponent } from '../profile-data/profile-data.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileDataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
