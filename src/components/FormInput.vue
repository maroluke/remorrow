<template>
	<li class="mb-5 max-w-md">
		<label class="m-0 md:flex md:flex-col">
            <p v-if="$slots.label" class="flex-1 leading-normal mb-2"><slot name="label"></slot></p>

			<input
				:type="type"
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                class="w-full text-black p-4 rounded flex-1 h-min mt-2"
			/>

            <p v-if="$slots.description" class="text-sm opacity-75 leading-normal mt-1 mb-0"><slot name="description"></slot></p>
		</label>
	</li>
</template>

<script>
export default {
	name: "FormInput",
	props: {
		type: {
            type: String,
            default: "text",
        },
        modelValue: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
	},
};
</script>
