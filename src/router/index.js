import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EventsView from "../views/EventsView.vue";
import JoinView from "../views/JoinView.vue";
import PathView from "../views/PathView.vue";
import CommunityView from "../views/CommunityView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import GlossarView from "../views/GlossarView.vue";
import ImpressumView from "../views/ImpressumView.vue";
import PrivacyPolicyView from "../views/PrivacyPolicyView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/wer-wir-sind",
		name: "About",
		component: AboutView,
	},
	{
		path: "/events",
		name: "Events",
		component: EventsView,
	},
	{
		path: "/sei-dabei",
		name: "Join",
		component: JoinView,
	},
	{
		path: "/unser-weg",
		name: "Path",
		component: PathView,
	},
	{
		path: "/community",
		name: "Community",
		component: CommunityView,
	},
	{
		path: "/projekte",
		name: "Projects",
		component: ProjectsView,
	},
	{
		path: "/glossar",
		name: "Glossar",
		component: GlossarView,
	},
	{
		path: "/glossar/:itemId",
		name: "AccordionItem",
		component: GlossarView,
	},
	{
		path: "/impressum",
		name: "Impressum",
		component: ImpressumView,
	},
	{
		path: "/datenschutz",
		name: "PrivacyPolicy",
		component: PrivacyPolicyView,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
			};
		} else {
			return {
				top: 0,
				behavior: "smooth",
			};
		}
	},
});

export default router;
