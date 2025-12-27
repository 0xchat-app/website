<template>
  <section id="hero" class="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12 overflow-hidden bg-black">
    <!-- Animated Noise Overlay -->

    <!-- Animated gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-300/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl animate-pulse-slower" />
    </div>

    <!-- Side Label (Vertical) -->
    <div class="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 uppercase">
      <span
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap hover:text-yellow-300 transition-colors duration-300"
      >
        0xchat
      </span>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-10">
      <span class="font-mono text-[10px] uppercase tracking-widest text-gray-500">scroll</span>
      <div class="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent" />
    </div>

    <div class="flex flex-col items-stretch justify-center h-full relative z-20 max-w-5xl">
      <!-- Main Heading (Epic Animated Title) -->
      <div class="my-8 relative group cursor-default">
        <h1
          class="font-[var(--font-orbitron)] font-black text-[clamp(4rem,12vw,8rem)] leading-none tracking-[0.2em] text-yellow-300 animate-title-entrance select-none"
          style="text-shadow: 0 0 30px rgba(253, 224, 71, 0.5), 0 0 60px rgba(253, 224, 71, 0.3)"
        >
          <span class="inline-block animate-letter-float" style="animation-delay: 0s">0</span
          ><span class="inline-block animate-letter-float" style="animation-delay: 0.1s">X</span
          ><span class="inline-block animate-letter-float" style="animation-delay: 0.2s">C</span
          ><span class="inline-block animate-letter-float" style="animation-delay: 0.3s">H</span
          ><span class="inline-block animate-letter-float" style="animation-delay: 0.4s">A</span
          ><span class="inline-block animate-letter-float" style="animation-delay: 0.5s">T</span>
        </h1>
        <!-- Glowing underline -->
        <div
          class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent group-hover:w-full transition-all duration-700 blur-sm"
        ></div>
      </div>

      <!-- Subtitle with stagger animation -->
      <h2 class="font-[var(--font-orbitron)] text-gray-400/60 text-[clamp(1.2rem,3vw,2rem)] mt-6 tracking-wide animate-fade-in-up">
        <span class="inline-block animate-fade-in" style="animation-delay: 0.1s">Secure.</span>
        <span class="inline-block animate-fade-in" style="animation-delay: 0.2s">Private.</span>
        <span class="inline-block animate-fade-in" style="animation-delay: 0.3s">Decentralized.</span>
      </h2>

      <!-- Description with enhanced styling -->
      <div class="mt-12 max-w-3xl font-mono text-base md:text-lg text-gray-400 leading-relaxed space-y-6 animate-fade-in-up" style="animation-delay: 0.4s">
        <p class="group hover:text-gray-300 transition-all duration-300 hover:translate-x-2">
          <span class="inline-block emoji-hover mr-2">⚡</span>
          0xchat is a
          <span class="font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
            <span class="inline-block emoji-hover">🔒</span> secure, <span class="inline-block emoji-hover">🔓</span> decentralized,
            <span class="inline-block emoji-hover">⧳</span> Nostr-powered</span
          >
          chat application.
          <span class="inline-block emoji-hover mx-1">💬</span>
          Your data, <span class="text-yellow-300 font-semibold">your control</span>
          <span class="inline-block emoji-hover ml-1">🛡️</span>
          — end-to-end encryption for <span class="font-semibold">all conversations</span>
          <span class="inline-block emoji-hover ml-1">🔐</span>
        </p>

        <p class="group hover:text-gray-300 transition-all duration-300 hover:translate-x-2">
          <span class="inline-block emoji-hover mr-2">✨</span>
          No registration. No phone number. No corporate surveillance.
          <span class="inline-block emoji-hover mx-1">👤</span>
          Just <span class="text-yellow-300 font-semibold">private key</span> login and
          <span class="relative inline-block text-white font-semibold group-hover:scale-110 transition-transform duration-300">
            true privacy
            <span class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-300 via-cyan-400 to-yellow-300 animate-shimmer" />
          </span>
          .
          <span class="inline-block emoji-hover ml-1">🚀</span>
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="mt-12 flex flex-col sm:flex-row gap-4 items-start">
        <router-link
          to="/download"
          class="group relative inline-block bg-yellow-300 text-black font-bold text-lg px-10 py-5 overflow-hidden transition-all duration-500 hover:bg-yellow-400 hover:shadow-2xl hover:shadow-yellow-300/60 hover:scale-110 hover:-translate-y-1 animate-pulse-subtle"
        >
          <span class="relative z-10 tracking-wider">GET APP</span>
          <!-- Animated border corners -->
          <span class="absolute top-0 left-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="absolute top-0 right-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="absolute bottom-0 left-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="absolute bottom-0 right-0 w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <!-- Sliding background effect -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
          ></span>
        </router-link>

        <a
          href="https://github.com/0xchat-app"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex items-center gap-3 bg-transparent border-2 border-gray-700 text-white font-bold text-lg px-10 py-5 overflow-hidden transition-all duration-500 hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-300/40 hover:scale-110 hover:-translate-y-1"
        >
          <!-- Animated border effect -->
          <span class="absolute inset-0 border-2 border-yellow-300 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>

          <!-- Sweep effect -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          ></span>

          <svg
            class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <span class="relative z-10 tracking-wider">GITHUB</span>

          <!-- Corner accents -->
          <span class="absolute top-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-8 transition-all duration-300"></span>
          <span class="absolute top-0 left-0 w-0.5 h-0 bg-yellow-300 group-hover:h-8 transition-all duration-300 delay-75"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-yellow-300 group-hover:w-8 transition-all duration-300"></span>
          <span class="absolute bottom-0 right-0 w-0.5 h-0 bg-yellow-300 group-hover:h-8 transition-all duration-300 delay-75"></span>
        </a>
      </div>
    </div>
  </section>
</template>

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
    box-shadow: 0 0 20px rgba(253, 224, 71, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(253, 224, 71, 0.6);
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
  filter: drop-shadow(0 0 8px rgba(253, 224, 71, 0.5));
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
</style>
