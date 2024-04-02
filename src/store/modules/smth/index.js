const state = () => ({
  data: ''
})

const getters = {
  data: (state) => state.data
}

const actions = {
  async sendForm({ commit }, data) {
    try {
      await fetch('https://mftsaudit.ru/sendmail.php', {
        method: 'POST',
        body: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
        .then((response) => response.json())
        .then((response) => {
          commit('responseData', response.message)
        })
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  responseData: (state, data) => {
    state.data = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
