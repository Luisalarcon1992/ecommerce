<script setup>

// write here your code

</script>

<template>
    <section>
        <table class="relative">
            <thead class="w-[872px] h-14 border border-solid border-primary bg-[#E2F4FF]">
                <tr>
                    <th class="texto pr-32">Producto</th>
                    <th class="texto pr-32">Precio</th>
                    <th class="texto pr-32">Cantidad</th>
                    <th class="texto pr-32">Subtotal</th>
                    <th class="texto "></th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b boder-solid border-[#C3C3C3] my-5">
                    <td class=" flex flex-row justify-center items-start gap-4 mt-5 mr-10">
                        <figure class="p-3 border-[0.5px] border-solid border-[#BDBDBD] rounded-[20px]">
                            <img src="/img/globo2.jpg" alt="" class="max-w-36 max-h-32 m-auto h-auto ">
                        </figure>
                        <div class="flex flex-col gap-4 max-w-32">
                            <h1 class="font-poppins font-poppins-600 text-colorText text-xl text-wrap">Nombre del productos
                            </h1>
                            <p class="font-poppins font-poppins-400 text-xl">Color: <span>Verde</span></p>
                            <p class="font-poppins font-poppins-400 text-xl">Tamañano: <span>30</span></p>
                        </div>
                    </td>
                    <td>
                        <span>$3000</span>
                    </td>
                    <td>
                        <button class=" px-2 bg-[#EEE] border boder-solid border-[#BDBDBD]">-</button>
                        <span class="px-6 py-[1.5px] border-y boder-solid bg-[#EEE] border-[#BDBDBD]">1</span>
                        <button class="px-2 bg-[#EEE] border boder-solid border-[#BDBDBD]">+</button>

                    </td>
                    <td>
                        <span>$3000</span>
                    </td>
                    <td>
                        X
                    </td>
                </tr>
                <tr>
                    <td class=" flex flex-row justify-center items-start gap-4 mt-5 mr-10">
                        <figure class="p-3 border-[0.5px] border-solid border-[#BDBDBD] rounded-[20px]">
                            <img src="/img/globo2.jpg" alt="" class="max-w-36 max-h-32 m-auto h-auto ">
                        </figure>
                        <div class="flex flex-col gap-4 max-w-32">
                            <h1 class="font-poppins font-poppins-600 text-colorText text-xl text-wrap">Nombre del productos
                            </h1>
                            <p class="font-poppins font-poppins-400 text-xl">Color: <span>Verde</span></p>
                            <p class="font-poppins font-poppins-400 text-xl">Tamañano: <span>30</span></p>
                        </div>
                    </td>
                    <td>
                        <span>$3000</span>
                    </td>
                    <td>
                        <div class="bg-[#EEE]  flex flex-row justify-start items-center">
                            <button class=" px-2 border boder-solid border-[#BDBDBD]">-</button>
                            <span class="px-6 border-y boder-solid bg-[#EEE] border-[#BDBDBD]">1</span>
                            <button class="px-2 bg-[#EEE] border boder-solid border-[#BDBDBD]">+</button>
                        </div>
                    </td>
                    <td>
                        <span>$3000</span>
                    </td>
                    <td>
                        X
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
.texto {
    color: #232323;
    font-family: Poppins;
    font-size: 20.68px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>