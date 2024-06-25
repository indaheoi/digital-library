<template>

  <div class="bg-lavender max-w flex flex-col overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 sm:py-5 pr-42">
    <div class="relative rounded-2xl bg-white  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w sm:px-2 py-2">
      <div class="mx-auto max-w-lg">


        <form @submit.prevent="getPengunjung" class="mx-auto max-w-[2000px] ">
          <input v-model="keyword" 
                class="peer cursor-pointer relative z-10 h-8 w-8 rounded-full  bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-10 focus:pr-4 " />
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>
      </div>
    </div> 
  </div>

  <div class="px-32 py-5 w-full bg-[lavender]">
    <div class="shadow overflow-hidden table-fixed rounded border-b border-gray-200">
      <table class="min-w-full bg-white ">
        <thead class="bg-navy text-white">
          <tr>
            <th class="text-left py-3 px-4  font-semibold text-sm border-e">No</th>
            <th class="w-1 text-center py-3 font-semibold text-sm border-x">Kategori</th>
            <th class="text-center py-3 px-4  font-semibold text-sm border-x">Nama</th>
            <th class="text-center py-3 px-4  font-semibold text-sm border-x">Kelas</th>   
            <th class="text-center py-3 px-4  font-semibold text-sm border-x">Tanggal</th>
            <th class="text-center py-3 px-4  font-semibold text-sm border-x">Keperluan</th>   
            <th class="text-center py-3 px-4  font-semibold text-sm border-x">Jurusan</th>
            <th class="text-center py-3 px-4  font-semibold text-sm border-s">Rombel</th>          
          </tr>
        </thead>
      <tbody class="text-gray-700 ">
        <tr v-for = "(visitor, i) in pengunjungFiltered" :key="i">
          <td class="text-center py-3 px-4 bg-[#d9d9d9] border-t border-e">{{ i+1 }}</td>
          <td class="w-1/3 text-center py-3 px-4 bg-[#AAC7D7] border-t border-x" >{{ visitor?.keanggotaan?.nama }}</td>
          <td class="text-center py-3 px-4 bg-[#d9d9d9] border-t border-x"><a class="hover:text-blue-500" >{{ visitor?.nama }}</a></td>
          <td class="text-center py-3 px-4 bg-[#AAC7D7] border-t border-x"><a class="hover:text-blue-500" >{{ visitor?.kelas}}</a></td>
          <td class="w-1/3 text-center py-3 px-4 bg-[#d9d9d9] border-t border-x">{{ visitor?.tanggal}}, {{ visitor?.waktu }}</td>
          <td class="w-1/3 text-center py-3 px-4 bg-[#AAC7D7] border-t border-x">{{ visitor?.keperluan?.nama }}</td>
          <td class="text-center py-3 px-4 bg-[#d9d9d9] border-t border-x"><a class="hover:text-blue-500" >{{ visitor?.jurusan }}</a></td>
          <td class="text-center py-3 px-4 bg-[#AAC7D7] border-t border-s"><a class="hover:text-blue-500" >{{ visitor?.rombel }}</a></td>
        </tr>
        
      </tbody>
      </table>
    </div>
    
    
                    <NuxtLink to="/pengunjung/"><button class="btn btn-circle ms-18 mt-16 shadow-inner shadow-darkgray">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                      </svg>               
                    </button></NuxtLink>
      
  </div>
</template>

<script setup>
const supabase = useSupabaseClient ()

const visitors = ref([])
const keyword = ref('')

const getPengunjung = async () => {
  const { data, error } = await supabase.from('pengunjung').select(`*, keanggotaan(*), keperluan(*)`).order('id',{ascending:false})
  if(data) visitors.value = data

} 


const pengunjungFiltered = computed (() => {
    return visitors.value.filter((b) => {
        return (
            b.nama?.toLowerCase().includes(keyword.value?.toLowerCase()) ||
            b.keanggotaan?.nama.toLowerCase().includes(keyword.value?.toLowerCase())
            
        )
    })
}) 

  onMounted(() => {
    getPengunjung()

  })
   


</script>


<style scoped>
th {
    font-family: "Josefin Sans", sans-serif;
 }

</style>