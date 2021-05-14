<template>

  <dialog  :open="open">
    <h3>{{$t('loginModal.title')}}</h3>
<form @submit.prevent="login"  class="form-container">
  <div class="form-field">
    <label for="email">{{$t('email')}}</label>
    <input required v-model.trim="form.email" type="email" id="email">
  </div>
  <div class="form-field">
    <label for="username">{{$t('username')}}</label>
    <input required v-model.trim="form.username" type="text" id="username">
  </div>
  <div class="form-field">
    <label for="password">{{$t('password')}}</label>
    <input required v-model.trim="form.password" type="password" id="password">
  </div>
  <div class="buttons">
    <button @click="closeDialog" style="background-color: red">{{$t('close')}}</button>
    <button type="submit" style="background-color: green">{{$t('login')}}</button>
  </div>
</form>

  </dialog>

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      dialog: false,
      form: {
        email: '',
        username: '',
        password: '',
      },
    };
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Function,
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.form);
    },
    closeDialog() {
      /*      this.form.username = '';
      this.form.password = ''; */
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>

dialog {
  margin: 0;
  position: absolute;
  padding: 20px 40px 10px 40px;
  transform: translateY(10vh) translateX(40vw);
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 10px 30px 0;

  .form-container {
    padding: 10px;
    .form-field {

      width: 100%;
      margin: 10px 0;
      input {
        border: none;
        padding: 10px;
        border-radius: 5px;
        background-color: rgba(85, 107, 47, 0.1);
      }
      label {
        display: block;
        margin: 5px 0;
        font-size: 1rem;
        text-transform: capitalize;
        color: grey;
      }
    }

  }
  .buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    button {
      border: none;
      padding: 10px;
      border-radius: 5px;
      color: white;
      text-transform: capitalize;

      &:hover {
        filter: brightness(95%);
        cursor: pointer;
      }
    }
  }
}

@media screen  and (max-width: 768px){
  dialog {
    transform: translateX(10vw);
  }
}
</style>
