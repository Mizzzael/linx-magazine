<template>
    <section class="w-full full-height">
        <section class="w-full mx-auto relative items-center full-height">
            <div id="particles" class="w-full full-height"></div>
            <section class="w-full screen mx-auto flex flex-wrap full-height items-center justify-center absolute top-0 left-0 right-0">
                <section class="lg:w-6/12 px-2">
                    <figure class="w-auto">
                        <img class="home.logo mb-14 mx-2" src="https://www.linx.com.br/app/themes/linx/crystals/dist/assets/static/logo.png" alt="Linx">
                    </figure>
                    <h4 class="font-normal text-4xl px-2 text-orange-500">
                        Linx Magazine
                    </h4>
                    <hr class="my-4">
                    <p class="text-lg font-bold px-2 text-purple-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio mollitia et sequi ratione? Ea, at. Quidem, corrupti commodi!
                    </p>
                    <ul class="flex flex-wrap p-2 w-full">
                        <li class="text-gray-400 px-3 py-2 text-2xl">
                            <a href="https://www.facebook.com/linxretail" target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li class="text-gray-400 px-3 py-2 text-2xl">
                            <a href="https://www.instagram.com/linxretail/" target="_blank">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li class="text-gray-400 px-3 py-2 text-2xl">
                            <a href="https://www.youtube.com/user/linxretail" target="_blank">
                                <i class="fa fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                     <p class="mt-8 text-lg font-100 px-2 text-purple-500">
                        Biblioteca ⟶
                    </p>
                </section>
                <section class="lg:w-6/12">
                    <Marketplace />
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import Marketplace from "../components/Marketplace";
    import Welcome from "../assets/audio/Welcome - Merchant Resident Evil 4.mp3"
    const effect = new Audio(Welcome);
    export default {
        name: "Home",
        components: {
            Marketplace
        },
        mounted() {
            // Todo: Esse efeito é para teste e nada mais, remove-lo quando for para subir em produção.
            const welcomeEffect = window.top.localStorage.getItem('welcome');
            if (!welcomeEffect) {
                effect.play();
                window.top.localStorage.setItem('welcome', true);
            }

            this.particules('particles', function() {
              console.log(
                  '%c Carregando particulas (‿!‿) ԅ(≖‿≖ԅ)',
                  "font-family: 'Dosis', Arial, 'Helvetica Neue', sans-serif;font-size: 22px;padding: 10px 0 10px 0;color: #f0462d"
                  );
            });

        }
    };

</script>
<style lang="stylus">
.home\\.logo
    width 190px
</style>
