<script setup>
  import { ref } from "vue";

  const kiper = ref([
    {
      id: 'id1',
      nama: 'Ariq laudza',
      nomor: '1',
      foto: 'ariq.JPG'
    },
    {
      id: 'id2',
      nama: 'Wildan hanif',
      nomor: '',
      foto: 'ppkosong.jpg'
    },
  ])

  const anchor = ref([
    {
      id: 'id1',
      nama: 'Raffi nauval taqy',
      nomor: '23',
      foto: 'ranop.JPG'
    },
    {
      id: 'id2',
      nama: 'Zaki julian rashidin',
      nomor: '12',
      foto: 'ppkosong.jpg'
    },
  ])

  const flanker = ref([
    {
      id: 'id1',
      nama: 'Muhammad zidan amrullah',
      nomor: '9',
      foto: 'zidan.JPG'
    },
    {
      id: 'id2',
      nama: 'Muhammad akmal al-fatih',
      nomor: '2',
      foto: 'akmal.JPG'
    },
    {
      id: 'id3',
      nama: 'Ahsan rama el ghani',
      nomor: '7',
      foto: 'ahsan.JPG'
    },
    {
      id: 'id4',
      nama: 'Harris abdi',
      nomor: '17',
      foto: 'harris.JPG'
    },
    {
      id: 'id5',
      nama: 'Fatih azzaki',
      nomor: '27',
      foto: 'fatih.JPG'
    },
  ])

  const pivot = ref([
    {
      id: 'id1',
      nama: 'Gery azrian hasman',
      nomor: '8',
      foto: 'gery.JPG'
    },
    {
      id: 'id2',
      nama: 'Abduh abdullah muhammad al hur',
      nomor: '14',
      foto: 'ppkosong.jpg'
    },
  ])

  const pelatih = ref([
    {
      id: 'id1',
      nama: 'Coach Fahmi',
      nomor: 'coach',
      foto: 'ppkosong.jpg'
    },
  ])

  const asisten = ref([
    {
      id: 'id1',
      nama: 'Ustadz faozan',
      nomor: 'asisten pelatih',
      foto: 'ustfaozan.JPG'
    },
    {
      id: 'id2',
      nama: 'Ustadz ismail',
      nomor: 'asisten pelatih',
      foto: 'ppkosong.jpg'
    },
    {
      id: 'id3',
      nama: 'Ustadz hendra',
      nomor: 'asisten pelatih',
      foto: 'ppkosong.jpg'
    },
  ])
</script>

<template>
  <!-- Tab 1 content start-->
  <div class="container">
    <div class="posisi d-flex justify-content-start align-items-center p-3 container-lg">
      <div class="text-dark">
        <h2 class="mb-3">Kiper</h2>
      </div>
    </div>

    <div class="card-group row row-cols-1 row-cols-md-3 g-4">

      <div class="col-md-3" v-for="kiper in kiper" :key="kiper.id">
        <div class="card h-100">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="`../../images/${ kiper.foto }`" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title text-dark"><b>{{ kiper.nama }}</b></h4>
          </div>
          <div class="card-footer text-center">
            <small class="nomor text-center text-dark"><b>{{ kiper.nomor }}</b></small>
          </div>
        </div>
      </div>

    </div>

    <div class="posisi d-flex justify-content-start align-items-center p-3 container-lg">
      <div class="text-dark">
        <h2 class="mb-3">anchor</h2>
      </div>
    </div>

    <div class="card-group row row-cols-1 row-cols-md-3 g-4">

      <div class="col-md-3" v-for="anchor in anchor" :key="anchor.id">
        <div class="card h-100">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="`../../images/${ anchor.foto }`" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title text-dark"><b>{{ anchor.nama }}</b></h4>
          </div>
          <div class="card-footer text-center">
            <small class="nomor text-center text-dark"><b>{{ anchor.nomor }}</b></small>
          </div>
        </div>
      </div>

    </div>

    <div class="posisi d-flex justify-content-start align-items-center p-3 container-lg">
      <div class="text-dark">
        <h2 class="mb-3">flanker</h2>
      </div>
    </div>

    <div class="card-group row row-cols-1 row-cols-md-3 g-4">

      <div class="col-md-3" v-for="flanker in flanker" :key="flanker.id">
        <div class="card h-100">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="`../../images/${ flanker.foto }`" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title text-dark"><b>{{ flanker.nama }}</b></h4>
          </div>
          <div class="card-footer text-center">
            <small class="nomor text-center text-dark"><b>{{ flanker.nomor }}</b></small>
          </div>
        </div>
      </div>

    </div>

    <div class="posisi d-flex justify-content-start align-items-center p-3 container-lg">
      <div class="text-dark">
        <h2 class="mb-3">pivot</h2>
      </div>
    </div>

    <div class="card-group row row-cols-1 row-cols-md-3 g-4">

      <div class="col-md-3" v-for="pivot in pivot" :key="pivot.id">
        <div class="card h-100">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="`../../images/${ pivot.foto }`" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title text-dark"><b>{{ pivot.nama }}</b></h4>
          </div>
          <div class="card-footer text-center">
            <small class="nomor text-center text-dark"><b>{{ pivot.nomor }}</b></small>
          </div>
        </div>
      </div>

    </div>

    <div class="posisi d-flex justify-content-start align-items-center p-3 container-lg">
      <div class="text-dark">
        <h2 class="mb-3">pelatih</h2>
      </div>
    </div>

    <div class="card-group row row-cols-1 row-cols-md-3 g-4">

      <div class="col-md-3" v-for="pelatih in pelatih" :key="pelatih.id">
        <div class="card h-100">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="`../../images/${ pelatih.foto }`" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title text-dark"><b>{{ pelatih.nama }}</b></h4>
          </div>
          <div class="card-footer text-center">
            <small class="nomor text-center text-dark"><b>{{ pelatih.nomor }}</b></small>
          </div>
        </div>
      </div>

    </div>

    <div class="posisi d-flex justify-content-start align-items-center p-3 container-lg">
      <div class="text-dark">
        <h2 class="mb-3">asisten pelatih</h2>
      </div>
    </div>

    <div class="card-group row row-cols-1 row-cols-md-3 g-4">

      <div class="col-md-3" v-for="asisten in asisten" :key="asisten.id">
        <div class="card h-100">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="`../../images/${ asisten.foto }`" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title text-dark"><b>{{ asisten.nama }}</b></h4>
          </div>
          <div class="card-footer text-center">
            <small class="nomor text-center text-dark"><b>{{ asisten.nomor }}</b></small>
          </div>
        </div>
      </div>


    </div>
  </div>
  <!-- Tab 1 content end -->

  <!-- Footer Start -->

  <footer class="bg-dark text-center text-white mt-5">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>

        <!-- Google -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>

        <!-- Instagram -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>

        <!-- Linkedin -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

        <!-- Github -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">Pidiansyah</a>
    </div>
    <!-- Copyright -->
  </footer>

  <!-- Footer End -->
</template>