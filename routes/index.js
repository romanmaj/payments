const catalogsRouter = require('./CatalogsRoutes')
const usersRouter = require('./UsersRoutes')

const installRoutes = (app) => {
  app.use('/api/v2/catalogs', catalogsRouter)
  app.use('/api/v4/users', usersRouter)
}

module.exports = installRoutes
