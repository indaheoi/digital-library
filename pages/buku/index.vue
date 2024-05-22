<template>
       <div class="navbar bg-fixed, border-y border-gray">
        <div class="text ms-20 ps-10">
             <a class="text-2xl mt-2 text-gray">Pencarian Buku</a>
         </div>    
        </div>


<div class="p-5 px-36 bg-lavender">
  <form action="/search" method="GET">
    <label for="search" class="sr-only">Search</label>
    <div class="relative max-h-full max-w-4xl mx-72 ">
      <div class="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-500 py-10" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
         
      <input type="text" name="query" id="search" class="block w-full pl-10 pr-3 py-2 border border-gray rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Cari buku...">
      
    </div>
  </form>
</div>


<div class="content py-6 " style="background-color: #EAE8FF; height: 100vh;">
    <div class="max-w-2xl mx-auto">
    <div id="default-carousel" class="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-80 md:h-96" style="background-color: white;"
        <!-- item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="">
                    class="object-cover w-full h-full" alt="Slide 1">
                <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-dark md:text-2xl dark:text-gray-800">First Slide</span>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://ybtglsuhjxpslzivkzyb.supabase.co/storage/v1/object/sign/cover%20buku/Literatur%20dan%20Sastra/FBAMockup.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb3ZlciBidWt1L0xpdGVyYXR1ciBkYW4gU2FzdHJhL0ZCQU1vY2t1cC5wbmciLCJpYXQiOjE3MTYxNzAxMDgsImV4cCI6MTc0NzcwNjEwOH0.LjuvItoYLOFlcxmkbkHvbH4kKhBdCgGr8AYzoRlgQc8&t=2024-05-20T01%3A55%3A08.884Z"
                    class="object-cover w-full h-full" alt="Slide 2">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://ybtglsuhjxpslzivkzyb.supabase.co/storage/v1/object/sign/cover%20buku/Literatur%20dan%20Sastra/abcoMockup.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb3ZlciBidWt1L0xpdGVyYXR1ciBkYW4gU2FzdHJhL2FiY29Nb2NrdXAucG5nIiwiaWF0IjoxNzE2MTcwMDQyLCJleHAiOjE3NDc3MDYwNDJ9.dEMlcKGOL9t1GJ_R_yehtSRAr9VhlKMkoKMhqGXF4qs&t=2024-05-20T01%3A54%3A02.364Z"
                    class="object-cover w-full h-full" alt="Slide 3">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
            <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
            class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-prev>
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </button>
        <button type="button"
            class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-next>
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </div>
    
    <p class="mt-5 text-center text-gray-700 dark:text-gray-300">
        This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
        by going to the official
        <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/"
            target="_blank">  
        </a>
    </p>
    </div>
    <div class="w-screen bg-lavender ">
                <NuxtLink to="/"><button class="btn btn-circle ml-24 shadow-inner shadow-darkgray">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>               
                </button></NuxtLink>
    </div>
</div>


</template>

<script setup>
// const supabase = useSupabaseClient()
// const books = ref([])

// const getBooks = async () => {
//     const {data, error} = await supabase.from('buku').select(`*,kategori_buku(*)`)
//     if (data) books.value = data
// }

// onMounted(() => {
//     getBooks()
// }) 
</script>

<style scoped>
a{
    font-family: "Josefin Sans", sans-serif;
}
</style>