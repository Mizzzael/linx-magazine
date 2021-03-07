<template>
    <section class="w-full px-4">
        <header class="w-full">
            <figure class="book.thumb">
                <img class="mx-auto" src="@/assets/images/books/book1/thumb.jpg" alt="">
            </figure>
            <p class="text-center py-2 text-purple-500 font-normal text-md">
                07 de Março
            </p>
        </header>
        <section class="bg-purple-600 fixed w-full full-height left-0 top-0">
            <section :id="id" class="book.canvas left-0 right-0 top-20 m-auto">
                <section class="book1.bg hard bg-gray-100">
                </section>
                <section class="bg-gray-100" >pagina-1</section>
                <section class="bg-gray-100" >pagina-2</section>
                <section class="bg-gray-100" >pagina-3</section>
                <section class="bg-gray-100" >pagina-4</section>
                <section class="bg-gray-100" >pagina-5</section>
            </section>
        </section>
    </section>
</template>
<script>

export default {
    name: "Book1",
    data() {
        return {
            id: this.$options.name
        }
    },
    mounted() {

        window.$('#'+this.id).turn({
            width: 1200,
            height: 768,
        });

        window.$(window).bind('keydown', (e) => {

            if (e.keyCode==37)
                window.$('#'+this.id).turn('previous');
            else if (e.keyCode==39)
                window.$('#'+this.id).turn('next');

        });
    }
}
</script>
<style lang="stylus">
.book1\\.bg
    background-image url('../../assets/images/books/book1/thumb.jpg')
    background-size 100%
    background-position center center
</style>
