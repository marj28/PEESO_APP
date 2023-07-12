<template>
    <v-carousel cycle  hide-delimiter-background show-arrows="hover">
        <v-carousel-item  class="picture1"  >
            <div class="CarouselDiv">
                <p class="CarouselText"><span>Discover career
                        opportunities.</span> See career opportunities catered to your skills and abilities. Enter the
                    world of possibilities towards a successful path. WE ARE HERE TO SUPPORT YOU IN ACHIEVING YOUR
                    PROFESSIONAL OBJECTIVES.</p>
            </div>
        </v-carousel-item>

        <v-carousel-item  class="picture2" >
            <div class="CarouselDiv">
                <p class="CarouselText"><span >Gain
                        Lifelong
                        learnings.</span> Give yourself tools and resources
                    to realize your potential. We offer a range of
                    educational services such as pre-employment seminars, career guidance, scholarships and others.
                    LEARN. GROW. SUCCEED.</p>
            </div>
        </v-carousel-item>

        <v-carousel-item class="picture3">
            <div class="CarouselDiv">
                <p class="CarouselText">
                    <span > Develop your skills and access livelihood
                        possibilities.</span>
                    Make good use of our extensive selection of
                    training and entrepreneurship programs to gain or improve your skills. Acquire livelihood opportunities
                    and expand your network. WE ARE COMMITTED TO ASSIST YOU IN YOUR JOURNEY TO A BETTER LIFE.
                </p>
            </div>


        </v-carousel-item>
    </v-carousel>
</template>
<style>
.picture1{
background-image: url(../assets/opportunties.jpg);
height: 350px;
display: block;
top: 8px;
background-size: cover;
}
.picture2{
background-image: url(../assets/learnings.jpg);
height: 350px;
display: block;
top: 8px;
background-size: cover;
}
.picture3{
background-image: url(../assets/training.png);
height: 350px;
display: block;
top: 8px;
background-size: cover;
}
.CarouselText{
    font-size: 24px;
    font-weight: 400;
    color: white;
    padding:  1% 1% 1% 1%;
    text-align: justify;
}
.CarouselDiv{
    margin-top: 25%;
    margin-left: 2%;
    background-color: rgba(0, 0, 0, 0.5);
    margin-right:2%;
}
@media screen and (max-width: 600px)  {
.picture1{
background-image: url(../assets/opportunties.jpg);
height: 150px;
display: block;
position: absolute;
top: 0;
background-size: cover;
}
.CarouselText{
    font-size: 16px !important;
}
.CarouselDiv{
    margin-top: 90%;
    margin-left: 2%;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: justify;
}
}
</style>