<template>
    <div class="content">
      <div class="newuser">
        <HeaderTwo label="Cancelar" text="Usuários" style="margin-bottom: 43px;"/>
        <FormCreateUser />
        <UserCard/>
      </div>
  </div>
</template>

<script>
import './newuser.css'
import HeaderTwo from '@/components/HeaderTwo.vue'
import UserCard from '@/components/UserCard.vue'
import Input from '@/components/Input.vue'
import FormCreateUser from '@/components/FormCreateUser.vue'

export default {
  name: 'NewUser',
  components: {
    HeaderTwo,
    UserCard,
    Input,
    FormCreateUser
  },
  data() {
    return {
      users: [],
      role: '',
      roles: [
        { text: 'Admin', value: 'admin' },
        { text: 'User', value: 'user' },
      ],

    }
  },
}
</script>