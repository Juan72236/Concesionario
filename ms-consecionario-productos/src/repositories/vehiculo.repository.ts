import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Mysql1DataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Marca} from '../models';
import {MarcaRepository} from './marca.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly tieneMarca: BelongsToAccessor<Marca, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.mysql1') dataSource: Mysql1DataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.tieneMarca = this.createBelongsToAccessorFor('tieneMarca', marcaRepositoryGetter,);
    this.registerInclusionResolver('tieneMarca', this.tieneMarca.inclusionResolver);
  }
}
