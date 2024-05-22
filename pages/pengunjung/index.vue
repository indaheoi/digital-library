<template>

    <!-- header -->
    <div class="navbar bg-fixed">
                <div class="text ms-20 ps-10">
                    <a class="text-2xl text-gray mt-2">Form Kunjungan</a>
                </div>    
            </div>

    <!-- form  -->
   
    <section class=" h-screen pt-20 ps-30 bg-lavender ">     
        <div class="mx-96 card w-[700px] bg-base-100 h-[400px] shadow-inner shadow-darkgray max-w-full ">
            <h2 class="card-title bg-navy rounded-t-2xl justify-center text-2xl text-white textarea-lg">Silahkan Isi Form Kunjungan</h2>
        <div class="card-body">
          
                <form @submit.prevent="kirimData" class="space-y-4 md:space-y-6" action="#">
                    <div>  
                        <input type="text" class="bg-lightgray border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-light-700 dark:border-gray dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama" required="">
                    </div>
                
                    <div>
                   
                    <label for="kategori" class="shadow-inner block mb-2 text-sm font-medium text-darkgray  dark:text-dark ">Kategori</label>
                    <select v-model="kategori" id="kategori" class="bg-lightgray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Siswa</option>
                        <option>Guru</option>
                        <option>Staff</option>
                        <option>Umum</option>
                    </select>
                    
                    </div>
            <div v-if="kategori === 'Siswa'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
                <div class="sm:col-span-2 ">
                    <select id="kelas" name="kelas" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center">
                    <option value="1">Kelas X</option>
                    <option value="2">Kelas XI</option>
                    <option value="3">Kelas XII</option>
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <select id="jurusan" name="jurusan" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center">
                    <option value="TJKT">TJKT</option>
                    <option value="PPLG">PPLG</option>
                    <option value="TSM">TSM</option>
                    <option value="DKV">DKV</option>
                    <option value="TOI">TOI</option>
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <select id="rombel" name="rombel" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center">
                    <option value="B">2</option>
                    <option value="C">3</option>
                    <option value="D">4</option>
                    </select>
                </div>
                </div>
                <div>
                
                    <label for="keperluan" class="shadow-inner block mb-2 text-sm font-medium text-darkgray  dark:text-dark ">keperluan</label>
                    <select v-model="keperluan",  x-data="select({'keperluan'})" id="kategori" class="bg-lightgray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Membaca Ditempat</option>
                    <option>Meminjam Buku</option>
                    <option>Berkunjung</option>
                    <option>Lainnya</option>
                    </select>
                
                </div>
                <div class="flex pr-96">
                    <button class="btn bg-navy text-white btn-sm my-10">Kirim</button>
                </div>
                </form>
                </div> 
</div>
                <div class="bottom-96">
            <NuxtLink to="/riwayat"><button class="btn btn-md bg-navy text-white text-lg flex ms-96 r-18">Lihat</button></NuxtLink>
        </div> 
            
                <div class="w-screen bg-lavender ">
                <NuxtLink to="/"><button class="btn btn-circle shadow-inner shadow-darkgray">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>               
                </button></NuxtLink>
    </div>
                
        
       
        
    
    </section>

    </template>
    <style scoped>
    a{
        font-family: "Josefin Sans", sans-serif;
    }

    .card-title{
        font-family: "Jomolhari", serif;
    }

    .bg-lightgray{
        font-family: "Josefin Sans", sans-serif;
        font-size: large
    }
    
    .sm{
        font-family: "Josefin Sans", sans-serif;
    }
    
    </style>
    <script setup>
    const kategori = ref("")
    </script>

