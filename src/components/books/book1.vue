<template>
    <section class="w-full px-4">
        <header :id="`header-${this.id}`" class="w-full">
            <figure class="book.thumb">
                <img v-on:click="() => {showOverlay()}" :id="`thumb-${id}`" class="mx-auto" src="@/assets/images/books/book1/thumb.jpg" alt="">
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
                    <section class="book1.bg hard bg-gray-100">
                    </section>
                    <section class="bg-white relative" >
                        <div class="flex items-center book1.paper absolute w-11/12 px-1 py-1 top-0 bottom-0 my-auto right-0 bg-white">
                            <div class="w-10/12 mx-auto">
                                <figure class="mx-auto w-4/12 mb-12">
                                    <svg class="mx-auto" width="47" height="66" viewBox="0 0 47 66" xmlns="http://www.w3.org/2000/svg"><title>Guerrilla Games</title><path d="M46.2 0L23.1 20.082 0 0v42.796l23.1 20.08L46.2 42.8V16.543L23.1 36.62l-10.22-8.886v9.72L23.1 46.34l15.537-13.5v6.815L23.1 53.155 7.565 39.65V16.3L23.1 29.802 46.2 9.726V0z" fill="#37343D"></path></svg>
                                </figure>
                                <p class="text-justify text-lg book1.text">
                                    Welcome to a vibrant world rich with the beauty of nature – but inhabited by awe-inspiring, highly advanced machines. As a young machine hunter named Aloy, you must unravel the mysteries of this world and find your own destiny.
                                </p>
                            </div>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-gray-500">
                            1
                        </footer>
                    </section>
                    <section class="bg-gray-100" >
                        <div class="book1.paper flex items-start absolute w-11/12 top-0 bottom-0 my-auto left-0 bg-transparent">
                            <div class="w-10/12 pt-8 mx-auto">
                                <h2 class="py-2 text-2xl text book1.text-custom">
                                    Introdução
                                </h2>
                                <p class="text-justify text-sm book1.text pt-8">
                                    Explore terras distantes, enfrente máquinas maiores e mais imponentes, e encontre novas tribos incríveis ao retornar o futuro distante e pós-apocalíptico de Horizon.
                                    <br /><br />
                                    A terra está morrendo! Tempestades implacáveis e uma praga incontrolável devastam o que sobrou da humanidade enquanto máquinas assustadoras vagam por territórios próximos. A vida na Terra segue rumo à outra extinção, e ninguém sabe o porquê.
                                    <br /><br />
                                    Cabe a Aloy descobrir os segredos por trás dessas ameaças e restaurar a ordem e equilíbrio ao mundo. Ao longo do caminho, ela reencontrará velhos amigos, forjará alianças com novas facções e descobrirá o legado do passado antigo enquanto tenta se manter um passo à frente de um novo inimigo.
                                </p>
                            </div>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-gray-500">
                            2
                        </footer>
                    </section>
                    <section class="bg-white" >
                        <div class="book1.paper absolute w-11/12 top-0 bottom-0 my-auto right-0 bg-white">
                            <figure class="my-2 px-2 py-2 w-8/12 mx-auto shadow">
                                <img src="../../assets/images/books/book1/horizon-forbidden-west-screenshot-02-disclaimer-02oct20.png" alt="">
                            </figure>
                            <figure class="my-2 px-2 py-2 w-8/12 mx-auto shadow">
                                <img src="../../assets/images/books/book1/horizon-forbidden-west-screenshot-05-disclaimer-02oct20.png" alt="">
                            </figure>
                            <figure class="my-2 px-2 py-2 w-8/12 mx-auto shadow">
                                <img src="../../assets/images/books/book1/horizon-forbidden-west-screenshot-01-disclaimer-02oct20.png" alt="">
                            </figure>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-gray-500">
                            3
                        </footer>
                    </section>
                    <section class="bg-purple-600" >
                        <div class="flex items-center book1.paper absolute w-11/12 top-0 bottom-0 my-auto left-0 bg-purple-600">
                            <div class="w-8/12 pt-8 mx-auto">
                                <h2 class="py-2 text-2xl text book1.text-custom text-orange-400">
                                    Sumario
                                </h2>
                                <ul class="my-4">
                                    <li class='py-2 px-1 my-1'>
                                        <button v-on:click="goToPage(2)" class="book1.sum text-white text-2xl border-orange-500 border-l-2 px-4">
                                            Introdução
                                        </button>
                                    </li>
                                    <li class='py-2 px-1 my-1'>
                                        <button v-on:click="goToPage(5)" class="book1.sum text-white text-2xl border-orange-500 border-l-2 px-4">
                                            Trailer
                                        </button>
                                    </li>
                                    <li class='py-2 px-1 my-1'>
                                        <button v-on:click="goToPage(7)" class="book1.sum text-white text-2xl border-orange-500 border-l-2 px-4">
                                            Sinopse
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-white">
                            4
                        </footer>
                    </section>

                    <section class="bg-white" >
                        <div class="book1.paper flex items-start absolute w-11/12 top-0 bottom-0 my-auto left-0 bg-transparent">
                            <div class="w-10/12 pt-8 mx-auto">
                                <h2 class="py-2 text-2xl text book1.text-custom">
                                    Trailers
                                </h2>
                                <iframe class="mx-auto my-4" :id="`trailer-${id}`" width="410" height="230" src="https://www.youtube.com/embed/Lq594XmpPBg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <p class="text-sm book1.text pt-8">
                                    <span class="inline-block text-xl mb-2">
                                       - Desbrave um vasto mundo aberto
                                    </span><br />
                                    Descubra terras distantes, novos inimigos, culturas interessantes e personagens marcantes.
                                </p>
                                <p class="text-sm book1.text pt-4">
                                    <span class="inline-block text-xl mb-2">
                                       - Um território majestoso
                                    </span><br />
                                    Explore florestas exuberantes, cidades imersas em água e montanhas gigantescas em uma América no futuro distante.
                                </p>
                            </div>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-gray-500">
                            5
                        </footer>
                    </section>
                    <section class="bg-white" >
                        <div class="book1.paper flex items-start absolute w-11/12 top-0 bottom-0 my-auto left-0 bg-transparent">
                            <div class="w-10/12 pt-8 mx-auto">
                                <p class="text-sm book1.text pt-4">
                                    <span class="inline-block text-xl mb-2">
                                       - Enfrente novos perigos
                                    </span><br />
                                    Participe de batalhas estratégicas contra máquinas imensas e inimigos humanos montados usando armas, equipamento e armadilhas criadas a partir de peças recolhidas de sucata.
                                </p>

                                <p class="text-sm book1.text pt-4">
                                    <span class="inline-block text-xl mb-2">
                                       - Desvende mistérios surpreendentes
                                    </span><br />
                                    Descubra o segredo por trás do colapso iminente da Terra e revele um capítulo oculto no passado distante... um que mudará Aloy para sempre.
                                </p>
                            </div>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-gray-500">
                            6
                        </footer>
                    </section>

                    <section class="bg-white" >
                        <div class="book1.paper flex items-start absolute w-11/12 top-0 bottom-0 my-auto left-0 bg-transparent">
                            <div class="w-10/12 mx-auto">
                                <h2 class="py-2 text-2xl text book1.text-custom">
                                    Sinopse
                                </h2>

                                <p class="text-sm book1.text pt-4">
                                   Horizon Zero Dawn acontece a mil anos no futuro em um mundo pós-apocalíptico onde criaturas mecanizadas colossais dominaram o mundo, e vagam em uma paisagem fora do controle da humanidade. Ao longo do tempo, a evolução humana regrediu até uma sociedade tribal de caçadores e coletores que sobrevive por entre florestas imensas, cordilheiras imponentes e as ruínas atmosféricas de uma civilização antiga – enquanto as máquinas selvagens se tornaram cada vez mais poderosas e agressivas. O jogador controla Aloy, uma caçadora que utiliza a velocidade, esperteza e agilidade para permanecer viva e proteger sua tribo contra a força, o tamanho e o poder bruto das máquinas.
                                   <br/><br/>
                                   Horizon Forbidden West continua a história de Aloy, conforme ela vai até o oeste em uma América num futuro distante, para desbravar uma fronteira majestosa e perigosa, onde vai encontrar máquinas assustadoras e novas ameaças misteriosas.
                                </p>
                            </div>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-gray-500">
                            7
                        </footer>
                    </section>
                    <section class="bg-white" >
                        <div class="book1.paper flex items-start absolute w-11/12 top-0 bottom-0 my-auto left-0 bg-transparent">
                            <div class="w-full pt-8 mx-auto">
                                <figure class="my-2 px-2 py-2 w-8/12 mx-auto shadow">
                                    <img src="../../assets/images/books/book1/Horizon-Forbidden-West-8.jpg" alt="">
                                </figure>
                                <figure class="my-2 px-2 py-2 w-8/12 mx-auto shadow">
                                    <img src="../../assets/images/books/book1/horizon-forbidden-west-desafios-possibilidades.jpg" alt="">
                                </figure>
                            </div>
                        </div>
                        <footer class="book1.text-custom absolute w-full bottom-0 left-0 right-0 py-2 text-center text-sm text-gray-500">
                            8
                        </footer>
                    </section>

                    <!-- Ultima Capa -->
                    <section class="book1.bg:last" >
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
    name: "Book1",
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
@import url('/assets/books/fonts/book1/font.css')

.book1\\.text
    font-family 'Open Sans', Arial, "Helvetica Neue", Helvetica, sans-serif

.book1\\.text-custom
    font-family 'horizon', Arial, "Helvetica Neue", Helvetica, sans-serif

.book1\\.bg
    background-image url('../../assets/images/books/book1/thumb.jpg')
    background-size 100%
    background-position center center
    &\\:last
        background-position center right
        background-repeat no-repeat
        background-size cover
        background-image url('../../assets/images/books/book1/images.jpg')

.slider-container
    margin 0 auto
    position absolute
    left 0
    right 0
    bottom 6vh

.book1\\.sum
    transition all 200ms ease
    &:hover
        color #ae1d22
        text-shadow 0 0 2px #e53235

@media only screen and (min-width 960px)
    .book1\\.paper
        height 95%

    .book\\.footer
        max-width 960px

@media only screen and (min-width 1300px)
    .book1\\.paper
        height 90%

    .book\\.footer
        width 1200px
</style>
