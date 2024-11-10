import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ticket } from './tickets.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: ticket[] = [];

  onAdd(tickets: { title: string; request: string }) {
    const ticket: ticket = {
      id: this.tickets.length + 1,
      title: tickets.title,
      request: tickets.request,
      status: 'open',
    };
    this.tickets.push(ticket);
  }
  onComplete(id: number) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.status = 'close';
      }
      return ticket;
    });
  }
}
