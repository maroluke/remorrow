<script>
import QuestionForm from "@components/QuestionForm.vue";
import FormModal from "@components/FormModal.vue";

export default {
	name: "QAForm",
	components: {
		QuestionForm,
		FormModal,
	},
	data() {
		return {
			showModal: false,
			modalText: "",
			reset: false,
			newPerson: false,
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
		resetForm(complete) {
			this.showModal = false;
			this.modalText = "";
			this.reset = true;
			this.newPerson = false;
			this.complete = complete;
		},
		addPerson() {
			this.newPerson = true;
			this.showModal = false;
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
					match:make Registrierung
				</h1>
			</div>

			<div class="flex gap-10 flex-col max-w-md flex-1">
				<div>
					<QuestionForm
						@updateShowModal="handleShowModal"
						@updateModalText="handleModalText"
						@resetComplete="reset = false"
						@addPersonComplete="newPerson = false"
						@finish="this.complete = false"
						:reset="reset"
						:addPerson="newPerson"
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
		@close="resetForm"
		@addPerson="addPerson"
	/>
</template>
