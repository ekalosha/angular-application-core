import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
} else {
    // eslint-disable-next-line
    console.info('%c APP Environment:\n', 'background: green; color: #fff; font-size: 14px; font-weigth: bolder;', environment);
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(error => console.error('%c APP bootstraping ERROR:\n', 'background: red; color: #fff; font-size: 18px; font-weigth: bolder;', error));
