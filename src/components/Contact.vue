<template>
  <section id="contact" class="relative py-48 pl-6 md:pl-12 pr-6 md:pr-28 overflow-hidden bg-black">
    <!-- Animated background elements -->
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl opacity-20 animate-pulse" />
    <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 2s" />

    <div class="relative z-10 max-w-4xl ml-auto">
      <!-- Emoji decoration -->

      <!-- Section Header -->
      <div class="mb-12 text-right">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-yellow-300"> 04 / Support </span>
        <h2 class="mt-4 text-4xl md:text-6xl tracking-tight text-white font-bold animate-fade-in">CONTACT</h2>
        <p class="mt-4 font-mono text-sm text-gray-400 max-w-2xl ml-auto">
          Support, feedback, and community — everything you need to get the most out of 0xchat.
        </p>
        <div class="flex items-center justify-end my-8 gap-4">
          <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-yellow-300 to-transparent" />
          <font-awesome-icon icon="fa-solid fa-bolt" class="text-yellow-300 text-2xl" />
        </div>
      </div>

      <!-- Email container with interactive effect -->
      <div class="relative mb-12">
        <!-- Animated border -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur p-[2px]"
        />

        <!-- Email content -->
        <a href="mailto:support@0xchat.com" class="group relative block">
          <div
            class="relative bg-black border border-yellow-300/40 rounded-lg px-8 md:px-12 py-6 md:py-8 transition-all duration-500 group-hover:border-yellow-300/80 group-hover:shadow-lg group-hover:shadow-yellow-300/20 w-fit ml-auto text-right"
          >
            <div class="flex items-center justify-end gap-3 mb-3">
              <font-awesome-icon icon="fa-solid fa-envelope" class="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
              <p class="font-mono text-sm md:text-lg text-gray-400 tracking-wider">CONTACT SUPPORT</p>
            </div>
            <p
              class="font-[var(--font-orbitron)] text-3xl md:text-5xl text-yellow-300 transition-all duration-300 group-hover:text-white group-hover:scale-105"
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
          class="group border border-yellow-300/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-yellow-300/70 hover:shadow-lg hover:shadow-yellow-300/10"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-comment" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Get Support</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Share device, OS version, and screenshots if possible</p>
        </a>

        <a
          href="mailto:support@0xchat.com?subject=0xchat%20Feedback"
          class="group border border-yellow-300/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-yellow-300/70 hover:shadow-lg hover:shadow-yellow-300/10"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Send Feedback</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Tell us what to improve — UX, features, or performance</p>
        </a>

        <a
          href="https://github.com/0xchat-app"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-yellow-300/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-yellow-300/70 hover:shadow-lg hover:shadow-yellow-300/10"
          aria-label="Open 0xchat on GitHub"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-bug" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Report a Bug</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Prefer GitHub for reproducible crashes and logs</p>
        </a>

        <a
          href="https://github.com/0xchat-app"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-yellow-300/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-yellow-300/70 hover:shadow-lg hover:shadow-yellow-300/10"
          aria-label="Open 0xchat on GitHub"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-brands fa-github" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Open Source</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Releases, changelog, and contributions</p>
        </a>

        <a
          href="https://primal.net/search/%230xchat"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-yellow-300/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-yellow-300/70 hover:shadow-lg hover:shadow-yellow-300/10"
          aria-label="See what people are saying about 0xchat on Primal"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">What People Say</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Browse #0xchat posts on Primal</p>
        </a>

        <a
          href="https://primal.net/p/nprofile1qqs9ajjs5p904ml92evlkayppdpx2n3zdrq6ejnw2wqphxrzmd62swswfwcse"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-yellow-300/30 rounded-2xl px-6 py-5 bg-black transition-all duration-300 hover:border-yellow-300/70 hover:shadow-lg hover:shadow-yellow-300/10"
          aria-label="Open the official 0xchat profile on Primal"
        >
          <div class="flex items-center justify-end gap-3">
            <font-awesome-icon icon="fa-solid fa-certificate" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-lg text-white">Official Profile</p>
          </div>
          <p class="mt-3 font-mono text-xs text-gray-400 text-right">// Follow 0xchat on Primal</p>
        </a>
      </div>

      <!-- Stats or trust indicators -->
      <div class="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl ml-auto">
        <div class="group text-right">
          <div class="flex items-center justify-end gap-2 mb-2">
            <font-awesome-icon icon="fa-solid fa-shield" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-2xl md:text-3xl text-yellow-300 group-hover:scale-105 transition-transform duration-300">Privacy</p>
          </div>
          <p class="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-wider">Default Secure</p>
        </div>

        <div class="group text-right">
          <div class="flex items-center justify-end gap-2 mb-2">
            <font-awesome-icon icon="fa-solid fa-bolt" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-2xl md:text-3xl text-yellow-300 group-hover:scale-105 transition-transform duration-300">Fast</p>
          </div>
          <p class="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-wider">Built for Chat</p>
        </div>

        <div class="group text-right">
          <div class="flex items-center justify-end gap-2 mb-2">
            <font-awesome-icon icon="fa-solid fa-code-branch" class="w-5 h-5 text-yellow-300" />
            <p class="font-[var(--font-orbitron)] text-2xl md:text-3xl text-yellow-300 group-hover:scale-105 transition-transform duration-300">Open</p>
          </div>
          <p class="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-wider">Ship Together</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
</style>
