<script setup>

// write here your code

</script>

<template>
    <section class="flex justify-between p-4 w-[1500px] m-auto">
        <p>Necesitas ayuda? Llamanos: 123456789</p>
        <div class="flex flex-row gap-9 ">
            <NuxtLink to="#" class="flex flex-row justify-center gap-3">
                <Icon name="ri:map-pin-line" size="24px" />
                <p class="pr-5">Nuestra Tienda</p>
            </NuxtLink>
            <NuxtLink to="#" class="flex flex-row justify-between gap-3">
                <Icon name="ri:truck-line" size="24px" />
                <p>Sigue tu pedido</p>
            </NuxtLink>
        </div>
    </section>
</template>

<style scoped></style>