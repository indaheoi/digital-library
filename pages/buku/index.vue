<template>
<div class="navbar bg-fixed, border-y border-gray">
    <div class="text ms-20 ps-10">
        <a class="text-2xl mt-2 text-gray">Pencarian Buku</a>
    </div>
</div>
<div class="p-5 ps-18 bg-lavender">
  <form @submit.prevent="getBooks" class="flex flex-col md:flex-row gap-3">
    <div class="flex bg-white w-[950px] h-[60px] px-6 ms-80 rounded-md shadow-inner border-b-2 border-gray ">
      <div type="submit" class="p-1 bg-lightgray opacity-70 text-dark my-2 px-3 rounded-full focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-10"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input v-model="keyword" type="text" placeholder="Cari buku..." class="text-2xl text-dark  w-[750px] h-[40px] px-3 pt-5 rounded-l focus:outline-none">
      <!-- <button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button> -->
      <select v-model="keyword" id="pricingType" name="pricingType"
        class="w-[140px] h-[40px] border border-gray mt-3 focus:outline-none rounded-2xl px-2 md:px-3 py-0 md:py-1 tracking-wider">
        <option value="" disabled selected>Kategori</option>
        <option v-for="(kategori, i) in kategories" :key="i" :value="kategori.id">{{ kategori.nama }}</option>
      </select>
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
const kategories = ref('')


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


const getKategori = async() => {
    const {data} = await supabase.from('kategori_buku').select('*')
    if(data) kategories.value = data

}

onMounted(() => {
    getBooks()
    getKategori()
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

.flex{
    font-family: "Josefin Sans", sans-serif;
}

</style>