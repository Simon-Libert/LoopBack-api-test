import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoDS',
  connector: 'mongodb',
  url: 'mongodb+srv://MaxenceSimon:calbwL56mllAv4Pr@raise.kljt8.mongodb.net/ApiMairie?retryWrites=true&w=majority',
  host: 'localhost',
  port: 27017,
  user: 'MaxenceSimon',
  password: 'calbwL56mllAv4Pr',
  database: 'reportlb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
