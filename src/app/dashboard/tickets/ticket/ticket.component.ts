import { Component, input, output, signal } from '@angular/core';
import { ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<ticket>();
  close = output();
  isVisibel = signal<boolean>(false);

  onToggelDetails() {
    this.isVisibel.set(!this.isVisibel());
  }

  onComplete() {
    this.close.emit();
  }
}
