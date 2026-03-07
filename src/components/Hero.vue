<template>
  <section id="hero" class="bg-white overflow-hidden">
    <!-- Thin green top accent bar -->
    <div class="h-[3px] bg-[#888BF9]" />

    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Top navigation strip -->
      <div class="flex items-center justify-between py-6 border-b border-gray-100">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="0xchat logo" class="w-8 h-8 rounded-lg" />
          <span class="font-bold text-gray-900 tracking-tight">0xchat</span>
        </div>
        <div class="hidden md:flex items-center gap-8">
          <a href="#services" class="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">Features</a>
          <a href="#supported-nips" class="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">NIPs</a>
          <a href="#faq" class="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">FAQ</a>
          <a href="#contact" class="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">Contact</a>
        </div>
        <router-link to="/download" class="bg-gray-900 text-white font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors">
          Download
        </router-link>
      </div>

      <!-- Hero — centered -->
      <div class="flex flex-col items-center text-center gap-8 pt-20 pb-12 animate-fade-up">
        <!-- Category pill -->
        <div class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5">
          <span class="w-2 h-2 rounded-full bg-[#888BF9]" />
          <span class="font-mono text-xs uppercase tracking-widest text-gray-500">Open Source · Nostr Protocol</span>
        </div>

        <!-- Wordmark -->
        <h1 class="text-[clamp(4.5rem,14vw,11rem)] font-black tracking-tighter leading-none select-none group/mark cursor-default transition-transform duration-300 hover:scale-[1.02]">
          <span class="text-[#888BF9] transition-all duration-300 group-hover/mark:[filter:drop-shadow(0_0_28px_#888BF999)]">0X</span><span class="text-gray-900 transition-colors duration-300 group-hover/mark:text-[#888BF9]" style="transition-delay:0ms">C</span><span class="text-gray-900 transition-colors duration-300 group-hover/mark:text-[#888BF9]" style="transition-delay:60ms">H</span><span class="text-gray-900 transition-colors duration-300 group-hover/mark:text-[#888BF9]" style="transition-delay:120ms">A</span><span class="text-gray-900 transition-colors duration-300 group-hover/mark:text-[#888BF9]" style="transition-delay:180ms">T</span>
        </h1>

        <!-- Tagline -->
        <p class="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed -mt-2">
          Private messaging built on Nostr. No phone number, no email, no central server — your key, your identity.
        </p>

        <!-- Rotating value point -->
        <div class="flex items-center gap-2 h-6 overflow-hidden">
          <span class="text-[#888BF9] shrink-0">✓</span>
          <span class="font-mono text-sm text-gray-500">{{ currentValue }}</span>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap justify-center gap-3 pt-1">
          <router-link
            to="/download"
            class="inline-flex items-center gap-2 bg-gray-900 text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-200"
          >
            <font-awesome-icon icon="fa-solid fa-download" class="w-4 h-4" />
            Download
          </router-link>
          <a
            href="https://github.com/0xchat-app"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 font-bold text-sm px-8 py-3.5 rounded-xl hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md transition-all duration-200"
          >
            <font-awesome-icon icon="fa-brands fa-github" class="w-4 h-4" />
            GitHub
          </a>
        </div>

        <!-- Trust stats -->
        <div class="flex items-center justify-center gap-8 pt-2">
          <div class="text-center">
            <div class="font-bold text-gray-900 text-base">NIP-EE</div>
            <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">MLS Encryption</div>
          </div>
          <div class="w-px h-8 bg-gray-200" />
          <div class="text-center">
            <div class="font-bold text-gray-900 text-base">E2E</div>
            <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">All DMs</div>
          </div>
          <div class="w-px h-8 bg-gray-200" />
          <div class="text-center">
            <div class="font-bold text-gray-900 text-base">Open</div>
            <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">Source</div>
          </div>
          <div class="w-px h-8 bg-gray-200" />
          <div class="text-center">
            <div class="font-bold text-gray-900 text-base">Free</div>
            <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">Always</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const values = [
  'No phone number required',
  'End-to-end encrypted by default',
  'Your private key — your identity',
  'Lightning payments via Cashu',
  'Open source on GitHub',
]

const currentValue = ref(values[0])
let valueIndex = 0
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    valueIndex = (valueIndex + 1) % values.length
    currentValue.value = values[valueIndex]
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

[style*="animation-delay"] {
  animation-delay: 0.15s;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
