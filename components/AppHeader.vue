
<script setup>

// write here your code

</script>

<template>
    <nav class=" bg-secondary ">
        <div class="h-[100px] flex justify-between mt-4 w-[1500px] m-auto">
            <form class="flex flex-row justify-center items-center gap-5">
                <h1 class="pl-4 font-poppins-700 text-colorText">MelliGlobos</h1>
                <div class="relative flex">
                    <input type="text" placeholder="Buscar..." class="rounded-[20px] w-[438px] h-14 pl-6 text-[16px]">
                    <button
                        class="absolute top-0 right-0 rounded-[20px] bg-primary h-14 w-[132px] flex items-center justify-center text-[#fff]">
                        Buscar
                    </button>
                </div>


            </form>
            <ul class="flex justify-center items-center gap-5 pr-10 ">
                <li>
                    <NuxtLink to="#">
                        <Icon name="ri:user-line" size="24px" class="text-colorText" />
                        Crea tu cuenta
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">
                        <Icon name="ri:heart-3-line" size="24px" class="text-colorText" /> Ingresá
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#" class="flex">
                        <Icon name="ri:shopping-cart-line" size="24px" class="text-colorText" />
                        <svg class="text-colorText ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="#FFC0D9" />
                            <text x="50%" y="50%" text-anchor="middle" alignment-baseline="central" font-size="12">
                                <!-- Cambiar por una variable -->1
                            </text>
                        </svg>

                        <span class="tooltiptext pl-4">Carrito</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

@font-face {
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;

}

h1 {

    /* Sombra tenue por debajo del texto */
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    /* Sombra tenue */
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 34px;
    line-height: normal;

    /* Propiedad de contorno de texto */
    $text-stroke: 1px white;
    -webkit-text-stroke: $text-stroke;
    /* Para compatibilidad con Safari/WebKit */

    // Generar propiedades adicionales si el navegador no admite -webkit-text-stroke
    @supports not (-webkit-text-stroke: inherit) {
        text-stroke: $text-stroke;
        /* Propiedad estándar */
    }
}
</style>



