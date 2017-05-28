import { createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware, { runSaga } from 'redux-saga'
import reducer from './reducers'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const storeConfigure = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)) )
  sagaMiddleware.run(saga)
  return store
}

export default storeConfigure
