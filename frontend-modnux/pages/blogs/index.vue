<template>
    <div class="cards-section bg-gradient-to-b from-blue-500 to-indigo-700 transition ease-in-out min-h-screen flex items-center justify-center mt-16">
      <div class="rounded-lg p-6">
        <div class="container-xl">
          <h1 class="text-4xl text-white md:text-6xl font-extrabold">Blog Lists</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-20">
            <!-- Loop through the first 6 blogs -->
            <div v-for="(blog, index) in featuredBlogs.slice(0, 6)" :key="index" class="card mb-8">
              <card :blog="blog" />
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