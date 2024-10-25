<template>

    
    <form ref="form" @submit.prevent="submitForm">



    </form>
</template>

<script>
import './formCreateUser.css'
import HeaderTwo from '@/components/HeaderTwo.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Buttons/Button.vue'

export default {
  name: 'LoginForm',
  components: {
    HeaderTwo,
    Input,
    Button,
  },
  data() {
    return {
      userName: '',
      email: '',
      password: null,
      botaoAtivo: false,
    }
  },

  methods: {
    submitForm() {
      this.botaoAtivo = true
      this.$http.post('users', {
        user: this.userName,
        job: this.value,
      })
      .then(response => {
        this.showModalSuccess = true
        this.botaoAtivo = false
        this.userName = ''
        this.value = null
        // TODO: Handle success response
      })
      .catch(error => {
        console.log(error);
        this.showModalError = true
        this.botaoAtivo = false
        // TODO: Handle error response
      });
    },
  },
}
</script>
