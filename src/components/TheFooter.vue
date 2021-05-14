<template>
<footer>
  <div class="footer-container">
    <p>{{$t('footer')}}</p>
  </div>

</footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
footer {
  max-width: 1300px;
  width: 100%;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  background-color: darkgreen;
  color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  .footer-container {
    margin: 0 10px;
    text-align: center;
  }
}
</style>
