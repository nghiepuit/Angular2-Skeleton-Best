import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
	constructor(private translate: TranslateService) {
        translate.addLangs(["en", "vi"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    }
}
