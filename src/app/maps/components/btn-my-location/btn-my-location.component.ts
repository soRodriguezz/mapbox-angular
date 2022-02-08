import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css'],
})
export class BtnMyLocationComponent {
  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  goToLocation() {
    if (!this.placesService.userLocation)
      throw Error('User location is not set');
    if (!this.mapService.isMapReady) throw Error('Map is not set');

    this.mapService.flyTo(this.placesService.userLocation);
  }
}
