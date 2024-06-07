<template>

    <!-- header -->
    <div class="navbar bg-fixed">
                <div class="text ms-20 ps-10">
                    <a class="text-2xl text-gray mt-2">Form Kunjungan</a>
                </div>    
            </div>

    <!-- form  -->
   
    <section class=" h-screen pt-20 p-[70px] bg-lavender  ">     
        <div class="mx-96 card w-[700px] bg-base-100 h-[400px] shadow-inner shadow-darkgray max-w-full ">
            <h2 class="card-title bg-navy rounded-t-2xl justify-center text-2xl text-white textarea-lg">Silahkan Isi Form Kunjungan</h2>
        <div class="card-body">
          
                <form @submit.prevent="kirimData" class="space-y-4 md:space-y-6" >
                    <div>  
                        <input v-model="form.nama" type="text" class="bg-lightgray border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-light-700 dark:border-gray dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama" required="">
                    </div>
                
                    <div>
                   
                    <label for="keanggotaan" class="shadow-inner block mb-2 text-sm font-medium text-darkgray  dark:text-dark ">Kategori</label>
                    <select v-model="form.keanggotaan" id="keanggotaan" class="bg-lightgray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Keanggotaan</option>
                        <option v-for="(member, i) in members" :key="i" :value="member.id">{{ member.nama }}</option>
                     
                    </select>
                    
                    </div>
            <div v-if="form.keanggotaan == '1'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
                <div class="sm:col-span-2 ">
                    <select v-model="form.kelas" id="kelas" name="kelas" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center" required="">
                    <option value="X">Kelas X</option>
                    <option value="XI">Kelas XI</option>
                    <option value="XII">Kelas XII</option>
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <select v-model="form.jurusan" id="jurusan" name="jurusan" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center" required="">
                    <option value="TJKT">TJKT</option>
                    <option value="PPLG">PPLG</option>
                    <option value="TSM">TSM</option>
                    <option value="DKV">DKV</option>
                    <option value="TOI">TOI</option>
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <select v-model="form.rombel" id="rombel" name="rombel" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center" required="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </div>
                </div>
                <div>
                
                    <label for="keperluan" class="shadow-inner block mb-2 text-sm font-medium text-darkgray  dark:text-dark ">keperluan</label>
                    <select v-model="form.keperluan"  x-data="select({'keperluan'})" id="kategori" class="bg-lightgray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                
                    <option v-for="(visit, i) in visitors" :key="i" :value="visit.id">{{ visit.nama }}</option>
                 
                    </select>
                </div>

             
                    <button class="btn  bg-navy text-white btn-sm ">Kirim</button>
              
        </form>
                </div>     
    </div>
                <div class="py-8 p-[610px] ">
                    <NuxtLink to="/pengunjung/riwayat"><button class="btn btn-md bg-navy text-white text-lg flex ms-96 r-18">Lihat</button></NuxtLink>
                </div> 
    </section>
                
                <div class="w-screen bg-lavender">
                <NuxtLink to="/"><button class="btn btn-circle shadow-inner shadow-darkgray">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>               
                </button></NuxtLink>
    </div>
</template>



<script setup>
const supabase = useSupabaseClient()
const members = ref([]) 
const visitors = ref([])
const form = ref({
    nama: "",
    keanggotaan: "",
    kelas: "",
    jurusan: "",
    rombel: "",
    keperluan: ""   
})

async function kirimData() {
    const {error} = await supabase.from('pengunjung').insert([form.value]) 
    if(error) throw error
    if(!error) navigateTo('/pengunjung/riwayat')
}

const getKeanggotaan = async() => {
    const {data} = await supabase.from('keanggotaan').select()
    if(data) members.value = data

}

const getKeperluan = async() => {
    const {data} = await supabase.from('keperluan').select()
    if(data) visitors.value = data

}


onMounted(()=>{
    getKeanggotaan()
    getKeperluan()

})


</script>

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

