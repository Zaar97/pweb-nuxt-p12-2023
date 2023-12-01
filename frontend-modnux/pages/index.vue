<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section bg-blue-500 transition ease-in-out min-h-screen flex items-center justify-center">
      <div class="rounded-lg bg-white p-6 shadow-lg transition">
        <NuxtLayout />
        <div class="hero">
          <div class="hero-illustration" aria-hidden="true"></div>

          <div class="hero-content w-6xl mx-auto px-7 sm:px-6">
            <div class="hero-content-inner p-20 pt-8 md:pt-32 pb-8 md:pb-20 text-center">
              <div class="hero-header pb-12 md:pb-16">
                <h1 class="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                  The Final
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Chapter.</span>
                </h1>
                <p class="text-lg md:text-xl text-gray-600 mb-8">
                  Welcome to the end of our web programming practicum, the final chapter, the end of an era. 
                </p>
                <div class="hero-buttons max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <button type="button" class="text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What Are We Doing For Our Final Project? Section -->
    <div class="final-project-section bg-blue-200 min-h-screen flex items-center justify-center">
      <div class="rounded-lg bg-white max-w-6xl p-5 shadow-lg transition">
        <div class="container-xl">
          <div class="flex flex-col items-center justify-center mt-8 mb-8 md:mt-20 sm:px-6">
            <h1 class="text-3xl md:text-5xl text-center font-extrabold mb-4 md:mb-8">
              What Are We Doing For
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Our Final Project?</span>
            </h1>
            <p class="text-sm md:text-lg w-full md:w-1/2 text-center text-gray-600 mb-8">
              For our final project on web programming, we are assigned to create a functional website using Javascript frameworks for Front-End such as VueJs, NuxtJs and PayloadCMS for Back-End.
            </p>
            <NuxtLink to="/blogs">
              <button
                type="button"
                class="btn text-white text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition ease-in-out duration-300 transform hover:scale-105"
              >
                See Blogs!
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Four Cards Section -->
    <div class="cards-section bg-blue-500 transition ease-in-out min-h-screen flex items-center justify-center">
      <div class="rounded-lg bg-white p-6 shadow-lg transition">
        <div class="container-xl">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-20">
            <!-- Card 1 -->
            <div class="card">
              <img src="" alt="Card Image 1" class="w-full h-40 object-cover mb-4" />
              <div class="text-center">
                <h3 class="text-xl md:text-2xl font-semibold mb-2">Card Title 1</h3>
                <p class="text-gray-600">Card Description 1</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="card">
              <img src="" alt="Card Image 2" class="w-full h-40 object-cover mb-4" />
              <div class="text-center">
                <h3 class="text-xl md:text-2xl font-semibold mb-2">Card Title 2</h3>
                <p class="text-gray-600">Card Description 2</p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="card">
              <img src="" alt="Card Image 3" class="w-full h-40 object-cover mb-4" />
              <div class="text-center">
                <h3 class="text-xl md:text-2xl font-semibold mb-2">Card Title 3</h3>
                <p class="text-gray-600">Card Description 3</p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="card">
              <img src="" alt="Card Image 4" class="w-full h-40 object-cover mb-4" />
              <div class="text-center">
                <h3 class="text-xl md:text-2xl font-semibold mb-2">Card Title 4</h3>
                <p class="text-gray-600">Card Description 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Existing Card Component (if you have a separate card component) -->
    <div class="existing-card-section bg-blue-200 min-h-screen flex items-center justify-center">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <card />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>
