import { Logger } from 'sass'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {},
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  },
  mounted() {
    console.log('mixin mounted')
  }
}
