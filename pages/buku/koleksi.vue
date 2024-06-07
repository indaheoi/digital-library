<template>
<div class="navbar bg-fixed, border-y border-gray">
    <div class="text ms-20 ps-10">
        <a class="text-2xl mt-2 text-gray">Koleksi Buku</a>
    </div>
</div>

<div class="p-5 ps-18 bg-lavender">
  <form class="flex flex-col md:flex-row gap-3">
    <div class="flex bg-white w-[750px] h-[70px] px-10 ms-96 rounded-3xl shadow-inner border-slate-800 border-b-2">
      <div type="submit" class="p-1 border-2 bg-gray shadow-inner text-white font-bold my-2 px-3 rounded-full focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-10"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input type="text" placeholder="Search for the tool you like" class="w-[750px] h-[60px] px-3 rounded-l focus:outline-none">
      <!-- <button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button> -->
      <select id="pricingType" name="pricingType"
        class="w-[140px] h-[40px] border border-indigo-950 mt-4 focus:outline-none rounded-2xl px-2 md:px-3 py-0 md:py-1 tracking-wider">
        <option value="All" select="">All</option>
        <option value="Freemium">Freemium</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>
    </div>
  </form>


<!-- card -->
 <div class="grid grid-cols-4 gap-4 ps-24 z-0 pt-10 ">
     <div v-for="(book, i) in bookFiltered" :key='i' class="">
         <div class="card bg-white shadow m-2 w-80 h-[460px]">
             <div class="card-body pt-0">
                 <figure><img :src="book.cover" alt="" class="h-[300px] w-[100%]"></figure>
                 <p>{{ book.judul }}</p>
                 <div class="rating justify-center">
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" checked />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <!-- <p class="mask mask-half-1">5.0</p> -->
                </div>
                 <NuxtLink :to="`/buku/${book.id}`">
                     <button class="btn btn-block bg-navy text-white btn-sm ">Lihat Buku</button>
                 </NuxtLink>
             </div>
         </div>  
     </div>
 </div>

 </div>
<!-- <div v-for="(book, i) in bookFiltered :key='i'" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="book.cover" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> -->

</template>

<script setup>
const supabase = useSupabaseClient()
const books = ref([])
const keyword = ref('')

const getBooks = async () => {
    const {data, error} = await supabase.from('buku')
    .select(`*,kategori(*)`)
    .ilike('judul', `%${keyword.value}%`)
    if (data) books.value = data
}
const bookFiltered = computed (() => {
    return books.value.filter((b) => {
        return (
            b.judul?.toLowerCase().includes(keyword.value?.toLowerCase()) ||
            b.kategori?.nama.toLowerCase().includes(keyword.value?.toLowerCase())
        )
    })
}) 

onMounted(() => {
    getBooks()
}) 
</script>