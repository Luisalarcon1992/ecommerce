<script setup>
import AppCart from '~/components/cart/AppCart.vue';
import AppFooter from '~/components/AppFooter.vue';

</script>

<template>
    <main class="max-w-[1500px] m-auto mt-10 flex flex-row">
        <AppCart />
    </main>
    <footer class="mt-10 mb-5 bg-withOutStock h-[420px] py-2">
        <AppFooter />
    </footer>
</template>

<style scoped></style>