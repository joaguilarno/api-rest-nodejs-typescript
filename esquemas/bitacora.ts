import { NuevoIngresoDiario } from '../types'
import { Clima, Visibilidad } from '../enums'

const parseComentario = (comentarioDesdeRequest: any): string => {
  if (!esString(comentarioDesdeRequest)) {
    throw new Error('Comentario incorrecto')
  }
  return comentarioDesdeRequest
}

const parseFecha = (fechaDesdeRequest: any): string => {
  if (!esString(fechaDesdeRequest) || !esFecha(fechaDesdeRequest)) { throw new Error('Fecha incorrecta') }
  return fechaDesdeRequest
}

const parseClima = (climaDesdeRequest: any): Clima => {
  if (!esString(climaDesdeRequest) || !esUnClima(climaDesdeRequest)) { throw new Error('Clima incorrecto') }

  return climaDesdeRequest
}

const parseVisibilidad = (visibilidadDesdeRequest: any): Visibilidad => {
  if (!esString(visibilidadDesdeRequest) || !esUnaVisibilidad(visibilidadDesdeRequest)) { throw new Error('Clima incorrecto') }

  return visibilidadDesdeRequest
}

const esString = (string: string): boolean => {
  return typeof string === 'string'
}

const esFecha = (fecha: string): boolean => {
  return Boolean(Date.parse(fecha))
}

const esUnClima = (clima: any): boolean => {
  return Object.values(Clima).includes(clima)
}

const esUnaVisibilidad = (visibilidad: any): boolean => {
  return Object.values(Visibilidad).includes(visibilidad)
}

const esquemaNuevoIngresoDiario = (bodyDelRequest: any): NuevoIngresoDiario => {
  const nuevoIngreso: NuevoIngresoDiario = {
    fecha: parseFecha(bodyDelRequest.fecha),
    clima: parseClima(bodyDelRequest.clima),
    visibilidad: parseVisibilidad(bodyDelRequest.visibilidad),
    comentario: parseComentario(bodyDelRequest.comentario)
  }
  return nuevoIngreso
}

export default esquemaNuevoIngresoDiario
