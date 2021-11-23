import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysql1',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'Juan Pablo DB',
  password: 'JuanPabloDeveloper2021JuaJuanPabloDeveloper2021',
  database: 'BDconsecionario'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Mysql1DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysql1';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql1', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
