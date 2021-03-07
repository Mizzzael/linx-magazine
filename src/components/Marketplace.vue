<template>
    <section id="marketplace" class="w-full">
        <nav class="md:w-11/12 mx-auto">
            <ul class="w-full flex flex-wrap items-center" >
                <li :key="`book-${index}`" v-for="(book, index) in books" class="md:w-4/12">
                    <component :is="book"></component>
                </li>
            </ul>
        </nav>
    </section>
</template>
<script>
import books from "../assets/js/book.list";

export default {
    name: "Marketplace",
    data() {
        return {
            books
        }
    },
    created() {
        console.log('(づ￣ ³￣)づ');
        this.books.forEach((book) => {
            this.$options.components[book] = () => import(`./books/${book}.vue`);
        });
    }
}
</script>
