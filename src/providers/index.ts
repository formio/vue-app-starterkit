export interface ProviderConfig {
  name: string;
}

export type ProviderList = [ProviderConfig];

const Providers: ProviderList = [{name: 'test'}];

export default Providers;
