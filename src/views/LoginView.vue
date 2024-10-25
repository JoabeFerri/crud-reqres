<template>
    <div class="content">
        <HeaderThree :text="HeadingText"/>

    </div>
</template>

<script>
import './login.css'
import HeaderThree from '@/components/HeaderThree.vue'

export default {
  name: 'LoginView',
  components: {
    HeaderThree
  },
  data: {
    HeadingText: "Faça seu login"
  },
}
</script>
