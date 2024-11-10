import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStateComponent } from './dashboard/server-state/server-state.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { ItemsComponent } from './dashboard/items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStateComponent,
    TrafficComponent,
    TicketsComponent,
    ItemsComponent,
  ],
})
export class AppComponent {}
