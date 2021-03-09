<template>
    <section class="w-full px-4">
        <header :id="`header-${id}`" class="w-full">
            <figure class="book.thumb">
                <img v-on:click="() => {showOverlay()}" :id="`thumb-${id}`" class="mx-auto" src="@/assets/images/books/book3/0001.jpg" alt="">
            </figure>
            <p class="text-center py-2 text-purple-500 font-normal text-md">
                07 de Março
            </p>
        </header>
        <section :id="`book-${id}`" class="fixed w-full full-height left-0 top-0 bg-transparent hidden overflow-hidden">
            <section class="w-full screen relative mx-auto full-height flex items-center">
                <button :id="`close-${id}`" v-on:click="coordinatesHidden" class="opacity-0 book.close absolute top-0 right-0 mx-4 my-4 text-xl rounded-full">
                    <i class="fa fa-times"></i>
                </button>
                <section :id="id" class="book.canvas m-auto opacity-0">
                    <!-- Capa -->
                    <section class="book3.bg hard bg-gray-100">
                    </section>
                    <section :key="'pag-'+n" v-for="n in 134" :class="`book3.pag-${n+1}`" >
                    </section>
                </section>
                <button :id="`prev-${id}`" v-on:click="prev" class="opacity-0 text-2xl book.navigation book.navigation:prev absolute top-0 bottom-0 my-auto rounded-full text-center mx-4 left-0">
                    <i class="fa fa-chevron-left"></i>
                </button>
                <button :id="`next-${id}`" v-on:click="next" class="opacity-0 text-2xl book.navigation book.navigation:next absolute top-0 bottom-0 my-auto rounded-full text-center mx-4 right-0">
                    <i class="fa fa-chevron-right"></i>
                </button>
            </section>
        </section>
    </section>
</template>
<script>

