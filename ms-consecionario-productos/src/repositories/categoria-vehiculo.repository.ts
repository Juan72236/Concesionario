import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Mysql1DataSource} from '../datasources';
import {CategoriaVehiculo, CategoriaVehiculoRelations} from '../models';

export class CategoriaVehiculoRepository extends DefaultCrudRepository<
  CategoriaVehiculo,
  typeof CategoriaVehiculo.prototype.id,
  CategoriaVehiculoRelations
> {
  constructor(
    @inject('datasources.mysql1') dataSource: Mysql1DataSource,
  ) {
    super(CategoriaVehiculo, dataSource);
  }
}
