<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const match = ref([
    {
      id: 'id1',
      tanggal: 'Sat 25 Feb',
      liga: 'Visit Cup',
      home: 'MTS Sahid C',
      away: 'Quadrant Fc',
      skorHome: '1',
      skorAway: '6',
      logoHome: 'sahid.png',
      logoAway: 'logo.png',
      logoLiga: 'visitcup.jfif',
    },
    {
      id: 'id2',
      tanggal: 'Sat 25 Feb',
      liga: 'Visit Cup',
      home: 'Quadrant Fc',
      away: 'Smpn 2 pamijahan',
      skorHome: '0',
      skorAway: '5',
      logoHome: 'logo.png',
      logoAway: 'pamijahan.jfif',
      logoLiga: 'visitcup.jfif',
    },
  ])
</script>

<template>
  <!-- Navbar Start -->
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-success">
    <!-- Container wrapper -->
    <div class="container-md">
      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img src="../images/logo.png" height="35" alt="MDB Logo" loading="lazy" />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="">PERTANDINGAN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">PEMAIN</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <!-- Notifications -->
        <div class="dropdown">
          <a class="text-light me-3 dropdown-toggle hidden-arrow" href="#">
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
        </div>
        <!-- Avatar -->
        <div class="dropdown">
          <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#">
            <img src="../images/pidoy.png" class="rounded-circle" height="25" alt="Black and White Portrait of a Man"
              loading="lazy" />
          </a>
        </div>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar End -->

  <!-- Banner Start -->
  <div class="p-5 text-center bg-image" style="
   background-image: url(../images/banner.JPG);
   height: 91vh;
">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Quadrant FC</h1>
          <h5 class="mb-3">
            <a href="" class="text-reset">Santai</a>
            <span>/</span>
            <a href="" class="text-reset">Fokus</a>
            <span>/</span>
            <a href="" class="text-reset">Kuasai</a>
          </h5>
          <hr class="bg-success">
          <a class="btn btn-success btn-lg" href="https://sekolahimpian.com/site/" target="_blank" role="button">sekolah
            impian</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner End -->

  <!-- Pertandingan Start -->
  <div id="pertandingan">
    <div class="container-md">
      <div class="match-title">
        <h3 class="text-center text-dark">Pertandingan</h3>
      </div>

      <div class="match-description">

        <ul class="match-group">
          <li class="match-list" v-for="match in match" :key="match.id">

            <ul class="match-content">
              <li class="match-content-group d-flex align-items-center justify-content-around">

                <div class="match-lig d-flex align-items-center">
                  <div class="match-lig-img">
                    <img :src="`../images/${ match.logoLiga }`" alt="">
                  </div>

                  <div class="match-lig-name">
                    <h6 class="text-dark">{{ match.tanggal }}</h6>
                    <p class="text-dark">{{ match.liga }}</p>
                  </div>
                </div>

                <div class="match-date d-flex justify-content-center">
                  <div class="tim tim-home d-flex align-items-center">
                    <h5 class="text-dark">{{ match.home }}</h5>
                    <div class="tim-img">
                      <img :src="`../images/${ match.logoHome }`" alt="">
                    </div>
                  </div>
                  <div class="skor d-flex justify-content-center align-items-center">
                    <h6 class="text-dark">{{ match.skorHome }}</h6>
                    <h6 class="text-dark">{{ match.skorAway }}</h6>
                  </div>
                  <div class="tim tim-away d-flex align-items-center">
                    <div class="tim-img">
                      <img :src="`../images/${ match.logoAway }`" alt="">
                    </div>
                    <h5 class="text-dark">{{ match.away }}</h5>
                  </div>
                </div>

                <div class="match-detail">
                  <button class="btn btn-success">Highlight</button>
                </div>

              </li>
            </ul>

          </li>
          <hr>
        </ul>
      </div>
    </div>
  </div>
  <!-- Pertandingan End -->

  <!-- Pemain Start -->
  <div class="pemain">
    <div class="pemain-head d-flex justify-content-start align-items-center p-3 container-lg">
      <div class="text-dark">
        <h1 class="mb-3">PEMAIN</h1>
      </div>
    </div>

    <ul class="nav nav-tabs mb-3 d-flex justify-content-start align-items-center  container-lg" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <RouterLink class="tab-router nav-link text-center" to="/">
          <h4><b>SMP</b></h4>
        </RouterLink>
      </li>
      <li class="nav-item" role="presentation">
        <RouterLink class="tab-router nav-link text-center" to="/sma">
          <h4><b>SMA</b></h4>
        </RouterLink>
      </li>
    </ul>
  </div>
  <!-- Pemain End -->

  


  <RouterView />
</template>