export class Environment {

  production: boolean;
  defaultLang: string;
  languages: Array<string>;
  appVersion: number;
  sslCertMode: 'pinned' | 'nocheck' | 'default' | 'legacy';
  backendUrl: string;
  systemDownUrl: string;
  sessionInterval: number;
  storageAlias: string;
  biometricsAlias: string;
  firstTimeStorageKey: string;
  pollingIntervalInMs: number;
  searchDelayInMs: number;
  biometricsAvailability: boolean;
  fastAccessAvailability: boolean;
  customUrlScheme: string;
  tokenUrlWatcher: string;
  hashLoginPassword: boolean;
  defaultCurrency: string;
  landingPage: string;
  the3DSecureRegisterAlias: string;
  defaultTranslates: any;


  constructor(environment: any) {
    this.production = environment.production;
    this.defaultLang = environment.defaultLang;
    this.languages = environment.languages;
    this.defaultTranslates = environment.defaultTranslates;
    this.appVersion = environment.appVersion;
    this.sslCertMode = environment.sslCertMode;
    this.backendUrl = environment.backendUrl;
    this.systemDownUrl = environment.systemDownUrl;
    this.sessionInterval = environment.sessionInterval;
    this.storageAlias = environment.storageAlias;
    this.biometricsAlias = environment.biometricsAlias;
    this.firstTimeStorageKey = environment.firstTimeStorageKey;
    this.pollingIntervalInMs = environment.pollingIntervalInMs;
    this.searchDelayInMs = environment.searchDelayInMs;
    this.biometricsAvailability = environment.biometricsAvailability;
    this.fastAccessAvailability = environment.fastAccessAvailability;
    this.customUrlScheme = environment.customUrlScheme;
    this.tokenUrlWatcher = environment.tokenUrlWatcher;
    this.hashLoginPassword = environment.hashLoginPassword;
    this.defaultCurrency = environment.defaultCurrency;
    this.landingPage = environment.landingPage;
    this.the3DSecureRegisterAlias = environment.the3DSecureRegisterAlias;
  }

}
