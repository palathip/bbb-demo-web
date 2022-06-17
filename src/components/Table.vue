<script lang="ts">

import { type } from 'os';
import axios from 'redaxios';
import {reactive} from 'vue'
import {defineComponent} from 'vue';
 export default defineComponent({
  props:{
     tt: Object,
  },
 })

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
              <tr v-for="data in tt.data" :key="tt.data.invoiceNo">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">{{data.invoice_no}}</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{data.amount}}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{data.created_at}}</p>
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

<!-- <div class="flex flex-col">
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
</div> -->


</template>
