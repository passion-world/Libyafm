<script setup>
import "vue3-carousel/carousel.css";
import { VueAudioMotionAnalyzer } from "vite-plugin-vue-audiomotion";
</script>

<template>
  <div class="bg-[#0B1834]" v-if="info != null">
    <header>
      <div class="relative">
        <div
          class="fixed top-0 left-0 w-full flex bg-[#0B1834] z-10 bg-opacity-80 justify-between items-center mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 md:space-x-reverse lg:px-8"
        >
          <div class="-mr-2 -my-2 md:hidden md:justify-between">
            <button
              type="button"
              class="bg-[#0B1834] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div>
            <a
              href="mailto:info@libyafm.fm"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-libya-pink-500 to-libya-blue-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-libya-blue-400 transition-all duration-300 ease-in-out hover:to-libya-pink-400"
            >
              تواصل معنا
            </a>
          </div>
          <div
            class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8 space-x-reverse"
          >
            <a
              href="#info"
              class="whitespace-nowrap text-base font-semibold text-white hover:text-gray-300"
            >
              عن الراديو
            </a>
            <a
              href="#team"
              class="whitespace-nowrap text-base font-semibold text-white hover:text-gray-300"
            >
              فـريقـنـا
            </a>
            <a
              href="#programs"
              class="whitespace-nowrap text-base font-semibold text-white hover:text-gray-300"
            >
              البرامج
            </a>
            <a
              href="#flashes"
              class="whitespace-nowrap text-base font-semibold text-white hover:text-gray-300"
            >
              الفلاشات
            </a>
          </div>
          <div class="flex justify-end lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                style="object-fit: contain; width: 200px; height: 60px"
                :src="
                  'https://mobile.uob.edu.ly' + info.logo.formats.thumbnail.url
                "
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero section -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2"></div>

        <div class="flex h-[1024px]">
          <button
            class="control-btn play-btn absolute opacity-80 hover:opacity-100 duration-200 transition-all ease-in-out"
            style="
              top: 541px;
              left: calc(58.33% - 37.5px);
              transform: translate(-calc(58.33% - 37.5px), -541px);
            "
            @click="togglePlay"
          >
            <svg
              v-if="!isPlaying"
              width="75"
              height="75"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37 28V75L73 51.5L37 28Z" fill="white" />
            </svg>
            <svg
              v-else
              width="75"
              height="75"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="32" y="32" width="12" height="35" fill="white" />
              <rect x="56" y="32" width="12" height="35" fill="white" />
            </svg>
          </button>
          <div class="w-5/12">
            <img class="w-[100%] h-[100%]" src="~/assets/sados.jpg" alt="" />
          </div>
          <div class="w-7/12">
            <div
              class="flex-col text-start items-center max-w-[800px] px-32 py-60"
            >
              <p
                class="text-8xl text-white font-semibold leading-[120px]"
                v-motion="{
                  initial: {
                    x: -100,
                    opacity: 0,
                  },
                  enter: {
                    x: 0,
                    opacity: 1,
                  },
                }"
              >
                استمع واستمتع مع ليبيا
                <strong class="text-[#68FDF3]">اف ام</strong>
              </p>
              <div class="mt-10">
                <p
                  class="text-2xl ml-10 text-[#68FDF3] relative"
                  @mouseenter="showArrow = true"
                  @mouseleave="showArrow = false"
                  v-motion="{
                    initial: {
                      x: -100,
                      opacity: 0,
                    },
                    enter: {
                      x: 0,
                      opacity: 1,
                    },
                  }"
                >
                  <span
                    v-if="showArrow"
                    class="absolute inline-block -mr-7 my-2"
                    v-motion="{
                      initial: { x: -10, opacity: 0 },
                      enter: { x: 0, opacity: 1 },
                    }"
                  >
                    <svg
                      viewBox="0 0 48 48"
                      fill="#68FDF3"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                    >
                      <path
                        d="M12 12L24 24L12 36"
                        stroke="#68FDF3"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M24 12L36 24L24 36"
                        stroke="#68FDF3"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  دعنا نذهب للموسيقى
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative shadow-xl sm:overflow-hidden bg-[#071124]"
          id="banner"
        >
          <div class="w-full py-10 text-center mx-auto relative z-0">
            <!-- Play/Pause Button -->
            <div class="player-controls mx-auto">
              <button
                class="control-btn w-[50px] h-[50px] flex items-center justify-center pr-1 opacity-80 hover:opacity-100 duration-200 transition-all ease-in-out"
                @click="rewind"
              >
                <svg
                  fill="#ffffff"
                  viewBox="0 0 28 28"
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path d="M2 4v24l10.5-12L2 4zm12 0v24l10.5-12L14 4z" />
                </svg>
              </button>
              <button
                class="control-btn play-btn opacity-80 hover:opacity-100 duration-200 transition-all ease-in-out"
                @click="togglePlay"
              >
                <svg
                  v-if="!isPlaying"
                  width="75"
                  height="75"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37 28V75L73 51.5L37 28Z" fill="white" />
                </svg>
                <svg
                  v-else
                  width="75"
                  height="75"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="32" y="32" width="12" height="35" fill="white" />
                  <rect x="56" y="32" width="12" height="35" fill="white" />
                </svg>
              </button>
              <button
                class="control-btn w-[50px] h-[50px] flex items-center justify-center pl-1 opacity-80 hover:opacity-100 duration-200 transition-all ease-in-out"
                @click="forward"
              >
                <svg
                  fill="#ffffff"
                  viewBox="0 0 28 28"
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path
                    d="M27.136,3.736C27.508,3.332,28,3.45,28,4v24c0,0.55-0.492,0.668-0.864,0.264L16.449,16.736 c-0.372-0.405-0.325-1.068,0.047-1.473L27.136,3.736z"
                  ></path>
                  <path
                    d="M14.297,3.736C14.669,3.332,15,3.45,15,4v24c0,0.55-0.331,0.668-0.703,0.264L3.69,16.736 c-0.372-0.405-0.365-1.068,0.007-1.473L14.297,3.736z"
                  ></path>
                </svg>
              </button>
            </div>

            <!-- Audio Element -->
            <audio ref="audios" id="audio" crossorigin="anonymous">
              <source :src="info.streamingUrl" type="audio/mpeg" />
            </audio>
            <div class="px-20 mt-4">
              <VueAudioMotionAnalyzer :options="options" :source="audio" />
            </div>
          </div>
          <div
            class="relative px-4 pt-32 sm:px-6 sm:pt-24 lg:pt-32 lg:px-8 flex justify-center items-center"
          ></div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </main>
  </div>
</template>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isPlaying: false,
      showArrow: false,
      currentTime: 0,
      duration: 0,
      playerState: "Play",
      isMenuOpen: false,
      info: null,
      audio: ref(null),
      socialMediaLinks: {
        facebook: null,
        twitter: null,
        instagram: null,
        tiktok: null,
      },
      options: {
        loRes: false,
        mode: 3,
        barSpace: 0.1,
        gradientLeft: "rainbow",
        ledBars: false,
        lumiBars: false,
        outlineBars: false,
        radial: false,
        showBgColor: false,
        showFPS: false,
        showPeaks: true,
        showScaleX: false,
        showScaleY: false,
        splitGradient: false,
        channelLayout: "single",
        overlay: true,
        fillAlpha: 1,
        spinSpeed: 5,
      },
    };
  },
  methods: {
    togglePlay() {
      const audio = this.$refs.audios;
      this.audio = audio;
      this.isPlaying ? audio.pause() : audio.play();
      this.isPlaying = !this.isPlaying;
    },
    rewind() {
      this.$refs.audios.currentTime -= 15;
    },
    forward() {
      this.$refs.audios.currentTime += 15;
    },
    seek(event) {
      this.$refs.audios.currentTime = event.target.value;
    },
    updateTime() {
      this.currentTime = this.$refs.audios.currentTime;
    },
    loadMetadata() {
      this.duration = this.$refs.audios.duration;
    },
    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? "0" : ""}`;
    },
    playPause() {
      if (this.$refs.player.paused) {
        this.$refs.player.play();
        this.playerState = "Pause";
      } else {
        this.$refs.player.pause();
        this.playerState = "Play";
      }
    },
    createLink(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].platformName === "Facebook") {
          this.socialMediaLinks.facebook = data[i].URL;
        } else if (data[i].platformName === "Twitter") {
          this.socialMediaLinks.twitter = data[i].URL;
        } else if (data[i].platformName === "Instagram") {
          this.socialMediaLinks.instagram = data[i].URL;
        } else if (data[i].platformName === "tiktok") {
          this.socialMediaLinks.tiktok = data[i].URL;
        }
      }
    },
  },
  async beforeMount() {
    // get

    this.info = await $fetch("https://mobile.uob.edu.ly/libya-fm");
    this.createLink(this.info.socialMediaLinks);
  },
};
// this.audio = document.getElementById("audio");
</script>



<style scoped>
.player-but {
  width: 100px;
}

.socel {
  text-align: center;
  position: relative;
  margin-top: 5%;
  right: 10%;
}

.fa {
  padding: 20px;
  font-size: 45px;
  text-decoration: none;
  margin: 10px 10px;
  border-radius: 50%;
}

.fa:hover {
  color: #23bcdf;
}

.fa-facebook {
  color: #f0efeb;
}

.fa-twitter {
  color: #f0efeb;
}

.fa-youtube {
  color: #f0efeb;
}

.fa-instagram {
  color: #f0efeb;
}

.player-a {
  width: 350px;
}

.home {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

#container {
  min-height: 100vh;
  display: flex;
}

.left {
  width: 60vw;
  background-color: #031216;
  position: relative;
}

.right {
  width: 50vw;
  background-color: #031216;
}

/* .disc{
  width: 28em; height: 28em;
  border-radius: 50%;
  background-color: #333333;
  position: absolute;
  top: 50%; right: -13em;
  transform: translateY(-50%);
} */
.logo {
  top: 30%;
  right: 8.5em;
  transform: translateY(60%);
  height: 45em;
  position: absolute;
}

.about {
  text-align: center;
  float: right;
  position: absolute;
  left: 70%;
  right: 3%;
  margin: -25px 0 0 -25px;
  margin-top: 15%;
}

.about h1 {
  font-family: "Cairo", sans-serif;
  font-size: 120px;
  margin-bottom: 30px;
  color: #23bcdf;
}

.about p {
  font-family: "Cairo", sans-serif;
  font-size: 20px;

  color: #f0efeb;
}

.blue {
  color: #23bcdf;
  font-weight: bold;
}

.ele-wrap {
  width: 300px;
  height: 400px;
  display: block;
  left: 5%;
  margin-top: 10%;
  border-radius: 50%;
  text-align: center;
}

@media all and (min-width: 1024px) and (max-width: 2500px) {
  .title {
    font-size: 30px;
  }

  .about h1 {
    margin-top: 5%;
    font-size: 45px;
    margin-bottom: 10px;
  }

  .about p {
    margin-top: 5%;
    font-size: 25px;
  }

  .storePhoto {
    margin-top: 5%;
  }

  .appStore {
    float: left;
    width: 38%;
    padding: 5px;
    margin: 5%;
  }

  .googlePlay {
    float: left;
    width: 45%;
    padding: 5px;
    margin: 3%;
  }

  .logo {
    top: 30%;
    right: -5em;
    transform: translateY(-70%);
    height: 25em;
    position: absolute;
  }

  #fTitle {
    font-size: 35px;
  }

  .fLogo {
    width: 35%;
    margin-top: 1%;
  }

  .ele-wrap a {
    display: block;
    margin-left: 80%;
    margin-right: auto;
    margin-top: 80%;
  }
}

.vueperslide {
  border-radius: 1.5rem;
}

#banner {
  float: none;

  position: relative;
}

#banner img {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
}

.vueperslide {
  border-radius: 1.5rem;
}

@font-face {
  font-family: "BukraFont";
  src: url("../static/fonts/29LT-Bukra-Bolds.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "BukraFont";
  src: url("../static/fonts/29LT-Bukra-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "BukraFont";
  src: url("../static/fonts/29LT-Bukra-Light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

.videoContainer {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  background-attachment: scroll;
  overflow: hidden;
}

.videoContainer video {
  min-width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 1;
}

.videoContainer .overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: green;
  opacity: 0.5;
}

.bg-animated {
  background: linear-gradient(
    -45deg,
    #ba3167,
    #ba3167,
    #293c8b,
    #293c8b,
    #ba3167,
    #ba3167
  );
  background-size: 400% 400%;
  -webkit-animation: gradient 30s ease infinite;
  animation: gradient 30s ease infinite;
}

.bg-animated-2 {
  background: linear-gradient(
    -90deg,
    #ba3167,
    #293c8b,
    #293c8b,
    #ba3167,
    #293c8b,
    #293c8b,
    #ba3167
  );
  background-size: 400% 400%;
  -webkit-animation: gradient 20s ease infinite;
  animation: gradient 20s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes quiet {
  25% {
    transform: scaleY(0.6);
  }

  50% {
    transform: scaleY(0.4);
  }

  75% {
    transform: scaleY(0.8);
  }
}

@keyframes normal {
  25% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0.4);
  }

  75% {
    transform: scaleY(0.6);
  }
}

@keyframes loud {
  25% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0.4);
  }

  75% {
    transform: scaleY(1.2);
  }
}

body {
  display: flex;
  justify-content: center;
  background: black;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100vh;
}

.boxContainer {
  display: flex;
  justify-content: space-between;
  height: 64px;
  --boxSize: 8px;
  --gutter: 4px;
  width: calc((var(--boxSize) + var(--gutter)) * 100);
}

.box {
  transform: scaleY(0.4);
  height: 100%;
  width: var(--boxSize);

  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  border-radius: 8px;
}

.box1 {
  animation-name: quiet;
}

.box2 {
  animation-name: normal;
}

.box3 {
  animation-name: quiet;
}

.box4 {
  animation-name: loud;
}

.box5 {
  animation-name: quiet;
}
.player-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.control-btn {
  background-color: #ba3167;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.play-btn {
  width: 75px;
  height: 75px;
}
.progress-bar input[type="range"] {
  width: 100%;
  background: linear-gradient(to right, #ba3167 0%, #d6d6d6 100%);
  border-radius: 10px;
}
</style>
