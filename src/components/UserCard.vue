<template>
  <div>
    <div v-for="user in users" :key="user.id" style="display: flex;margin-bottom: 15px;">
        <div class="black-marker"></div>
        
        <div class="user-card">
            <img class="img-user" :src="user.avatar"/>
    
            <div class="info-user">
                <span class="id-user">#{{ user.id }}</span>
                <span class="name-user">{{ user.first_name + ' ' + user.last_name}}</span>
                <span class="email-user">{{ user.email }}</span>
    
            </div>

            <div style="margin-left: auto;display: flex;gap: 0.8rem;">
              
              <ButtonIconDefault @onClick="showModalUpdateEvent(user)" >
                <template v-slot:icon > 
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.60387 2.79225H2.68975C2.2416 2.79225 1.81181 2.97028 1.49492 3.28717C1.17803 3.60406 1 4.03385 1 4.482V16.3103C1 16.7584 1.17803 17.1882 1.49492 17.5051C1.81181 17.822 2.2416 18 2.68975 18H14.518C14.9661 18 15.3959 17.822 15.7128 17.5051C16.0297 17.1882 16.2077 16.7584 16.2077 16.3103V10.3961M14.9404 1.52494C15.2765 1.18883 15.7324 1 16.2077 1C16.6831 1 17.1389 1.18883 17.4751 1.52494C17.8112 1.86105 18 2.31692 18 2.79225C18 3.26758 17.8112 3.72345 17.4751 4.05956L9.44875 12.0859L6.06925 12.9308L6.91412 9.55125L14.9404 1.52494Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
              </ButtonIconDefault>

              <Modal class="modal-update-user" :show-modal="showModalUpdateUser" @close="showModalUpdateUser = false">
                <p class="name-user" style="margin-bottom: 32px;">Editar usuário</p>

                <img style="margin-left: auto;margin-right: auto;margin-bottom: 40px;" class="img-user" :src="imgEditUser"/>

                <div class="input-limit">
                  <div class="font-form">Nome do usuário</div>
                  <Input v-model="fullName" style="margin-bottom: 24px;" placeholder="Digite o nome"/>
                </div>

                <label>
                  <div for="value" class="font-form">Função do usuário</div>
                  <Multiselect name="value" style="margin-bottom: 24px;" v-model="value" :options="options" :searchable="false"
                  :close-on-select="true" :show-labels="false" openDirection="bottom"
                  placeholder="Escolha sua função">
                  </Multiselect>
                </label>

                <div class="error-message">{{ errorMessageUpdate }}</div>

                <div class="modal-content-buttons">
                    <button @click="closeModalUpdateEvent" class="my-button my-button--secondary">Cancelar</button>
                    <button style="opacity: 1 !important;" :disabled="botaoAtivo" @click="updateUser(usuarioSelecionado.id)" 
                    class="my-button my-button--primary">
                    Editar usuário
                  </button>
                    
                </div>
              </Modal>
              
              <ButtonIconDefault @onClick="showModalEvent(user)" >
                <template v-slot:icon > 
                  <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.4H2.66667M2.66667 4.4H16M2.66667 4.4V16.3C2.66667 16.7509 2.84226 17.1833 3.15482 17.5021C3.46738 17.8209 3.89131 18 4.33333 18H12.6667C13.1087 18 13.5326 17.8209 13.8452 17.5021C14.1577 17.1833 14.3333 16.7509 14.3333 16.3V4.4H2.66667ZM5.16667 4.4V2.7C5.16667 2.24913 5.34226 1.81673 5.65482 1.49792C5.96738 1.17911 6.39131 1 6.83333 1H10.1667C10.6087 1 11.0326 1.17911 11.3452 1.49792C11.6577 1.81673 11.8333 2.24913 11.8333 2.7V4.4M6.83333 8.65V13.75M10.1667 8.65V13.75" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
              </ButtonIconDefault>

              <Modal :show-modal="showModal" @close="showModal = false">
                  <p class="name-user" style="margin-bottom: 32px;">Tem certeza que deseja excluir este usuário?</p>
                  <div class="modal-content-buttons">
                      <button @click="closeModalEvent" class="my-button my-button--secondary">Cancelar</button>
                      <button :disabled="botaoAtivo" @click="excluirUsuario(usuarioSelecionado.id)" 
                      class="my-button my-button--primary">
                      Excluir usuário
                    </button>
                      
                  </div>
              </Modal>

              <ButtonIcon :router="'user/' + user.id" >
                <template v-slot:icon > 
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
              </ButtonIcon>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import './usercard.css'
import ButtonLink from '@/components/Buttons/ButtonLink.vue'
import ButtonIcon from '@/components/Buttons/ButtonIcon.vue'
import ButtonIconDefault from '@/components/Buttons/ButtonIconDefault.vue'
import Modal from '@/components/Modal.vue';
import Input from '@/components/Input.vue';
import Multiselect from 'vue-multiselect'

export default {
  name: 'UserCard',
  components: {
    ButtonLink,
    ButtonIcon,
    ButtonIconDefault,
    Modal,
    Input,
    Multiselect
  },
  data() {
    return {
      showModal: false,
      showModalUpdateUser: false,
      fullName: '',
      imgEditUser: '',
      users: [],
      usuarioSelecionado: null,
      botaoAtivo: false,
      value: null,
      errorMessageUpdate: '',
      options: ['Developer', 'Deveops', 'Design']
    };
  },
  methods: {
      fetchUsers() {
        this.$http.get('users')
          .then(response => {
            this.users = response.data.data;
            // console.log(this.users)
          })
          .catch(error => {
            console.log(error);
          });
      },

      showModalEvent(user) {
            this.showModal = true
            this.usuarioSelecionado = user
            
            this.$emit('onClick');
            // console.log(user)
      },

      showModalUpdateEvent(user) {
        this.showModalUpdateUser = true
        this.usuarioSelecionado = user
        this.fullName = `${user.first_name} ${user.last_name}`
        this.imgEditUser = user.avatar
        console.log(this.usuarioSelecionado)
      },

      async updateUser(id) {
        try {
          this.botaoAtivo = true
          const response = await this.$http.put(`users/${id}`, {
            name: this.fullName,
            job: this.value,

            
          });
          this.botaoAtivo = false
          this.showModalUpdateUser = false,
          this.value = null
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },

      excluirUsuario(id) {
        this.botaoAtivo = true
        this.$http.delete(`users/${id}`)
        .then(response => {
          // Se a exclusão foi bem sucedida, remova o usuário da lista e feche o modal
          this.users = this.users.filter(user => user.id !== id)
          this.botaoAtivo = false
          this.closeModalEvent()
        })
        .catch(error => {
          console.error(error)
        })
      },

      closeModalEvent() {
          this.showModal = false
          this.$emit('onClick');
      },
      closeModalUpdateEvent() {
          this.showModalUpdateUser = false,
          this.errorMessageUpdate = '',
          this.$emit('onClick');
      },
  },
  mounted() {
    this.fetchUsers();
  }


}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style src="./multiselect.css"></style>