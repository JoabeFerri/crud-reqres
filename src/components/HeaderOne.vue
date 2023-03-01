<template>
    <div class="header-default">
        <p class="users-p">Usuários</p>
        <div class="space-button">
            <ButtonLink label="Novo usuário" primary router="new-user"/>
        </div>
    </div>
</template>

<script>
import './header.css'
import ButtonLink from '@/components/Buttons/ButtonLink.vue'

export default {
  name: 'HeaderOne',
  components: {
    ButtonLink
  }
}
</script>