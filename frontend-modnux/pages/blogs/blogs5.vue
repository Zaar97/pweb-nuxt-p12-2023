<template>
    <div class="p-10 mt-20">
      <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full h-auto"
          :src="`http://localhost:8080${blog5.postImage.url}`"
          :alt="blog5.postImage.alt"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-2xl mb-2">{{ blog5.postMeta.title }}</div>
          <p class="text-gray-700 text-lg">
            {{ blog5.layout[0].content }}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#naruto2024</span>
          <span class="badge mr-2">#hokage</span>
          <span class="badge">#konoha</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const { data:blog5 }= await useFetch('http://localhost:8080/api/Blogs/656b318a5a95a8bc4611ab41?locale=undefined&draft=false&depth=1')
  </script>
    