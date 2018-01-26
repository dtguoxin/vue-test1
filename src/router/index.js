import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/Home"
import List from "../components/List"
import Contents from "../components/Contents"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"home",
      component:Home,
    },
    {
      path:"/list",
      name:"list",
      component:List,
    },
    {
      path:"/contents",
      name:"contents",
      component:Contents,
    }
  ]
})
