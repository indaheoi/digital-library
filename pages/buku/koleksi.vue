<template>
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <div class="navbar bg-white fixed z-10 border-y border-gray">
        <div class="text ms-20 ps-10">
            <a class="text-2xl mt-2 text-gray">Koleksi Buku</a>
        </div>
    </div>
    <div class="p-5 ps-20 py-20 bg-lavender">
        <form @submit.prevent="getBooks" class="flex flex-col md:flex-row gap-3 justify-center align-center content-center items-center">
            <div
                class="flex bg-white lg:w-[950px] h-[60px] md:w-[600px] w-200 justify-between px-6 rounded-md shadow-inner border-b-2 border-gray ">
                <!-- <div type="submit"
                    class="p-1 bg-lightgray opacity-70 text-dark my-2 px-3 rounded-full focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" viewBox="0 0 24 24" class="w-6 h-10">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div> -->
                <input v-model="keyword" type="text" placeholder="Cari buku..."
                    class="text-2xl text-dark px-3 pt-2 rounded-l focus:outline-none">
                <select v-model="keyword" id="pricingType" name="pricingType "
                    class="w-[140px] h-[40px] border border-gray mt-3 focus:outline-none rounded-2xl px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="" disabled selected>Kategori</option>
                    <option v-for="(kategori, i) in kategories" :key="i" :value="kategori.nama">{{ kategori.nama }}
                    </option>
                </select>
                <!-- <button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button> -->
            </div>
        </form>
        <!-- <div class="carousel rounded-box w-[800px] bg-white p-8" style="margin-left: 390px;">
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
        </div> -->
        <!-- <form @submit.prevent="getBooks" class="flex flex-col md:flex-row gap-3">
            <div class="flex bg-white w-[950px] h-[60px] px-6 ms-80 rounded-md shadow-inner border-b-2 border-gray ">
                <div type="submit"
                    class="p-1 bg-lightgray opacity-70 text-dark my-2 px-3 rounded-full focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" viewBox="0 0 24 24" class="w-6 h-10">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input v-model="keyword" type="text" placeholder="Cari buku..."
                    class="text-2xl text-dark  w-[750px] h-[40px] px-3 pt-5 rounded-l focus:outline-none">
                <button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
                <select v-model="keyword" id="pricingType" name="pricingType"
                    class="w-[140px] h-[40px] border border-gray mt-3 focus:outline-none rounded-2xl px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="" disabled selected>Kategori</option>
                    <option v-for="(kategori, i) in kategories" :key="i" :value="kategori.id">{{ kategori.nama }}
                    </option>
                </select>
            </div>
        </form> -->


        <!-- card -->
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 gap-x-10 lg:ps-20 md:ps-18 z-0 pt-10">
            <div v-for="(book, i) in bookFiltered" :key='i' class="">
                <div class="card bg-white shadow m-2 ">
                    <div class="card-body pt-0 text-center h-[380px]">
                        <figure><img :src="book.cover" alt="" class="h-[210px] w-[200px]"></figure>
                        <p>{{ book.judul }}</p>
                        <div class="rating justify-center pb-1">
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
const kategories = ref('')

const getBooks = async () => {
    const { data, error } = await supabase.from('buku')
        .select(`*,kategori(*)`)
        .ilike('judul', `%${keyword.value}%`)
    if (data) books.value = data
}
const bookFiltered = computed(() => {
    return books.value.filter((b) => {
        return (
            b.judul?.toLowerCase().includes(keyword.value?.toLowerCase()) ||
            b.kategori?.nama.toLowerCase().includes(keyword.value?.toLowerCase())
        )
    })
})

const getKategori = async () => {
    const { data } = await supabase.from('kategori_buku').select('*')
    if (data) kategories.value = data

}

onMounted(() => {
    getBooks()
    getKategori()
}) 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

.flex {
    font-family: "Josefin Sans", sans-serif;
}

.navbar {
    font-family: "Josefin Sans", sans-serif;
}

.card {
    font-family: "Josefin Sans", sans-serif;

}
</style>