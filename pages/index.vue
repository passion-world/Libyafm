<script setup>
import "vue3-carousel/carousel.css";
import { VueAudioMotionAnalyzer } from "vite-plugin-vue-audiomotion";
</script>

<template>
  <div class="bg-white" v-if="info != null">
    <header>
      <div class="relative">
        <div
          class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 md:space-x-reverse lg:px-8"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-16 w-auto sm:h-16"
                src="~/assets/libyafm-logo.svg"
                alt=""
              />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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

          <div
            class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8 space-x-reverse"
          >
            <a
              href="#info"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              عن الراديو
            </a>
            <a
              href="#team"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              فـريقـنـا
            </a>
            <a
              href="#programs"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              البرامج
            </a>
            <a
              href="#flashes"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              الفلاشات
            </a>
            <a
              href="mailto:info@libyafm.fm"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-libya-pink-500 to-libya-blue-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-libya-blue-400 hover:to-libya-pink-400"
            >
              تواصل معنا
            </a>
          </div>
        </div>

        <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --></div>
    </header>

    <main>
      <!-- Hero section -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2"></div>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div
            class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden bg-animated-2"
            id="banner"
          >
            <div
              class="relative px-4 pt-32 sm:px-6 sm:pt-24 lg:pt-32 lg:px-8 flex justify-center items-center"
            >
              <img
                style="object-fit: contain; width: 270px; height: 110px"
                :src="
                  'https://mobile.uob.edu.ly' + info.logo.formats.thumbnail.url
                "
                alt=""
              />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </main>

    <div
      class="audio-player w-full py-5 text-center mx-auto relative z-0 max-w-7xl"
    >
      <!-- Play/Pause Button -->
      <div class="player-controls mx-auto">
        <button
          class="control-btn w-[50px] h-[50px] flex items-center justify-center pr-1"
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
        <button class="control-btn play-btn" @click="togglePlay">
          <svg
            v-if="!isPlaying"
            width="75"
            height="75"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37 28V75L73 51.5L37 28Z" fill="white" />
            <circle cx="50" cy="50" r="49.5" stroke="white" />
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
            <circle cx="50" cy="50" r="49.5" stroke="white" />
          </svg>
        </button>
        <button
          class="control-btn w-[50px] h-[50px] flex items-center justify-center pl-1"
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
        gradientLeft: "steelblue",
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
.audio-player {
  font-family: "My Font", sans-serif;
  color: #ba3167;
}
.player-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.control-btn {
  background-color: #ba3167;
  color: white;
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
