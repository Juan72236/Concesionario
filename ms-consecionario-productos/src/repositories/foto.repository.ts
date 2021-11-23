import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Mysql1DataSource} from '../datasources';
import {Foto, FotoRelations} from '../models';

export class FotoRepository extends DefaultCrudRepository<
  Foto,
  typeof Foto.prototype.id,
  FotoRelations
> {
  constructor(
    @inject('datasources.mysql1') dataSource: Mysql1DataSource,
  ) {
    super(Foto, dataSource);
  }
}
