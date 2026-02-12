<template>
  <q-page class="q-pa-none">
    <!-- ===== HERO VIDEO SECTION ===== -->
    <section class="hero-video-section">
      <!-- Background Video -->
      <video autoplay muted loop playsinline class="hero-video">
        <source src="src/assets/Spice_Alley_1080P.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Dark Overlay -->
      <div class="video-overlay"></div>

      <!-- Text Content -->
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Your Restaurant</h1>
        <p class="hero-subtitle">Delicious tastes. Vibrant experiences.</p>
      </div>
    </section>

    <!-- ===== FEATURED EVENTS ===== -->
    <section class="section-content q-pa-xl">
      <div class="text-h5 text-center q-mb-lg">Featured Events</div>

      <div class="row q-gutter-md justify-center">
        <div class="col-12 col-sm-6 col-md-4" v-for="(event, index) in featuredEvents" :key="index">
          <q-card class="event-card">
            <q-img
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
              ratio="16:9"
            />
            <q-card-section>
              <div class="text-h6">{{ event.title }}</div>
              <div class="text-caption text-grey">
                {{ event.date }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- ===== MENU PREVIEW ===== -->
    <section class="section-content q-pa-xl bg-grey-1">
      <div class="text-h5 text-center q-mb-lg">Explore Our Menu</div>

      <div class="row q-gutter-md justify-center">
        <div class="col-12 col-sm-6 col-md-3">
          <q-card clickable bordered>
            <q-card-section class="text-center"> Starters </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card clickable bordered>
            <q-card-section class="text-center"> Mains </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card clickable bordered>
            <q-card-section class="text-center"> Desserts </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import heroVideo from 'src/assets/Spice_Alley_1080P.mp4'

export default {
  name: 'HomePage',

  data() {
    return {
      heroVideo,
      featuredEvents: [
        {
          title: 'Lunar New Year 2026',
          date: 'February 21 @ 2:00 pm',
        },
        {
          title: 'Live Music Dinner',
          date: 'March 5 @ 7:00 pm',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* ================= HERO VIDEO ================= */

.hero-video-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
}

.video-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 18px;
  margin-top: 10px;
}

/* ================= EVENTS ================= */

.event-card {
  cursor: pointer;
  transition: transform 0.25s ease;
}

.event-card:hover {
  transform: scale(1.03);
}

/* ================= SECTIONS ================= */

.section-content {
  max-width: 1400px;
  margin: auto;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 14px;
  }
}
</style>
