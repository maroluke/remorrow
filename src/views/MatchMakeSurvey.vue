<script>
import SurveyForm from "@components/SurveyForm.vue";
import FormModal from "@components/FormModal.vue";

export default {
	name: "QAForm",
	components: {
		SurveyForm,
		FormModal,
	},
	data() {
		return {
			showModal: false,
			modalText: "",
			reset: false,
			complete: false,
		};
	},
	methods: {
		handleShowModal(value) {
			this.showModal = value;
		},
		handleModalText(value) {
			this.modalText = value;
		},
		resetForm(complete, redirect) {
			this.showModal = false;
			this.modalText = "";
			this.reset = true;
			this.complete = complete;
			if (redirect) {
				window.location.href = redirect;
			}
		},
		finish() {
			this.complete = false;
			this.$router.push("/");
		},
	},
};
</script>

<template>
	<section
		class="px-5 py-24 bg-dark text-snow lg:bg-snow lg:text-dark lg:flex lg:justify-center lg:px-20 lg:pt-40"
	>
		<div
			class="max-w-md !mb-0 !items-start lg:max-w-screen-lg lg:flex-row lg:flex lg:gap-10 lg:gap-20 lg:justify-between mx-auto"
		>
			<div
				class="flex gap-10 flex-col flex-1 pt-5 z-20 shrink items-center lg:p-0 lg:text-dark"
			>
				<h1
					class="drop-shadow-contrast self-start hyphens-auto lg:drop-shadow-none break-keep"
				>
					match:make Feedback
				</h1>
			</div>

			<div class="flex gap-10 flex-col max-w-md flex-1">
				<div>
					<SurveyForm
						@updateShowModal="handleShowModal"
						@updateModalText="handleModalText"
						@resetComplete="reset = false"
						@finish="finish"
						:reset="reset"
						:complete="complete"
					/>
				</div>
			</div>
		</div>
	</section>

	<div
		v-show="showModal"
		class="bg-dark bg-opacity-25 w-full h-full absolute top-0 left-0 bottom-0 right-0 backdrop-blur-md z-50"
	></div>

	<FormModal
		v-if="showModal"
		:message="modalText"
		:type="'survey'"
		@close="resetForm"
	/>
</template>
