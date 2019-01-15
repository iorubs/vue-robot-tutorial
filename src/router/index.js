import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../home/HomePage.vue'
import SidebarStandard from '../sidebars/SidebarStandard.vue'
import BuildPage from '../build/RobotBuilder.vue'
import SidebarBuild from '../sidebars/SidebarBuild.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import RobotHeads from '../parts/RobotHeads.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import RobotBases from '../parts/RobotBases.vue'
import PartInfo from '../parts/PartInfo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard
    }
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: BuildPage,
      sidebar: SidebarBuild
    }
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [{
      path: 'heads',
      name: 'BrowseHeads',
      component: RobotHeads
    }, {
      path: 'arms',
      name: 'BrowseArms',
      component: RobotArms
    }, {
      path: 'torsos',
      name: 'BrowseTorsos',
      component: RobotTorsos
    }, {
      path: 'bases',
      name: 'BrowseBases',
      component: RobotBases
    }]
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter (to, _, next) {
      const isValidId = Number.isInteger(Number(to.params.id))
      next(isValidId)
    }
  }]
})
