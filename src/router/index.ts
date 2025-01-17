import { useRoute, createRouter, createWebHistory } from "vue-router";
import { defineComponent, onMounted } from "vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EventsView from "../views/EventsView.vue";
import JoinView from "../views/JoinView.vue";
import PathView from "../views/PathView.vue";
import DonationView from "../views/DonationView.vue";
import GlossarView from "../views/GlossarView.vue";
import ImpressumView from "../views/ImpressumView.vue";
import PrivacyPolicyView from "../views/PrivacyPolicyView.vue";
import MatchMakeRegistration from "../views/MatchMakeRegistration.vue";
import SubmissionSuccess from "@components/SubmissionSuccess.vue";
import SubmissionFail from "@components/SubmissionFail.vue";
import MatchMakeSurvey from "../views/MatchMakeSurvey.vue";
import CommunityView from "../views/CommunityView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const ExternalRedirect = defineComponent({
	setup() {
		const route = useRoute();
		onMounted(() => {
			window.location.href = route.meta.externalURL as string;
		});
		return () => null;
	},
});

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
		path: "/matchmake",
		name: "match:make",
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
		path: "/glossar",
		name: "Glossar",
		component: GlossarView,
	},
	{
		path: "/supporter",
		name: "Supporter",
		component: DonationView,
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
	{
		path: "/matchmake-registration",
		name: "MatchMakeRegistration",
		component: MatchMakeRegistration,
		meta: {
			robots: "noindex",
		},
	},
	{
		path: "/matchmake-survey",
		name: "MatchMakeSurvey",
		component: MatchMakeSurvey,
		meta: {
			robots: "noindex",
		},
	},
	{
		path: "/thanks",
		name: "success",
		component: SubmissionSuccess,
		meta: {
			robots: "noindex",
		},
	},
	{
		path: "/404",
		name: "fail",
		component: SubmissionFail,
		meta: {
			robots: "noindex",
		},
	},
	{
		path: "/matchmake-linkedin",
		component: ExternalRedirect,
		meta: { externalURL: "https://linkedin.com/company/remorrow/" },
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
