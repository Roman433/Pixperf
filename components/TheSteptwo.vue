<template>
    <div class="container m-auto ">
        <div class="steps block  ">
            <div class="flex step">
                <h1 class="text-volna p-2 font-bold  text-8xl">02</h1>
                <div class="pt-2">
                    <h2 class="text-white font-semibold p-1 text-5xl">Разработка приложения</h2>
                    <p class="text-3xl text-white">Этот этап предпологает разработку сайта с <br>пожеланиями клиента</p>
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
        margin-top: 30rem;
    } */
}
</style>