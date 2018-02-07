export type ProviderTypes = 'auth' | 'builder' | 'forms' | 'offline' | 'resource' | 'other';

export interface ProviderInterface {
  name: string;
  title?: string;
  form?: string;
  type?: ProviderTypes;
  titlePlural?: string;
  parents?: string[];
}

export class Provider implements ProviderInterface {
  public constructor(
    { name, title, titlePlural, form, type, parents }: ProviderInterface,
  ) {
    this.name = name;
    if (title) {
      this.title = title;
    }
    if (titlePlural) {
      this.titlePlural = titlePlural;
    }
    if (form) {
      this.form = form;
    }
    if (type) {
      this.type = type;
    }
    if (parents) {
      this.parents = parents;
    }
  }

  protected capitalize(value: string): string {
    return value[0].toUpperCase() + value.substring(1);
  }

  protected pluralize(value: string): string {
    return value + 's';
  }

  public get name(): string {
    return this.name;
  }

  public set name(value: string) {
    this.name = value;
  }

  public get title(): string {
    return this.title || this.capitalize(this.name);
  }

  public set title(value: string) {
    this.title = value;
  }

  public get titlePlural(): string {
    return this.titlePlural || this.pluralize(this.title);
  }

  public set titlePlural(value: string) {
    this.titlePlural = value;
  }

  public get form(): string {
    return this.form || this.name.toLowerCase();
  }

  public set form(value: string) {
    this.form = value;
  }

  public get type(): ProviderTypes {
    return this.type || 'resource';
  }

  public set type(value: ProviderTypes) {
    this.type = value;
  }

  public get parents(): string[] {
    return this.parents;
  }

  public set parents(value: string[]) {
    this.parents = value;
  }
}
