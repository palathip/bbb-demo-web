<script lang="ts">
import CTable from "../components/Table.vue"
import axios from 'redaxios';
import {defineComponent} from 'vue';

 export default defineComponent({
  components:{
     CTable
  },
  data(){
    return{
      tt: {
        data : []
      },
    }
  },
  computed:{
  },
  mounted(){
    console.log('mounted');
    
    // this.onSearch()
  },
  methods:{
    onSearch() {

          axios({
          method: 'get',
          url: 'http://localhost:8080',
          responseType: 'json'
        })
          .then(( (response) => {
            console.log(response.data);
            
            this.tt.data = response.data;
            
            // console.log(response.data);
        //     let arr = [];
        //     arr = response.data;
        //     arr.forEach(function(value){
        //       console.log(value);

        //     });
        // dd = computed(()=> test = arr);
        // console.log('dd',dd.value);

  }));
}
  }
})

// let test = ref([]);
// let dd = [];


</script>

<template>
<div
  
    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-100 dark:border-gray-100 dark:shadow-slate-100/[.7] m-10">



    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 bg-indigo-500 dark:border-gray-100">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-100">
      </p>
    </div>
    <div class="p-4 md:p-5">

  <div class="grid grid-cols-2">

  <div>
      <!-- end start text -->
      <div class="flex rounded-md shadow-sm p-2 ">
        <span
          class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-300 dark:border-gray-300 dark:text-gray-700">From</span>
        <input type="text"
          class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-200 dark:border-gray-700 dark:text-gray-800" id="start">
      </div>
  </div>

  <div>
      <!-- end date text -->
      <div class="flex rounded-md shadow-sm p-2">
        <span
          class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-300 dark:border-gray-300 dark:text-gray-700">To</span>
        <input type="text"
          class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-200 dark:border-gray-700 dark:text-gray-800" id="end">
      </div>
  </div>
</div>

      <!-- search btn -->
      <button @click="onSearch()" type="button"
        class="m-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        search
      </button>

      <!-- clear btn -->
      <button type="button" onclick="document.getElementById('start').value = '',document.getElementById('end').value = '' " 
        class="m-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        clear
      </button>

    </div>
  </div>

  <div class="flex justify-center">
        <CTable :tt="tt"/>
  </div>
</template>

<style>
</style>
