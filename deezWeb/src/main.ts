import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {LoopBackConfig} from "./app/shared/sdk/lb.config";

if (environment.production) {
  enableProdMode();
  let lbConfig = LoopBackConfig;
  lbConfig.setBaseURL('');
}

platformBrowserDynamic().bootstrapModule(AppModule);
