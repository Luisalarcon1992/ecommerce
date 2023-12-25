<script setup>

// write here your code

</script>

<template>
    <figure class="w-[647px] h-[561px] border border-solid border-[#ACACAC] rounded-3xl mr-10">
        <img src="/img/globo.png" class="w-[561px] h-[561px] m-auto ">
    </figure>

    <section class="w-[900px]">

        <head class="">
            <h1 class="text-colorText font-poppins font-poppins-500 text-3xl">Nombre del producto</h1>
            <h2 class="text-[#4A4A4A] font-poppins font-poppins-600 text-3xl mt-3">$3000</h2>
            <p>Disponible <span>✔️ En Stock</span></p>
        </head>
        <hr class="border border-solid border-[#BDBDBD] my-4">
        <main>
            <article class="flex flex-row justify-start items-center ">
                <p>Color:</p>
                <ul class="flex flex-row justify-center items-center ml-2">
                    <li class="bg-colorText w-5 h-5 rounded-full m-1"></li>
                    <li class="bg-colorText w-5 h-5 rounded-full m-1"></li>
                    <li class="bg-colorText w-5 h-5 rounded-full m-1"></li>
                    <li class="bg-colorText w-5 h-5 rounded-full m-1"></li>
                </ul>
            </article>
            <article class="flex flex-row justify-start items-center mt-4">
                <p>Tamaño:</p>
                <ul class="flex flex-row justify-start items-center ml-2">
                    <li class="flex flex-row justify-center items-center ml-2 bg-[#EEE] px-3">30</li>
                    <li class="flex flex-row justify-center items-center ml-2 bg-[#EEE] px-3">45</li>
                    <li class="flex flex-row justify-center items-center ml-2 bg-[#EEE] px-3">50</li>
                    <li class="flex flex-row justify-center items-center ml-2 bg-[#EEE] px-3">60</li>
                </ul>
            </article>
            <article class="flex flex-row justify-start items-center mt-4">
                <p>Cantidad:</p>
                <div class="bg-[#EEE]  w-8 ml-3 flex flex-row justify-start items-center">
                    <button class=" px-2 border boder-solid border-[#BDBDBD]">-</button>
                    <span class="px-6 border-y boder-solid bg-[#EEE] border-[#BDBDBD]">1</span>
                    <button class="px-2 bg-[#EEE] border boder-solid border-[#BDBDBD]">+</button>
                </div>
            </article>
            <article class="mt-4">
                <button
                    class="bg-primary font-poppins font-poppins-600 text-[#fff] w-60 h-[73px] rounded-[32px] mr-3">Añadir al
                    carrito</button>
                <button class="bg-primary font-poppins font-poppins-600 text-[#fff] w-60 h-[73px] rounded-[32px]">Comprar
                    ahora</button>
            </article>
        </main>

    </section>
    <section>

    </section>
</template>

<style scoped></style>