import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  air: ServiceMainService[] = [];
  @Output() airService: EventEmitter<ServiceMainService[]> = new EventEmitter<ServiceMainService[]>();

  constructor(public service: ServiceMainService) {
    this.service.getAir().subscribe((data: ServiceMainService[]) => {
      this.air = data.map((item: any) => {
        return new ServiceMainService(
          item.id,
          item.name,
          item.conuntry,
          item.adress,
          item.identityColor,
          item.slogan,
          item.flights,
          
        );;
      });
    this.airService.emit(this.air);
  });
}
}
