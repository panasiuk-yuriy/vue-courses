<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <p class="text-monospace"><slot></slot></p>
          </div>
          <div class="modal-body">
            <slot name="body">
              <EditCourse
                  v-if="this.$route.path === '/courses'"
                  v-bind:course='course'
                  @close='handleClose'
                  @submit-edit="handleSubmitCourse"/>
                <EditStudent
                  v-else
                  v-bind:student='student'
                  @close='handleClose'
                  @submit-edit-student="handleSubmitStudent"/>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import EditCourse from '../components/EditCourse'
import EditStudent from '../components/EditStudent'
export default {
  name: 'modal',
  components: { EditCourse, EditStudent },
  props: ['course', 'student'],

  methods: {
    handleClose (close) {
      this.$emit('close-edit', close)
    },

    handleSubmitCourse (id, title, code) {
      this.$emit('submit-edit', id, title, code)
    },

    handleSubmitStudent (id, name, email, active) {
      this.$emit('submit-edit', id, name, email, active)
    }
  }
}
</script>
