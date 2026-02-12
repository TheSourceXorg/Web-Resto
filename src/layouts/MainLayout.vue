<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <q-header class="bg-white text-black">
      <q-toolbar class="toolbar-wrapper">
        <div class="header-container">
          <q-tabs
            v-if="$q.screen.width >= 1450"
            v-model="tabs"
            align="center"
            class="menu-tabs text-weight-bolder full-tabs"
            indicator-color="transparent"
          >
            <!-- LEFT TABS -->
            <q-tab name="/eat" label="EAT" to="/eat" />
            <q-tab name="/drink" label="DRINK" to="/drink" />
            <q-tab name="/spice-house" label="SPICE HOUSE" to="/spice-house" />
            <q-tab name="/whats-on" label="WHAT'S ON" to="/whats-on" />

            <!-- CENTER LOGO -->
            <div class="logo-tab">
              <q-img
                src="~assets/restov2.png"
                width="100px"
                class="cursor-pointer q-my-sm"
                @click="goHome"
              />
            </div>

            <!-- RIGHT TABS -->
            <q-tab name="/blog" label="BLOG" to="/blog" />
            <q-tab name="/press" label="PRESS" to="/press" />
            <q-tab name="/gift-cards" label="GIFT CARDS" to="/gift-cards" />
            <q-tab name="/contact" label="CONTACT" to="/contact" />
          </q-tabs>

          <!-- MOBILE MENU -->
          <q-btn
            v-if="$q.screen.width < 1450"
            unelevated
            dense
            round
            icon="o_menu"
            class="bg-primary text-white"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  computed: {
    tabs: {
      get() {
        return this.$route.path
      },
      set(val) {
        this.$router.push(val)
      },
    },
  },

  methods: {
    goHome() {
      this.$router.push('/')
    },
    toggleLeftDrawer() {
      console.log('Drawer toggle here')
    },
  },
}
</script>

<style scoped>
.header-container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.full-tabs {
  width: 100%;
  justify-content: center;
}

.logo-tab {
  display: flex;
  align-items: center;
  padding: 0 35px;
}

/* Align tabs nicely */
:deep(.q-tabs__content) {
  align-items: center;
}

/* Base tab styling */
:deep(.q-tab) {
  padding: 6px 14px;
  border-radius: 0;
  background: transparent !important;
  transition: color 0.25s ease;
}

/* Remove hover background */
:deep(.q-tab:hover) {
  background: transparent !important;
  color: #ff2600 !important;
}

/* Remove active background */
:deep(.q-tab--active) {
  background: transparent !important;
}

/* Active text color only */
:deep(.q-tab--active .q-tab__label) {
  color: #e70e0e !important;
}

/* Remove focus highlight layer */
:deep(.q-tab .q-focus-helper) {
  opacity: 0 !important;
}

/* Remove ripple animation */
:deep(.q-ripple) {
  display: none !important;
}

:deep(.q-tabs__content) {
  display: flex;
  align-items: center;
  justify-content: space-between; /* THIS spreads everything */
  width: 100%;
}
</style>
