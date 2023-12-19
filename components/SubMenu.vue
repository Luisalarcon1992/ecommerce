
<script setup>

// <Icon name="ri:arrow-down-s-line" size="24px" class="text-[#fff]" />

</script>

<template>
    <div class="bg-[#F4F4F4] ">
        <nav class="flex flex-row  gap-24 w-[1500px] m-auto">
            <NuxtLink to="/"
                class="flex flex-row gap-4 justify-center items-center flex-shrink-0 w-[218px] h-[70px] bg-primary text-white font-poppins-500 text-[#fff] leading-6">
                Inicio
            </NuxtLink>
            <div class="flex flex-row gap-4 justify-center items-center ">
                <NuxtLink to="/cathegory" class="flex flex-row gap-1 justify-center items-center  w-24 h-6">
                    Categorías
                    <Icon name="ri:arrow-down-s-line" size="24px" class="text-[#292D32]" />
                </NuxtLink>
                <NuxtLink to="/about" class="flex flex-row gap-1 justify-center items-center  w-24 h-6">
                    Nosotros
                </NuxtLink>
                <NuxtLink to="/sales" class="flex flex-row gap-1 justify-center items-center  w-24 h-6">
                    Promociones
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>

<style scoped></style>