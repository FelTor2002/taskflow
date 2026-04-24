import { Injectable, computed, signal } from '@angular/core';

import { Language, TRANSLATIONS, TranslationKey } from '../i18n/translations';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly storageKey = 'taskflow.language.v1';
  private readonly languageSignal = signal<Language>('en');

  readonly language = this.languageSignal.asReadonly();
  readonly dictionary = computed(() => TRANSLATIONS[this.languageSignal()]);

  constructor() {
    const storedLanguage = localStorage.getItem(this.storageKey);
    if (storedLanguage === 'es' || storedLanguage === 'en') {
      this.languageSignal.set(storedLanguage);
    }
  }

  setLanguage(language: Language): void {
    this.languageSignal.set(language);
    localStorage.setItem(this.storageKey, language);
  }

  t(key: TranslationKey): string {
    return this.dictionary()[key];
  }
}
