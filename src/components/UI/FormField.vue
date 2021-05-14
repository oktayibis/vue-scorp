<template>
<div class="form-field">
<slot></slot>
</div>
</template>

<script>
export default {
  name: 'FormField',
};
</script>

<style lang="scss" scoped>
.form-field {
  width: 100%;
  margin: 10px 0;

  input, textarea, select {
    border: 1px solid rgba(85, 107, 47, 0.1);
    padding: 10px 5px;
    border-radius: 5px;
    background-color: rgba(85, 107, 47, 0.1);
    width: 100%;

    &:required:invalid {
      border: 1px solid red;
    }
    &:required:valid {
      border: 1px solid green;
    }
  }
  label {
    display: block;
    margin: 5px 0;
    font-size: 1rem;
    text-transform: capitalize;
    color: grey;
  }

}
</style>
