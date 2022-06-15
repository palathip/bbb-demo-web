<script setup lang="ts">
import CTable from "../components/Table.vue"
import axios from 'redaxios';

function onSearch() {
  axios({
  method: 'get',
  url: 'http://localhost:8080',
  responseType: 'json'
})
  .then(function (response) {
    console.log(response.data);
    return response.data
  });
}

</script>

<template>

  <div class="flex justify-center">
    <c-table />
  </div>
</template>

<style>
</style>
