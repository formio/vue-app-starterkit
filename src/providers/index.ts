import { Provider } from './Provider';

let Providers: Provider[];

const myproviders = [{name: 'test'}];

Providers = myproviders.map((provider) => new Provider(provider));

Providers.push(new Provider({name: 'test'}));

export default Providers;
