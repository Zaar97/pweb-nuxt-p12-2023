<template>
<div>
    <!-- Hero Section with Illustration -->
      <div class="hero-section bg-gradient-to-l from-blue-950 to-purple-900 transition ease-in-out min-h-screen flex items-center justify-center space-x-9">
    <div class="w-1/3 px-4 mr-10"><img src="~assets/rocket.png" alt="Rocket Illustration" class="w-full h-auto" /></div>
    <div class="rounded-lg bg-blue-700 shadow-lg transition flex flex-col md:flex-row items-center md:w-1/3">
      <!-- Content Container -->
      <div class="md:w-full mx-auto px-2 sm:px-6">
        <div class="hero-content-inner p-10 pt-4 md:pt-16 pb-4 md:pb-10 text-center">
          <div class="hero-header pb-8 md:pb-10">
            <h1 class="text-4xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-2">
              The Final
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Chapter.</span>
            </h1>
            <p class="text-lg text-white md:text-xlte xt-gray-600 mb-4">
              Welcome to the end of our web programming practicum, the final chapter, the end of an era. 
            </p>
            <div class="hero-buttons max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <NuxtLink to="/about">
                <button type="button" class="text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More!</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- What Are We Doing For Our Final Project? Section -->
    <div class="final-project-section bg-blue-600 min-h-screen flex items-center justify-center">
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
    <!-- Featured Blogs Section -->
    <div class="cards-section bg-gradient-to-r from-blue-500 to-indigo-700 transition ease-in-out min-h-screen flex items-center justify-center">
      <div class="rounded-lg p-6">
        <div class="container-xl">
          <h1 class="text-4xl text-white md:text-6xl font-extrabold">Featured Blogs</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-20">
            <!-- Loop through the first 6 blogs -->
            <div v-for="(blog, index) in featuredBlogs.slice(0, 6)" :key="index" class="card mb-8">
              <card :blog="blog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const featuredBlogs = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/Blogs');
    featuredBlogs.value = response.data.docs;
    console.log(featuredBlogs.value)
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
});


</script>