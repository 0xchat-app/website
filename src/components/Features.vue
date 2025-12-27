<template>
  <section id="services" class="relative min-h-screen flex items-center pl-6 md:pl-12 pr-6 md:pr-28 overflow-hidden bg-black">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slower" />
    </div>

    <!-- Side Label (Vertical) -->
    <div class="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10">
      <span
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 rotate-90 origin-right block whitespace-nowrap hover:text-yellow-300 transition-colors duration-300"
      >
        SERVICES
      </span>
    </div>

    <div class="flex flex-col items-stretch justify-center h-full relative z-10 max-w-6xl ml-auto">
      <!-- Section Header -->
      <div class="mb-12 text-right">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-yellow-300"> 02 / What We Offer </span>
        <h2 class="mt-4 text-4xl md:text-6xl tracking-tight text-white font-bold"> FEATURES</h2>
        <p class="mt-4 font-mono text-sm text-gray-400 max-w-2xl ml-auto">
          Everything you need to launch and grow 0xchat — a fast, private messaging app built for real-world use.
        </p>
        <div class="flex items-center justify-end my-8 gap-4">
          <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-yellow-300 to-transparent" />
          <font-awesome-icon icon="fa-solid fa-bolt" class="text-yellow-300 text-2xl" />
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl ml-auto">
        <div
          v-for="(service, index) in services"
          :key="index"
          @mouseenter="activeService = index"
          @mouseleave="activeService = null"
          class="group relative border border-gray-800/40 p-8 transition-all duration-500 cursor-pointer hover:border-yellow-300/60 text-right"
          :class="activeService === index ? 'bg-yellow-300/5' : ''"
        >
          <!-- Animated corner bracket -->
          <div class="absolute top-0 right-0 w-16 h-16 transition-all duration-500" :class="activeService === index ? 'opacity-100' : 'opacity-0'">
            <div class="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-yellow-300 to-transparent" />
            <div class="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-yellow-300 to-transparent" />
          </div>

          <!-- Service number -->
          <div class="flex items-start justify-between mb-6">
            <span
              class="font-mono text-6xl text-gray-800/40 font-bold transition-all duration-300"
              :class="activeService === index ? 'text-yellow-300/20' : ''"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <div class="text-5xl transition-transform duration-500" :class="activeService === index ? 'scale-110' : ''">
              <font-awesome-icon :icon="service.icon" class="transition-colors duration-300" :class="activeService === index ? 'text-yellow-300' : 'text-gray-400'" />
            </div>
          </div>

          <!-- Service content -->
          <div class="relative z-10">
            <h3
              class="text-2xl md:text-3xl tracking-tight mb-3 transition-colors duration-300 font-bold"
              :class="activeService === index ? 'text-yellow-300' : 'text-white'"
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
                :class="activeService === index ? 'border-yellow-300/40 text-yellow-300' : 'text-gray-500'"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Features list -->
            <div class="space-y-2 transition-all duration-500 overflow-hidden" :class="activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
              <div class="h-[1px] bg-gradient-to-l from-yellow-300/40 to-transparent mb-3" />
              <div
                v-for="(feature, featureIndex) in service.features"
                :key="featureIndex"
                class="flex items-center justify-end gap-2 font-mono text-xs text-gray-400"
              >
                <span>{{ feature }}</span>
                <span class="text-yellow-300">→</span>
              </div>
            </div>
          </div>

          <!-- Hover indicator -->
          <div
            class="absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300"
            :class="activeService === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
          >
            <span class="text-yellow-300 text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeService = ref(null);

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
</style>
