<template>
    <section :id="ID" class="
        book
        absolute
        left-0
        top-0
        hidden
        m-auto
    ">
        <section :id="`${ID}-loading`" class="w-full">
            <Loading :status="ready" />
        </section>
        <section class="m-auto w-full relative">
            <section :id="`${ID}-thumb-large`" class="flex flex-wrap items-center justify-end">
                 <img class="w-6/12" src="@/assets/images/books/book1/thumb.png" alt="">
            </section>
            <section class="absolute top-0 right-0 w-full">
                <button 
                    :id="`${ID}-close`"
                    v-on:click="closeTurnOverlay"
                    class="
                        book-close
                        absolute
                        top-0
                        right-0
                        text-lg
                        border-2
                        border-purple-400
                        text-purple-400
                        rounded-full
                        is_hide
                        opacity-0
                        hover:bg-white
                    ">
                    <i class="fa fa-times"></i>
                </button>
                <button :id="`${ID}-button-prev`" class="
                    book-arrows
                    book-arrows_prev
                    text-4xl
                    absolute
                    top-0
                    bottom-0
                    left-0
                    my-auto
                    text-purple-400
                    focus:outline-none
                    hover:text-purple-600
                    is_hide
                    opacity-0
                ">
                    <i class="fa fa-arrow-left"></i>
                </button>
                <button :id="`${ID}-button-next`" class="
                    book-arrows
                    book-arrows_next
                    text-4xl
                    absolute
                    top-0
                    bottom-0
                    right-0
                    my-auto
                    text-purple-400
                    focus:outline-none
                    hover:text-purple-600
                    is_hide
                    opacity-0
                ">
                    <i class="fa fa-arrow-right"></i>
                </button>
                <section :id="`${ID}-thumb-canvas`" class="w-full opacity-0">
                    <section class="bg-white book-page book-cap"></section>
                    <section class="bg-gray-200 book-page"></section>
                    <section class="bg-gray-50 book-page flex flex-wrap items-center justify-center relative">
                        <section class="w-10/12 mx-auto px-4 py-2">
                            <h4 class="text-4xl text-orange-500 my-2 py-2">
                                Introdução
                            </h4>
                            <p class="text-justify text-gray-800 text-lg">
                                O Performance Index da Linx Digital, irá te ajudar a acompanhar mensalmente todas as novidades, status, crescimento e tendências de nossos clientes, quando o assunto é performance. Buscamos neste formato trazer o máximo de informações possível, mas sem o peso de comunicações oficiais e formatos engessados. Por isso além de ser a estreia da nossa primeira revista, queremos te convidar para participar da próxima e trazer assuntos da sua área ou temas que você gostaria de acompanhar por aqui. 
                            </p>
                            <p class="text-orange-400 text-md text-left my-2">
                                Ps: prometo que daremos os créditos, rs.*
                            </p>
                        </section>
                        <footer class="absolute bottom-0 left-0 w-full">
                            <section class="w-10/12 mx-auto px-4 py-2">
                                <p class="text-4xl text-purple-500 mb-8">
                                    Bora lá acompanhar? 👍
                                </p>
                            </section>
                        </footer>
                    </section>
                    <section class="bg-gray-50 book-page">
                        <section class="w-10/12 mx-auto px-4 py-2">
                            <h4 class="text-3xl text-orange-500 my-2 py-1 px-8 border-l-2 border-purple-400">
                                Como não falar do impacto do Covid-19 em nossas soluções né?
                            </h4>
                            <h5 class="text-xl text-gray-700 my-8 py-1 px-8 text-center uppercase">
                                “Como não falar do impacto do Covid-19 em nossas soluções né?”
                            </h5>
                            <p class="text-justify text-gray-800 text-lg">
                                Em 2020 sabemos que com as lojas fechadas por conta da pandemia, nossa soluções tiveram alta nos resultados, pois todos os consumidores de nossos clientes, procuraram canais online para realizarem suas compras.
                                <br />
                                Mas a pergunta é, você sabe como se mantiveram esses resultados por segmento?  Não né? Eu já imaginava... Mas estamos aqui para isso... bora ver:
                            </p>
                        </section>
                        <section class="w-11/12 mx-auto">
                            <img class="w-10/12 mx-auto" src="https://www.ecommercebrasil.com.br/wp-content/uploads/2019/10/Ranking-Brasil-Doing-Business.png" alt="">
                        </section>
                    </section>
                    <section class="bg-white book-page flex flex-wrap items-center justify-center ">
                        <a class="cursor-pointer" href="https://www.doutorecommerce.com.br/wp-content/uploads/2013/09/Infografico-adaptado1.jpg" target="_blank">
                            <img class="w-8/12 mx-auto" src="https://www.doutorecommerce.com.br/wp-content/uploads/2013/09/Infografico-adaptado1.jpg" alt="">
                        </a>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>
