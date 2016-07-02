import {Component, Injectable, Input, provide} from '@angular/core'; 
import {TranslateService, TranslatePipe, TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import {Http, Headers, Response} from '@angular/http';

declare var gumshoe: any;
declare var smoothScroll: any;

// class Message {
//   name: string;
//   email: string;
//   message: string;
// }

@Injectable()
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  // styleUrls: [''],
  pipes: [TranslatePipe]
})

export class AppComponent {
    name: string = 'World';
    closedNavbar: boolean = true;
    // formData: Message = new Message();
    userLang: string;
    translateService: TranslateService;
    httpService: Http;
    abilities: any;

    constructor(public translate: TranslateService, public http: Http) {
        this.translateService = translate;
        this.httpService = http;
        this.userLang = navigator.language.split('-')[0];
        this.userLang = /(pl|en)/gi.test(this.userLang) ? this.userLang : 'en';
        this.translateService.setDefaultLang('en'); 
        this.translateService.use(this.userLang);
        this.abilities = { "skills_1st_column": [], "skills": [], "tools_1st_column": [], "tools": [], "languages_1st_column": [], "languages": [] };
    }

    isLanguage(lang: string) {
      return this.userLang === lang;
    }

    isClosed() {
      return this.closedNavbar;
    }

    toggleNavbar() {
      this.closedNavbar = !this.closedNavbar;
    }

    changeLanguage(lang: string) {
      this.userLang = lang;
      this.translate.setDefaultLang(this.userLang);
      this.translateService.use(this.userLang);

    }

    ngOnInit() {
      smoothScroll.init();
      gumshoe.init({
        callback: function(nav :any) {
          if (nav && nav.target) {
            if (history.pushState) {
              history.pushState(null, null, '#' + nav.target.id);
            }
            else {
              window.location.hash = '#' + nav.target.id;
            }
          }
        }
      });
      this.getSkills();
    }


    getSkills() {
      this.http.get('/app/skills.json')
        .subscribe((value: Response) => {
          this.abilities = value.json();
          this.abilities["skills_1st_column"] = this.abilities["skills"].splice(0, Math.ceil(this.abilities["skills"].length / 2));
          this.abilities["tools_1st_column"] = this.abilities["tools"].splice(0, Math.ceil(this.abilities["tools"].length / 2));
          this.abilities["languages_1st_column"] = this.abilities["languages"].splice(0, Math.ceil(this.abilities["languages"].length / 2));
        });
    }

    // onSubmit() {
    //   let url = 'app/mailer.php';
    //   let data = JSON.stringify(this.formData);
    //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    //   this.httpService.post(url, data, headers);
    // }
}


