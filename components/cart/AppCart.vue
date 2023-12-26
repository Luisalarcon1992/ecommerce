<script setup>

// write here your code

</script>

<template>
    <section class="flex flex-row gap-4">
        <table class="relative">
            <thead class=" h-14 border border-solid border-primary bg-[#E2F4FF]">
                <tr class="border-b border-solid border-primary">
                    <th class="texto pr-32">Producto</th>
                    <th class="texto pr-32">Precio</th>
                    <th class="texto pr-32">Cantidad</th>
                    <th class="texto pr-32">Subtotal</th>
                    <th class="texto "></th>
                </tr>
            </thead>
            <tbody>
                <tr class="relative">
                    <td class=" flex flex-row justify-center items-start gap-4 mt-5 mr-10">
                        <figure class="p-3 border-[0.5px] mb-3 border-solid border-[#BDBDBD] rounded-[20px]">
                            <img src="/img/globo2.jpg" alt="" class="max-w-36 max-h-32 m-auto h-auto ">
                        </figure>
                        <div class="flex flex-col gap-4 min-w-32">
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
                        <button class=" px-2  bg-[#EEE] border boder-solid border-[#BDBDBD]">-</button>
                        <span class="px-6 py-[1.5px] border-y boder-solid bg-[#EEE] border-[#BDBDBD]">1</span>
                        <button class="px-2 bg-[#EEE] border boder-solid border-[#BDBDBD]">+</button>

                    </td>
                    <td>
                        <span>$3000</span>
                    </td>
                    <td>
                        <button class=" px-2 bg-[#EEE] border boder-solid border-[#BDBDBD] rounded-full">x</button>
                    </td>
                </tr>
                <tr class="relative">
                    <td class=" flex flex-row justify-center items-start gap-4 mt-5 mr-10">
                        <figure class="p-3 border-[0.5px] mb-3 border-solid border-[#BDBDBD] rounded-[20px]">
                            <img src="/img/globo2.jpg" alt="" class="max-w-36 max-h-32 m-auto h-auto ">
                        </figure>
                        <div class="flex flex-col gap-4 min-w-32">
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
                        <button class=" px-2 bg-[#EEE] border boder-solid border-[#BDBDBD] rounded-full">x</button>
                    </td>
                </tr>
                <tr class="relative">
                    <td class=" flex flex-row justify-center items-start gap-4 mt-5 mr-10">
                        <figure class="p-3 border-[0.5px] mb-3 border-solid border-[#BDBDBD] rounded-[20px]">
                            <img src="/img/globo2.jpg" alt="" class="max-w-36 max-h-32 m-auto h-auto ">
                        </figure>
                        <div class="flex flex-col gap-4 min-w-32">
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
                        <button class=" px-2 bg-[#EEE] border boder-solid border-[#BDBDBD] rounded-full">x</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <section
            class="w-[400px] border border-solid border-primary max-w-[426px] max-h-[499px] flex flex-col justify-start ">
            <h1 class="bg-[#E2F4FF] text-center py-4">Resumen de compra</h1>

            <article>
                <div class="flex flex-col justify-between">
                    <div class="flex flex-row justify-between p-8">
                        <p class="font-poppins font-poppins-400 text-xl">Subtotal</p>
                        <span class="font-poppins font-poppins-500 text-xl">$3000</span>
                    </div>
                    <hr class="border border-solid border-[#AFAFAF] m-3">
                    <form class="flex flex-row justify-between p-8" action="">
                        <input type="text" name="" id="" placeholder="Ingrese cupón"
                            class="font-poppins font-poppins-400 p-5 rounded-2xl">
                        <button>Aplicar</button>
                    </form>
                    <hr class="border border-solid border-[#AFAFAF] m-3">
                    <div class="flex flex-row justify-between p-8">
                        <h1 class="font-poppins font-poppins-400 text-xl">Total a pagar:</h1>
                        <span class="font-poppins font-poppins-500 text-xl">$3000</span>
                    </div>
                </div>
            </article>
        </section>
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

tr {
    border-bottom: 1px solid #c3c3c3;
}

tr.border-b {
    border-bottom: 1px solid #FF90BC;
}
</style>