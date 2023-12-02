<template>
    <div class="container">
        <p class="error">{{ error.statusCode }}</p>
        <p class="message">{{ error.message }}</p>
        <button class="button" @click="handleClearError">Go Back...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])
    const handleClearError = () => clearError({ redirect: "/" })
</script>

<style>
        .container {
            @apply w-3/4 mx-auto text-center;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .error {
            @apply text-red-600 text-9xl font-bold;
            animation: shake 2s;
            animation-iteration-count: infinite;
        }

        .message {
            @apply text-gray-800 text-2xl mt-5;
        }

        .button {
            @apply inline-block bg-blue-500 text-white px-5 py-2.5 rounded-md no-underline;
            transition: transform 0.3s;
            margin-top: 40px;
        }

        .button:hover {
            @apply transform scale-110;
        }

        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
    </style>