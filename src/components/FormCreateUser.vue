<template>
    <form ref="form" @submit.prevent="submitForm">
        <div for="userName" class="font-form">Nome do usuário</div>
        <input class="my-input" v-model="userName" style="margin-bottom: 24px;" placeholder="Digite o nome"/>
        
        <label>
            <div for="value" class="font-form">Função do usuário</div>
            <Multiselect name="value" style="margin-bottom: 24px;" v-model="value" :options="options" :searchable="false"
            :close-on-select="true" :show-labels="false" openDirection="bottom"
            placeholder="Escolha sua função">
            </Multiselect>
        </label>

        <Button :disabled="botaoAtivo" type="submit" style="margin-bottom: 40px;" primary label="Salvar dados do usuário"/>

        <Modal :show-modal="showModalSuccess" @close="showModalSuccess = false">
          <p class="name-user" style="margin-bottom: 32px;">Usuário adicionado com sucesso</p>
          <Button @onClick="modalSuccessClose" label="Fechar" primary />
        </Modal>

        <Modal :show-modal="showModalError" @close="showModalError = false">
          <p class="name-user" style="margin-bottom: 32px;">Por favor, preencha todos os dados do formulario <br> sem deixar nenhuma informação vazia</p>
          <Button @onClick="modalErrorClose" label="Fechar" primary />
        </Modal>

    </form>
</template>

<script>
import './formCreateUser.css'
import HeaderTwo from '@/components/HeaderTwo.vue'
import UserCard from '@/components/UserCard.vue'
import Input from '@/components/Input.vue'
import Multiselect from 'vue-multiselect'
import Button from '@/components/Buttons/Button.vue'
import Modal from '@/components/Modal.vue';

export default {
  name: 'NewUser',
  components: {
    HeaderTwo,
    UserCard,
    Input,
    Multiselect,
    Button,
    Modal
  },
  data() {
    return {
      userName: '',
      users: [],
      value: null,
      botaoAtivo: false,
      showModalSuccess: false,
      showModalError: false,
      options: ['Developer', 'Deveops', 'Design']
    }
  },

  methods: {
    submitForm() {
      this.botaoAtivo = true

      if (!this.userName || !this.value || !this.userName.trim()) {
        this.showModalError = true
        this.botaoAtivo = false
        return;
      }

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
    
    resetForm() {
      this.$refs.form.reset()
    },

    modalErrorClose() {
      this.showModalError = false
    },

    modalSuccessClose() {
      this.showModalSuccess = false
    }
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style src="./multiselect.css"></style>
