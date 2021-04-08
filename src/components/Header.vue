<template>
    <header :id="ID" class="header w-full bg-gray-100 absolute top-0 left-0">
        <section class="mx-auto screen w-full py-4">
            <img class="mx-auto 2xl:w-auto w-2/12" src="../assets/images/logo.png" alt="">
        </section>
        <section class="bg-purple-500 mx-auto w-full py-1">
            <section class="mx-auto screen w-full py-1">
                <section :id="`${ID}-carousel`" class="2xl:w-8/12 xl:w-6/12 w-7/12 mx-auto">
                    <div :key="`${index}-ind`" v-for="(ind, index) in inds">
                        <p class="text-white 2xl:text-lg text-md text-center font-bold">
                            <span class="2xl:px-4 px-1">
                                {{ind.label}}
                                <span v-if="parseInt(ind.percent) > 10" class="text-orange-400">
                                    {{ind.percent}}% {{ind.prefix}}
                                </span>
                                <span v-if="parseInt(ind.percent) < 10" class="text-orange-500">
                                    {{ind.percent}}% {{ind.prefix}}
                                </span>
                            </span>
                            |
                        </p>
                    </div>
                    <div :key="`${index}-ind2`" v-for="(ind, index) in inds">
                        <p class="text-white 2xl:text-lg text-md text-center font-bold">
                            <span class="2xl:px-4 px-1">
                                {{ind.label}}
                                <span v-if="parseInt(ind.percent) > 10" class="text-orange-400">
                                    {{ind.percent}}% {{ind.prefix}}
                                </span>
                                <span v-if="parseInt(ind.percent) < 10" class="text-orange-500">
                                    {{ind.percent}}% {{ind.prefix}}
                                </span>
                            </span>
                            |
                        </p>
                    </div>
                </section>
            </section>
        </section>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            "inds": [{
                "label": 'Magazine Luiza',
                "percent": '22',
                "prefix": 'CTR'
            }, {
                "label": 'Via Varejo',
                "percent": '8',
                "prefix": 'CON'
            }, {
                "label": 'Carrefour',
                "percent": '15',
                "prefix": 'OTR'
            }],
            ID: `${new Date().getTime()}-header`
        }
    },
    methods: {
        init() {
            window.$(`#${this.ID}-carousel`).slick({
                "arrows": false,
                "autoplay": true,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "autoplaySpeed": 2000
            })
        }
    },
    mounted() {
        this.init();
    }
}
</script>
