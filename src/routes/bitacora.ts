import express from 'express'
import * as bitacoraService from '../services/bitacoraService'
import esquemaNuevoIngresoDiario from '../../esquemas/bitacora'

const bitacoraRouter = express.Router()

bitacoraRouter.get('/', (_req, res) => {
  console.log('get bitacora')
  const bitacora = bitacoraService.getBitacoraSinInfoSensible()
  return (bitacora.length > 0) ? res.send(bitacora) : res.sendStatus(404)
})

bitacoraRouter.get('/:id', (req, res) => {
  console.log('get bitacora por id')
  const bitacoraPorId = bitacoraService.getBuscarBitacoraPorId(Number(req.params.id))

  return (bitacoraPorId !== null) ? res.send(bitacoraPorId) : res.sendStatus(404)
})

bitacoraRouter.post('/', (req, res) => {
  console.log('post bitacora')
  try {
    const nuevaBitacora = esquemaNuevoIngresoDiario(req.body)
    const nuevoIngreso = bitacoraService.addBitacora(nuevaBitacora)
    res.json(nuevoIngreso)
  } catch (error) {
    let errorMessage = 'Ocurrió una excepción: '
    if (error instanceof Error) {
      errorMessage = errorMessage + error.message
    }

    res.status(400).send(errorMessage)
  }
})

export default bitacoraRouter
