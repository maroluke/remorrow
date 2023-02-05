import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JoinView from "../views/JoinView.vue";
import DirectionView from "../views/DirectionView.vue";
import CommunityView from "../views/CommunityView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/join",
    name: "Join",
    component: JoinView,
  },
  {
    path: "/direction",
    name: "Direction",
    component: DirectionView,
  },
  {
    path: "/community",
    name: "Community",
    component: CommunityView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
      }
    }
  }
});

export default router;
