<template>
    <section class="w-full focus:outline-none text-center">
        <figure class="book.thumb inline-block">
            <img  id="thumb-book1" class="mx-auto thumb_book.image" src="@/assets/images/books/book1/thumb.png" alt="">
        </figure>
        <p class="text-center py-2 text-purple-500 font-normal 2xl:text-lg text-sm">
            09 de Abril
        </p>
    </section>
</template>
<style lang="stylus">
@media only screen and (min-height: 400px)
    .thumb_book\\.image
        max-height 140px

@media only screen and (min-height: 600px)
    .thumb_book\\.image
        max-height 200px

// @media only screen and (min-height: 768px)
//     .thumb_book\\.image
//         max-height 200px

@media only screen and (min-height: 800px)
    .thumb_book\\.image
        max-height initial
        height auto
</style>