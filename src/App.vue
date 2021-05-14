<template>
   <div class="main-container">
     <TheNavigation />
     <router-view/>
     <TheFooter />
   </div>
</template>

<style lang="scss">
  .main-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
  }

</style>
<script>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: { TheFooter, TheNavigation },
};
</script>