<script>
import Loading from "../Loading"
import ImagesLoaded from "imagesloaded"

export default {
    name: 'Book1',
    data() {
        return {
            "ready": false,
            "turnReady": false,
            "ID": `${new Date().getTime()}-book`,
            "thumbID": "thumb-book1",
            "thumb": null,
            "book": null,
            "bookThumb": null,
            "backdrop": null,
            "close": null,
            "isShow": false,
            "canvas": null,
            "prev": null,
            "next": null,
            "dimensions": {
                "width": 0,
                "height": 0
            }
        }
    },
    methods: {
        initLoading() {
            this.ready = true;
        },
        setBookCssShowStyle() {
            const {width, height} = this.dimensions;
            this.book.css({
                "width": Math.round(width*2)+"px",
                "height": height+"px",
                "left": (Math.round((window.innerWidth/2) - (Math.round(width*2)/2))) + "px",
                "top": (Math.round(window.innerHeight - height)/2) + "px"
            })
        },
        setTurnJsWidthByDimensions() {
            const {width, height} = this.dimensions;
            if(!this.turnReady) {
                this.turnReady = true;
                this.canvas.turn({"width": (width*2), height})
                window.$(window).bind('keydown', (e) => {
                    if (e.keyCode==37)
                        this.canvas.turn('previous');
                    else if (e.keyCode==39)
                        this.canvas.turn('next');
                });

                window.$(window).bind('resize', () => {
                    if (this.isShow)
                        this.dimensions = this.proportion(this.thumb.innerWidth(), this.thumb.innerHeight(), this.setTurnHeightForDesktopsScreensVariants());
                        const {width, height} = this.dimensions
                        this.setBookCssShowStyle()
                        this.setTurnJsCustomDimensions((width*2), height)
                });

                this.prev.click(() => {
                    this.canvas.turn('previous');
                })

                this.next.click(() => {
                    this.canvas.turn('next');
                })
            } else {
                this.canvas.turn('size', (width*2), height)
            }
        },
        setTurnJsCustomDimensions(width, height) {
            this.canvas.turn('size', width, height)
        },
        setDimensionsInTurnJsWithThumbDimensions() {
            this.setTurnJsCustomDimensions((this.thumb.innerWidth()*2), this.thumb.innerHeight())
        },
        setPageOfTurnJsCanvas(pageNumber) {
            this.canvas.turn('page', pageNumber)
        },
        setTurnHeightForDesktopsScreensVariants() {
            const Height = window.innerHeight;
            if(Height >= 900) {
                return 798
            } else if(Height > 700) {
                return 700
            } else if(Height > 650) {
                return 600
            } else if(Height < 650) {
                return 400
            }
        },        
        showTurnOverlay() {
            this.dimensions = this.proportion(this.thumb.innerWidth(), this.thumb.innerHeight(), this.setTurnHeightForDesktopsScreensVariants());
            this.setBookCssShowStyle()
            document.querySelector('body').classList.add('overflow-hidden')
            this.setTurnJsWidthByDimensions()
            setTimeout(() => {
                this.backdrop.removeClass('opacity-0')
            }, 200)
            setTimeout(() => {
                this.canvas.removeClass('opacity-0')
                this.next.removeClass('opacity-0')
                this.prev.removeClass('opacity-0')
                this.next.removeClass('is_hide')
                this.prev.removeClass('is_hide')
                this.close.removeClass('is_hide')
                this.close.removeClass('opacity-0')
                this.bookThumb.addClass('hidden');
            }, 510);
        },
        closeTurnOverlay() {
            this.setPageOfTurnJsCanvas(1)
            this.next.addClass('opacity-0')
            this.prev.addClass('opacity-0')
            this.next.addClass('is_hide')
            this.prev.addClass('is_hide')
            this.close.addClass('is_hide')
            this.close.addClass('opacity-0')
            this.isShow = false
            setTimeout(() => {
                this.bookThumb.removeClass('hidden')
                this.canvas.addClass('opacity-0')
                this.backdrop.addClass('opacity-0')
                document.querySelector('body').classList.remove('overflow-hidden')
                this.setDimension()
                this.setDimensionsInTurnJsWithThumbDimensions()
                setTimeout(() => {
                    this.bookThumb.removeClass('hidden')
                    this.thumb.removeClass('opacity-0')
                    this.backdrop.addClass('hidden')
                    this.book.addClass('hidden')
                }, 400)
            }, 610)
        },
        setPosition() {            
            this.book.css({
                "top": this.thumb.offset().top,
                "left": this.thumb.offset().left - this.thumb.innerWidth(),
            })
        },
        setDimension() {       
            if(this.isShow) return;
            this.book.css({
                width: (this.thumb.innerWidth()*2)+"px",
                height: this.thumb.innerHeight()
            })
            this.setPosition()
        },
        main() {
            this.thumb = window.$("#"+this.thumbID)
            this.book = window.$("#"+this.ID)
            this.bookThumb = window.$(`#${this.ID}-thumb-large`)
            this.canvas = window.$(`#${this.ID}-thumb-canvas`)
            this.backdrop = window.$(`#backdrop`)
            this.prev = window.$(`#${this.ID}-button-prev`)
            this.next = window.$(`#${this.ID}-button-next`)
            this.close = window.$(`#${this.ID}-close`)
            this.setDimension()
            this.thumb.hover(() => {
                this.setDimension()
            }).click(() => {
                this.isShow = true;
                document.getElementById(this.ID).classList.remove('hidden')
                this.backdrop.removeClass('hidden')
                this.thumb.addClass('opacity-0')
                this.showTurnOverlay()
                setTimeout(() => {
                    this.setPageOfTurnJsCanvas(2)
                }, 500)
            });
        }
    },
    components: {
        Loading
    },
    mounted() {
        this.main();
        ImagesLoaded(document.getElementById(this.ID), () => {
            this.initLoading();
            setTimeout(() => {
                window.document.getElementById(`${this.ID}-loading`).classList.add('hidden')
            }, 300)
        })
    }
}
</script>
<style lang="stylus" scoped>
.slick-slide
    outline none
    &:focus
        outline none
.book
    z-index 9999
    transition ease 400ms top, ease 400ms left, ease 400ms opacity, ease 400ms width, ease 400ms height

.book-page
    background-repeat no-repeat
    background-size contain
    background-position center center

.book-cap
    background-image url('../../assets/images/books/book1/thumb.png')

.book-close
    transform translateY(-45px) translateX(45px)
    width 40px
    height 40px
    line-height 10px
    transition ease 220ms background-color, linear 220ms opacity, transform 220ms ease-in
    &.is_hide
        transform translateY(-85px) translateX(45px)

.book-arrows
    width 100px
    height 80px
    transition 220ms linear color, 220ms transform ease-in, 220ms opacity linear
    &_prev
        transform translateX(-100px)
        &.is_hide
            transform translateX(-180px)
    &_next
        transform translateX(100px)
        &.is_hide
            transform translateX(180px)

@media only screen and (max-height 768px)
    .book-close
        transform translateY(15px) translateX(55px)

</style>
