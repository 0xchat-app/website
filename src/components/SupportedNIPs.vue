<template>
  <section 
    ref="sectionRef"
    id="supported-nips" 
    class="relative min-h-screen flex items-center pl-6 md:pl-12 pr-6 md:pr-28 overflow-hidden bg-black"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slower" />
    </div>

    <!-- Side Label (Vertical) -->
    <div class="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">
      <span
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap hover:text-[#818CF8] transition-colors duration-300"
      >
        NIPs
      </span>
    </div>

    <!-- Main Content Container with Left NIPs Content and Right Image Gallery -->
    <div class="w-full flex gap-8 lg:gap-12 relative z-10">
      <!-- Left Side: NIPs Content -->
      <div class="flex-1 flex flex-col items-stretch justify-center max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12">
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-[#818CF8]"> 03 / Network Protocols </span>
          <h2 class="mt-4 text-4xl md:text-6xl tracking-tight text-white font-bold">SUPPORTED NIPS</h2>
          <p class="mt-4 font-mono text-sm text-gray-400 max-w-2xl">
            0xchat supports a comprehensive list of Nostr Improvement Proposals for a complete decentralized communication experience.
          </p>
          <div class="flex items-center my-8 gap-4">
            <font-awesome-icon icon="fa-solid fa-bolt" class="text-[#818CF8] text-2xl" />
            <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-[#818CF8] to-transparent" />
          </div>
        </div>

        <!-- NIPs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        <div
          v-for="(nip, index) in nips"
          :key="index"
          @mouseenter="activeNIP = index"
          @mouseleave="activeNIP = null"
          class="group relative border border-gray-800/40 p-6 transition-all duration-500 cursor-pointer hover:border-[#818CF8]/60"
          :class="activeNIP === index ? 'bg-[#818CF8]/5' : ''"
        >
          <!-- Animated corner bracket -->
          <div class="absolute top-0 left-0 w-12 h-12 transition-all duration-500" :class="activeNIP === index ? 'opacity-100' : 'opacity-0'">
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#818CF8] to-transparent" />
            <div class="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#818CF8] to-transparent" />
          </div>

          <!-- NIP Number and Icon -->
          <div class="flex items-center justify-between mb-4">
            <span class="font-mono text-2xl font-bold transition-colors duration-300" :class="activeNIP === index ? 'text-[#818CF8]' : 'text-gray-600'">
              {{ nip.number }}
            </span>
            <div class="text-2xl transition-transform duration-500" :class="activeNIP === index ? 'scale-110' : ''">
              <font-awesome-icon :icon="nip.icon" class="transition-colors duration-300" :class="activeNIP === index ? 'text-[#818CF8]' : 'text-gray-400'" />
            </div>
          </div>

          <!-- NIP Title -->
          <h3
            class="font-semibold text-base tracking-tight mb-2 transition-colors duration-300"
            :class="activeNIP === index ? 'text-[#818CF8]' : 'text-white'"
          >
            {{ nip.title }}
          </h3>

          <!-- NIP Description -->
          <p class="font-mono text-xs text-gray-400 transition-all duration-300" :class="activeNIP === index ? 'text-gray-300' : ''">
            {{ nip.description }}
          </p>

          <!-- Additional note (if exists) -->
          <div class="mt-3 transition-all duration-500 overflow-hidden" :class="activeNIP === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'">
            <div class="h-[1px] bg-gradient-to-r from-[#818CF8]/40 to-transparent mb-2" />
            <span class="font-mono text-[10px] text-[#818CF8]/80 uppercase tracking-wider">
              {{ nip.note }}
            </span>
          </div>

          <!-- Hover indicator -->
          <div
            class="absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300"
            :class="activeNIP === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'"
          >
            <span class="text-[#818CF8]">→</span>
          </div>
        </div>
        </div>
      </div>

      <!-- Right Side: Creative Image Gallery -->
      <div class="hidden lg:block w-1/3 max-w-md">
        <div class="creative-gallery sticky top-24">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="creative-item"
            :class="{ 'animate-enter': isInView }"
            :style="{
              ...getImageStyle(index),
              animationDelay: `${index * 0.6}s`
            }"
          >
            <div class="relative overflow-visible">
              <div 
                class="image-wrapper"
                :class="`item-${index % 3}`"
              >
                <img
                  :src="`/images/${image}`"
                  :alt="`0xchat screenshot ${index + 1}`"
                  class="creative-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const activeNIP = ref(null);
const sectionRef = ref(null);
const isInView = ref(false);

// Image list for creative gallery
const images = ref([
 '07.png', 
//  '08.png',
 '11.png',
]);

// Generate creative random styles for each image
const getImageStyle = (index) => {
  // Create varied rotation angles (-8 to 8 degrees)
  const rotations = [-5, 6, -4];
  const rotation = rotations[index % rotations.length];
  
  // Create varied horizontal offsets (more spacing)
  const offsets = [0, -12, 15];
  const offset = offsets[index % offsets.length];
  
  // Create varied vertical spacing (more space between images)
  const baseSpacing = 400; // Increased spacing for 3 images
  const spacing = index * baseSpacing + (index % 2) * 100 - 120; // Move up by 120px
  
  // Create varied scale (smaller overall)
  const scales = [0.74, 0.72, 0.76];
  const scale = scales[index % scales.length];
  
  return {
    '--initial-rotation': `${rotation}deg`,
    '--initial-offset-x': `${offset}px`,
    '--initial-offset-y': `${spacing}px`,
    '--initial-scale': scale,
  };
};

// Trigger animation when section comes into view
onMounted(() => {
  if (!sectionRef.value) return;

  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the section is visible
    rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isInView.value = true;
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  observer.observe(sectionRef.value);
});

const nips = ref([
  { number: "NIP-01", icon: "fa-solid fa-link", title: "Basic protocol flow description", description: "Core Nostr protocol specification" },
  { number: "NIP-02", icon: "fa-solid fa-users", title: "Contact List and Petnames", description: "Manage your contacts and aliases" },
  { number: "NIP-04", icon: "fa-solid fa-lock", title: "Encrypted Direct Message", description: "Encrypted private messages" },
  { number: "NIP-05", icon: "fa-solid fa-file-signature", title: "DNS-based key mapping", description: "Human-readable identifiers" },
  { number: "NIP-09", icon: "fa-solid fa-trash", title: "Event Deletion", description: "Delete events from relays" },
  { number: "NIP-10", icon: "fa-solid fa-tag", title: '"e" & "p" tags in text events', description: "Event and person tagging" },
  { number: "NIP-15", icon: "fa-solid fa-inbox", title: "End of Stored Events Notice", description: "Relay storage management" },
  { number: "NIP-17", icon: "fa-solid fa-user-group", title: "Private group management", description: "Secure group chats", note: "Secure groups" },
  { number: "NIP-19", icon: "fa-solid fa-key", title: "bech32-encoded entities", description: "Entity encoding standard" },
  { number: "NIP-20", icon: "fa-solid fa-circle-check", title: "Command Results", description: "Command response handling" },
  { number: "NIP-21", icon: "fa-solid fa-link", title: "nostr: URI scheme", description: "Universal resource identifiers" },
  { number: "NIP-28", icon: "fa-solid fa-comment", title: "Public Chat", description: "Public channels and rooms" },
  { number: "NIP-29", icon: "fa-solid fa-user-group", title: "Relay groups", description: "Group relay management", note: "Open/closed group" },
  { number: "NIP-33", icon: "fa-solid fa-box", title: "Parameterized Replaceable Events", description: "Event replacement mechanism" },
  { number: "NIP-44", icon: "fa-solid fa-heart", title: "Gift-wrapped DM encryption", description: "Enhanced message privacy" },
  { number: "NIP-51", icon: "fa-solid fa-clipboard-list", title: "Lists", description: "List management and organization" },
  { number: "NIP-57", icon: "fa-solid fa-bolt", title: "Lightning Zaps", description: "Lightning Network payments" },
  { number: "NIP-58", icon: "fa-solid fa-medal", title: "Badges", description: "User badges and achievements" },
  { number: "NIP-100", icon: "fa-solid fa-video", title: "WebRTC Signaling", description: "Voice and video calls", note: "Audio/Video" },
  { number: "NIP-101", icon: "fa-solid fa-shuffle", title: "Alias Key Exchange", description: "Key exchange protocols" },
  { number: "NIP-104", icon: "fa-solid fa-shield-halved", title: "MLS secret chat", description: "Advanced encryption", note: "Desktop beta" },
]);
</script>

<style scoped>
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

/* Creative gallery layout - organic and free-flowing */
.creative-gallery {
  position: relative;
  padding: 2rem 0;
  min-height: 130vh;
}

.creative-item {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  /* Set initial state to animation start position */
  transform: translateX(calc(var(--initial-offset-x, 0) - 30px)) 
             translateY(calc(var(--initial-offset-y, 0) + 80px)) 
             rotate(calc(var(--initial-rotation, 0deg) - 8deg)) 
             scale(calc(var(--initial-scale, 1) * 0.7));
  filter: blur(10px);
  will-change: transform, opacity, filter;
  /* Animation only starts when .animate-enter class is added */
}

.creative-item.animate-enter {
  animation: float-in 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Image wrapper with creative styling */
.image-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(129, 140, 248, 0.1);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(129, 140, 248, 0.05);
  backdrop-filter: blur(10px);
}

/* Different sizes for variety */
.image-wrapper.item-0 {
  width: 95%;
  margin-left: 5%;
}

.image-wrapper.item-1 {
  width: 88%;
  margin-left: 0;
}

.image-wrapper.item-2 {
  width: 92%;
  margin-left: 8%;
}

/* Image styling */
.creative-image {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0.92) contrast(1.08) saturate(1.1);
  transition: filter 0.3s ease;
}

/* Enhanced entrance animation */
@keyframes float-in {
  0% {
    opacity: 0;
    transform: translateX(calc(var(--initial-offset-x, 0) - 30px)) 
               translateY(calc(var(--initial-offset-y, 0) + 80px)) 
               rotate(calc(var(--initial-rotation, 0deg) - 8deg)) 
               scale(calc(var(--initial-scale, 1) * 0.7));
    filter: blur(10px);
  }
  40% {
    opacity: 0.6;
    transform: translateX(calc(var(--initial-offset-x, 0) - 5px)) 
               translateY(calc(var(--initial-offset-y, 0) + 20px)) 
               rotate(calc(var(--initial-rotation, 0deg) - 2deg)) 
               scale(calc(var(--initial-scale, 1) * 0.9));
    filter: blur(4px);
  }
  70% {
    opacity: 0.9;
    transform: translateX(var(--initial-offset-x, 0)) 
               translateY(calc(var(--initial-offset-y, 0) - 15px)) 
               rotate(calc(var(--initial-rotation, 0deg) + 3deg)) 
               scale(calc(var(--initial-scale, 1) * 1.08));
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translateX(var(--initial-offset-x, 0)) 
               translateY(var(--initial-offset-y, 0)) 
               rotate(var(--initial-rotation, 0deg)) 
               scale(var(--initial-scale, 1));
    filter: blur(0px);
  }
}

/* Subtle continuous floating effect - applied to image wrapper */
@keyframes gentle-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-6px) rotate(0.3deg);
  }
  66% {
    transform: translateY(3px) rotate(-0.3deg);
  }
}

.image-wrapper {
  animation: gentle-float 8s ease-in-out infinite;
  animation-delay: 1.5s;
}

.image-wrapper.item-0 {
  animation-delay: 1.5s;
}

.image-wrapper.item-1 {
  animation-delay: 3.5s;
}

.image-wrapper.item-2 {
  animation-delay: 5.5s;
}

/* Responsive adjustments */
@media (max-width: 1280px) {
  .creative-gallery {
    min-height: auto;
  }
  
  .creative-item {
    position: relative;
    transform: none !important;
    margin-bottom: 2rem;
  }
}
</style>
