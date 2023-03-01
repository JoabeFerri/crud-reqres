<template>
    <input type="text" :value="valor" :placeholder="placeholder"
        @input="$emit('input', $event.target.value)" :class="classes"/>
</template>

<script>
import './input.css';

export default {
    name: 'Input',

    props: {
        valor: String,
        placeholder: String
    },

    computed: {
        classes() {
            return {
                'my-input': true,
                'my-input--primary': this.primary,

            };
        },

    },

}
</script>