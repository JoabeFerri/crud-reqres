<template>
        <router-link tag="button" :to="router" :class="classes">
            {{ label }}
        </router-link>
</template>

<script>
    import './button.css';

    export default {
        name: 'ButtonLink',

        props: {
            label: {
                type: String,
                required: true,
            },
            primary: {
                type: Boolean,
                default: false,
            },
            router: {
                type: String,
                required: true,
            }
        },

        computed: {
            classes() {
                return {
                    'my-button': true,
                    'my-button--primary': this.primary,
                    'my-button--secondary': !this.primary,

                };
            },
            style() {
                return {
                    backgroundColor: this.backgroundColor,
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