import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Mysql1DataSource} from '../datasources';
import {Proveedor, ProveedorRelations} from '../models';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.id,
  ProveedorRelations
> {
  constructor(
    @inject('datasources.mysql1') dataSource: Mysql1DataSource,
  ) {
    super(Proveedor, dataSource);
  }
}
