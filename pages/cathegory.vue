
<script setup>
import AppCathegory from '~/components/cathegory/AppCathegory.vue';
import AppAside from '~/components/cathegory/AppAside.vue';


</script>

<template>
    <main class="max-w-[1500px] m-auto mt-10 flex flex-row">
        <AppAside />
        <AppCathegory />
    </main>
    <footer>
        <AppFooter class="mt-10 mb-5 bg-withOutStock h-[420px] py-2" />
    </footer>
</template>

<style scoped></style>