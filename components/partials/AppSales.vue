<script setup>

// write here your code

</script>

<template>
    <section class="flex justify-between items-center relative max-h-[394px]">
        <div class="flex-1 p-5 ">
            <h1 class="text-[43px] mb-3 font-poppins font-poppins-700 text-[#843D98] text-shadow">Nombre del Producto</h1>
            <div class="flex flex-row gap-5">
                <button class="rounded-[25px] font-poppins-600 bg-primary text-[#fff] w-36 h-14">Comprar Ahora</button>
                <button
                    class="rounded-[25px] font-poppins-600 bg-withOutStock border border-primary  text-colorText w-36 h-14">Ver
                    más</button>
            </div>
            <div class="flex flex-row justify-center items-center gap-2 mt-3 absolute left-[140px]">
                <Icon name="ri:checkbox-blank-circle-line" color="#FF90BC" />
                <Icon name="ri:checkbox-blank-circle-line" color="#FF90BC" />
                <Icon name="ri:checkbox-blank-circle-line" color="#FF90BC" />
            </div>
        </div>
        <div class="flex-1">
            <div class="relative">
                <img src="/img/globo.jpg" alt="">
                <span
                    class="absolute right-[-50px] top-52 w-[120px] h-[114px] bg-primary text-[#fff] p-8 rounded-[50%] text-[21px] font-poppins font-poppins-600 absul">Oferta
                    $89</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.text-shadow {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
</style>