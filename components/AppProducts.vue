<script setup>

// write here your code

</script>

<template>
    <section class="flex flex-row justify-between items-center w-[1300px] m-auto">
        <h1 class="font-poppins font-poppins-600 text-colorText text-[28px]">Procutos populares</h1>
        <div class="flex flex-row justify-center items-center text-center gap-5">
            <NuxtLink to="#"
                class="border border-solid border-secondary rounded-[20px] w-[139px] h-[45px] p-2 font-poppins font-poppins-500 text-colorText text-[16px]">
                Números
            </NuxtLink>
            <NuxtLink to="#"
                class="border border-solid border-secondary rounded-[20px] w-[139px] h-[45px] p-2 font-poppins font-poppins-500 text-colorText text-[16px]">
                Números
            </NuxtLink>
            <NuxtLink to="#"
                class="border border-solid border-secondary rounded-[20px] w-[139px] h-[45px] p-2 font-poppins font-poppins-500 text-colorText text-[16px]">
                Números
            </NuxtLink>
            <NuxtLink to="#"
                class="border border-solid border-secondary rounded-[20px] w-[139px] h-[45px] p-2 font-poppins font-poppins-500 text-colorText text-[16px]">
                Números
            </NuxtLink>
        </div>
    </section>
    <section class="grid grid-cols-4 gap-4 mt-10">
        <article class="relative max-w-[600px] max-h-[600px] w-auto h-auto flex flex-col justify-center items-center py-3">
            <img src="/img/globo1.jpg" alt="" class="max-w-[300px] max-h-[300px] w-auto h-auto ">
            <h1 class="my-4">Título del producto</h1>
            <div class="flex flex-row gap-4">
                <span class="line-through">$5000</span>
                <span><strong>$3500</strong></span>
            </div>
            <div class="border-50"></div>
        </article>
        <article class="relative max-w-[600px] max-h-[600px] w-auto h-auto flex flex-col justify-center items-center py-3">
            <img src="/img/globo1.jpg" alt="" class="max-w-[300px] max-h-[300px] w-auto h-auto ">
            <h1 class="my-4">Título del producto</h1>
            <div class="flex flex-row gap-4">
                <span class="line-through">$5000</span>
                <span><strong>$3500</strong></span>
            </div>
            <div class="border-50"></div>
        </article>
        <article class="relative max-w-[600px] max-h-[600px] w-auto h-auto flex flex-col justify-center items-center py-3">
            <img src="/img/globo1.jpg" alt="" class="max-w-[300px] max-h-[300px] w-auto h-auto ">
            <h1 class="my-4">Título del producto</h1>
            <div class="flex flex-row gap-4">
                <span class="line-through">$5000</span>
                <span><strong>$3500</strong></span>
            </div>
            <div class="border-50"></div>
        </article>
        <article class="relative max-w-[600px] max-h-[600px] w-auto h-auto flex flex-col justify-center items-center py-3">
            <img src="/img/globo1.jpg" alt="" class="max-w-[300px] max-h-[300px] w-auto h-auto ">
            <h1 class="my-4">Título del producto</h1>
            <div class="flex flex-row gap-4">
                <span class="line-through">$5000</span>
                <span><strong>$3500</strong></span>
            </div>
            <div class="border-50"></div>
        </article>
    </section>
</template>

<style scoped>
.border-50:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25%;
    /* Ajusta este valor para cambiar la posición del borde */
    width: 50%;
    /* Ancho del borde al 50% del contenedor principal */
    height: 1px;
    /* Altura del borde */
    background-color: black;
    /* Color del borde */
}

article {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    /* Sombra sin opacidad inicial */
    transition: box-shadow 0.4s ease;
    /* Transición al hacer hover */
}

article:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    /* Sombra con opacidad al hacer hover */
}
</style>