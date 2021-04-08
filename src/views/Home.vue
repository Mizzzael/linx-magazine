<template>
    <section class="w-full full-height bg-gray-50">
        <div id="loading" class="w-full">
            <Loading :status="ready" />
        </div>
        <section :id="ID" class="w-full mx-auto relative items-center full-height">
            <Header />
            <section class="w-full screen mx-auto flex flex-wrap full-height items-center justify-center">
                <section class="w-full">
                    <section class="w-6/12 mx-auto">
                        <Marketplace />
                    </section>
                </section>
            </section>
            <Footer />
        </section>
    </section>
</template>

<script>
import Marketplace from "../components/Marketplace";
import Loading from "../components/Loading"
import Header from "../components/Header"
import Footer from "../components/Footer"
import imagesLoaded from "imagesloaded"

export default {
    name: "Home",
    data() {
        return {
            "ready": false,
            "ID": `${new Date().getTime()}-home-component`
        }
    },
    components: {
        Marketplace,
        Loading,
        Header,
        Footer
    },
    mounted() {
        imagesLoaded(document.getElementById(this.ID), () => {
            setTimeout(() => {
                this.ready = true;
                setTimeout(() => {
                    document.getElementById('loading').classList.add('hidden')
                    setTimeout(() => {
                        document.getElementById('book-0-carousel-item').classList.add('vibrate-1')
                    }, 300)
                }, 300)
            }, 2000)
        });
    }
};
</script>
<style lang="stylus"></style>
