<template>

  <!-- <div class="p-4 bg-gray-100">
    <form class="flex items-center">
      <input type="text" placeholder="Search books" class="w-5 px-3 py-2 border rounded-1-md border-gray focus:outline-none focus:border-blue-500">
      <select class="px-3 py-2 border rounded-r-md border-gray-300 focus:outline-none focus:border-blue-500">
        <option value="">All categories</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-fiction</option>
        <option value="science">Science</option>
        <option value="technology">Technology</option>
      </select>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
    </form>
  </div> -->

  <!-- component -->
  <div class="bg-lavender flex flex-col overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 sm:py-5 pr-96">
    <div class="relative rounded-2xl bg-white  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-2 py-2">
      <div class="mx-auto max-w-md">


        <form action="" class="mx-auto w-max">
          <input type="search" 
                class="peer cursor-pointer relative z-10 h-8 w-8 rounded-full  bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-10 focus:pr-4 " />
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>
      </div>
    </div> 
  </div>

  <div class="md:px-32 py-5 w-full" style="background-color: #EAE8FF; height: 100vh;">
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
      <table class="min-w-full bg-white">
        <thead class="bg-navy text-white">
          <tr>
            <th class="text-left py-3 px-4  font-semibold text-sm">No</th>
            <th class="w-1 text-left py-3 font-semibold text-sm">Kategori</th>
            <th class="text-center py-3 px-4  font-semibold text-sm">Nama</th>
            <th class="text-center py-3 px-4  font-semibold text-sm">Kelas</th>   
            <th class="text-center py-3 px-4  font-semibold text-sm">Tanggal</th>
            <th class="text-center py-3 px-4  font-semibold text-sm">Keperluan</th>   
            <th class="text-center py-3 px-4  font-semibold text-sm">Jurusan</th>
            <th class="text-center py-3 px-4  font-semibold text-sm">Rombel</th>          
          </tr>
        </thead>
      <tbody class="text-gray-700">
        <tr>
          <td class="w-1/3 text-center py-3 px-4">{{  }}</td>
          <td class="w-1/3 text-center py-3 px-4">{{  }}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500" >{{}}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500" >{{}}</a></td>
          <td class="w-1/3 text-center py-3 px-4">{{  }}</td>
          <td class="w-1/3 text-center py-3 px-4">{{  }}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500" >{{}}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500" >{{}}</a></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
        </tr>
        <tr>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{}}</a></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{  }}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{  }}</a></td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="w-1/3 text-center py-3 px-4">{{}}</td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{  }}</a></td>
          <td class="text-center py-3 px-4"><a class="hover:text-blue-500">{{  }}</a></td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>

  <div class="w-screen bg-lavender ">
                <NuxtLink to="/"><button class="btn btn-circle ml-24 shadow-inner shadow-darkgray">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>               
                </button></NuxtLink>
    </div>
</template>

<style scoped>
th {
    font-family: "Josefin Sans", sans-serif;
 }

</style>