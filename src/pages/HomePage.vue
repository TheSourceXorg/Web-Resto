<template>
  <q-page class="q-pa-none">
    <!-- ===== HERO VIDEO SECTION ===== -->
    <section class="hero-video-section">
      <video autoplay muted loop playsinline class="hero-video">
        <source :src="heroVideo" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">Welcome to Your Restaurant</h1>
        <p class="hero-subtitle">Delicious tastes. Vibrant experiences.</p>
      </div>

      <div class="scroll-down" @click="scrollToBanner">
        <q-icon name="keyboard_arrow_down" size="32px" class="scroll-icon" />
      </div>
    </section>

    <section class="image-banner-section" ref="bannerSection">
      <!-- IMAGE -->
      <q-img src="~assets/back.png" class="banner-img" spinner-color="white" ratio="2" />
      <!-- STATIC WHITE OVERLAY TEXT -->
      <div class="static-overlay-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </div>

      <!-- TEXT CONTENT ON IMAGE -->
      <div class="banner-content">
        <div class="banner-text-large">Authentic Flavours</div>
        <div class="banner-text-small">From Singapore, Thailand, Malaysia & more</div>
        <q-btn
          color="white"
          glossy
          label="Discover Menu"
          class="banner-btn"
          @click="scrollToNext"
        />
      </div>
      <!-- DARK OVERLAY -->
      <div class="banner-overlay"></div>

      <!-- SCROLL BUTTON BELOW IMAGE -->
      <div class="scroll-down-below" @click="scrollToNext">
        <q-icon name="keyboard_arrow_down" size="32px" class="scroll-icon-below" />
      </div>
    </section>

    <!-- ===== CARD SECTION ===== -->
    <!-- <section class="card-section q-pa-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-card class="basic-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" ratio="16/9" />
            <q-card-section>
              <div class="text-overline text-primary">CATEGORY</div>

              <div class="text-h6 q-mt-xs">Card Title</div>

              <div class="text-body2 text-grey-7 q-mt-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="MORE" color="primary" />
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card class="restaurant-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" ratio="16/9" />

            <q-card-section class="text-center">
              <div class="text-overline text-orange-9 letter-spacing">SINGAPOREAN</div>

              <div class="text-h6 q-mt-sm">Ginger & Spice</div>

              <div class="text-caption text-grey q-mt-sm description">
                Ginger & Spice serves authentic Singapore street eats with rich flavours.
              </div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn outline color="dark" label="MORE" class="full-width-btn" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section> -->

    <!-- <section class="card-section q-pa-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-card class="restaurant-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" ratio="16/9" />

            <q-card-section class="text-center">
              <div class="text-overline text-orange-9 letter-spacing">THAI</div>

              <div class="text-h6 q-mt-sm">Alex Lee Kitchen</div>

              <div class="text-caption text-grey q-mt-sm description">
                Alex Lee Kitchen serves up an array of flavourful and authentic Singaporean dishes.
              </div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn outline color="dark" label="MORE" class="full-width-btn" />
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card class="restaurant-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" ratio="16/9" />

            <q-card-section class="text-center">
              <div class="text-overline text-orange-9 letter-spacing">MALAYSIAN</div>

              <div class="text-h6 q-mt-sm">Ginger & Spice</div>

              <div class="text-caption text-grey q-mt-sm description">
                Ginger & Spice serves authentic Singapore street eats with rich flavours.
              </div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn outline color="dark" label="MORE" class="full-width-btn" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>
    <section class="card-section q-pa-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-card class="restaurant-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" ratio="16/9" />

            <q-card-section class="text-center">
              <div class="text-overline text-orange-9 letter-spacing">THAI</div>

              <div class="text-h6 q-mt-sm">Alex Lee Kitchen</div>

              <div class="text-caption text-grey q-mt-sm description">
                Alex Lee Kitchen serves up an array of flavourful and authentic Singaporean dishes.
              </div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn outline color="dark" label="MORE" class="full-width-btn" />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card class="restaurant-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" ratio="16/9" />

            <q-card-section class="text-center">
              <div class="text-overline text-orange-9 letter-spacing">MALAYSIAN</div>

              <div class="text-h6 q-mt-sm">Ginger & Spice</div>

              <div class="text-caption text-grey q-mt-sm description">
                Ginger & Spice serves authentic Singapore street eats with rich flavours.
              </div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn outline color="dark" label="MORE" class="full-width-btn" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section> -->

    <section>
      <div class="row q-col-gutter-md justify-center bg-red q-pa-md">
        <div class="col-12 col-md-5">
          <div class="bg-grey">
            <q-card>
              <q-card-section>
                <q-img src="~assets/back.png" />
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="text-center">Text</div>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-pa-lg">
                  Alex Lee Kitchen serves up an array of flavourful and authentic Singaporean dishes
                  from Singaporean chef Alex Lee who offers his unique flavour to the Asian street
                  food experience.
                </div>
              </q-card-section>
              <q-card-section class="flex flex-center">
                <q-btn class="more-btn" flat no-caps>
                  <div class="btn-content">
                    <span class="btn-text">MORE</span>
                    <div class="arrow-box">
                      <q-icon name="chevron_right" size="18px" />
                    </div>
                  </div>
                </q-btn>
              </q-card-section>
              <q-card-section class="row justify-center">
                <q-btn
                  flat
                  no-caps
                  class="ubereats-btn"
                  label="UBEREATS"
                  icon-right="local_shipping"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div class="bg-grey text-center">
            <q-card>
              <q-card-section>
                <q-img src="~assets/back.png" />
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="text-center">Text</div>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-pa-lg">
                  Alex Lee Kitchen serves up an array of flavourful and authentic Singaporean dishes
                  from Singaporean chef Alex Lee who offers his unique flavour to the Asian street
                  food experience.
                </div>
              </q-card-section>
              <q-card-section class="flex flex-center">
                <q-btn class="more-btn" flat no-caps>
                  <div class="btn-content">
                    <span class="btn-text">MORE</span>
                    <div class="arrow-box">
                      <q-icon name="chevron_right" size="18px" />
                    </div>
                  </div>
                </q-btn>
              </q-card-section>
              <q-card-section class="row justify-center">
                <q-btn
                  flat
                  no-caps
                  class="ubereats-btn"
                  label="UBEREATS"
                  icon-right="local_shipping"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-md justify-center bg-red q-pa-md">
        <div class="col-12 col-md-5">
          <div class="bg-grey">
            <q-card>
              <q-card-section>
                <q-img src="~assets/back.png" />
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="text-center">Text</div>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-pa-lg">
                  Alex Lee Kitchen serves up an array of flavourful and authentic Singaporean dishes
                  from Singaporean chef Alex Lee who offers his unique flavour to the Asian street
                  food experience.
                </div>
              </q-card-section>
              <q-card-section class="flex flex-center">
                <q-btn class="more-btn" flat no-caps>
                  <div class="btn-content">
                    <span class="btn-text">MORE</span>
                    <div class="arrow-box">
                      <q-icon name="chevron_right" size="18px" />
                    </div>
                  </div>
                </q-btn>
              </q-card-section>
              <q-card-section class="row justify-center">
                <q-btn
                  flat
                  no-caps
                  class="ubereats-btn"
                  label="UBEREATS"
                  icon-right="local_shipping"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div class="bg-grey text-center">
            <q-card>
              <q-card-section>
                <q-img src="~assets/back.png" />
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="text-center">Text</div>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-pa-lg">
                  Alex Lee Kitchen serves up an array of flavourful and authentic Singaporean dishes
                  from Singaporean chef Alex Lee who offers his unique flavour to the Asian street
                  food experience.
                </div>
              </q-card-section>
              <q-card-section class="flex flex-center">
                <q-btn class="more-btn" flat no-caps>
                  <div class="btn-content">
                    <span class="btn-text">MORE</span>
                    <div class="arrow-box">
                      <q-icon name="chevron_right" size="18px" />
                    </div>
                  </div>
                </q-btn>
              </q-card-section>
              <q-card-section class="row justify-center">
                <q-btn
                  flat
                  no-caps
                  class="ubereats-btn"
                  label="UBEREATS"
                  icon-right="local_shipping"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURED EVENTS ===== -->
    <section ref="nextSection" class="section-content q-pa-xl">
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
              <div class="text-caption text-grey">{{ event.date }}</div>
            </q-card-section>
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

  methods: {
    scrollToNext() {
      this.$refs.nextSection.scrollIntoView({
        behavior: 'smooth',
      })
    },
    scrollToBanner() {
      this.$refs.bannerSection.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
/* ---------------- HERO VIDEO ---------------- */
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

.scroll-down {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  background: rgba(0, 0, 0, 0.55);
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  animation: bounce 2s infinite;
}

.scroll-icon {
  color: white;
}

/* IMAGE BANNER SECTION */
/* ================= IMAGE BANNER SECTION ================= */
.image-banner-section {
  position: relative;
  width: 100%;
  height: 710px; /* adjust height if needed */

  /* IMPORTANT: use @ alias so Vite/Quasar resolves it correctly */
  background-image: url('@/assets/background1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow: hidden;
  z-index: 0;
}

.banner-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
}

.banner-text-large {
  font-size: 36px;
  font-weight: bold;
  color: white;
}

.banner-text-small {
  font-size: 18px;
  margin-top: 8px;
  color: white;
}

.banner-btn {
  margin-top: 20px;
  padding: 10px 28px;
  font-size: 16px;
  color: #222;
  background: white !important;
}

.scroll-down-below {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  cursor: pointer;
}

.scroll-icon-below {
  color: white;
  animation: bounce 2s infinite;
}
/* -------- STATIC WHITE OVERLAY TEXT -------- */

.static-overlay-text {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  width: 80%;
  max-width: 900px;

  color: white;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;

  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

.card-section {
  max-width: 1800px;
  margin: auto;
}

.restaurant-card {
  border-radius: 0px;
  transition: transform 0.3s ease;
}

.restaurant-card:hover {
  transform: translateY(-6px);
}

.letter-spacing {
  letter-spacing: 2px;
}

.description {
  max-width: 80%;
  margin: auto;
}

.full-width-btn {
  width: 90%;
  margin-bottom: 15px;

  /* second card section */
}
.card-section {
  max-width: 1800px;
  margin: auto;
}

.restaurant-card {
  border-radius: 0px;
  transition: transform 0.3s ease;
}

.restaurant-card:hover {
  transform: translateY(-6px);
}

.letter-spacing {
  letter-spacing: 2px;
}

.description {
  max-width: 80%;
  margin: auto;
}

.full-width-btn {
  width: 90%;
  margin-bottom: 15px;
}

/* ---------------- EVENTS CARDS ---------------- */
.event-card {
  cursor: pointer;
  transition: transform 0.25s ease;
}

.event-card:hover {
  transform: scale(1.03);
}

/* ---------------- SECTIONS ---------------- */
.section-content {
  max-width: 1400px;
  margin: auto;
  padding-top: 24px;
}

.more-btn {
  border: 2px solid #2d2f54;
  width: 320px;
  padding: 0;
}

.btn-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.btn-text {
  flex: 1;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #2d2f54;
}

.arrow-box {
  width: 50px;
  height: 48px;
  border-left: 2px solid #2d2f54;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d2f54;
}

/* ---------------- RESPONSIVE ---------------- */
@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }
  .hero-subtitle {
    font-size: 14px;
  }
  .image-banner-section {
    height: 320px;
  }
  .banner-text-large {
    font-size: 28px;
  }
  .banner-text-small {
    font-size: 16px;
  }
}

.ubereats-btn {
  background: #d9d9dd;
  color: #2d2f54;
  width: 100%;
  max-width: 420px;

  padding: 14px 0;
  letter-spacing: 3px;
  font-weight: 600;

  border-radius: 0;
  transition: all 0.3s ease;
}

/* Hover Effect */
.ubereats-btn:hover {
  background: #2d2f54;
  color: white;
}

/* Make icon also change color */
.ubereats-btn:hover .q-icon {
  color: white;
}
</style>
