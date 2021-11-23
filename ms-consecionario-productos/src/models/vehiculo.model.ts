import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Marca} from './marca.model';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Color: string;

  @property({
    type: 'string',
    required: true,
  })
  Modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  SerieChasis: string;

  @property({
    type: 'string',
    required: true,
  })
  SerieMotor: string;

  @property({
    type: 'number',
    required: true,
  })
  Precio: number;

  @property({
    type: 'number',
    required: true,
  })
  Descuento: number;

  @property({
    type: 'number',
    required: true,
  })
  Existencia: number;

  @belongsTo(() => Marca, {name: 'tieneMarca'})
  idMarca: number;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
