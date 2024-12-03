/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

/*
Standard import::
import TestsController from '#controllers/tests_controller'

Lazy Import:: 
const TestsController = () => import('#controllers/tests_controller')

*/

const TestsController = () => import('#controllers/tests_controller')

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.get('/test', [TestsController, 'index'])
