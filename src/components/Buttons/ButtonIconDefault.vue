<template>
    <div>
        <button @click="onClick" :class="classes">
            <slot name="icon"></slot>
        </button>
    </div>
    
</template>

<script>
import './button.css';
import Modal from '@/components/Modal.vue';

export default {
    name: 'ButtonIconDefault',

    props: {

    },

    computed: {
        classes() {
            return {
                'my-button-icon': true,

            };
        },
    },
    components: {
        Modal,
    },
    data() {
        return {
        showModal: false,
        };
    },

    methods: {
        showModalEvent() {
            this.showModal = true
            this.$emit('onClick');
        },
        closeModalEvent() {
            this.showModal = false
            this.$emit('onClick');
        },
        onClick() {
            this.$emit('onClick');
        },
    },
}
</script>