export default {
    name: "Book3",
    data() {
        return {
            id: this.$options.name,
            thumbDifferenceLeft: 0,
            thumbDifferenceTop: 0,
            microScale: 0,
            bookShow: false
        }
    },
    methods: {
        proportion(xp, yp, y) {
            let xxy = xp * y
            let xw = xxy/yp;
            return {
                width: xw,
                height: y
            }
        },
        positionThumb() {
            const thumb = window.document.getElementById(`thumb-${this.id}`).getClientRects()[0];
            const windowWidth = window.top.innerWidth;
            const windowHeight = window.top.innerHeight;
            const proportion = parseFloat((1/this.microScale).toFixed(2));
            const book = window.document.getElementById(this.id).getClientRects()[0];
            let widthTranslateX = 0;
            let heightTranslateY = 0;
            if(!this.bookShow) {
                widthTranslateX = ((windowWidth/2) - (book.width/2));
                heightTranslateY = (windowHeight/2) - (book.height/2);

                this.thumbDifferenceTop = (Math.min(heightTranslateY,thumb.top) - Math.max(heightTranslateY,thumb.top))*proportion;
                this.thumbDifferenceLeft = (((Math.max(widthTranslateX,thumb.left) - Math.min(widthTranslateX,thumb.left)) - (book.width/2))*proportion);

            } else {
                let {width, height} = {
                    width: book.width*this.microScale,
                    height: book.height*this.microScale
                };
                widthTranslateX = ((windowWidth/2) - (width/2));
                heightTranslateY = (windowHeight/2) - (height/2);

                this.thumbDifferenceTop = (Math.min(heightTranslateY,thumb.top) - Math.max(heightTranslateY,thumb.top))*proportion;
                this.thumbDifferenceLeft = (((Math.max(widthTranslateX,thumb.left) - Math.min(widthTranslateX,thumb.left)) - (width/2))*proportion);

            }


        },
        coordinatesShow() {
            this.positionThumb();

            window.$('#'+this.id).css({
                "transform": `scale(${this.microScale}) translate(${(this.thumbDifferenceLeft)}px, ${(this.thumbDifferenceTop)}px)`,
                "transformOrigin": "center center"
            });

            window.$(`#thumb-${this.id}`).addClass('opacity-0').css({
                "transition": "ease-in-out 220ms opacity"
            });

            window.$(`#book-${this.id}`).removeClass('bg-transparent').addClass('bg-gray-200').css({
                "transition": "ease-in-out 800ms background-color"
            });

            window.$('#'+this.id).removeClass('opacity-0').css({
                "transition": "ease-in-out 220ms opacity"
            });

            this.bookShow = true;
            setTimeout(() => {
                window.$('#'+this.id).css({
                    "transition": "cubic-bezier(.17,.67,.43,.98) 600ms transform",
                    "transform": `scale(1) translate(0px, 0px)`
                });
                setTimeout(() => {
                    window.$('#'+this.id).turn("page", 2);
                    window.$('#prev-'+this.id).removeClass('opacity-0');
                    window.$('#next-'+this.id).removeClass('opacity-0');
                    window.$('#close-'+this.id).removeClass('opacity-0');
                }, 400);

            }, 100);
        },
        coordinatesHidden() {
            this.positionThumb();
            this.bookShow = false;
            window.$(`#book-${this.id}`).removeClass('bg-gray-200').addClass('bg-transparent');
            window.$('#'+this.id).turn("page", 1);
            window.$('#prev-'+this.id).addClass('opacity-0');
            window.$('#next-'+this.id).addClass('opacity-0');
            window.$('#close-'+this.id).addClass('opacity-0');

            window.$('#'+this.id).css({
                "transform": `scale(${this.microScale}) translate(${(this.thumbDifferenceLeft)}px, ${(this.thumbDifferenceTop)}px)`
            });

            setTimeout(() => {
                window.$(`#thumb-${this.id}`).removeClass('opacity-0').css({
                    "transition": "ease-in-out 120ms opacity"
                });
                setTimeout(() => {
                    window.$(`#book-${this.id}`).addClass('hidden');
                    window.$('#'+this.id).addClass('opacity-0');
                }, 300);
            }, 620);
        },
        showOverlay() {
            window.$(`#book-${this.id}`).removeClass('hidden');
            setTimeout(() => {
                this.coordinatesShow();
            }, 100);
        },
        closeOverlay() {
            this.coordinatesHidde();
        },
        prev() {
            window.$('#'+this.id).turn('previous');
        },
        next() {
            window.$('#'+this.id).turn('next');
        },
        goToPage(page) {
            window.$('#'+this.id).turn("page", (page+1));
        }
    },
    mounted() {

        const makeResizeJS = () => {
            let thumbWidth = window.$('#thumb-'+this.id).innerWidth();
            let thumbHeight = window.$('#thumb-'+this.id).innerHeight();
            if(window.top.innerWidth >= 1300) {
                if(window.top.innerHeight > 768) {
                    const {width, height} = this.proportion((thumbWidth*2), thumbHeight, 768)
                    window.$('#'+this.id).turn("size", width, height);
                    this.microScale = (1/(768 / thumbHeight)).toFixed(4);
                } else {
                    const {width, height} = this.proportion((thumbWidth*2), thumbHeight, 608)
                    window.$('#'+this.id).turn("size", width, height);
                    this.microScale = (1/(608 / thumbHeight)).toFixed(4);
                }
            } else if(window.top.innerWidth >= 960) {
                const {width, height} = this.proportion((thumbWidth*2), thumbHeight, 600)
                window.$('#'+this.id).turn("size", width, height);
                this.microScale = (1/(600 / thumbHeight)).toFixed(4)
            }
        }

        const makeTurnJs = () => {
            if(window.top.innerWidth >= 1300) {
                if(window.top.innerHeight > 768) {
                    window.$('#'+this.id).turn(this.proportion((window.$('#thumb-'+this.id).innerWidth()*2), window.$('#thumb-'+this.id).innerHeight(), 768));
                    this.microScale = (1/(768 / window.$('#thumb-'+this.id).innerHeight())).toFixed(4);
                } else {
                    window.$('#'+this.id).turn(this.proportion((window.$('#thumb-'+this.id).innerWidth()*2), window.$('#thumb-'+this.id).innerHeight(), 608));
                    this.microScale = (1/(608 / window.$('#thumb-'+this.id).innerHeight())).toFixed(4);
                }
            } else if(window.top.innerWidth >= 960) {
                window.$('#'+this.id).turn(this.proportion((window.$('#thumb-'+this.id).innerWidth()*2), window.$('#thumb-'+this.id).innerHeight(), 600));
                this.microScale = (1/(600 / window.$('#thumb-'+this.id).innerHeight())).toFixed(4)
            }


            window.$('#'+this.id).css({
                "transform": `scale(${this.microScale})`,
                "top": 0,
                "left": 0
            });
        }

        window.$(`#header-${this.id}`).imagesLoaded(() => {
            makeTurnJs();

            let pages = [];
            for(let i = 1; i <= (window.$('#'+this.id).children().length -  2);i++) {
                pages.push(i);
            };

            window.$(`#slide-${this.id}`).change(e => {
                window.$('#'+this.id).turn("page", e.target.value);
            });

            window.$(window).bind('keydown', (e) => {

                if (e.keyCode==37)
                    window.$('#'+this.id).turn('previous');
                else if (e.keyCode==39)
                    window.$('#'+this.id).turn('next');

            });

            window.addEventListener('resize', () => {
                makeResizeJS();
            }, false);
        });
    }
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,700;1,400&display=swap')
@import url('/assets/books/fonts/book2/font.css')

.book3\\.text
    font-family 'Open Sans', Arial, "Helvetica Neue", Helvetica, sans-serif

.book3\\.text-custom
    font-family 'horizon', Arial, "Helvetica Neue", Helvetica, sans-serif

.book3\\.bg
    background-image url('../../assets/images/books/book3/0001.jpg')
    background-size cover
    background-position center center

for $num in (2..9)
    .book3\\.pag-{$num}
        background-image url('../../assets/images/books/book3/000'+ $num +'.jpg')
        background-position center center
        background-size cover
for $num in (10..99)
    .book3\\.pag-{$num}
        background-image url('../../assets/images/books/book3/00'+ $num +'.jpg')
        background-position center center
        background-size cover
for $num in (100..135)
    .book3\\.pag-{$num}
        background-image url('../../assets/images/books/book3/0'+ $num +'.jpg')
        background-position center center
        background-size cover

.slider-container
    margin 0 auto
    position absolute
    left 0
    right 0
    bottom 6vh

.book3\\.sum
    transition all 200ms ease
    &:hover
        color #ae1d22
        text-shadow 0 0 2px #e53235

</style>
