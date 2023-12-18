<script setup>

// write here your code

</script>

<template>
    <section class="flex justify-between items-center relative">
        <div class="flex-1 p-5 ">
            <h1 class="text-[43px] mb-3 font-poppins-700 text-[#843D98] text-shadow">Nombre del Producto</h1>
            <div class="flex flex-row gap-5">
                <button class="rounded-[25px] font-poppins-600 bg-primary text-[#fff] w-36 h-14">Comprar Ahora</button>
                <button
                    class="rounded-[25px] font-poppins-600 bg-withOutStock border border-primary  text-colorText w-36 h-14">Ver
                    más</button>
            </div>
            <div class="flex flex-row justify-center items-center gap-2 mt-3 absolute left-[140px]">
                <Icon name="ri:checkbox-blank-circle-line" color="#ADADAD" fill="#FF90BC" />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#FF90BC" color="#000"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
                </svg>
                <Icon name="ri:checkbox-blank-circle-line" />
                <Icon name="ri:checkbox-blank-circle-line" />
            </div>
        </div>
        <div class="flex-1">
            <!-- Contenido del bloque derecho -->
        </div>
    </section>
</template>

<style scoped>
.text-shadow {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
</style>