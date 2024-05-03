<template>

<div class="p-4 bg-gray-100">
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
</div>

<div class="md:px-32 py-24 w-full" style="background-color: #EAE8FF; height: 100vh;">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-navy text-white">
        <tr>
          <th class="text-left py-3 px-4  font-semibold text-sm">No</th>
          <th class="w-1 text-left py-3  font-semibold text-sm">Kategori</th>
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

<NuxtLink to="/"><button class="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button></NuxtLink>
</template>

<style scoped>
th {
    font-family: "Josefin Sans", sans-serif;
 }

</style>