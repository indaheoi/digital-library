<template>

<!-- header -->
<div class="text">
    <a class="text-2xl text-gray-900 ">Form Kunjungan</a>
</div>    
 

 <!-- form  -->
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Silahkan Isi Form Kunjungan
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>  
                      <input type="text" class="bg-gray-50 border border-light-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-light-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama" required="">
                  </div>
                <div>
                <form class="max-w-sm mx-auto">
                <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
                <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Siswa</option>
                    <option>Guru</option>
                    <option>Staff</option>
                    <option>Umum</option>
                </select>
                </form> 
                </div>
                <div>
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
                    <button class="btn btn-xs">Kirim</button>
                </div>
              </form>
          </div>
          <button class="btn btn-sm flex ">Lihat</button>
      </div>
  </div>
</section>


</template>

