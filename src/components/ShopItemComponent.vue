<template>
    <div class="form-control items-start">
        <div class="form-control items-start">
            <label class="label cursor-pointer">
                <h2 class="label-text font-bold">{{ item.name }} ({{ item.price }} zł)</h2>
                <div>
                    <label for="quantity">Quantity</label>
                    <input v-model.number="quantity" type="number" id="quantity" min="0">
                </div>
                <button class="btn" @click="addToCart">Add to cart</button>
            </label>
        </div>
        <div v-html="item.description"></div>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
    item: {
        type: Object,
        required: true
    }
    });

    const emit = defineEmits(['add-to-cart']);

    const quantity = ref(0);

    const addToCart = () => {
        console.log('add-to-cart', props.item, quantity.value);
        emit('add-to-cart', { item: props.item, quantity: quantity.value });
    }
</script>