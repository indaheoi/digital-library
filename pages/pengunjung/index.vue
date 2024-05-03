<template>

<!-- header -->
<div class="navbar bg-fixed">
            <div class="text ms-20 ps-10">
                <b class="text-2xl text-gray">Form Kunjungan</b>
            </div>    
        </div>

<!-- form  -->
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen bg-lavender lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-10 space-y-4 md:space-y-6 sm:p-8 w-[100%] bg-neutral-900">
              <h1 class="text-center text-xl text-white font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                 Silahkan Isi Form Kunjungan
              </h1>
          </div>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>  
                      <input type="text" class="bg-gray-50 border border-light-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-light-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama" required="">
                  </div>
              </form>
                <div>
                <form @submit.prevent="kirimData">
                <label for="kategori" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
                <select v-model="kategori" id="kategori" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Siswa</option>
                    <option>Guru</option>
                    <option>Staff</option>
                    <option>Umum</option>
                </select>
                </form> 
                </div>
        <div v-if="kategori === 'Siswa'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="sm:col-span-1 ">
                <select id="kelas" name="kelas" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Kelas</option>
                <option value="1">Kelas X</option>
                <option value="2">Kelas XI</option>
                <option value="3">Kelas XII</option>
                </select>
            </div>
            <div class="sm:col-span-1">
                <select id="jurusan" name="jurusan" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Jurusan</option>
                <option value="TJKT">TJKT</option>
                <option value="PPLG">PPLG</option>
                <option value="TSM">TSM</option>
                <option value="DKV">DKV</option>
                <option value="TOI">TOI</option>
                </select>
            </div>
            <div class="sm:col-span-1">
                <select id="rombel" name="rombel" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Rombel</option>
                <option value="A">1</option>
                <option value="B">2</option>
                <option value="C">3</option>
                <option value="D">4</option>
                </select>
            </div>
            </div>
            <form class="max-w-sm mx-auto">
                <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keperluan</label>
                <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Membaca Ditempat</option>
                <option>Meminjam Buku</option>
                <option>Berkunjung</option>
                <option>Lainnya</option>
                </select>
            </form>
            </div>
            <div class="flex items-center justify-start">
                <button class="btn bg-[#2D3142] text-white btn-xs">Kirim</button>
            </div>
        <NuxtLink to="/riwayat"><button class="btn btn-sm bg-navy text-white flex my-3 ms-96">Lihat</button></NuxtLink>
      </div>
  
</section>

</template>
<style scoped>
b{
    font-family: "Josefin Sans", sans-serif;
}
</style>
<script setup>
const kategori = ref("")
</script>

