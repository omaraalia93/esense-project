import { Component } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName:string;
  currentLang:string;

  constructor(private languageService:LanguageService){
    this.userName = "عمر عاليه";
  }
  
  ngOnInit():void{
    this.currentLang = this.languageService.getCurrentLanguage();
  }

  changeLangauge():void {
    if(this.currentLang == "ar"){
      this.languageService.switchLanguage("en");
      this.currentLang = "en";
    } else {
      this.languageService.switchLanguage("ar");
      this.currentLang = "ar";
    }
  }
}
