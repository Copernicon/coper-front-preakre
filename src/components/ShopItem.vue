<template>
    <div class="form-control items-start">
        <div class="form-control items-start">
            <label class="label cursor-pointer">
                <input type="checkbox" class="checkbox mr-3" />
                <span class="label-text font-bold">{{ name }} ({{ price }} zł)</span>
            </label>
        </div>
        <div>
            {{ description }}
        </div>
    </div>
</template>

<script setup>
defineProps(['name', 'description', 'price'])
</script>