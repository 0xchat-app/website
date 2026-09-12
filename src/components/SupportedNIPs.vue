<template>
  <section id="supported-nips" class="relative min-h-screen flex items-center pl-6 md:pl-12 pr-6 md:pr-28 overflow-hidden bg-black">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slower" />
    </div>

    <!-- Side Label (Vertical) -->
    <div class="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">
      <span
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap hover-gradient-text transition-colors duration-300"
      >
        NIPs
      </span>
    </div>

    <div class="flex flex-col items-stretch justify-center h-full relative z-10 max-w-6xl mr-auto">
      <!-- Section Header -->
      <div class="mb-12">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] gradient-text"> 03 / Network Protocols </span>
        <h2 class="mt-4 text-4xl md:text-6xl tracking-tight text-white font-bold">SUPPORTED NIPS</h2>
        <p class="mt-4 font-mono text-sm text-gray-400 max-w-2xl">
          0xchat supports a comprehensive list of Nostr Improvement Proposals for a complete decentralized communication experience.
        </p>
        <div class="flex items-center my-8 gap-4">
          <font-awesome-icon icon="fa-solid fa-bolt" class="gradient-icon text-2xl" />
          <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-[#C084FC] via-[#818CF8] to-transparent" />
        </div>
      </div>

      <!-- NIPs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        <div
          v-for="(nip, index) in nips"
          :key="index"
          @mouseenter="activeNIP = index"
          @mouseleave="activeNIP = null"
          class="group relative border border-gray-800/40 p-6 transition-all duration-500 cursor-pointer hover:border-gradient-nip"
          :class="activeNIP === index ? 'bg-gradient-nip-light' : ''"
        >
          <!-- Animated corner bracket -->
          <div class="absolute top-0 left-0 w-12 h-12 transition-all duration-500" :class="activeNIP === index ? 'opacity-100' : 'opacity-0'">
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C084FC] via-[#818CF8] to-transparent" />
            <div class="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#C084FC] via-[#818CF8] to-transparent" />
          </div>

          <!-- NIP Number and Icon -->
          <div class="flex items-center justify-between mb-4">
            <span class="font-mono text-2xl font-bold transition-colors duration-300" :class="activeNIP === index ? 'gradient-text' : 'text-gray-600'">
              {{ nip.number }}
            </span>
            <div class="text-2xl transition-transform duration-500" :class="activeNIP === index ? 'scale-110' : ''">
              <font-awesome-icon :icon="nip.icon" class="transition-colors duration-300" :class="activeNIP === index ? 'gradient-icon' : 'text-gray-400'" />
            </div>
          </div>

          <!-- NIP Title -->
          <h3
            class="font-semibold text-base tracking-tight mb-2 transition-colors duration-300"
            :class="activeNIP === index ? 'gradient-text' : 'text-white'"
          >
            {{ nip.title }}
          </h3>

          <!-- NIP Description -->
          <p class="font-mono text-xs text-gray-400 transition-all duration-300" :class="activeNIP === index ? 'text-gray-300' : ''">
            {{ nip.description }}
          </p>

          <!-- Additional note (if exists) -->
          <div class="mt-3 transition-all duration-500 overflow-hidden" :class="activeNIP === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'">
            <div class="h-[1px] bg-gradient-to-r from-[#C084FC]/40 via-[#818CF8]/40 to-transparent mb-2" />
            <span class="font-mono text-[10px] gradient-text-note uppercase tracking-wider">
              {{ nip.note }}
            </span>
          </div>

          <!-- Hover indicator -->
          <div
            class="absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300"
            :class="activeNIP === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'"
          >
            <span class="gradient-text">→</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeNIP = ref(null);

const nips = ref([
  { number: "NIP-01", icon: "fa-solid fa-link", title: "Basic protocol flow description", description: "Core Nostr protocol specification" },
  { number: "NIP-05", icon: "fa-solid fa-file-signature", title: "DNS-based key mapping", description: "Human-readable identifiers" },
  { number: "NIP-09", icon: "fa-solid fa-trash", title: "Event Deletion", description: "Delete events from relays" },
  { number: "NIP-17", icon: "fa-solid fa-user-group", title: "Private group management", description: "Secure group chats", note: "Secure groups" },
  { number: "NIP-28", icon: "fa-solid fa-comment", title: "Public Chat", description: "Public channels and rooms" },
  { number: "NIP-29", icon: "fa-solid fa-user-group", title: "Relay groups", description: "Group relay management", note: "Open/closed group" },
  { number: "NIP-44", icon: "fa-solid fa-heart", title: "Gift-wrapped DM encryption", description: "Enhanced message privacy" },
  { number: "NIP-57", icon: "fa-solid fa-bolt", title: "Lightning Zaps", description: "Lightning Network payments" },
  { number: "NIP-58", icon: "fa-solid fa-medal", title: "Badges", description: "User badges and achievements" },
  { number: "NIP-100", icon: "fa-solid fa-video", title: "WebRTC Signaling", description: "Voice and video calls", note: "Audio/Video" },
  { number: "NIP-101", icon: "fa-solid fa-shuffle", title: "Alias Key Exchange", description: "Key exchange protocols" },
  { number: "NIP-EE", icon: "fa-solid fa-shield-halved", title: "MLS secret chat", description: "Advanced encryption", note: "Desktop beta" },
]);
</script>

<style scoped>
/* Gradient utility classes */
.gradient-text {
  background: linear-gradient(135deg, #C084FC 0%, #818CF8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-gradient-text:hover {
  background: linear-gradient(135deg, #C084FC 0%, #818CF8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-icon {
  color: #818CF8;
  transition: color 0.3s ease;
}

.gradient-icon:hover {
  color: #C084FC;
}

.hover\:border-gradient-nip:hover {
  border-color: #C084FC;
  border-image: linear-gradient(135deg, #C084FC 0%, #818CF8 100%) 1;
}

.bg-gradient-nip-light {
  background: linear-gradient(135deg, rgba(192, 132, 252, 0.05) 0%, rgba(129, 140, 248, 0.05) 100%);
}

.gradient-text-note {
  background: linear-gradient(135deg, rgba(192, 132, 252, 0.8) 0%, rgba(129, 140, 248, 0.8) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.1);
  }
}

@keyframes pulse-slower {
  0%,
  100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.1;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 12s ease-in-out infinite;
}
</style>
