<template>
    <div class="text-center w-full">
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl font-coperHeader mb-6">Nazwa akre</h1>
        <div class="bg-neutral flex justify-center rounded-xl py-5">
            <form class="w-2/3 flex flex-col justify-center gap-5">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text font-bold">Imię "ksywka" Nazwisko</span>
                    </label>
                    <input type="text" placeholder="Anakin Daddy Skywalker" class="input input-bordered w-full" />
                </div>
                
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text font-bold">E-mail <span class="text-primary">*</span></span>
                    </label>
                    <input type="text" placeholder="tastyyounglings@omnomnom.com" class="input input-bordered w-full" required />
                </div>

                <div class="form-control items-start">
                    <span>Twój wiek na 15 września 2023</span>
                    <label class="label cursor-pointer">
                        <input type="radio" name="radio-10" class="radio checked:bg-primary mr-3" checked />
                        <span class="label-text">18+</span> 
                    </label>
                    <label class="label cursor-pointer">
                        <input type="radio" name="radio-10" class="radio checked:bg-primary mr-3" checked />
                        <span class="label-text">13-18</span> 
                    </label>
                    
                    <ShopItemComponent v-for="item in data" :item="item" @add-to-cart="updateCart"></ShopItemComponent>
                </div>

                <div class="cart-summary">
                    <h2>Cart Summary</h2>
                    <ul>
                        <li v-for="cartItem in cart" :key="cartItem.item.id">
                        {{ cartItem.item.name }} - Quantity: {{ cartItem.quantity }}
                        </li>
                    </ul>
                </div>
                
                <button @click="submitCart">Submit Cart</button>
            </form>
        </div>
        <div class="my-5">
            <div class="join grid grid-cols-2">
                <button class="join-item btn btn-outline"><font-awesome-icon icon="fa-solid fa-chevron-left" /> Wstecz</button>
                <button class="join-item btn btn-outline">Dalej <font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
            </div>
        </div>
    </div>
</template>


<script setup>
    import ShopItemComponent from '@/components/ShopItemComponent.vue';
    import { getShopItems } from '@/assets/js/shopItemsHandler.js';
    import { ref } from 'vue';

    const { data, error, loading, fetchData } = getShopItems();
    const cart = ref([]);

    fetchData();

    const updateCart = cartItem => {
        const existingItem = cart.value.find(item => item.item.id === cartItem.item.id);

        if (existingItem) {
            existingItem.quantity += cartItem.quantity;
        } else {
            cart.value.push(cartItem);
        }
    };

    const submitCart = async () => {
        console.log(cart.value);
    };
</script>