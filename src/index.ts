import express from 'express'
import bitacoraRouter from './routes/bitacora'

const app = express()
app.use(express.json())

const PORT = process.env.PORT ?? 1234

app.get('/ping', (_req, res) => {
  console.log('ingreso al method GET de la ruta::: /ping')
  res.send('ingresó al ping')
})

app.use('/api/bitacora', bitacoraRouter)

app.listen(PORT, () => {
  console.log(`escuchando desde el puerto: ${PORT}`)
})
