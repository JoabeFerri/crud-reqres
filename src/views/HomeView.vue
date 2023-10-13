<template>
  <div class="home">
    <HeaderOne style="margin-bottom: 40px;"/>
    <UserCard class="user-card-space"/>
  </div>
</template>

<script>
// @ is an alias to /src
import './home.css'
import ListUsers from '@/components/ListUsers.vue'
import HeaderOne from '@/components/HeaderOne.vue'
import ButtonLink from '@/components/Buttons/ButtonLink.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'HomeView',
  components: {
    ListUsers,
    HeaderOne,
    ButtonLink,
    UserCard,
  }
}
</script>
