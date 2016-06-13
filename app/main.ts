import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [HTTP_PROVIDERS, TRANSLATE_PROVIDERS]);







