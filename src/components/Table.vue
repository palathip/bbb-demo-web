<script setup lang="ts">

import axios from 'redaxios';

function onSearch() {
  axios({
  method: 'get',
  url: 'http://localhost:8080',
  responseType: 'json'
})
  .then(function (response) {
    // console.log(response.data);
    let arr = [];
    arr = response.data;
    arr.forEach(function(value){
      console.log(value);
    });
    return arr;
  });
}

class dataResult{
  invoiceNo : string
  amount : number
  createdAt : string
  constructor(invoiceNo : string,amount : number,createdAt : string){
    this.invoiceNo=invoiceNo
    this.amount=amount
    this.createdAt=createdAt
  }
}

let dataRest:Array<dataResult> = []
dataRest.push(new dataResult("IPX-222",25000.00,"2022-06-15")) 
dataRest.push(new dataResult("IPX-333",30000.00,"2022-06-15")) 
console.log(dataRest);

</script>
<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-100 dark:border-gray-100 dark:shadow-slate-100/[.7] m-10">
    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 bg-blue-600 dark:border-gray-100">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-100">
        Date Search
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
      <button @click="onSearch" type="button"
        class="m-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        search
      </button>

      <!-- clear btn -->
      <button type="button" onclick="document.getElementById('start').value = '',document.getElementById('end').value = '' " 
        class="m-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        clear
      </button>

    </div>
  </div>

  <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div class="py-8">
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                >
                  InvoiceNo.
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                >
                  Created at
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                >
                  status
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in dataRest" :key="data.invoiceNo">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">{{data.invoiceNo}}</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{data.amount}}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{data.createdAt}}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden="true"
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    >
                    </span>
                    <span class="relative"> active </span>
                  </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
              
            </tbody>
          </table>
          <div
            class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <div class="flex items-center">
              <button
                type="button"
                class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  class=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100"
              >
                1
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
              >
                2
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
              >
                3
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
              >
                4
              </button>
              <button
                type="button"
                class="w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  class=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-900 dark:divide-gray-400 ">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice No</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-400">
            <tr v-for="datas in dataRest" :key="datas.invoiceNo">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-500">{{datas.invoiceNo}}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-500">{{datas.amount}}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-500">{{datas.createdAt}}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-blue-500 hover:text-blue-700" href="#">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


</template>
