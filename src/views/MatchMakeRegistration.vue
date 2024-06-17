<script>
import QuestionForm from '@components/QuestionForm.vue';
import FormModal from '@components/FormModal.vue';

export default {
    name: "QAForm",
    components: {
		QuestionForm,
		FormModal,
    },
	data() {
        return {
            showModal: false,
            modalText: '',
			reset: false,
        };
    },
	methods: {
		handleShowModal(value) {
			this.showModal = value;
		},
		handleModalText(value) {
			this.modalText = value;
		},
		resetForm() {
			this.showModal = false;
			this.modalText = '';
			this.reset = true;
		},
		resetComplete() {
			this.reset = false;
		},
	}
}
</script>

<template>
	<section
		class="px-5 py-24 bg-dark text-snow lg:bg-snow lg:text-dark lg:flex lg:justify-center lg:px-20 lg:pt-40"
	>
		<div
			class="max-w-screen-md w-full flex flex-col gap-10 !mb-0 !items-start lg:flex-row lg:max-w-full lg:gap-20"
		>
			<div
				class="flex gap-10 flex-col pt-5 z-20 shrink items-center lg:p-0 lg:text-dark lg:w-1/3"
			>
				<h1
					class="drop-shadow-contrast self-start hyphens-auto lg:drop-shadow-none"
				>
					match:make Registrierung
				</h1>
			</div>

			<div class="flex gap-10 flex-col lg:w-2/3 lg:max-w-screen-sm">
				<div>
					<QuestionForm @updateShowModal="handleShowModal" @updateModalText="handleModalText" @resetComplete="reset = false" :reset="reset" />
				</div>
			</div>
		</div>
	</section>

	<div v-show="showModal" class="bg-dark bg-opacity-25 w-full h-full absolute top-0 left-0 bottom-0 right-0 backdrop-blur-md z-50"></div>
	
	<FormModal v-if="showModal" :message="modalText" @close="resetForm" />
</template>