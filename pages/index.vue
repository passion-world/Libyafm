<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
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
                  'https://mobile.uob.edu.ly' +
                  info.data.logo.formats.thumbnail.url
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

    <a class="w-full block py-5 text-center items-center mx-auto relative z-0">
      <div
        class="boxContainer mx-auto absolute inset-x-0 bottom-0 -mb-9"
        v-if="playerState == 'Pause'"
      >
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box4 bg-libya-pink-500"></div>
        <div class="box box3 bg-libya-pink-500"></div>
        <div class="box box2 bg-libya-pink-500"></div>
        <div class="box box5 bg-libya-pink-500"></div>
        <div class="box box1 bg-libya-pink-500"></div>
      </div>

      <div
        class="boxContainer mx-auto absolute inset-x-0 bottom-0 -mb-[63px] bg-gray-50"
      ></div>
      <a class="player-a mx-auto" @click="playPause">
        <svg
          class="player-but mx-auto"
          v-if="playerState == 'Play'"
          width="75"
          height="75"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37 28V75L73 51.5L37 28Z" fill="white" />
          <path
            d="M50 99.5C22.6619 99.5 0.5 77.3381 0.5 50C0.5 22.6619 22.6619 0.5 50 0.5C77.3381 0.5 99.5 22.6619 99.5 50C99.5 77.3381 77.3381 99.5 50 99.5Z"
            stroke="#fff"
          />
          <path
            d="M50 8.33334C27 8.33334 8.33333 27 8.33333 50C8.33333 73 27 91.6667 50 91.6667C73 91.6667 91.6667 73 91.6667 50C91.6667 27 73 8.33334 50 8.33334ZM41.6667 68.75V31.25L66.6667 50L41.6667 68.75Z"
            fill="#BA3167"
          />
        </svg>
        <svg
          class="player-but mx-auto"
          v-else
          width="75"
          height="75"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37 28V75L73 51.5L37 28Z" fill="#293C8B" />
          <path
            d="M50 99.5C22.6619 99.5 0.5 77.3381 0.5 50C0.5 22.6619 22.6619 0.5 50 0.5C77.3381 0.5 99.5 22.6619 99.5 50C99.5 77.3381 77.3381 99.5 50 99.5Z"
            stroke="#000"
          />
          <path
            d="M50 8.33334C27 8.33334 8.33333 27 8.33333 50C8.33333 73 27 91.6667 50 91.6667C73 91.6667 91.6667 73 91.6667 50C91.6667 27 73 8.33334 50 8.33334ZM41.6667 68.75V31.25L66.6667 50L41.6667 68.75Z"
            fill="#293C8B"
          />
          <path
            d="M32 67H43.6667V32H32V67ZM55.3333 32V67H67V32H55.3333Z"
            fill="white"
          />
        </svg>
      </a>

      <audio ref="player">
        <source :src="info.data.streamingUrl" type="audio/mpeg" />
      </audio>
    </a>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-gray-50 pb-20 z-40 relative" id="info">
      <nav
        class="bg-gray-50 flex justify-between text-sm text-blue-900 uppercase z-40 pt-5 pb-20"
      >
        <a
          class="w-full block py-5 text-center items-center mx-auto grid grid-cols-4 max-w-4xl"
        >
          <a
            :href="this.socialMediaLinks.facebook"
            class="text-libya-blue-400 hover:text-pink-500 mx-auto"
          >
            <span class="sr-only">Facebook</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            :href="this.socialMediaLinks.instagram"
            class="text-libya-blue-400 hover:text-pink-500 mx-auto"
          >
            <span class="sr-only">Instagram</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            :href="this.socialMediaLinks.twitter"
            class="text-libya-blue-400 hover:text-pink-500 mx-auto"
          >
            <span class="sr-only">Twitter</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
          <a
            :href="this.socialMediaLinks.tiktok"
            class="text-libya-blue-400 hover:text-pink-500 mx-auto"
          >
            <span class="sr-only">Tiktok</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </a>
      </nav>
      <div class="max-w-7xl mx-auto py-2 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div class="text-center">
          <img
            class="h-32 w-auto sm:h-32 mx-auto"
            src="~/assets/libyafm-logo.svg"
            alt=""
          />

          <!-- <h2
            class="
              text-base
              font-semibold
              text-libya-blue-500
              tracking-wide
              uppercase
            "
          >
            عن راديو
          </h2> -->
          <p
            class="mt-1 text-3xl font-extrabold text-libya-pink-500 sm:text-3xl sm:tracking-tight lg:text-3xl"
          >
            {{ info.data.RadioName }}
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl font-medium text-gray-500">
            {{ info.data.about }} <br />
          </p>

          <div class="grid grid-cols-2 mx-auto max-w-sm py-8">
            <button
              class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-7 h-7 text-libya-pink-500"
                viewBox="0 0 512 512"
              >
                <path
                  d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                ></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">حمله الان</span>
                <span class="font-bold">جوجل بلاي</span>
              </span>
            </button>
            <button
              class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-7 h-7 text-libya-pink-500"
                viewBox="0 0 305 305"
              >
                <path
                  d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                ></path>
                <path
                  d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                ></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">حمله الان</span>
                <span class="font-bold">الاب ستور</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-animated-2 text-white" id="team">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div
            class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
          >
            <h2
              class="text-3xl font-extrabold tracking-tight sm:text-4xl text-center"
            >
              فـريقـنـا
            </h2>
          </div>
          <ul
            role="list"
            class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8 hidden sm:block"
            style="direction: ltr"
          >
            <ssr-carousel
              :slides-per-page="2"
              show-arrows
              show-dots
              loop
              :autoplay-delay="4"
            >
              <li
                class="slide"
                v-for="staff in info.data.staff_members"
                :key="staff.id"
              >
                <div class="space-y-4">
                  <img
                    class="h-100 w-fit mx-auto"
                    :src="
                      'https://mobile.uob.edu.ly' +
                      staff.avatar.formats.small.url
                    "
                    alt=""
                  />
                  <div class="space-y-2">
                    <div
                      class="text-xl leading-6 font-medium space-y-1 text-center"
                    >
                      <h3>{{ staff.name }}</h3>
                      <p class="text-libya-pink-400 text-lg text-center">
                        {{ staff.title }}
                      </p>
                    </div>
                    <ul role="list" class="flex space-x-5 space-x-reverse">
                      <li
                        v-for="link in staff.staffSoicalMediaLinks"
                        :key="link.id"
                      >
                        <a :href="link.URL" class="text-red-600">
                          <span class="sr-only">Twitter</span>
                          <svg
                            v-if="link.platformName === 'twitter'"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                            />
                          </svg>

                          <svg
                            v-else-if="link.platformName === 'facebook'"
                            data-v-314f53c6=""
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="h-5 w-5"
                          >
                            <path
                              data-v-314f53c6=""
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>

                          <svg
                            v-else-if="link.platformName === 'instagram'"
                            data-v-314f53c6=""
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="h-5 w-5"
                          >
                            <path
                              data-v-314f53c6=""
                              fill-rule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ssr-carousel>
            <!-- More people... -->
          </ul>
          <ul
            role="list"
            class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8 block sm:hidden"
            style="direction: ltr"
          >
            <ssr-carousel
              :slides-per-page="1"
              show-arrows
              show-dots
              loop
              :autoplay-delay="4"
            >
              <li
                class="slide"
                v-for="staff in info.data.staff_members"
                :key="staff.id"
              >
                <div class="space-y-4">
                  <img
                    class="h-100 w-fit mx-auto"
                    :src="
                      'https://mobile.uob.edu.ly' +
                      staff.avatar.formats.small.url
                    "
                    alt=""
                  />

                  <div class="space-y-2">
                    <div
                      class="text-xl leading-6 font-medium space-y-1 text-center"
                    >
                      <h3>{{ staff.name }}</h3>
                      <p class="text-libya-pink-400 text-lg text-center">
                        {{ staff.title }}
                      </p>
                    </div>
                    <ul role="list" class="flex space-x-5 space-x-reverse">
                      <li
                        v-for="link in staff.staffSoicalMediaLinks"
                        :key="link.id"
                      >
                        <a :href="link.URL" class="text-red-600">
                          <span class="sr-only">Twitter</span>
                          <svg
                            v-if="link.platformName === 'twitter'"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                            />
                          </svg>

                          <svg
                            v-else-if="link.platformName === 'facebook'"
                            data-v-314f53c6=""
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="h-5 w-5"
                          >
                            <path
                              data-v-314f53c6=""
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>

                          <svg
                            v-else-if="link.platformName === 'instagram'"
                            data-v-314f53c6=""
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="h-5 w-5"
                          >
                            <path
                              data-v-314f53c6=""
                              fill-rule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ssr-carousel>
            <!-- More people... -->
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white" id="programs">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-1 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4 mb-16">
            <h2
              class="text-3xl font-extrabold tracking-tight sm:text-4xl text-center"
            >
              البرامج
            </h2>
            <p class="text-xl text-gray-500 text-center">
              برامج شبابية ذات محتوى قيم وهادف بطريقة معاصرة
            </p>
          </div>
          <div class="lg:col-span-2 hidden sm:block">
            <ul
              class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              style="direction: ltr"
            >
              <ssr-carousel
                :slides-per-page="2"
                show-arrows
                show-dots
                loop
                peek="80"
                :autoplay-delay="4"
              >
                <li
                  class="slide"
                  v-for="program in info.data.radioPrograms"
                  :key="program.title"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-16 aspect-h-9 h-100">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        :src="
                          'https://mobile.uob.edu.ly' +
                          program.programCoverImage.formats.medium.url
                        "
                        alt=""
                      />
                    </div>
                    <div
                      class="text-2xl leading-6 font-medium space-y-1 text-center"
                    >
                      <h3 class="text-libya-pink-500 pt-4 font-bold">
                        {{ program.programName }}
                      </h3>

                      <p class="text-lg" v-if="program.Host.length > 0">
                        <span class="text-lg">مع </span>
                        <span v-for="host in program.Host" :key="host.id">
                          {{ host.hostName }}
                          <span v-if="program.Host > 1">,</span>
                        </span>
                      </p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500 text-center">
                        {{ program.programDescription }}
                      </p>
                    </div>
                  </div>
                </li>
              </ssr-carousel>

              <!-- More people... -->
            </ul>
          </div>

          <div class="lg:col-span-2 block sm:hidden">
            <ul
              class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              style="direction: ltr"
            >
              <ssr-carousel
                :slides-per-page="1"
                show-arrows
                show-dots
                loop
                peek="80"
                :autoplay-delay="4"
              >
                <li
                  class="slide"
                  v-for="program in info.data.radioPrograms"
                  :key="program.title"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-16 aspect-h-9 h-100">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        :src="
                          'https://mobile.uob.edu.ly' +
                          program.programCoverImage.formats.medium.url
                        "
                        alt=""
                      />
                    </div>
                    <div
                      class="text-2xl leading-6 font-medium space-y-1 text-center"
                    >
                      <h3 class="text-libya-pink-500 pt-4 font-bold">
                        {{ program.programName }}
                      </h3>

                      <p class="text-lg" v-if="program.Host.length > 0">
                        <span class="text-lg">مع </span>
                        <span v-for="host in program.Host" :key="host.id">
                          {{ host.hostName }}
                          <span v-if="program.Host > 1">,</span>
                        </span>
                      </p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500 text-center">
                        {{ program.programDescription }}
                      </p>
                    </div>
                  </div>
                </li>
              </ssr-carousel>

              <!-- More people... -->
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-animated-2" id="flashes">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-1 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4 mb-16">
            <h2
              class="text-3xl font-extrabold tracking-tight sm:text-4xl text-center text-libya-blue-50"
            >
              الفلاشات
            </h2>
          </div>
          <div class="lg:col-span-2 hidden sm:block">
            <ul
              class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              style="direction: ltr"
            >
              <ssr-carousel
                :slides-per-page="3"
                show-dots
                loop
                peek="20"
                :autoplay-delay="4"
              >
                <li
                  class="slide"
                  v-for="program in info.data.radioPrograms"
                  :key="program.title"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-16 aspect-h-9 h-100">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        :src="
                          'https://mobile.uob.edu.ly' +
                          program.programCoverImage.formats.medium.url
                        "
                        alt=""
                      />
                    </div>
                    <div
                      class="text-2xl leading-6 font-medium space-y-1 text-center"
                    >
                      <h3 class="text-libya-pink-300 pt-4 font-bold">
                        {{ program.programName }}
                      </h3>

                      <p
                        class="text-lg text-libya-blue-50"
                        v-if="program.Host.length > 0"
                      >
                        <span class="text-lg text-libya-blue-50">مع </span>
                        <span v-for="host in program.Host" :key="host.id">
                          {{ host.hostName }}
                          <span v-if="program.Host > 1">,</span>
                        </span>
                      </p>
                    </div>
                    <div class="text-lg">
                      <p class="text-white text-center">
                        {{ program.programDescription }}
                      </p>
                    </div>
                  </div>
                </li>
              </ssr-carousel>

              <!-- More people... -->
            </ul>
          </div>
          <div class="lg:col-span-2 block sm:hidden">
            <ul
              class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              style="direction: ltr"
            >
              <ssr-carousel
                :slides-per-page="1"
                show-dots
                loop
                peek="20"
                :autoplay-delay="4"
              >
                <li
                  class="slide"
                  v-for="program in info.data.radioPrograms"
                  :key="program.title"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-16 aspect-h-9 h-100">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        :src="
                          'https://mobile.uob.edu.ly' +
                          program.programCoverImage.formats.medium.url
                        "
                        alt=""
                      />
                    </div>
                    <div
                      class="text-2xl leading-6 font-medium space-y-1 text-center"
                    >
                      <h3 class="text-libya-pink-300 pt-4 font-bold">
                        {{ program.programName }}
                      </h3>

                      <p
                        class="text-lg text-libya-blue-50"
                        v-if="program.Host.length > 0"
                      >
                        <span class="text-lg text-libya-blue-50">مع </span>
                        <span v-for="host in program.Host" :key="host.id">
                          {{ host.hostName }}
                          <span v-if="program.Host > 1">,</span>
                        </span>
                      </p>
                    </div>
                    <div class="text-lg">
                      <p class="text-white text-center">
                        {{ program.programDescription }}
                      </p>
                    </div>
                  </div>
                </li>
              </ssr-carousel>

              <!-- More people... -->
            </ul>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto pt-2 pb-8 px-4 sm:px-6 lg:pt-2 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8"></div>
        <div
          class="mb-24 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16"
        >
          <div class="flex content-center space-x-6 space-x-reverse md:order-2">
            <a
              :href="this.socialMediaLinks.facebook"
              class="text-libya-blue-400 hover:text-pink-500"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              :href="this.socialMediaLinks.instagram"
              class="text-libya-blue-400 hover:text-pink-500"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              :href="this.socialMediaLinks.twitter"
              class="text-libya-blue-400 hover:text-pink-500"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a
              :href="this.socialMediaLinks.tiktok"
              class="text-libya-blue-400 hover:text-pink-500"
            >
              <span class="sr-only">Tiktok</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                />
              </svg>
            </a>
          </div>
          <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            <a
              href="PrivacyPolicy"
              class="text-base text-libya-pink-600 hover:text-gray-300"
            >
              سياسية الخصوصية
            </a>
            - &copy; 2022 ليبيا اف ام . جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      playerState: "Play",
      isMenuOpen: false,
      info: null,
      socialMediaLinks: {
        facebook: null,
        twitter: null,
        instagram: null,
        tiktok: null,
      },
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
    // modifyImageUrl(url) {
    //   // Add the prefix to the image URL
    //   return `https://mobile.uob.edu.ly${url}`;
    // },
    createLink(data) {
      // data is an array of objects loop through it and return the url of the platformName
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
  // computed: {
  //   modifiedImageUrl() {
  //     return this.modifyImageUrl(url);
  //   },
  // },
  mounted() {
    //  this.createLink(this.info);
  },
  beforeMount() {
    // get

    const axios = require("axios");

    axios.get("https://mobile.uob.edu.ly/libya-fm").then((resp) => {
      this.info = resp;
      console.log(this.info.data);
      this.createLink(this.info.data.socialMediaLinks);
      this.$refs.player.play();
    });
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
</style>
