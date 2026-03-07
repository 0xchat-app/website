<template>
  <section id="contact" class="bg-gray-50 py-28 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Header -->
      <div class="mb-16">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-600">05 / Support</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Contact</h2>
        <p class="mt-3 text-gray-500 max-w-xl leading-relaxed">
          Support, feedback, and community — everything you need to get the most out of 0xchat.
        </p>
      </div>

      <!-- Email CTA -->
      <a
        href="mailto:support@0xchat.com"
        class="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-8 py-7 hover:border-gray-400 hover:shadow-md transition-all duration-200 mb-8"
      >
        <div>
          <div class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-1">Contact support</div>
          <div class="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-emerald-600 transition-colors">
            support@0xchat.com
          </div>
          <div class="font-mono text-xs text-gray-400 mt-1">
            Help with setup, login, notifications, and account recovery
          </div>
        </div>
        <div class="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors shrink-0">
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-gray-500 group-hover:text-emerald-600 transition-colors" />
        </div>
      </a>

      <!-- Action grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        <a
          v-for="action in actions"
          :key="action.label"
          :href="action.href"
          :target="action.external ? '_blank' : undefined"
          :rel="action.external ? 'noopener noreferrer' : undefined"
          class="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
        >
          <div class="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
            <font-awesome-icon :icon="action.icon" class="text-gray-500 text-xs group-hover:text-white transition-colors" />
          </div>
          <div>
            <div class="font-bold text-gray-900 text-sm">{{ action.label }}</div>
            <div class="font-mono text-xs text-gray-400 mt-0.5">{{ action.desc }}</div>
          </div>
        </a>
      </div>

      <!-- Trust indicators -->
      <div class="grid grid-cols-3 gap-6 border-t border-gray-200 pt-12">
        <div v-for="trust in trustStats" :key="trust.label" class="text-center">
          <div class="flex items-center justify-center gap-1.5 mb-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500" />
            <span class="font-black text-gray-900 text-xl">{{ trust.value }}</span>
          </div>
          <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">{{ trust.label }}</div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="0xchat" class="w-6 h-6 rounded-md" />
          <span class="font-bold text-gray-900 text-sm">0xchat</span>
          <span class="text-gray-300 mx-2">·</span>
          <span class="font-mono text-xs text-gray-400">Open source · Nostr protocol</span>
        </div>
        <div class="flex items-center gap-6">
          <a href="/xchat-privacy-policy.html" class="font-mono text-xs text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/xchat-terms-of-use.html" class="font-mono text-xs text-gray-400 hover:text-gray-900 transition-colors">Terms of Use</a>
          <a href="https://github.com/0xchat-app" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-gray-400 hover:text-gray-900 transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const actions = [
  { icon: 'fa-solid fa-comment', label: 'Get Support', desc: 'Setup, login, notifications', href: 'mailto:support@0xchat.com?subject=0xchat%20Support%20Request', external: false },
  { icon: 'fa-solid fa-wand-magic-sparkles', label: 'Send Feedback', desc: 'UX, features, performance', href: 'mailto:support@0xchat.com?subject=0xchat%20Feedback', external: false },
  { icon: 'fa-solid fa-bug', label: 'Report a Bug', desc: 'Crashes and reproducible issues', href: 'https://github.com/0xchat-app', external: true },
  { icon: 'fa-brands fa-github', label: 'Open Source', desc: 'Releases, changelog, contributions', href: 'https://github.com/0xchat-app', external: true },
  { icon: 'fa-solid fa-magnifying-glass', label: 'What People Say', desc: 'Browse #0xchat on Primal', href: 'https://primal.net/search/%230xchat', external: true },
  { icon: 'fa-solid fa-certificate', label: 'Official Profile', desc: 'Follow 0xchat on Primal', href: 'https://primal.net/p/nprofile1qqs9ajjs5p904ml92evlkayppdpx2n3zdrq6ejnw2wqphxrzmd62swswfwcse', external: true },
]

const trustStats = [
  { value: 'Private', label: 'Default Secure' },
  { value: 'Fast', label: 'Built for Chat' },
  { value: 'Open', label: 'Ship Together' },
]
</script>
