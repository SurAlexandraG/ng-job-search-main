import {setupWorker} from 'msw/browser';
import { mockHandlers } from './mocks';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

setupWorker(...mockHandlers).start()
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch((err) => console.error(err));

