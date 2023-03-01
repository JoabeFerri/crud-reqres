<template>
        <button @click="onClick" :class="classes">
            {{ label }}
        </button>
</template>

<script>
    import './button.css';

    export default {
        name: 'ButtonDefault',

        props: {
            label: {
                type: String,
                required: true,
            },
            primary: {
                type: Boolean,
                default: false,
            },

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