import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent, [HTTP_PROVIDERS, TRANSLATE_PROVIDERS]);







