<template>
  <div class="max-h-screen bg-madinati-red-500" dir="rtl">
   
    <div class="max-h-screen  bg-zinc-900">
  <Nuxt />

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->

 
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      playerState: "Play",
      isMenuOpen : false,
    };
  },
  methods: {
    playPause() {
      if (this.$refs.player.paused) {
        this.$refs.player.play();
        this.playerState = "Pause";
      } else {
        this.$refs.player.pause();
        this.playerState = "Play";
      }
    },
  },
};
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
</style>
