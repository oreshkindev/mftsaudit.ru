import { createStore } from 'vuex'
import smth from './modules/smth'

const Store = createStore({
  state: {
    dialogForm: false,
    dialogTerms: false,
    navbarHidden: false
  },

  modules: {
    smth
  }
})

export default Store
