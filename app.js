Vue.component('modal', {
    props: ['title'],
    
    methods: {
      close () {
        this.$emit('close')
      }
    },
    
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ title }}</h3>
            <div>
              <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="close">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    
    data () {
      return {
        title: 'Titulo del modal',
        showModal: false
      }
    },
    
    methods: {
      toggleModal () {
        this.showModal = !this.showModal
      }
    }
  })