import {createStore} from 'redux'

import counter from './counter/reducer'

const store = createStore(counter)
export default store