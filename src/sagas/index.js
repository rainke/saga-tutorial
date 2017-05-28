import {takeEvery, put} from 'redux-saga/effects'
import * as api from '@/api'

function* fetchTodo(action){
  const {todos, error} = yield api.getTodos({filter:action.filter})
  if(todos){
    yield put({type:'FETCH_TODO_SUCCESS', todos})
  } else {
    yield put({type: 'FETCH_TODO_ERROR'})
  }
}

function* fetchTodoSaga(){
  yield takeEvery('FETCH_TODO', fetchTodo)
}

export default fetchTodoSaga