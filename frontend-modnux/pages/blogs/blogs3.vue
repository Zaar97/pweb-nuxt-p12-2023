<template>
    <div class="p-10 mt-20">
      <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full h-auto"
          :src="`http://localhost:8080${blog3.postImage.url}`"
          :alt="blog3.postImage.alt"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-2xl mb-2">{{ blog3.postMeta.title }}</div>
          <p class="text-gray-700 text-lg">
            {{ blog3.layout[0].content }}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#disgusting</span>
          <span class="badge mr-2">#theworst</span>
          <span class="badge">#pizza</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const { data:blog3 }= await useFetch('http://localhost:8080/api/Blogs/656b2e505a95a8bc4611a9e0?locale=undefined&draft=false&depth=1')
  </script>
    