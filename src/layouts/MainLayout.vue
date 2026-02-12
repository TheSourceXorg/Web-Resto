<template>
  <q-layout view="hHh lpR fFf">
    <!-- ================= HEADER ================= -->
    <q-header class="header-bar">
      <div class="nav-wrapper">
        <!-- LEFT LINKS -->
        <div class="nav-group left">
          <q-btn flat to="/eat" label="Eat" class="nav-link" />
          <q-btn flat to="/drink" label="Drink" class="nav-link" />
          <q-btn flat to="/spice-house" label="Spice House" class="nav-link active-link" />
          <q-btn flat to="/whats-on" label="What's On" class="nav-link" />
        </div>

        <!-- CENTER LOGO -->
        <div class="logo-container">
          <q-btn flat to="/" class="logo-btn">
            <img src="~assets/resto.png" class="logo-img" />
          </q-btn>
        </div>

        <!-- RIGHT LINKS -->
        <div class="nav-group right">
          <q-btn flat to="/blog" label="Blog" class="nav-link" />
          <q-btn flat to="/press" label="Press" class="nav-link" />
          <q-btn flat to="/gift-cards" label="Gift Cards" class="nav-link" />
          <q-btn flat to="/contact" label="Contact" class="nav-link" />
        </div>
      </div>
    </q-header>

    <!-- ================= PAGE CONTENT ================= -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- ================= FOOTER ================= -->
    <q-footer class="bg-grey-8 text-center q-pa-md">
      <div>© 2026 Your Restaurant Name</div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style scoped>
/* ===== HEADER BAR ===== */
.header-bar {
  background: #e9e9e9;
  height: 110px;
  display: flex;
  align-items: center;
}

/* ===== WRAPPER ===== */
.nav-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* ===== NAV GROUPS ===== */
.nav-group {
}

.left {
  justify-content: flex-start;
}

.right {
  justify-content: flex-end;
}

/* ===== NAV LINKS ===== */
.nav-link {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #222;
}

.nav-link:hover {
  color: #e53935;
}

/* Active link style */
.active-link {
  color: #e53935;
}

/* ===== LOGO CENTER ===== */
.logo-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo-img {
  height: 80px;
  object-fit: contain;
}

.logo-btn {
  padding: 0;
}

@media (max-width: 1200px) {
  .nav-group {
    gap: 18px;
  }
}
</style>
