<template>
    <main id="app">
        <router-view />
    </main>
</template>

<style lang="stylus">
@import "./assets/stylus/books.styl"

.full-height
    min-height 100vh
    height 100vh

@media only screen and (min-width: 960px)
    .screen
        max-width 960px

@media only screen and (min-width: 1300px)
    .screen
        max-width 1200px

</style>
