<template>
  <section 
    ref="sectionRef"
    id="contact" 
    class="relative py-48 pl-6 md:pl-12 pr-6 md:pr-28 overflow-hidden bg-black"
  >
    <!-- Animated background elements -->
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-[#818CF8]/10 rounded-full blur-3xl opacity-20 animate-pulse" />
    <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-[#818CF8]/10 rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 2s" />

    <!-- Main Content Container with Left Image Gallery and Right Contact Content -->
    <div class="w-full flex gap-8 lg:gap-12 relative z-10">
      <!-- Left Side: Creative Image Gallery -->
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

      <!-- Right Side: Contact Content -->
      <div class="flex-1 flex flex-col items-stretch justify-center max-w-4xl ml-auto">
      <!-- Emoji decoration -->

      <!-- Section Header -->
      <div class="mb-12 text-right">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-[#818CF8]"> 04 / Support </span>
        <h2 class="mt-4 text-4xl md:text-6xl tracking-tight text-white font-bold animate-fade-in">CONTACT</h2>
        <p class="mt-4 font-mono text-sm text-gray-400 max-w-2xl ml-auto">
          Support, feedback, and community — everything you need to get the most out of 0xchat.
        </p>
        <div class="flex items-center justify-end my-8 gap-4">
          <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-[#818CF8] to-transparent" />
          <font-awesome-icon icon="fa-solid fa-bolt" class="text-[#818CF8] text-2xl" />
        </div>
      </div>

      <!-- Email container with interactive effect -->
      <div class="relative mb-12">
        <!-- Animated border -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#818CF8] via-[#818CF8] to-[#818CF8] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur p-[2px]"
        />

        <!-- Email content -->
        <a href="mailto:support@0xchat.com" class="group relative block">
          <div
            class="relative bg-black border border-[#818CF8]/40 rounded-lg px-8 md:px-12 py-6 md:py-8 transition-all duration-500 group-hover:border-[#818CF8]/80 group-hover:shadow-lg group-hover:shadow-[#818CF8]/20 w-fit ml-auto text-right"
          >
            <div class="flex items-center justify-end gap-3 mb-3">
              <font-awesome-icon icon="fa-solid fa-envelope" class="w-5 h-5 md:w-6 md:h-6 text-[#818CF8]" />
              <p class="font-mono text-sm md:text-lg text-gray-400 tracking-wider">CONTACT SUPPORT</p>
            </div>
            <p
              class="font-[var(--font-orbitron)] text-3xl md:text-5xl text-[#818CF8] transition-all duration-300 group-hover:text-white group-hover:scale-105"
            >
              support@0xchat.com
            </p>
            <p class="font-mono text-xs md:text-sm text-gray-500 mt-4 transition-all duration-300 group-hover:text-gray-300">
              // Help with setup, login, notifications, and account recovery
            </p>
          </div>
        </a>
      </div>

      <!-- Quick actions -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl ml-auto">
        <a
          href="mailto:support@0xchat.com?subject=0xchat%20Support%20Request"
          class="group border border-[#818CF8]/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-[#818CF8]/70 hover:shadow-lg hover:shadow-[#818CF8]/10"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-comment" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Get Support</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Share device, OS version, and screenshots if possible</p>
        </a>

        <a
          href="mailto:support@0xchat.com?subject=0xchat%20Feedback"
          class="group border border-[#818CF8]/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-[#818CF8]/70 hover:shadow-lg hover:shadow-[#818CF8]/10"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Send Feedback</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Tell us what to improve — UX, features, or performance</p>
        </a>

        <a
          href="https://github.com/0xchat-app"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-[#818CF8]/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-[#818CF8]/70 hover:shadow-lg hover:shadow-[#818CF8]/10"
          aria-label="Open 0xchat on GitHub"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-bug" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Report a Bug</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Prefer GitHub for reproducible crashes and logs</p>
        </a>

        <a
          href="https://github.com/0xchat-app"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-[#818CF8]/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-[#818CF8]/70 hover:shadow-lg hover:shadow-[#818CF8]/10"
          aria-label="Open 0xchat on GitHub"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-brands fa-github" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Open Source</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Releases, changelog, and contributions</p>
        </a>

        <a
          href="https://primal.net/search/%230xchat"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-[#818CF8]/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-[#818CF8]/70 hover:shadow-lg hover:shadow-[#818CF8]/10"
          aria-label="See what people are saying about 0xchat on Primal"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">What People Say</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Browse #0xchat posts on Primal</p>
        </a>

        <a
          href="https://primal.net/p/nprofile1qqs9ajjs5p904ml92evlkayppdpx2n3zdrq6ejnw2wqphxrzmd62swswfwcse"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-[#818CF8]/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-[#818CF8]/70 hover:shadow-lg hover:shadow-[#818CF8]/10"
          aria-label="Open the official 0xchat profile on Primal"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-certificate" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Official Profile</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Follow 0xchat on Primal</p>
        </a>
      </div>

      <!-- Stats or trust indicators -->
      <div class="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl ml-auto">
        <div class="group text-right">
          <div class="flex items-center justify-end gap-2 mb-2">
            <font-awesome-icon icon="fa-solid fa-shield" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-2xl md:text-3xl text-[#818CF8] group-hover:scale-105 transition-transform duration-300">Privacy</p>
          </div>
          <p class="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-wider">Default Secure</p>
        </div>

        <div class="group text-right">
          <div class="flex items-center justify-end gap-2 mb-2">
            <font-awesome-icon icon="fa-solid fa-bolt" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-2xl md:text-3xl text-[#818CF8] group-hover:scale-105 transition-transform duration-300">Fast</p>
          </div>
          <p class="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-wider">Built for Chat</p>
        </div>

        <div class="group text-right">
          <div class="flex items-center justify-end gap-2 mb-2">
            <font-awesome-icon icon="fa-solid fa-code-branch" class="w-5 h-5 text-[#818CF8]" />
            <p class="font-[var(--font-orbitron)] text-2xl md:text-3xl text-[#818CF8] group-hover:scale-105 transition-transform duration-300">Open</p>
          </div>
          <p class="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-wider">Ship Together</p>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const sectionRef = ref(null);
const isInView = ref(false);

// Image list for creative gallery (remaining images)
const images = ref([
  '06.png',
  '09.png',
  // '10.png',
]);

// Generate creative random styles for each image
const getImageStyle = (index) => {
  // Create varied rotation angles (-8 to 8 degrees)
  const rotations = [-7, 5, -6];
  const rotation = rotations[index % rotations.length];
  
  // Create varied horizontal offsets (shifted right)
  const offsets = [10, 0, 20];
  const offset = offsets[index % offsets.length];
  
  // Create varied vertical spacing (more space between images)
  const baseSpacing = 380; // Balanced spacing between images
  const spacing = index * baseSpacing + (index % 2) * 90 - 100; // Move up by 100px
  
  // Create varied scale (smaller overall)
  const scales = [0.75, 0.73, 0.77];
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
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

/* Creative gallery layout - organic and free-flowing */
.creative-gallery {
  position: relative;
  padding: 2rem 0;
  min-height: 120vh;
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
