<template>
    <div class="content">
      <Loader :isLoading="isLoading" />
      <div class="userinfo">
        <HeaderTwo label="Voltar" :text="'#' + user.id" style="margin-bottom: 43px;"/>
        
        <div class="users-info">
          <img class="img-user-info" :src="user.avatar" alt="Profile picture"/>

          <div class="first-name">
            <div class="first-name-font">Primeiro nome</div>
            <div class="name-font">{{ user.first_name }}</div>
          </div>
          
          <div class="first-name" style="margin-left: 46px;">
            <div class="first-name-font">Último nome</div>
            <div class="name-font">{{ user.last_name }}</div>
          </div>
          
        </div>

        <div class="user-info-more">
          <div style="margin-top: 16px;margin-bottom: 0px;">
            <p class="first-name-font">Endereço de e-mail</p>
            <div class="name-font">{{ user.email }}</div>
          </div>

          <div style="margin-top: 10px;margin-bottom: 0px;">
            <p class="first-name-font">Link do avatar</p>
            <div class="name-font">{{ user.avatar }}</div>
          </div>

          <div style="margin-top: 10px;margin-bottom: 0px;">
            <p class="first-name-font">Link de suporte</p>
            <div class="name-font">{{ support.url }}</div>
          </div>

          <div style="margin-top: 10px;margin-bottom: 0px;">
            <p class="first-name-font">Descrição do usuário</p>
            <div class="name-font">{{ support.text }}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import './userinfo.css'
import axios from 'axios';
import HeaderTwo from '@/components/HeaderTwo.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'NewUser',
  components: {
    HeaderTwo,
    Loader
  },
  data() {
    return {
      user: {},
      support: {},
      isLoading: true
    };
  },
  methods: {
    
  },
  mounted() {
    const userId = this.$route.params.id; // Obtém o id do usuário a partir da rota
    // Faz uma requisição GET para obter as informações do usuário usando axios
    axios.get(`https://reqres.in/api/users/${userId}`)
      .then(response => {
        this.user = response.data.data;
        this.isLoading = false
        this.support = response.data.support;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
</script>