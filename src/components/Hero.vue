<template>
  <section id="hero" class="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12 overflow-hidden bg-black">
    <!-- Animated Noise Overlay -->

    <!-- Animated gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#C084FC]/10 to-[#818CF8]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl animate-pulse-slower" />
    </div>

    <!-- Side Label (Vertical) -->
    <div class="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 uppercase">
      <span
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap hover-gradient-text transition-colors duration-300"
      >
        0xchat
      </span>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-10">
      <span class="font-mono text-[10px] uppercase tracking-widest text-gray-500">scroll</span>
      <div class="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent" />
    </div>

    <!-- Breaking News Headlines (Right Side - Newspaper Style) -->
    <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none z-10" :class="{ 'news-hidden': isScrolled }">
      <div class="relative h-full">
        <div 
          v-for="(headline, index) in newsHeadlines" 
          :key="index" 
          class="news-headline-item"
          :style="{ 
            animationDelay: `${index * 0.8}s`,
            top: `${10 + (index * 11)}%`,
            right: `${5 + (index % 3) * 8}%`
          }"
        >
          <div class="news-stamp">BREAKING</div>
          <div class="news-headline-source">{{ headline.source }}</div>
          <div class="news-headline-text">{{ headline.text }}</div>
          <div class="news-headline-date">{{ headline.date }}</div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-stretch justify-center h-full relative z-20 max-w-5xl">
      <!-- CSS Logo -->
      <div class="flex items-center gap-6 mb-12 animate-fade-in-up">
        <!-- Circular Badge -->
        <div class="logo-badge">
          <img src="/logo.png" alt="0X Logo" class="logo-badge-image" />
        </div>
        
        <!-- Logo Text -->
        <div class="flex items-center gap-3">
          <span class="logo-text logo-chat">CHAT</span>
          <span class="logo-lightning">⚡</span>
        </div>
      </div>

      <!-- Subtitle with stagger animation -->
      <h2 class="font-[var(--font-orbitron)] text-gray-400/60 text-[clamp(1.2rem,3vw,2rem)] tracking-wide animate-fade-in-up">
        <span class="inline-block animate-fade-in" style="animation-delay: 0.1s">Secure.</span>
        <span class="inline-block animate-fade-in" style="animation-delay: 0.2s">Private.</span>
        <span class="inline-block animate-fade-in" style="animation-delay: 0.3s">Decentralized.</span>
      </h2>

      <!-- Description with enhanced styling -->
      <div class="mt-12 max-w-3xl font-mono text-base md:text-lg text-gray-400 leading-relaxed space-y-6 animate-fade-in-up" style="animation-delay: 0.4s">
        <p class="group hover:text-gray-300 transition-all duration-300 hover:translate-x-2">
          <span class="inline-block emoji-hover mr-2">⚡</span>
          0xchat is a
          <span class="font-semibold text-white group-hover-gradient-text transition-colors duration-300">
            <span class="inline-block emoji-hover">🔒</span> secure, <span class="inline-block emoji-hover">🔓</span> decentralized,
            <span class="inline-block emoji-hover">⧳</span> Nostr-powered</span
          >
          chat application.
          <span class="inline-block emoji-hover mx-1">💬</span>
          Your data, <span class="gradient-text font-semibold">your control</span>
          <span class="inline-block emoji-hover ml-1">🛡️</span>
          <!-- — end-to-end encryption for <span class="font-semibold">all conversations</span>
          <span class="inline-block emoji-hover ml-1">🔐</span> -->
        </p>

        <p class="group hover:text-gray-300 transition-all duration-300 hover:translate-x-2">
          <span class="inline-block emoji-hover mr-2">✨</span>
          No registration. No phone number. No corporate surveillance.
          <span class="inline-block emoji-hover mx-1">👤</span>
          Just <span class="gradient-text font-semibold">private key</span> login and
          <span class="relative inline-block text-white font-semibold group-hover:scale-110 transition-transform duration-300">
            true privacy
            <span class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#C084FC] via-cyan-400 to-[#818CF8] animate-shimmer" />
          </span>
          <span class="inline-block emoji-hover ml-1">🚀</span>
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="mt-12 flex flex-col sm:flex-row gap-4 items-start">
        <router-link
          to="/download"
          class="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C084FC] to-[#818CF8] text-white font-bold text-lg px-10 py-5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C084FC]/60 hover:scale-110 hover:-translate-y-1 animate-pulse-subtle"
        >
          <font-awesome-icon icon="fa-solid fa-download" class="w-6 h-6 relative z-10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
          <span class="relative z-10 tracking-wider text-white">GET APP</span>
          <!-- Animated border corners -->
          <span class="absolute top-0 left-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="absolute top-0 right-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="absolute bottom-0 left-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="absolute bottom-0 right-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <!-- Sliding background effect -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-[#C084FC] to-[#818CF8] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
          ></span>
        </router-link>

        <a
          href="https://github.com/0xchat-app"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-gray-700 text-white font-bold text-lg px-10 py-5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C084FC]/40 hover:scale-110 hover:-translate-y-1 gradient-border-button"
        >
          <!-- Animated border effect -->
          <span class="absolute inset-0 border-2 border-transparent scale-0 group-hover:scale-100 transition-transform duration-500 origin-center gradient-border-overlay"></span>

          <!-- Sweep effect -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-transparent via-[#C084FC]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          ></span>

          <font-awesome-icon icon="fa-brands fa-github" class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span class="relative z-10 tracking-wider">GITHUB</span>

          <!-- Corner accents -->
          <span class="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C084FC] to-[#818CF8] group-hover:w-8 transition-all duration-300"></span>
          <span class="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-[#C084FC] to-[#818CF8] group-hover:h-8 transition-all duration-300 delay-75"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-[#C084FC] to-[#818CF8] group-hover:w-8 transition-all duration-300"></span>
          <span class="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-b from-[#C084FC] to-[#818CF8] group-hover:h-8 transition-all duration-300 delay-75"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const newsHeadlines = ref([
  {
    source: "Forbes",
    text: "Signal phone numbers exposed in Twilio data breach",
    date: "Jun 2022"
  },
  {
    source: "Bloomberg",
    text: "Telegram tracks user IP addresses for security purposes",
    date: "Apr 2021"
  },
  {
    source: "The Verge",
    text: "Telegram cloud chats stored unencrypted on servers",
    date: "Mar 2021"
  },
  {
    source: "The Guardian",
    text: "WhatsApp forces users to share data with Facebook",
    date: "Jan 2021"
  },
  {
    source: "Ars Technica",
    text: "WhatsApp backups stored unencrypted on Google Drive and iCloud",
    date: "Oct 2020"
  },
  {
    source: "TechCrunch",
    text: "WhatsApp metadata reveals who you talk to and when",
    date: "Jul 2019"
  },
  {
    source: "TechCrunch",
    text: "WhatsApp co-founder leaves over privacy concerns with Facebook",
    date: "Sep 2017"
  },
  {
    source: "Reuters",
    text: "WhatsApp shares metadata with Facebook for ad targeting",
    date: "Aug 2016"
  }
])
</script>

<style scoped>
/* Gradient text utility classes */
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

.group-hover-gradient-text {
  transition: all 0.3s ease;
}

.group:hover .group-hover-gradient-text {
  background: linear-gradient(135deg, #C084FC 0%, #818CF8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Gradient border utility */
.gradient-border-button {
  position: relative;
}

.gradient-border-button:hover {
  border-color: transparent;
}

.gradient-border-overlay {
  background: linear-gradient(135deg, #C084FC 0%, #818CF8 100%);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
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
    opacity: 0.08;
    transform: scale(1);
  }
  50% {
    opacity: 0.12;
    transform: scale(1.15);
  }
}

@keyframes pulse-subtle {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(192, 132, 252, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(129, 140, 248, 0.6);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
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

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
    background-size: 200% 200%;
  }
  50% {
    background-position: 100% 50%;
    background-size: 200% 200%;
  }
}

@keyframes title-entrance {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes letter-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(-2deg);
  }
  75% {
    transform: translateY(-4px) rotate(2deg);
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-title-entrance {
  animation: title-entrance 1s ease-out forwards;
}

.animate-letter-float {
  display: inline-block;
  animation: letter-float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 6s ease-in-out infinite;
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

.emoji-hover {
  transition: transform 0.3s ease, filter 0.3s ease;
  display: inline-block;
}

.emoji-hover:hover {
  transform: scale(1.3) rotate(10deg);
  filter: drop-shadow(0 0 8px rgba(192, 132, 252, 0.5));
  animation: emoji-bounce 0.5s ease;
}

@keyframes emoji-bounce {
  0%,
  100% {
    transform: scale(1.3) rotate(10deg) translateY(0);
  }
  50% {
    transform: scale(1.5) rotate(-10deg) translateY(-5px);
  }
}

/* CSS Logo Styles */
.logo-badge {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C084FC 0%, #818CF8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(192, 132, 252, 0.5), 0 0 60px rgba(129, 140, 248, 0.3);
  transition: all 0.3s ease;
  animation: logo-float 3s ease-in-out infinite;
}

.logo-badge:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 40px rgba(192, 132, 252, 0.7), 0 0 80px rgba(129, 140, 248, 0.4);
}

.logo-badge-image {
  width: 65%;
  height: 65%;
  object-fit: contain;
  filter: brightness(100);
}

.logo-text {
  font-family: var(--font-orbitron), monospace;
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
}

.logo-ox {
  background: linear-gradient(135deg, #C084FC 0%, #818CF8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(192, 132, 252, 0.6));
}

.logo-chat {
  color: #fff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.logo-text:hover {
  transform: translateY(-3px);
}

.logo-lightning {
  font-size: 3.5rem;
  animation: lightning-pulse 2s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(192, 132, 252, 0.9));
}

@keyframes logo-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes lightning-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

/* News Hidden on Scroll */
.news-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
}

/* Newspaper-Style Breaking News Headlines */
.news-headline-item {
  position: absolute;
  width: 280px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-left: 3px solid rgba(239, 68, 68, 0.8);
  padding: 16px;
  transform: rotate(-2deg);
  opacity: 0;
  animation: pop-in-headline 0.6s ease-out forwards;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.news-headline-item:nth-child(odd) {
  transform: rotate(1.5deg);
}

.news-headline-item:nth-child(even) {
  transform: rotate(-1.5deg);
}

.news-stamp {
  position: absolute;
  top: -12px;
  left: -12px;
  background: #ef4444;
  color: #000;
  font-family: var(--font-orbitron), monospace;
  font-size: 0.65rem;
  font-weight: 900;
  padding: 4px 12px;
  letter-spacing: 0.15em;
  transform: rotate(-8deg);
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.6);
  animation: stamp-pulse 2s ease-in-out infinite;
}

.news-headline-source {
  font-family: var(--font-orbitron), monospace;
  font-size: 0.7rem;
  font-weight: 700;
  color: #ef4444;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 8px;
}

.news-headline-text {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.3;
  margin-bottom: 8px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

.news-headline-date {
  font-family: monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@keyframes pop-in-headline {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-8deg) translateY(20px);
  }
  60% {
    opacity: 1;
    transform: scale(1.05) rotate(var(--rotation, -2deg)) translateY(-5px);
  }
  100% {
    opacity: 0.85;
    transform: scale(1) rotate(var(--rotation, -2deg)) translateY(0);
  }
}

@keyframes stamp-pulse {
  0%, 100% {
    transform: rotate(-8deg) scale(1);
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.6);
  }
  50% {
    transform: rotate(-8deg) scale(1.05);
    box-shadow: 0 2px 12px rgba(239, 68, 68, 0.8);
  }
}
</style>
