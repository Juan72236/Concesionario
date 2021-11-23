import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Mysql1DataSource} from '../datasources';
import {Marca, MarcaRelations} from '../models';

export class MarcaRepository extends DefaultCrudRepository<
  Marca,
  typeof Marca.prototype.id,
  MarcaRelations
> {
  constructor(
    @inject('datasources.mysql1') dataSource: Mysql1DataSource,
  ) {
    super(Marca, dataSource);
  }
}
