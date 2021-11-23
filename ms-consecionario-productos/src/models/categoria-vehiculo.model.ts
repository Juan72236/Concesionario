import {Entity, model, property} from '@loopback/repository';

@model()
export class CategoriaVehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_categoria: number;

  @property({
    type: 'number',
    required: true,
  })
  id_vehiculo: number;


  constructor(data?: Partial<CategoriaVehiculo>) {
    super(data);
  }
}

export interface CategoriaVehiculoRelations {
  // describe navigational properties here
}

export type CategoriaVehiculoWithRelations = CategoriaVehiculo & CategoriaVehiculoRelations;
