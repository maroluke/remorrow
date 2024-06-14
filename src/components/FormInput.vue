<template>
	<li class="mb-10">
		<label class="md:flex md:gap-10">
            <div class="flex-1">
                <p class="leading-normal"><slot name="label"></slot></p>
                <p class="text-sm opacity-75 leading-normal"><slot name="description"></slot></p>
            </div>

			<input
				:type="type"
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                class="w-full max-w-md text-black p-2 rounded flex-1 h-min"
			/>
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
