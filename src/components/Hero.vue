<template>
  <section id="hero" class="bg-white overflow-hidden">
    <!-- Thin emerald top accent bar -->
    <div class="h-[3px] bg-emerald-500" />

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

      <!-- Hero content grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[88vh] py-20">
        <!-- Left: Product statement -->
        <div class="flex flex-col gap-8 animate-fade-up">
          <!-- Category pill -->
          <div class="inline-flex items-center gap-2 self-start bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500" />
            <span class="font-mono text-xs uppercase tracking-widest text-gray-500">Open Source · Nostr Protocol</span>
          </div>

          <!-- Headline -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.03]">
            Secure Chat.<br />
            <span class="relative inline-block">
              Your Keys.
              <span class="absolute -bottom-1 left-0 w-full h-[3px] bg-emerald-500 rounded-full" />
            </span>
          </h1>

          <!-- Description -->
          <p class="text-lg text-gray-500 max-w-md leading-relaxed">
            0xchat is a Nostr-powered messaging app. No phone number, no email, no central server — just your private key and true end-to-end encryption.
          </p>

          <!-- Rotating value point -->
          <div class="flex items-center gap-3 h-6 overflow-hidden">
            <span class="text-emerald-500 shrink-0">✓</span>
            <span class="font-mono text-sm text-gray-500">{{ currentValue }}</span>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 pt-2">
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

          <!-- Trust signals -->
          <div class="flex items-center gap-6 pt-2">
            <div class="text-center">
              <div class="font-bold text-gray-900 text-lg">NIP-EE</div>
              <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">MLS Encryption</div>
            </div>
            <div class="w-px h-8 bg-gray-200" />
            <div class="text-center">
              <div class="font-bold text-gray-900 text-lg">E2E</div>
              <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">All DMs</div>
            </div>
            <div class="w-px h-8 bg-gray-200" />
            <div class="text-center">
              <div class="font-bold text-gray-900 text-lg">Open</div>
              <div class="font-mono text-xs text-gray-400 uppercase tracking-wider">Source</div>
            </div>
          </div>
        </div>

        <!-- Right: Terminal install card -->
        <div class="animate-fade-up" style="animation-delay: 0.15s">
          <div class="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-gray-900/10">
            <!-- Terminal chrome -->
            <div class="bg-[#18181b] px-4 py-3 flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded-full bg-red-500" />
                <span class="w-3 h-3 rounded-full bg-amber-500" />
                <span class="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span class="font-mono text-xs text-zinc-500 tracking-wider">0xchat — install</span>
              <div class="w-14" />
            </div>

            <!-- Platform tabs -->
            <div class="bg-[#09090b] border-b border-zinc-800 flex">
              <button
                v-for="(tab, i) in platformTabs"
                :key="i"
                @click="activeTab = i"
                class="font-mono text-xs px-5 py-2.5 transition-colors duration-150 border-b-2"
                :class="activeTab === i ? 'text-white border-emerald-500' : 'text-zinc-500 border-transparent hover:text-zinc-300'"
              >
                {{ tab.label }}
              </button>
            </div>

            <!-- Terminal body -->
            <div class="bg-[#09090b] p-6 font-mono text-sm min-h-[200px] space-y-2">
              <div v-for="(line, i) in platformTabs[activeTab].lines" :key="i">
                <template v-if="line.type === 'prompt'">
                  <span class="text-zinc-500">$ </span>
                  <span class="text-white">{{ line.text }}</span>
                </template>
                <template v-else-if="line.type === 'ok'">
                  <span class="text-emerald-400">✓ </span>
                  <span class="text-zinc-400">{{ line.text }}</span>
                </template>
                <template v-else-if="line.type === 'info'">
                  <span class="text-zinc-500">  {{ line.text }}</span>
                </template>
                <template v-else-if="line.type === 'blank'">
                  <span>&nbsp;</span>
                </template>
              </div>
            </div>

            <!-- Status bar -->
            <div class="bg-[#18181b] px-6 py-2 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500" />
                <span class="font-mono text-xs text-zinc-500">ready</span>
              </div>
              <a
                :href="platformTabs[activeTab].downloadUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors underline underline-offset-2"
              >
                Open store →
              </a>
            </div>
          </div>

          <!-- Proof points below terminal -->
          <div class="mt-6 grid grid-cols-3 gap-4 text-center">
            <div
              v-for="proof in proofPoints"
              :key="proof.label"
              class="border border-gray-100 rounded-xl px-4 py-3 hover:border-gray-200 transition-colors"
            >
              <div class="font-bold text-gray-900 text-sm">{{ proof.value }}</div>
              <div class="font-mono text-xs text-gray-400 mt-0.5">{{ proof.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref(0)

const platformTabs = [
  {
    label: 'iOS',
    downloadUrl: 'https://apps.apple.com/app/0xchat/id1637607169',
    lines: [
      { type: 'info', text: '# App Store' },
      { type: 'prompt', text: 'open apps.apple.com/app/0xchat' },
      { type: 'blank' },
      { type: 'ok', text: 'App Store opened' },
      { type: 'ok', text: 'Downloading 0xchat...' },
      { type: 'ok', text: 'iOS 13.0+ required' },
      { type: 'blank' },
      { type: 'ok', text: 'Ready to chat' },
    ],
  },
  {
    label: 'Android',
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.oxchat.nostr',
    lines: [
      { type: 'info', text: '# Google Play' },
      { type: 'prompt', text: 'open play.google.com/?id=com.oxchat' },
      { type: 'blank' },
      { type: 'ok', text: 'Play Store opened' },
      { type: 'ok', text: 'Downloading 0xchat...' },
      { type: 'ok', text: 'Android 8.0+ required' },
      { type: 'blank' },
      { type: 'ok', text: 'Ready to chat' },
    ],
  },
  {
    label: 'macOS',
    downloadUrl: 'https://github.com/0xchat-app/0xchat-app-main/releases',
    lines: [
      { type: 'info', text: '# GitHub Release' },
      { type: 'prompt', text: 'curl -L github.com/0xchat-app/releases' },
      { type: 'blank' },
      { type: 'ok', text: 'Downloaded 0xchat.dmg' },
      { type: 'ok', text: 'Mount and install' },
      { type: 'ok', text: 'macOS 12+ required' },
      { type: 'blank' },
      { type: 'ok', text: 'Ready to chat' },
    ],
  },
  {
    label: 'Linux',
    downloadUrl: 'https://github.com/0xchat-app/0xchat-app-main/releases',
    lines: [
      { type: 'info', text: '# GitHub Release' },
      { type: 'prompt', text: 'wget github.com/0xchat-app/releases/linux' },
      { type: 'blank' },
      { type: 'ok', text: 'Downloaded 0xchat.AppImage' },
      { type: 'ok', text: 'chmod +x && ./0xchat.AppImage' },
      { type: 'ok', text: 'Linux x64 supported' },
      { type: 'blank' },
      { type: 'ok', text: 'Ready to chat' },
    ],
  },
]

const proofPoints = [
  { value: 'Nostr', label: 'Protocol' },
  { value: 'NIP-EE', label: 'MLS Secret Chat' },
  { value: 'E2E', label: 'Encrypted' },
]

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
