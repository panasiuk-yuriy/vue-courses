<template>
<div>
    <input
      v-model='text'
      @change="handleChange(text)"
      type="text"
    />
    <p>{{text}}</p>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapMutations(['filterText']),
    handleChange (text) {
      this.filterText(text)
    }
  }
}
</script>
