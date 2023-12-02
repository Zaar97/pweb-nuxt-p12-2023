<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-500">
    <div class="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Team</h2>

      <div class="flex flex-wrap justify-center -mx-2">
        <!-- Team Member 1 -->
        <div v-for="(member, index) in teamMembers" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="member.image" alt="Team Member" class="w-full mb-4 rounded-full">
            <h4 class="text-xl font-semibold">{{ member.name }}</h4>
            <p class="text-gray-700">{{ member.nrp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: 'Muhammad Rifqi Oktaviansyah', nrp: '5027221067', image: 'https://drive.google.com/uc?id=1w5y-fWM0ZE21CiFLIHEc2SnAyMNGY3xi' },
        { name: 'Sighra Attariq Sumere Jati', nrp: '5027221068', image: 'https://drive.google.com/uc?id=1iLkHY1n2U4YkVSVyaIhE2aDeGvhaC1dH' },
        { name: 'Zahra', nrp: 'Lead Developer', image: 'https://placekitten.com/202/202' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
