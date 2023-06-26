<template>
    <main class="mb-auto flex-grow flex items-center justify-center m-auto w-2/3">
        <!-- <div class="text-center">
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl font-coperHeader">Wybierz rodzaj preakredytacji</h1>
            <p class="mt-6 text-base leading-7 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div v-for="item in data" :key="item.id" class="mt-10 flex items-center justify-center gap-x-6">
                <AkreItem 
                v-if="(item.slug === 'blind-bird') 
                        || (item.slug === 'early-bird') 
                        || (item.slug === 'premium')" 
                        :name="item.name" 
                        :description="item.description" 
                        :price="item.price" 
                        :disabled="item.active"
                        v-bind:class = "(!item.active)?'':'bg-gray-500'">
                    </AkreItem>
            </div>
        </div> -->
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
                        <ShopItem v-for="item in data" 
                                    :key="item.id" 
                                    :name="item.name" 
                                    :description="item.description" 
                                    :price="item.price">
                        </ShopItem>
                    </div>
                </form>
            </div>
            <div class="my-5">
                <div class="join grid grid-cols-2">
                    <button class="join-item btn btn-outline"><font-awesome-icon icon="fa-solid fa-chevron-left" /> Wstecz</button>
                    <button class="join-item btn btn-outline">Dalej <font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
                </div>
            </div>
        </div>
    </main>    
</template>

<script setup>
import AkreItem from '@/components/AkreItem.vue'
import ShopItem from '../components/ShopItem.vue';

import { getShopItems } from '@/assets/js/shopItemsHandler.js';

const { data, error, loading, fetchData } = getShopItems();

fetchData();
</script>