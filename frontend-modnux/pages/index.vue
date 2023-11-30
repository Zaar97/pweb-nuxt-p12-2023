<template>
    <div>
      <NuxtLayout />
    </div>
  <div class="hero">
    <div class="hero-illustration" aria-hidden="true">
      <svg
        width="1360"
        height="578"
        viewBox="0 0 1360 578"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="illustration-01"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop stop-color="#FFF" offset="0%" />
            <stop stop-color="#EAEAEA" offset="77.402%" />
            <stop stop-color="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fill-rule="evenodd">
          <circle cx="1232" cy="128" r="128" />
          <circle cx="155" cy="443" r="64" />
        </g>
      </svg>
    </div>

    <div class="hero-content max-w-6xl mx-auto px-4 sm:px-6">
      <div class="hero-content-inner pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="hero-header text-center pb-12 md:pb-16">
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
          >
            Make your website <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Our landing page template works on all devices, so you only have
            to set it up once, and get beautiful results forever.
          </p>
          <div class="hero-buttons max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <a
              href="#0"
              class="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
            >
              Start free trial
            </a>
            <a
              href="#0"
              class="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div >

  <div class="container-xl max-w-screen justify-items-center mx-10-p-10 sm:px-6">
    <h1 class="mb-10 h-10 text-5xl md:text-6xl text-center font-extrabold">What Are We Doing For Our Final Project?</h1>
    <p class="mx-auto w-1/2 text-xl text-center text-gray-600 mb-8">For our final project on web programming, we are assigned to create a functional website using Javascript frameworks for Front-End such as VueJs, NuxtJs and PayloadCMS for Back-End.</p>
    <button></button>
  </div>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <card />
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.hero {
  position: relative;
  background-color: #f7f9fa;
}

.hero-illustration {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  pointer-events: none;
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-content-inner {
  text-align: center;
}

.hero-header {
  margin-bottom: 3rem;
}

.hero-buttons {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
}
</style>

  <style lang="postcss" scoped>
  .badge {
    @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
    &:hover {
      @apply bg-gray-300;
    }
  }
  </style>