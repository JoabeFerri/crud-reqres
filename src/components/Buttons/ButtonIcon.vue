<template>
    <router-link :to="router" tag="button" :click="onClick" :class="classes">
        <slot name="icon"></slot>
    </router-link>
</template>

<script>
import './button.css';

export default {
    name: 'ButtonIcon',

    props: {
        router: {
                type: String,
                required: true,
            }
    },

    computed: {
        classes() {
            return {
                'my-button-icon': true,

            };
        },
    },
    methods: {
        onClick() {
            this.$emit('onClick');
        },
    },
}
</script>