<template>
    <main class="mb-auto flex-grow flex items-center justify-center m-auto w-2/3">
        <!-- <div class="text-center">
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl font-coperHeader">Wybierz rodzaj preakredytacji</h1>
            <p class="mt-6 text-base leading-7 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div v-for="item in data" :key="item.id" class="mt-10 flex items-center justify-center gap-x-6">
                <AkreChoiceComponent 
                v-if="(item.slug === 'blind-bird') 
                        || (item.slug === 'early-bird') 
                        || (item.slug === 'premium')" 
                        :name="item.name" 
                        :description="item.description" 
                        :price="item.price" 
                        :disabled="item.active"
                        v-bind:class = "(!item.active)?'':'bg-gray-500'">
                    </AkreChoiceComponent>
            </div>
        </div> -->
        <ChooseItemsFormComponent></ChooseItemsFormComponent>
    </main>    
</template>

<script setup>
import AkreChoiceComponent from '@/components/AkreChoiceComponent.vue'
import ChooseItemsFormComponent from '@/components/ChooseItemsFormComponent.vue'

</script>