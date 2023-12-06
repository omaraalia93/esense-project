import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';
import { TDir, TLang } from '../models/general.types';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _language: TLang;
  private _direction: TDir;
  private _renderer: Renderer2;

  constructor(
    private localStorageService: LocalStorageService,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    rendererfactory: RendererFactory2,
    private spinner: NgxSpinnerService,
    private loadingBar: LoadingBarService,
    private router: Router
  ) {
    this._renderer = rendererfactory.createRenderer(null, null);
  }

  loadLanguage(): void {
    this._language = this.localStorageService.getItem('ESENSE_language') as TLang;
    this._setLanguageInLocalStorage();
    this._setLanguage();
  }

  getCurrentLanguage(): string {
    return this.translate.getDefaultLang();
  }

  switchLanguage(lang: TLang) {
    if (this._language !== lang) {

      this.spinner.show();
      this.loadingBar.useRef().start();

      this._language = lang;
      this._setLanguageInLocalStorage();
      this._setLanguage();

      
      setTimeout(() => {
        this.spinner.hide();
        this.loadingBar.useRef().complete();
        this.router.navigate([this.router.url]);
      }, 2000);
    }
  }

  private _setLanguageInLocalStorage() {
    if (this._language) {
      this.localStorageService.setItem('ESENSE_language', this._language);
    } else {
      this._language = this.translate.getBrowserLang() as TLang;
      this.localStorageService.setItem('ESENSE_language', this._language);
    }

    this._direction = this._language === 'ar' ? 'rtl' : 'ltr';
    this.localStorageService.setItem('ESENSE_direction', this._direction);
  }

  private _setLanguage(): void {
    this._renderer.setAttribute(this.document.documentElement,'lang',this._language);
    this._renderer.setAttribute(this.document.documentElement,'dir',this._direction);
    this.translate.setDefaultLang(this._language);
    this.translate.use(this._language);
  }
}
