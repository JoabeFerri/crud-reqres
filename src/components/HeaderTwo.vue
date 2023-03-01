<template>
    <div class="header-default">
        <p class="users-p"> {{ text }}</p>
        <div class="space-button">
            <ButtonLink :label="label" router="/"/>
        </div>
    </div>
</template>

<script>
import './header.css'
import ButtonLink from '@/components/Buttons/ButtonLink.vue'

export default {
  name: 'HeaderTwo',
  props: {
    text: {
      type: String,
    },
    label: {
      type: String,
    }
  },
  components: {
    ButtonLink
  }
}
</script>