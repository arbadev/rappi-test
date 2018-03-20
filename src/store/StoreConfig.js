import { createStore, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, autoRehydrate } from 'redux-persist'


import reducers from '../reducers'

const autoRehydrateConfig = {
  log: true,
}

const localStorageConfig = {
  // storage: localForage,
  whitelist: ['cart'],
}

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise, apiMiddleware),
    autoRehydrate(autoRehydrateConfig),
  )(createStore)

  const store = finalCreateStore(
    reducers,
    initialState,
    composeWithDevTools(),
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = reducers
      store.replaceReducer(nextReducer)
    })
  }

  persistStore(store, localStorageConfig, () => {
    console.log('rehydration complete')
  })

  return store
}
