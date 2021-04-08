<template>
    <section v-bind:class="{'opacity-0': status}" class="
        Loading
        fixed
        w-full
        left-0
        right-0
        top-0
        bottom-0
        m-auto
        full-height
        bg-white
        flex
        flex-wrap
        items-center
        justify-center
    ">
        <section class="w-6/12 screen mx-auto">
            <div :id="ID" class="2xl:w-2/12 xl:w-4/12 w-5/12 mx-auto"></div>
            <p class="text-center text-xl my-0 font-black">
                Loading...
            </p>
        </section>
    </section>
</template>
<style lang="stylus" scoped>
.Loading 
    z-index 999
    transition ease 220ms all

</style>
<script>
import Lottie from "lottie-web"
import Loading from "../assets/js/animation/7597-loader-animation.json"

export default {
    name: 'Loading',
    props: ['status'],
    data() {
        return {
            "ID": `${new Date().getTime()}-loading-component`,
        };
    },
    methods: {
        initLoading() {
            Lottie.loadAnimation({
                container: document.getElementById(this.ID),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: Loading
            });
        }
    },
    mounted() {
        this.initLoading();
    }
}
</script>
