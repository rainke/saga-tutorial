import {takeEvery, put} from 'redux-saga/effects'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* increment(action){
  yield delay(1000)
  yield put({type:'INCREMENT'})
}

function* incrementSagas(){
  yield takeEvery('MY_INCREMENT', increment)
}

export default incrementSagas;