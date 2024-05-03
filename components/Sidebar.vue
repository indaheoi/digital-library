<template>
  
  <aside class="flex h-screen w-20 flex-col items-center border-r border-gray bg-white fixed">
    
    <nav class="flex flex-1 flex-col gap-y-4 pt-10">
   
        <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div class="absolute inset-0 -left-1 flex items-center">  
            </div>
             <span class="text-gray-400"></span>
          </div>
        </div>

      <NuxtLink to="buku/" class="group relative rounded-full  p-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-books mt-14"  >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M5 8h4" />
              <path d="M9 16h4" />
              <path
                d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
              <path d="M14 9l4 -1" />
              <path d="M16 16l3.923 -.98" />
          </svg>
        <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div class="relative whitespace-nowrap rounded-md bg-white px-4 mt-14 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div class="absolute inset-0 -left-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Koleksi Buku <span class="text-gray-400"></span>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="buku/" class="text-gary-400 group relative p-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-device-ipad-search mt-10">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
              <path d="M9 18h2" />
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M20.2 20.2l1.8 1.8" />
            </svg>

        <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div class="relative whitespace-nowrap rounded-md bg-white px-4 mt-10 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div class="absolute inset-0 -left-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Pencarian Buku <span class="text-gray-400"></span>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="pengunjung/" class="text-gary-400 group relative p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-file-description mt-10">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M9 17h6" />
              <path d="M9 13h6" />
            </svg>

        <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div class="relative whitespace-nowrap rounded-md bg-white px-4 mt-10 text-sm font-semibold drop-shadow-lg">
            <div class="absolute inset-0 -left-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white"></div>
            </div>
         kunjungan <span class="text-gray-400"></span>
          </div>
        </div>
      </NuxtLink>
   
    </nav>  
  </aside>
</template>