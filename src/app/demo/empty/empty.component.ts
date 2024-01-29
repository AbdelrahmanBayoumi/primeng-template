import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss',
  imports: [RouterLink],
  standalone: true,
})
export class EmptyComponent {}
