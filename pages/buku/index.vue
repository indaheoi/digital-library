<template>
<div class="navbar bg-fixed, border-y border-gray">
    <div class="text ms-20 ps-10">
        <a class="text-2xl mt-2 text-gray">Pencarian Buku</a>
    </div>
</div>
<div class="p-5 ps-18 bg-lavender">
    <form @submit.prevent="getBooks" autocomplete="off">
        <label for="search" class="sr-only">Search</label>
        <div class="relative max-h-full max-w-4xl mx-72 ">
            <div class="absolute inset-y-0 left-0 pl-3  flex items-center">
                <svg class="h-5 w-5 text-gray-500 py-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
            </div>
            <input type="text" v-model="keyword" id="search" class="block pl-10 pr-3 py-2 border h-[50px] w-[1000px] border-gray rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Cari buku...">
        </div>
    </form>
</div>
<div class="bg-lavender h-[100vh] ">
    <div class="carousel rounded-box w-[800px] bg-white p-8" style="margin-left: 390px;">
        <div v-for="(book, i) in bookFiltered" :key='i' class="carousel-item w-1/2 ps-8">
            <div class="card bg-lightgray m-2 w-80">
                <div class="card-body">
                    <figure><img :src="book.cover" alt=""></figure>
                    <NuxtLink :to="`/buku/${book.id}`">
                        <button class="btn btn-block bg-navy text-white btn-sm ">Lihat Buku</button>
                    </NuxtLink>
                </div>
            </div>  
        </div> 
    </div>
    </div>
    <div class="w-screen h-screen bg-lavender pt-10">
                <NuxtLink to="/buku/"><button class="btn btn-circle ml-36 shadow-inner shadow-darkgray">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>               
                </button></NuxtLink>
              </div>

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

<style scoped>
a{
    font-family: "Josefin Sans", sans-serif;
}

.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>