import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private subscription: Subscription;

	constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
		translate.addLangs(["en", "fr", "cn", "hi"]);
		translate.setDefaultLang('en');
		let browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr|cn|hi/) ? browserLang : 'en');
	}

	changeLanguage(lang) {
		this.translate.use(lang);
	}

	ngOnInit() {
		this.subscription = this.activatedRoute.queryParams.subscribe(
			(param: any) => {
				let locale = param['locale'];
				if (locale !== undefined) {
					this.translate.use(locale);
				}
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
