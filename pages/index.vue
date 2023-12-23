<script setup>
import AppSales from '~/components/partials/AppSales.vue';
import AppCarousel from '~/components/partials/AppCarousel.vue';
import AppProducts from '~/components/home/AppProducts.vue';


</script>

<template>
    <section class="w-[1500px]  m-auto mt-10">
        <AppSales />
        <AppCarousel class="m-auto" />
    </section>
    <main class="w-[1500px]  m-auto mt-10">
        <AppProducts />
    </main>
    <footer class="mt-10 mb-5 bg-withOutStock h-[420px] py-2">
        <AppFooter />
    </footer>
</template>

  