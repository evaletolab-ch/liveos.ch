<template>
  <div class="main">
    <!-- HEADER INTRO -->
    <canvas  ref="canvas" v-bind:width="width" v-bind:height="height" ></canvas>
    <header class="bg-img header" ref="intro">
                <nav class="navbar navbar-default navbar-vira">
                    <div class="container">
                        <div class="navigation-bar">
                            <div class="row">
                                <div class="col-xs-11 text-right">
                                    <div class="menu m hide">
                                        <a href="#"><span class="ion-navicon ion-android-menu"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container">
                    <div class="row">
                        <div class="intro-box">
                          <img :src="content.intro_logo.path">

                            <div class="intro">
                                <h1>{{content.intro_title}}</h1>
                                <p>{{content.intro_tagline}}</p>
                                <a class="btn vira-btn" :href="content.intro_cta_link"> {{content.intro_cta_text}}</a>
                            </div>
                        </div>
                    </div>
                </div>
    </header>

    <!-- BRANDING -->
    <section id="about" class="about section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <h2 class="title">{{ content.introl_description_title }}</h2>                          
                            <p v-html="content.intro_description">
                            </p>
                            <span> </span>
                        </div>
                        
                      </div>
                </div>
            </section>

    <!-- OUR WORK -->
    <section id="workstation" class="work section" v-if="someWork">
      <div class="container">
        <h2 class="title">{{ content.ourwork_title }}</h2>
        <div id="workstation-slider" class="owl-carousel">
            <div class="item" v-for="(work,index) in content.ourwork" :key="index" :class="{'hide':!(work.active)}">
                <div class="vira-card">
                    <div class="vira-card-content hide">
                    </div>

                    <div class="vira-card-header">
                        <img class="img-responsive" :src="work.value.image.path">
                    </div>

                    <div class="vira-card-content">
                      <h3>{{ work.value.title }}</h3>
                        <p v-html="work.value.content">
                        </p>
                    </div>

                </div>
            </div>
        </div>


      </div>
    </section> 

    <!-- OUR PHOTOS -->
    <div class="photo-container" v-if="content.ourwork_photos && content.ourwork_photos.length">
          <h2 class="title">La Gallerie photos</h2>
          <div class="photos">
            <div class="photo" v-for="(photo,index) in content.ourwork_photos" :key="index" @click="event=> currentPhoto = photo.path">
              <img :src="photo.path" alt="">
            </div>
          </div>
        </div>

    <!-- CONTACT -->
    <section id="contact" class="contact section">
                <div class="container">
                    <h2 class="title">{{ content.info_planning_title }}</h2>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="vira-card">
                                <div class="vira-card-header hide">
                                        <span class="fa fa-map-o" aria-hidden="true"></span>
                                </div>
                                <div class="vira-card-content">
                                    <h3>Notre approche</h3>
                                    <p v-html="content.info_planning_trip"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="vira-card">
                                <div class="vira-card-header hide">
                                        <span class="fa fa-phone" aria-hidden="true"></span>
                                </div>
                                <div class="vira-card-content">
                                    <h3>Notre équipe</h3>
                                    <p v-html="content.info_planning_legal"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="vira-card">
                                <div class="vira-card-header hide">
                                        <span class="fa fa-paper-plane" aria-hidden="true"></span>
                                </div>
                                <div class="vira-card-content">
                                    <h3>Notre technologie</h3>
                                    <p v-html="content.info_planning_contact"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    <!-- DRAWER -->            
    <drawer :open="currentPhoto" @close="currentPhoto=null">
      <img  class="drawer-photo" :src="currentPhoto" alt="">
    </drawer>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <p> {{content.footer_title}} <span class="fa fa-heart"></span> </p>
            </div>
        </div>
    </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

canvas{
	z-index: -1;
	overflow: hidden;
	width: 100%;
	position: absolute;	
  background-color: black;
}

.work {
  width: 100%;

  .title{
    margin-bottom: 50px;
  }
}


.photo-container {
    overflow-x: auto;
    width: 100%;
    background-color: #eee;

    .title{
      text-align: center;
    }
    .photos {
  display: flex;
  flex-direction: row;
  width: fit-content;
  .photo  {
    width: 128px;
    height: 128px;
    overflow: hidden;
    margin: 5px;
    cursor: pointer;
    border-radius: 9px;
    img{
      object-fit: cover;
      width: 128px;
      height: 128px;          
    }
  }

  .drawer-photo{
    object-fit: contain;
    width: 100%;
    border-radius: 14px;
  }

}

  }

.owl-carousel{
  display: flex;
  .item{
    padding: 5px;
    width: calc( 100% / 3 - 10px );
    .vira-card .vira-card-header{
      height: 250px;
    }
  }
  @media (max-width:768px) {
    flex-direction:column;
    .item{
      width: 100%;
    }
    img{
      width: 100%;
    }
  }
}

.intro {
  h1 {
    text-transform:none;
  }

  a.btn{
    white-space:normal!important;
    letter-spacing: 1px;
    padding: 25px 30px;
    background-color: rgba(51, 51, 51,.30);    
    .icon{
      background-image: url(/images/pavillonnoir-fishing-whatsapp.png);
      width: 35px;
      display: inline-block;
      height: 34px;
      background-size: contain;
      background-repeat: no-repeat;
      margin: -11px;
      margin-right: 5px;
    }
  }

}


.intro-box {
  img {
    width: 160px;
    position: absolute;
    left: calc(50% - 80px);
    top: 24px;
    opacity: 0.99;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Drawer from '@/components/Drawer.vue';
import { $config, $content } from "@/services";


@Component({
  components: {
    Drawer
  },
})
export default class Home extends Vue {


  image = new Image();
  currentPhoto:string|null=null;
  someWork = false;
  pi = 50;

  $refs!: {
    intro: HTMLInputElement;
    canvas: HTMLCanvasElement;
  };
  
  get config() {
    return $config.config;
  }

  get content() {
    return $content.data;
  }

  get width(){
    return window.innerWidth;
  }

  get height(){
    return window.innerHeight;
  }



  get canvas() {
    return this.$refs.canvas;
  }

  get ctx() {
    return this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }


  mounted(){
    const url = $content.data.intro_image.path;
    this.image.src = url;
    this.image.onload = () => {
      this.drawImage();
    }
    //this.$refs.intro.style.backgroundImage = "url("+url+")";

    this.someWork = this.content.ourwork.some((work:any) => work.active)
    this.ctx.fillStyle ="black";
    // if(!this.config.show_cursor){
    //   document.body.parentElement!.style.cursor = "none";
    // }
    //window.addEventListener('resize', this.drawImage);
    // setInterval(()=>{
    //   this.drawImage(Date.now());
    // },1000)


  }



  drawImage () {
    const lum = Math.min(this.pi*0.3,70)|0;
    const light = (Math.cos(this.pi * 0.1)+1)*10+50|0;
    const angle = this.pi%360;
    const saturation = `hsl(${angle},100%,${lum}%)`;
    this.pi+=2;

    
    //
    // cover image instead of stretch
    // https://stackoverflow.com/a/66560970

    this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalCompositeOperation = "multiply";
    this.ctx.fillStyle = saturation;  // saturation at 100%
    this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);  // apply the comp filter
    this.ctx.globalCompositeOperation = "source-over";  // restore default comp    
    setTimeout(()=>{
      requestAnimationFrame(this.drawImage)
    },80)
  }  


}
</script>
