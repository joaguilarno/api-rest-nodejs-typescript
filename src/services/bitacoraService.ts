import dataBitacora from '../../base/local/data.json'
import { IngresoDiario, IngresoDiarioSinInfoSensible, NuevoIngresoDiario } from '../../types'

const bitacora: IngresoDiario[] = dataBitacora as unknown as IngresoDiario[]

export const getBitacora = (): IngresoDiario[] => bitacora

export const getBuscarBitacoraPorId = (id: number): IngresoDiario | undefined => {
  const bitacoraPorId = bitacora.find((ingreso) => (ingreso.id === id))
  if (bitacoraPorId === null) return undefined
  return bitacoraPorId // const { comentario, ...IngresoSinComentario } = entry: return IngresoSinComentario
}

export const getBitacoraSinInfoSensible = (): IngresoDiarioSinInfoSensible[] => {
  const bitacoraMap = bitacora.map(({ id, fecha, clima, visibilidad }) => {
    return {
      id, fecha, clima, visibilidad
    }
  })

  return bitacoraMap
}

export const addBitacora = (nuevoIngreso: NuevoIngresoDiario): IngresoDiario => {
  const nuevaEntrada = {
    id: Math.max(...bitacora.map(ingreso => ingreso.id)) + 1,
    ...nuevoIngreso
  }
  bitacora.push(nuevaEntrada)
  return nuevaEntrada
}
