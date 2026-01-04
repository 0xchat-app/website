<template>
  <section 
    ref="sectionRef"
    id="services" 
    class="relative min-h-screen flex items-center pl-6 md:pl-12 pr-6 md:pr-28 overflow-hidden bg-black"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slower" />
    </div>

    <!-- Side Label (Vertical) -->
    <div class="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10">
      <span
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 rotate-90 origin-right block whitespace-nowrap hover:text-[#818CF8] transition-colors duration-300"
      >
        SERVICES
      </span>
    </div>

    <!-- Main Content Container with Left Image Gallery and Right Features -->
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

      <!-- Right Side: Features Content -->
      <div class="flex-1 flex flex-col items-stretch justify-center max-w-6xl ml-auto">
      <!-- Section Header -->
      <div class="mb-12 text-right">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-[#818CF8]"> 02 / What We Offer </span>
        <h2 class="mt-4 text-4xl md:text-6xl tracking-tight text-white font-bold"> FEATURES</h2>
        <p class="mt-4 font-mono text-sm text-gray-400 max-w-2xl ml-auto">
          Everything you need to launch and grow 0xchat — a fast, private messaging app built for real-world use.
        </p>
        <div class="flex items-center justify-end my-8 gap-4">
          <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-[#818CF8] to-transparent" />
          <font-awesome-icon icon="fa-solid fa-bolt" class="text-[#818CF8] text-2xl" />
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl ml-auto">
        <div
          v-for="(service, index) in services"
          :key="index"
          @mouseenter="activeService = index"
          @mouseleave="activeService = null"
          class="group relative border border-gray-800/40 p-8 transition-all duration-500 cursor-pointer hover:border-[#818CF8]/60 text-right"
          :class="activeService === index ? 'bg-[#818CF8]/5' : ''"
        >
          <!-- Animated corner bracket -->
          <div class="absolute top-0 right-0 w-16 h-16 transition-all duration-500" :class="activeService === index ? 'opacity-100' : 'opacity-0'">
            <div class="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#818CF8] to-transparent" />
            <div class="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#818CF8] to-transparent" />
          </div>

          <!-- Service number -->
          <div class="flex items-start justify-between mb-6">
            <span
              class="font-mono text-6xl text-gray-800/40 font-bold transition-all duration-300"
              :class="activeService === index ? 'text-[#818CF8]/20' : ''"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <div class="text-5xl transition-transform duration-500" :class="activeService === index ? 'scale-110' : ''">
              <font-awesome-icon :icon="service.icon" class="transition-colors duration-300" :class="activeService === index ? 'text-[#818CF8]' : 'text-gray-400'" />
            </div>
          </div>

          <!-- Service content -->
          <div class="relative z-10">
            <h3
              class="text-2xl md:text-3xl tracking-tight mb-3 transition-colors duration-300 font-bold"
              :class="activeService === index ? 'text-[#818CF8]' : 'text-white'"
            >
              {{ service.title }}
            </h3>

            <p class="font-mono text-xs text-gray-400 leading-relaxed mb-4 transition-all duration-300" :class="activeService === index ? 'text-gray-300' : ''">
              {{ service.description }}
            </p>

            <!-- Tech stack tags -->
            <div class="flex flex-wrap gap-2 justify-end mb-4">
              <span
                v-for="(tech, techIndex) in service.tech"
                :key="techIndex"
                class="font-mono text-[9px] px-2 py-1 border border-gray-700 rounded uppercase tracking-wider transition-all duration-300"
                :class="activeService === index ? 'border-[#818CF8]/40 text-[#818CF8]' : 'text-gray-500'"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Features list -->
            <div class="space-y-2 transition-all duration-500 overflow-hidden" :class="activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
              <div class="h-[1px] bg-gradient-to-l from-[#818CF8]/40 to-transparent mb-3" />
              <div
                v-for="(feature, featureIndex) in service.features"
                :key="featureIndex"
                class="flex items-center justify-end gap-2 font-mono text-xs text-gray-400"
              >
                <span>{{ feature }}</span>
                <span class="text-[#818CF8]">→</span>
              </div>
            </div>
          </div>

          <!-- Hover indicator -->
          <div
            class="absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300"
            :class="activeService === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
          >
            <span class="text-[#818CF8] text-xl">→</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const activeService = ref(null);
const sectionRef = ref(null);
const isInView = ref(false);

// Image list for creative gallery
const images = ref([
  // '01.png',
  // '02.png',
  '05.png',
  '04.png',
]);

// Generate creative random styles for each image
const getImageStyle = (index) => {
  // Create varied rotation angles (-8 to 8 degrees)
  const rotations = [-6, 4, -5, 7];
  const rotation = rotations[index % rotations.length];
  
  // Create varied horizontal offsets (more spacing)
  const offsets = [0, -15, 12, -8];
  const offset = offsets[index % offsets.length];
  
  // Create varied vertical spacing (more space between images)
  const baseSpacing = 420; // Increased spacing between images
  const spacing = index * baseSpacing + (index % 2) * 100;
  
  // Create varied scale (smaller overall, but '04.png' should be larger)
  const imageName = images.value[index];
  let scale;
  if (imageName === '04.png') {
    scale = 0.80; // Make '04.png' larger
  } else {
    const scales = [0.75, 0.78, 0.74];
    scale = scales[index % scales.length];
  }
  
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

const services = ref([
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Easy to use",
    description: "No Registration Required - Skip the usual hassle of providing a phone number, email, or name.",
    tech: ["No Setup", "Instant Access", "User Friendly"],
    features: ["Just dive right in", "Free from friction", "Seamless communication", "Zero barriers to entry"],
  },
  {
    icon: "fa-solid fa-link",
    title: "Built on the Nostr protocol",
    description: "You are in control of your data - decentralized and open communication.",
    tech: ["Decentralized", "Open Source", "Nostr"],
    features: ["Own your data", "No central server", "Open protocol", "Full control & freedom"],
  },
  {
    icon: "fa-solid fa-lock",
    title: "Encrypted Messages",
    description: "Our direct messages and friends list are secured with end-to-end encryption.",
    tech: ["E2E Encryption", "Privacy", "Security"],
    features: ["Private conversations", "Encrypted contacts list", "Secure friends management", "Only you and contacts see messages"],
  },
  {
    icon: "fa-solid fa-users",
    title: "Private Group",
    description: "Create encrypted group chats with friends, family, or colleagues.",
    tech: ["Group Chat", "Encryption", "Privacy"],
    features: ["Encrypted group chats", "Member management", "Group privacy", "Invite-only control"],
  },
  {
    icon: "fa-solid fa-phone",
    title: "Voice & Video Calls",
    description: "Experience simple and private face-to-face communication with high-definition calls.",
    tech: ["WebRTC", "HD Quality", "P2P"],
    features: ["High-definition audio", "Video calls", "Custom ICE service", "Enhanced privacy options"],
  },
  {
    icon: "fa-solid fa-tower-broadcast",
    title: "Open Channels",
    description: "Explore the boundless realm of open channels and find communities.",
    tech: ["Public Channels", "Communities", "Discovery"],
    features: ["Public channel discovery", "Join seamlessly", "Community building", "Endless communication"],
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Lightning Payments",
    description: "Integrated with the Cashu wallet, making transfers and payments effortless.",
    tech: ["Lightning Network", "Cashu", "Instant Payments"],
    features: ["Instant transactions", "Easy transfers", "Secure payments", "Integrated wallet"],
  },
  {
    icon: "fa-solid fa-medal",
    title: "Badge Collections",
    description: "Make your 0xchat profile uniquely yours with our Badge Collection feature.",
    tech: ["Profile Customization", "Achievements", "Identity"],
    features: ["Collect badges", "Display achievements", "Unique profile", "Personal identity"],
  },
  // New feature additions
  {
    icon: "fa-solid fa-network-wired",
    title: "Relay Groups",
    description: "Coordinate large group messaging across relay groups for scale.",
    tech: ["Relay Groups", "Scaling", "NIP-29"],
    features: ["Large group support", "Relay coordination", "Better scalability", "Configurable policies"],
  },
  {
    icon: "fa-solid fa-newspaper",
    title: "Nostr Posts",
    description: "Create and interact with Nostr notes and long-form content.",
    tech: ["Posts", "Notes", "Nostr"],
    features: ["Publish notes", "Read timelines", "Reply & react", "Share content"],
  },
  {
    icon: "fa-solid fa-puzzle-piece",
    title: "Napps (Embedded Apps)",
    description: "Run embedded Nostr apps inside the client with safe permissions.",
    tech: ["Napps", "Extensions", "Embedded"],
    features: ["Launch in-app apps", "Secure permissions", "Seamless integration", "Discover tools"],
  },
  {
    icon: "fa-solid fa-user-secret",
    title: "Embedded Tor",
    description: "Route traffic via Tor to reduce metadata and enhance privacy.",
    tech: ["Tor", "Privacy", "Anonymity"],
    features: ["Tor routing", "Less metadata", "Optional per feature", "Censorship resistance"],
  },
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

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 12s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

/* Creative gallery layout - organic and free-flowing */
.creative-gallery {
  position: relative;
  padding: 2rem 0;
  min-height: 150vh;
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

/* Remove blur from image when parent animates */
.creative-item.animate-float-in .creative-image {
  filter: brightness(0.92) contrast(1.08) saturate(1.1) blur(0px);
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
