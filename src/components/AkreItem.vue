<template>
    <div class="card w-96 bg-primary text-primary-content">
        <div class="card-body">
            <h2 class="card-title">
                {{ name }}
                <div class="badge badge-secondary">{{ price }} zł</div>
            </h2>
            <p>{{ description }}</p>
            <div class="card-actions justify-end">
            <button class="btn">Wybierz</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['name', 'description', 'price'])
</script>