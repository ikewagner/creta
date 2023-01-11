import Link from 'next/link';
import Image from "next/image";

const Cards = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                            <img class="lg:h-50 md:h-50 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="/img1.png" alt="blog"></img>
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Family Residence </h1>
                                <p class="leading-relaxed mb-3">A leveza e o conforto desse projeto chegou até você? Essa é a residência onde os filhos de um casal maravilhoso irão crescer e criar suas memórias. Uma casa de 100 m² com uma planta totalmente integrada e funcional, além dessa fachada simpática, pronta pra abrigar todo o amor dessa família 💚</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                            <img class="lg:h-50 md:h-50 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="/img2.jpg" alt="blog"></img>
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Residência de Veraneio R | V 💛</h1>
                                <p class="leading-relaxed mb-3">As férias de verão ganharam outro significado depois desse projeto 🏖️ Já imaginou desfrutar seus dias em uma residência contemporânea, com a perfeita iluminação natural, totalmente integrada com a paisagem ao seu entorno? Esse casal realizou esse sonho, vêm realizar o seu também!</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-gray-50 to-gray-200 overflow-hidden">
                            <img class="lg:h-45 md:h-45 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="/img4.png" alt="blog"></img>
                            <div class="p-6">
                                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Minimalist Residence 🖤</h1>
                                <p class="leading-relaxed mb-3">Estes sonhadores desejavam um lar minimalista e com aspectos industriais, que foram adequadamente implantados ao projeto através do sistema construtivo e demais materiais empregados ao design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class=" text-center  text-3xl font-extrabold  lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Sobre nós</span></h1>
                <div class="py-16 bg-white">
                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div class="md:5/12 lg:w-5/12">
                                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""></img>
                            </div>
                            <div class="md:7/12 lg:w-6/12">
                                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Projete seu futuro conosco, nós temos a solução!</h2>
                                <p class="mt-6 text-gray-600">Uma empresa do ramo da construção civil que nasceu com o desejo ardente de fazer parte da sua história, de cuidar dos seus sonhos e o mais importante… torná-los REALIDADE.</p>
                                <p class="mt-4 text-gray-600">Trabalhamos com comprometimento, qualidade e inovação em todas as nossas ramificações, ressignificando a sua relação com a construção civil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;