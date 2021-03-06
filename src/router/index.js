import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Guide from '@/components/Guide'
import Feedback from '@/components/Feedback'
import Contact from '@/components/Contact'
import Tools from '@/components/Tools'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/feeback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/tools/:tools',
      name: 'Tools',
      component: Tools
    }
  ]
})
