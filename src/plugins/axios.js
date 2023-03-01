import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://reqres.in/api/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})