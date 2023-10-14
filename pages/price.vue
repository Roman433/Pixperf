<template>
    <div class="price">
        <div class="price_inner">
            <ThePricing />
            <TheCarousel />
        </div>
    </div>
</template>

<style scoped>
.price {
    background-image: url('@/assets/img/treo.png');
    background-repeat: no-repeat;
    background-size: 60% auto;
}
.price_inner {
    backdrop-filter: blur(6.8px);
    -webkit-backdrop-filter: blur(6.8px);
}
</style>