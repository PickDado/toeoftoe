import { createStore } from 'vuex'

export default createStore({
  state: {
    turno : "X"
  },
  mutations: {
    CambiaX(state) { state.turno = "X" },
    CambiaO(state) { state.turno = "O"; },
    Cambio(state) {
      switch (state.turno) {
        case "X":
          state.turno = "O"
          break;
        case "O":
          state.turno = "X"
          break;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
