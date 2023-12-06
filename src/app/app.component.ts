import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LanguageService } from './core/services/language.service';
import { ITabs, tabs } from './tabs.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs:ITabs[];

  constructor(private spinner: NgxSpinnerService,private languageService:LanguageService) {
    this.tabs = tabs;
  }

  ngOnInit() {
    this.languageService.loadLanguage();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
