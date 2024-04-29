<template>
    <div class="navbar">
        <div class="logo ml-4">
            <img src="assets\img\logosmk4.jpg" width="40px">
        </div>
        <div class="text">
            <a class="text-2xl text-gray-900 font-semibold mx-7 ">Perpustakaan Digital SMKN 4 Tasikmalaya</a>
        </div>    
    </div>

  <div data-theme="light" class="max-w-full">


    <div class=" flex ">
      <Sidebar/>
    <div class="md:flex md:justify-between md:px-24 px-5 mt-10 gap-10">

      <div class="card w-[600px] bg-base-100 h-[400px] shadow-xl max-w-full ">
        <figure><img src="~/assets\img\bg-home-kunjungan.jpg" alt="kunjungan" /></figure>
        <div class="card-body">
          <h2 class="card-title">Kunjungan</h2>
          <div class="absolute right-20 bottom-36 bg-white ">
            <div class="border rounded-lg">
              <svg  xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-notes w-15 h-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M9 7l6 0" />
                <path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>
            </div>
          </div>
          <div class="card-actions justify-end">

            <NuxtLink to="pengunjung/"><button class="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button></NuxtLink>
          </div>
          </div>
    </div>
    
          <div class="card card-compact h-[400px] w-[600px] bg-base-100 max-w-full shadow-xl">
            <figure><img src="~/assets\img\bg-home-cari-buku.jpg" alt="Pencarian buku" /></figure>
            <div class="card-body">
              <h2 class="card-title">Pencarian Buku</h2>
              <div class="absolute right-20 bottom-36 bg-white ">
            <div class="border rounded-lg">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-book w-16 h-16"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
            </div>
          </div>
              <div class="card-actions justify-end">
                <NuxtLink to="buku/"><button class="btn btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </button></NuxtLink>
              </div>
            </div>
          </div>
    
      </div>

    </div>
  
  </div>
</template>

<style scoped>
.card-body {
  height: 100px;
  margin-left: 30px;
  margin-bottom: 30px;
}

.navbar {

  width: 100%;

}


</style>
