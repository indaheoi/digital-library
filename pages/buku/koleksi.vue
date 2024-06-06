<template>
<div class="navbar bg-fixed, border-y border-gray">
    <div class="text ms-20 ps-10">
        <a class="text-2xl mt-2 text-gray">Koleksi Buku</a>
    </div>
</div>

<div class="p-5 ps-18 bg-lavender">
    <form action="/search" method="GET">
    <label for="search" class="sr-only">Search</label>
    <div class="relative max-h-full max-w-4xl mx-72 ">
      <div class="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-500 py-10" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
  </div>
  <div>
  <input type="text" name="query" id="search" class="block pl-10 pr-3 py-2 border h-[50px] w-[1000px] border-gray rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Cari buku...">
  <!-- component -->
<main class=" p-2 text-zinc-500 flex items-center justify-end">
    <button
      class="relative group transition-all duration-200 focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200">
      <span>
      Kategori
      </span>
      <svg class="rotate-90 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
        viewBox="0 0 24 24">
        <path fill="currentColor"
          d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
      </svg>
      <div
        class="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
        <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
          <p>Agama</p>
        </span>
        <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
          <p>Sosial</p>
        </span>
        <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
          <p>Bahasa</p>
        </span>
      </div>
    </button>
  </main>


  
  <div class="card w-[300px] bg-base-100 h-[400px] shadow-inner shadow-darkgray max-w-full ">
    
  </div>

  </div>
  
</div>
</form>
</div>




</template>