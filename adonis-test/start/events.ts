import app from '@adonisjs/core/services/app'
import emitter from '@adonisjs/core/services/emitter'

app.ready(() => {
  emitter.on('db:query', function (query) {
    console.log('DB query goes like this:::')
    console.log(query)
  })
})
