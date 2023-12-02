<template>
    <div class="p-10 mt-20">
      <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full h-auto"
          :src="`http://localhost:8080${blog4.postImage.url}`"
          :alt="blog4.postImage.alt"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-2xl mb-2">{{ blog4.postMeta.title }}</div>
          <p class="text-gray-700 text-lg">
            {{ blog4.layout[0].content }}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#gojo</span>
          <span class="badge mr-2">#jujutsukaisen</span>
          <span class="badge">#ripbozo</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const { data:blog4 }= await useFetch('http://localhost:8080/api/Blogs/656b2ffb5a95a8bc4611aaf4?locale=undefined&draft=false&depth=1')
  </script>
    