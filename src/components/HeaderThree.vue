<template>
        <p class="users-p"> {{ text }}</p>
</template>

<script>
import './header.css'

export default {
  name: 'HeaderThree',
  props: {
    text: {
      type: String,
    },
  },

}
</script>