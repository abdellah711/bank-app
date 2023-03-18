import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styles: [
  ]
})
export class StatsComponent {
  @Input() stats?: Stats
}
