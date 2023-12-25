<script setup>
import detailProduct from '~/components/detailProduct/detailProduct.vue';
import AppCarousel from '~/components/partials/AppCarousel.vue';

</script>

<template>
    <main class="max-w-[1500px] m-auto mt-10 flex flex-row">
        <detailProduct />
    </main>
    <section class="max-w-[1500px] m-auto mt-10">
        <AppCarousel />
    </section>
    <footer class="mt-10 mb-5 bg-withOutStock h-[420px] py-2">
        <AppFooter />
    </footer>
</template>

<style scoped></style>