<template>
  <section class="py-10 ps-16 bg-lavender ">
    <div class="max-w grid grid-cols-4 gap-2 ms-64 py-10 card w-[1000px] bg-base-100  shadow-inner shadow-darkgray max-w-full ">
      
      <figure class="col py-44 ms-20 w-[250px] h-[50px]"><img :src="buku.cover" /></figure>

      <div class="col-span-3">
        <table class="table my-12 w-[500px] ms-36">
          <!-- head -->
          <thead class="bg-lightgray ">
            <tr>
              <th class="text-xl">Detail Buku</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="bg-[#F5F5F5] text-lg">
            <!-- row 1 -->
            <tr class="w-[80px]">
              <td>Judul</td>
              <td>{{ buku.judul }}</td>
            </tr>
            <tr>
              <td>Penulis</td>
              <td>{{ buku.penulis }}</td>
            </tr>
            <tr>
              <td>Tahun terbit</td>
              <td>{{ buku.tahun_terbit }}</td>
            </tr>
            <tr>
              <td>Penerbit</td>
              <td>{{ buku.penerbit }}</td>
            </tr>
            <tr>
              <td>Deskripsi</td>
              <td>{{ buku.deskripsi }}</td>
            </tr>
            <tr v-if="buku.Sinopsis">
              <td>Sinopsis</td>
              <td>{{ buku.Sinopsis }}</td>
            </tr>
          </tbody>
        </table>
      </div>

        <div class=" ">
            <NuxtLink to="/buku/">
              <button class="btn btn-circle ml-10 mt-32 shadow-inner shadow-darkgray">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>               
            </button>
          </NuxtLink>
        </div>
        <div class="grid grid-rows-2 card w-[250px] bg-base-100 h-[100px] shadow-inner px-5 mb-4 shadow-darkgray max-w-full " style="margin-left: 400px;">
            <div class="text">
              <a class="text-md text-navy font-semibold mt-5 js">Rating Buku yang sudah kamu baca ᵔ ᵕ ᵔ </a>
        </div>    
            <div class="rating py-3 justify-center">
              <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" checked />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
        </div>
        </div>
        
      </div>
        
        
      </section>


</template>

<script setup>
const supabase = useSupabaseClient()
const route = useRoute()
const buku = ref([])

const getBookById = async () => {

  const { data, error } = await supabase.from('buku').select(`*, kategori(*)`)
    .eq('id', route.params.id)
  if (data) buku.value = data[0]
}

onMounted(() => {
  getBookById()
})


</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

.js{
  font-family: "Josefin Sans", sans-serif;
}

.table{

  font-family: "Josefin Sans", sans-serif;
}
</style>