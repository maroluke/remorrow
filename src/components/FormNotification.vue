<template>
  <div class="notification">
    <div class="notification---icon">
      
    </div>
    <div>
      <p v-text="status.text"></p>
    </div>
    <button
      type="button"
      class="notification--remove"
      @click="removeNotification()"
    >
      <i class="fa fa-times" />
    </button>
  </div>
</template>

<script>
  export default {
    name: "form-notification",
    props: {
      status: {
        type: Object
      },
    },
    methods: {
      removeNotification () {
        clearTimeout(this.countdown)
        this.$emit('remove-notification')
      }
    },
    mounted () {
      //this.countdown = setTimeout(this.removeNotification, 3000)
    }
  }
</script>