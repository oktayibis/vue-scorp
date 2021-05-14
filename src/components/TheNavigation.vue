<template>
<div>
  <nav>
    <div class="logo">
      <font-awesome-icon size="lg" icon="blog" />
      <span style="margin-left: 10px">{{currentRouteName}}</span>
    </div>
    <ul class="menu-items" :class="{'display-menu': mobile}">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="contact">Contact</router-link></li>
      <li>
        <select v-model="$i18n.locale" name="language" id="language">
          <option v-for="lang in languages"
                  :value="lang.value"
                  :key="lang.value">{{lang.display}}</option>
        </select>
      </li>
      <li v-if="!userStatus" @click.stop="openLogin">Login</li>
      <li v-if="userStatus" @click.stop="isUserInfo=!isUserInfo">
        User
        <div v-if="isUserInfo" class="user-info">
          <p>{{userInfo.email}}</p>
          <button type="button" @click.stop="logout">Logout</button>
        </div>
      </li>
    </ul>
<!--    mobile menu-->
    <div class="humberger">
      <font-awesome-icon @click="mobile=!mobile" size="lg" icon="bars" />
    </div>
  </nav>
<!--  Login Dialog-->
  <app-login :open="dialog" :close="closeLogin"></app-login>
</div>
</template>

<script>
import AppLogin from '@/components/AppLogin.vue';

export default {
  name: 'TheNavigation',
  components: { AppLogin },
  data() {
    return {
      dialog: false,
      mobile: false,
      isUserInfo: false,
      languages: [
        {
          value: 'tr', display: 'Türkçe',
        },
        {
          value: 'en', display: 'English',
        },
      ],
    };
  },
  computed: {
    userStatus() {
      return this.$store.getters.isUserAuth;
    },
    userInfo() {
      return this.$store.getters.getUserInfo;
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    openLogin() {
      this.dialog = !this.dialog;
      this.mobile = false;
    },
    closeLogin() {
      this.dialog = false;
    },
    async logout() {
      await this.$store.dispatch('logout');
      this.isUserInfo = false;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: darkgreen;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;

    li {
      padding: 0 10px;
      a {
        text-decoration: none;
        color: inherit;
      }
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .user-info {
      position: fixed;
      transform: translateX(-50%) translateY(10%);
      z-index: 150;
      padding: 10px;
      background-color: white;
      color: black;
      text-align: center;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.1);

      p {
        font-size: 0.8rem;
        padding-bottom: 10px;
        border-bottom: 1px solid green;
      }

      button {
        border: none;
        background-color: darkred;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;

        &:hover {
          cursor: pointer;

        }
      }
    }
  }
  select {
    border: none;
    background-color: transparent;
    color: white;
  }

}
.humberger {
  display: none;
}

@media only screen and (max-width: 768px) {
  .display-menu {
    display: block !important;

    li {
      padding: 10px;
    }
  }
  .menu-items {
    display: none;
  }

  .humberger {
    display: block;
  }
  ul.display-menu {
    position: absolute;
    top: 70px;
    right: 10px;
    z-index: 100;
    padding: 20px;
    background-color: darkgreen;
    color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
