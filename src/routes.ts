import {Express, Request, Response} from 'express'
import userRoute from './routes/user.routes'

export default function (app: Express) {
  app.use('/api', userRoute);
}
 