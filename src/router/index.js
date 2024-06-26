import { createRouter, createWebHistory } from 'vue-router'
import { startLoading, stopLoading } from '../utils/Loading.js'

/*
  future page mapping:
  / - Home (for not logged in users)
  /artist/:id - Featured Artist
  /artists - Featured Artists
  /changelog - Changelog
  /download - Download
  /home - Home (logged in) (shows news, feed, etc.)
  /login - Login
  /logout - Logout
  /n/:id - News
  /maps - MapSet Search
  /ranking - Ranking
  /ranking/c/:code - Country Ranking
  /set/:id - MapSet
  /team - Team
  /u/:id - User
  /wiki/:path - Wiki Page
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/maps',
      name: 'maps',
      component: () => import('../views/WorkInProgress.vue')
    },
    {
      path: '/rankings/overall',
      name: 'rankings',
      component: () => import('../views/rankings/OverallRating.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/WorkInProgress.vue')
    },
    {
      path: '/wiki/:path+',
      alias: '/wiki',
      name: 'wiki-article',
      component: () => import('../views/wiki/WikiArticle.vue')
    },
    {
      path: '/oauth',
      name: 'oauth',
      component: () => import('../views/account/OAuth.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/account/Logout.vue')
    },
    {
      path: '/u/:id',
      alias: '/user/:id',
      name: 'user-details',
      component: () => import('../views/user/UserPage.vue')
    },
    {
      path: '/set/:id',
      alias: '/mapset/:id',
      name: 'mapset-details',
      component: () => import('../views/mapset/MapSetPage.vue')
    },
    {
      path: '/artist/:id',
      name: 'featured-artist',
      component: () => import('../views/fa/FeaturedArtist.vue')
    },
    {
      path: '/artists',
      name: 'featured-artists',
      component: () => import('../views/fa/FeaturedArtistList.vue')
    },
    {
      path: '/download',
      name: 'download',
      beforeEnter() {
        window.open('https://dl.flux.moe/install/fluXis-installer.zip', '_blank');
        window.location.back();
      }
    },
    {
      path: '/changelog',
      name: 'changelog',
      beforeEnter() {
        window.open('https://github.com/TeamFluXis/fluXis/releases', '_blank');
        window.location.back();
      }
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/team/TeamView.vue')
    },
    {
      path: '/stats/registrations',
      name: 'registration-stats',
      component: () => import('../views/stats/users/CreationStats.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/404.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  startLoading();
})

router.afterEach((to, from) => {
  stopLoading();
})

export default router
