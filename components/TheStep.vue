<template>
    <div class="container m-auto ">
        <div class="steps block  ">
            <div class="flex step">
                <h1 class="text-volna font-bold p-2 text-8xl">01</h1>
                <div class="pt-2">
                    <h2 class="text-white font-semibold p-1 text-5xl">Обсуждение проекта</h2>
                    <p class="text-3xl text-white">На данном этапе мы обсуждаем проект и <br>пожелания клиента</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    padding-top: 5rem;
}
@media (max-width:1024px) {
    h1 {
        font-size: 80px;
    }
    h2 {
        font-size: 30px;
    }
    p {
        font-size: large;
        text-align: center;
    }
    p br {
        display: none;
    }
    .step {
        display: block;
        text-align: center;
    }
    /* .container {
        margin-bottom: 10rem;
    } */
}
</style>