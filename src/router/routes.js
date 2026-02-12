const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'eat', component: () => import('pages/EatPage.vue') },
      { path: 'drink', component: () => import('pages/DrinkPage.vue') },
      { path: 'spice-house', component: () => import('pages/SpiceHousePage.vue') },
      { path: 'whats-on', component: () => import('pages/WhatsonPage.vue') },
      { path: 'blog', component: () => import('pages/BlogPage.vue') },
      { path: 'press', component: () => import('pages/PressPage.vue') },
      { path: 'gift-cards', component: () => import('pages/GiftCardsPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
    ],
  },

  // Always leave this here!
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
