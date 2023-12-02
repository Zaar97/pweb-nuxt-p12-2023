<template>
    <div class="p-10 mt-20">
      <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full h-auto"
          :src="`http://localhost:8080${blog6.postImage.url}`"
          :alt="blog6.postImage.alt"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-2xl mb-2">{{ blog6.postMeta.title }}</div>
          <p class="text-gray-700 text-lg">
            {{ blog6.layout[0].content }}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#spiderman</span>
          <span class="badge mr-2">#venom</span>
          <span class="badge">#peace</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const { data:blog6 }= await useFetch('http://localhost:8080/api/Blogs/656b32c15a95a8bc4611ab91?locale=undefined&draft=false&depth=1')
  </script>
    