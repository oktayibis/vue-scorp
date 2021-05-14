<template>
  <div class="contact">
    <form @submit.prevent="send">
      <form-field>
        <label for="email">{{$t('email')}}</label>
        <input required v-model.trim="form.email" type="email" id="email">
      </form-field>
      <form-field>
        <label for="name">{{$t('username')}}</label>
        <input required v-model.trim="form.name" type="text" id="name">
      </form-field>
      <form-field>
        <label for="phone">{{$t('phone')}}</label>
        <input required v-model.trim="form.phonenumber" type="tel" id="phone" name="phone"
               maxlength="10"
               pattern="[0-9]{10}"
        >
      </form-field>
      <form-field>
        <label for="countrySearch">{{$t('country')}}</label>
        <input v-model="form.country_code"
               id="countrySearch"
               name="country"
               required
               list="country" />
        <datalist id="country" >
          <option  v-for="country in countries"
                  :value="country.id"
                  :key="country.id">{{country.name}}
          </option>
        </datalist>
      </form-field>
      <form-field>
        <label for="text">{{$t('text')}}</label>
        <textarea rows="5" required v-model.trim="form.text"  id="text" />
      </form-field>
      <div class="actions">
        <button type="reset" style="background: darkorange">{{$t('clear')}}</button>

        <button type="submit" style="background-color: green">{{$t('send')}}</button>
      </div>
    </form>
  </div>
</template>
<script>
import FormField from '@/components/UI/FormField.vue';

export default {
  components: { FormField },
  mounted() {
    if (this.isUserAuth) {
      this.form.email = this.user.email;
      this.form.name = this.user.username;
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phonenumber: '',
        country_code: '',
        text: '',
      },
    };
  },
  methods: {
    send() {
      console.log(this.form);
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUserInfo;
    },
    isUserAuth() {
      return this.$store.getters.isUserAuth;
    },
    countries() {
      return (
        [
          { id: 'TR', name: this.$t('countries.tr') },
          { id: 'US', name: this.$t('countries.us') },
          { id: 'DE', name: this.$t('countries.de') },
          { id: 'GB', name: this.$t('countries.gb') },
          { id: 'SE', name: this.$t('countries.se') },
          { id: 'KE', name: this.$t('countries.ke') },
          { id: 'BR', name: this.$t('countries.br') },
          { id: 'ZW', name: this.$t('countries.zw') },
        ]
      );
    },
  },
  watch: {
    user(newValue) {
      this.form.name = newValue ? newValue.username : '';
      this.form.email = newValue ? newValue.email : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 80%;
  margin: auto;
  form {
    .actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
      button {
        margin: 0 10px;
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

}
</style>
