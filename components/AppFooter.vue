<script setup>

// write here your code

</script>

<template>
    <footer>
        <section class="w-[1188px] h-[139px] m-auto flex flex-row gap-[137px] justify-center items-center bg-[#fff] mt-3  ">
            <h1 class="font-poppins font-poppins-600 text-colorText">Suscríbete a nuestro Newsletter</h1>
            <form action="#" method="POST"
                class="bg-primary text-[#fff] w-[388px] h-[63px] rounded-[25px] flex flex-row justify-between items-center px-4 ">
                <input type="email" name="email" id="" placeholder="Ingresá tu email"
                    class="bg-primary  placeholder:text-[#fff] focus:outline-dashed focus:outline-withOutStock font-poppins font-poppins-600 px-2 py-1 m-1">
                <button>
                    <Icon name="lets-icons:send" size="24px" class="mr-5" />
                </button>
            </form>
            <div class="flex flex-row gap-4">
                <Icon name="lets-icons:headphones-fill-light" size="45px" color="#EDA415" />
                <h3 class="font-poppins font-poppins-600 text-[#606060]">Contactanos<br>123456789</h3>
            </div>
        </section>
        <section class="max-w-[1188px] max-h-[139px] m-auto grid grid-cols-4 gap-96 bg-withOutStock mt-3 mb-3 py-4">
            <div class="flex flex-col gap-8 left-0 w-max">
                <h1 class="text-poppins font-poppins-700 text-[32px] text-colorText">MellliGobos</h1>
                <h4 class="text-poppins font-poppins-400">64 st james boulevard hoswick , ze2 7zj</h4>
                <hr class="border border-solid max-w-[] border-[#9D9D9D]">
                <div class="flex flex-row gap-6">
                    <NuxtLink to="#">
                        <Icon name="streamline:computer-logo-facebook-1-media-facebook-social" color="#3B3B3B"
                            size="24px" />
                    </NuxtLink>
                    <NuxtLink to="#">
                        <Icon name="streamline:instagram" color="#3B3B3B" size="24px" />
                    </NuxtLink>
                    <NuxtLink to="#">
                        <Icon name="ion:logo-whatsapp" color="#3B3B3B" size="24px" />
                    </NuxtLink>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-5 col-span-3">
                <div>
                    <h2 class="text-poppins font-poppins-600 mb-3">Buscar producto</h2>
                    <ul class=" list-disc text-[#D9D9D9]">
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-poppins font-poppins-600 mb-3">Buscar producto</h2>
                    <ul class=" list-disc text-[#D9D9D9]">
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222]">Nombre de productos</span></li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-poppins font-poppins-600 mb-3">Buscar producto</h2>
                    <ul class=" list-disc text-[#D9D9D9]">
                        <li><span class="text-poppins font-poppins-400 text-[#222] py-6">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222] py-6">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222] py-6">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222] py-6">Nombre de productos</span></li>
                        <li><span class="text-poppins font-poppins-400 text-[#222] py-6">Nombre de productos</span></li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
</template>

<style scoped></style>

