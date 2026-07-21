export interface ServerConfiguration {
  readonly environment: 'development' | 'test' | 'production';
  readonly port: number;
}

export interface DatabaseConfiguration {
  readonly host: string;
  readonly port: number;
  readonly database: string;
  readonly username: string;
  readonly password: string;
  readonly ssl: boolean;
}

export interface ApplicationConfiguration {
  readonly server: ServerConfiguration;
  readonly database: DatabaseConfiguration;
}
