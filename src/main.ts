import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1Ijoic29yb2RyaWd1ZXoiLCJhIjoiY2t2ZnZuOXBmOXo2YTJ3b2Y4OTJsdGE0MCJ9.ZLPLMK9BeWanuL9FVWBZqA';

if (!navigator.geolocation) {
  throw new Error('Geolocation is not supported by your browser');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
