<template>
  <div>
    <div v-for="block in details.layout" :key="block.id">
      <!-- Check for content block type -->
      <div v-if="block.blockType === 'content'">
        <div class="p-10 mt-20">
          <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-lg mb-4">
            <img
              class="w-full h-auto"
              :src="`http://localhost:8080${details.postImage.url}`"
              :alt="details.postImage.alt"
            />
            <div class="px-6 py-4 pb-2">
              <div class="font-bold text-2xl mb-2">{{ details.postMeta.title }}</div>
              <p class="text-gray-700 text-lg">
                {{ block.content }}
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="badge mr-2">#lordnunez</span>
              <span class="badge mr-2">#football</span>
              <span class="badge">#liverpool</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Add other conditions for different block types if needed -->
    </div>
  </div>
</template>

<script setup>
const route = useRoute().params.id
console.log(route)
const { data: blog } = await useFetch(`http://localhost:8080/api/Blogs/${route}`);
const details = blog._rawValue
console.log(details)
</script>
