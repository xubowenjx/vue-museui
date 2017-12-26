<template>
  <mu-appbar :title="title_">
      <mu-icon-button @click="back" icon="menu" slot="left"/>
       
    </mu-appbar>
</template>
<script>
export default {
  name: 'head',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      title_: this.title
    }
  },
  methods: {
    back () {

    }
  }
}
</script>
