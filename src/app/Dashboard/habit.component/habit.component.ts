import {Component, Input} from '@angular/core';

@Component({
  selector: 'habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent {
  @Input() name: string;
  @Input() count: string;
  @Input() category: string;
}
