import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

const logger=(state)=>(next)=>(action)=> {
    console.group(action.type)
      console.log('The action: ',action)
      const returnedValue=next(action)
      console.log("The new state: ",returnedValue)
    console.groupEnd()
  
    return returnedValue
}

export default applyMiddleware(
    thunk,logger
)