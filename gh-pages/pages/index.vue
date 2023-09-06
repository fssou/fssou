<template>
    <!-- Page Wrapper -->
    <div id="page-wrapper">
        <!-- Wrapper -->
        <div id="wrapper">
            <!-- Panel (Banner) -->
            <section class="panel banner right">
                <div class="content color0 span-3-75">
                    <h1 class="major">
                        Olá, meu nome<br />
                        é Franclin...
                    </h1>
                    <p>
                        Tenho {{ getIdade }} anos, sou cristão e um entusiasta da
                        tecnologia. Fiquei fascinado por tecnologia depois que estudei
                        eletricidade e eletrônica.
                        <br />
                        Alguns hobbies: Aprendi um pouco de música com violão e piano
                        digital (o piano é meu favorito). Gosto de jogos que envolvem
                        aventura, ação e enígmas (meu favorito é
                        <a href="https://pt.wikipedia.org/wiki/Shadow_of_the_Colossus" class="" target="blank">Shadow of the
                            Colossus</a>, a trilha sonora é 👌).
                    </p>
                    <ul class="actions">
                        <li>
                            <a href="#first" class="button primary color1 circle icon solid fa-angle-right">
                                Next
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="image filtered span-1-75" data-position="25% 25%">
                    <img src="images/fssou/IMG_20180909_144331_082.jpg" alt="" />
                </div>
            </section>

            <!-- Atualmente Panel (Spotlight) -->
            <section class="panel spotlight medium right" id="first">
                <div class="content span-7" style="text-shadow: 1px 1px 3px #010101;">
                    <h2 class="major">Atualmente...</h2>
                    <p>
                        Formado em Análise e Desenvolvimento de Sistemas. Sou Eng. de Software no
                        <a href="https://www.itau.com.br" class="">Banco Itaú</a>
                        , um dos maiores banco do Brasil.
                    </p>
                </div>
                <div class="image filtered tinted" data-position="middle left">
                    <img style="transform: scaleX(-1);"
                        src="images/fssou/Dayana e Franklin 27-10-19-0127.jpg" alt="" />
                </div>
            </section>

            <!-- Hard Skills Panel -->
            <section class="panel color2" v-show="false">
                <div class="intro joined">
                    <h2 class="major">Hard Skills</h2>
                    <p>
                        Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis
                        congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum
                        amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna
                        etiam.
                    </p>
                </div>
                <div class="inner">
                    <ul class="grid-icons three connected">
                        <li>
                            <span class="icon fa-gem"><span class="label">Lorem</span></span>
                        </li>
                        <li>
                            <span class="icon solid fa-camera-retro"><span class="label">Ipsum</span></span>
                        </li>
                        <li>
                            <span class="icon solid fa-cog"><span class="label">Dolor</span></span>
                        </li>
                        <li>
                            <span class="icon solid fa-paper-plane"><span class="label">Sit</span></span>
                        </li>
                        <li>
                            <span class="icon solid fa-chart-bar"><span class="label">Amet</span></span>
                        </li>
                        <li>
                            <span class="icon solid fa-code"><span class="label">Nullam</span></span>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Soft Skills Panel (Spotlight) -->
            <section class="panel spotlight large left" v-if="false">
                <div class="content span-5">
                    <h2 class="major">Soft Skills</h2>
                    <p>
                        Mauris a cursus velit. Nunc lacinia sollicitudin egestas bibendum,
                        magna dui bibendum ex, sagittis commodo enim risus sed magna
                        nulla. Vestibulum ut consequat velit. Curabitur vitae libero
                        lorem. Quisque iaculis porttitor blandit. Nullam quis sagittis
                        maximus. Sed vel nibh libero. Mauris et lorem pharetra massa lorem
                        turpis congue pulvinar.
                    </p>
                </div>
                <div class="image filtered tinted" data-position="top right">
                    <img src="https://cdn.francl.in/wp-content/uploads/2021/07/DSC_0389-1024x678.jpg" alt="" />
                </div>
            </section>

            <!-- Gallery Panel -->
            <section class="panel">
                <div class="intro color0" style="text-shadow: 1px 1px 1px rgba(10, 10, 10, 0.5);">
                    <h2 class="major">Pic</h2>
                    <p>
                        Eu gosto de fotografias. Mas, ocasionalmente, são publicadas.
                    </p>
                </div>
                <div class="gallery">

                    <div class="group span-3">
                        <a href="images/fssou/IMG_9390.JPG" class="image filtered span-3" data-position="middle">
                            <img src="images/fssou/IMG_9390.JPG" alt="" />
                        </a>
                        <a href="images/fssou/IMG_0137.jpg" class="image filtered span-1-5" data-position="center">
                            <img src="images/fssou/IMG_0137.jpg" alt="" />
                        </a>
                        <a href="images/fssou/20190515_115735.jpg" class="image filtered span-1-5" data-position="bottom right">
                            <img src="images/fssou/20190515_115735.jpg" alt="" />
                        </a>
                    </div>

                    <a href="images/fssou/Dayana e Franklin 27-10-19-0302.jpg" class="image filtered span-2-5" data-position="center">
                        <img src="images/fssou/Dayana e Franklin 27-10-19-0302.jpg" alt="" />
                    </a>

                    <div class="group span-3">
                        <a href="images/fssou/IMG_8375.jpg" class="image filtered span-3" data-position="top">
                            <img src="images/fssou/IMG_8375.jpg" alt="" />
                        </a>
                        <a href="images/fssou/327316201_581481610107176_3544378201851624978_n.jpg" class="image filtered span-1-5" data-position="top left">
                            <img src="images/fssou/327316201_581481610107176_3544378201851624978_n.jpg" alt="" />
                        </a>
                        <a href="images/fssou/IMG-20191122-WA0039.jpg" class="image filtered span-1-5" data-position="top left">
                            <img src="images/fssou/IMG-20191122-WA0039.jpg" alt="" />
                        </a>
                    </div>
                    <a href="images/fssou/Dayana e Franklin 27-10-19-0006.jpg" class="image filtered span-3-5" data-position="top center">
                        <img src="images/fssou/Dayana e Franklin 27-10-19-0006.jpg" alt="" />
                    </a>
                    <a href="images/fssou/20180728_220539.jpg" class="image filtered span-1-5" data-position="top">
                        <img src="images/fssou/20180728_220539.jpg" alt="" />
                    </a>

                </div>
            </section>

            <!-- Contato Panel -->
            <section class="panel color4-alt">
                <div class="intro color4 inner columns divided">
                    <div class="span-3-25">
                        <div class="intro color4">
                            <h2 class="major">Conexão</h2>
                            <p>
                                Se quiser conversar sobre algum projeto que esteja atuando
                                entre em contato comigo. Vamos trocar ideias!
                            </p>
                        </div>
                    </div>
                    <div class="span-1-5">
                        <ul class="contact-icons color1">
                            <li class="icon brands fa-linkedin">
                                <a target="_blank" href="https://linkedin.com/in/fssou">@fssou</a>
                            </li>
                            <li class="icon brands fa-medium-m">
                                <a target="_blank" href="https://medium.com/@fssou">@fssou</a>
                            </li>
                            <li class="icon brands fa-twitter">
                                <a target="_blank" href="https://twitter.com/fssouoficial">@fssouoficial</a>
                            </li>
                            <li class="icon brands fa-facebook-f">
                                <a target="_blank" href="https://facebook.com/fssouoficial">@fssouoficial</a>
                            </li>
                            <li class="icon brands fa-instagram">
                                <a target="_blank" href="https://instagram.com/fssouoficial">@fssouoficial</a>
                            </li>
                            <li class="icon brands fa-github">
                                <a target="_blank" href="https://github.com/fssou">@fssou</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Copyright -->
            <div class="copyright">
                &copy; Franclin Sousa.
                Design: <a href="https://html5up.net">HTML5 UP</a>.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const getIdade = new Date().getFullYear() - 1995;
</script>
