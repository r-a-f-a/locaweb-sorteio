import { register } from 'register-service-worker'
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('Ready')
    },
    registered () {
      console.log('Registred')
    },
    cached () {
      console.log('Cached')
    },
    updatefound () {
      console.log('Update Found')
    },
    updated () {
      console.log('Updated')
    },
    offline () {
      console.log('Offline')
    },
    error (error) {
      console.error('Error', error)
    }
  })
}
