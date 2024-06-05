import { Visibilidad, Clima } from './enums'

export interface IngresoDiario {
  id: number
  fecha: string
  clima: Clima
  visibilidad: Visibilidad
  comentario: string
}

/* interface IngresoDiarioEspecial extends IngresoDiario {
  numeroDeVuelo: number
} */

// export type IngresoDiarioSinInfoSensible = Pick<IngresoDiario, 'id' | 'fecha' | 'clima' | 'visibilidad' | 'comentario'>

export type IngresoDiarioSinInfoSensible = Omit<IngresoDiario, 'comentario'>
export type NuevoIngresoDiario = Omit<IngresoDiario, 'id'>
