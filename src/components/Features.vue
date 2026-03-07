<template>
  <section id="services" class="bg-white py-28 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-emerald-600">02 / What we offer</span>
          <h2 class="mt-3 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Features</h2>
          <p class="mt-3 text-gray-500 max-w-lg leading-relaxed">
            Everything you need for fast, private, decentralized messaging — built on open standards.
          </p>
        </div>
        <div class="shrink-0">
          <div class="h-px w-32 bg-gray-200" />
        </div>
      </div>

      <!-- Feature marquee -->
      <div class="relative overflow-hidden">
        <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div class="flex gap-4 animate-marquee py-2">
          <div
            v-for="(service, i) in [...services, ...services]"
            :key="i"
            class="shrink-0 w-72 border border-gray-200 rounded-2xl p-6 bg-white hover:-translate-y-1 hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-default"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                <font-awesome-icon :icon="service.icon" class="text-gray-700 text-sm" />
              </div>
              <div class="flex flex-wrap gap-1 justify-end max-w-[120px]">
                <span
                  v-for="(tech, ti) in service.tech.slice(0, 2)"
                  :key="ti"
                  class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full"
                >{{ tech }}</span>
              </div>
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-1.5">{{ service.title }}</h3>
            <p class="font-mono text-xs text-gray-400 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>

      <!-- Detailed grid -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group border border-gray-100 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center">
              <font-awesome-icon :icon="service.icon" class="text-white text-xs" />
            </div>
            <span class="font-mono text-[10px] uppercase tracking-widest text-gray-400">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-1.5">{{ service.title }}</h3>
          <p class="font-mono text-xs text-gray-400 leading-relaxed mb-4">{{ service.description }}</p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="(tech, ti) in service.tech"
              :key="ti"
              class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full"
            >{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Easy to use',
    description: 'No registration required. Skip phone numbers, email, and account setup.',
    tech: ['No Setup', 'Instant Access', 'User Friendly'],
  },
  {
    icon: 'fa-solid fa-link',
    title: 'Built on Nostr',
    description: 'Decentralized and open. You own your data — no central server.',
    tech: ['Decentralized', 'Open Source', 'Nostr'],
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Encrypted Messages',
    description: 'Direct messages and friends list secured with end-to-end encryption.',
    tech: ['E2E Encryption', 'Privacy', 'Security'],
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Private Groups',
    description: 'Create encrypted group chats with friends, family, or colleagues.',
    tech: ['Group Chat', 'Encryption', 'Privacy'],
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Voice & Video Calls',
    description: 'High-definition peer-to-peer calls without a central signaling server.',
    tech: ['WebRTC', 'HD Quality', 'P2P'],
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Lightning Payments',
    description: 'Integrated Cashu wallet for instant, private Bitcoin transfers.',
    tech: ['Lightning', 'Cashu', 'Instant'],
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Relay Groups',
    description: 'Coordinate large group messaging across relay groups for scale.',
    tech: ['NIP-29', 'Relay Groups', 'Scaling'],
  },
  {
    icon: 'fa-solid fa-newspaper',
    title: 'Nostr Posts',
    description: 'Create and interact with Nostr notes and long-form content.',
    tech: ['Posts', 'Notes', 'Nostr'],
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Napps',
    description: 'Run embedded Nostr apps inside the client with safe sandboxed permissions.',
    tech: ['Napps', 'Extensions', 'Embedded'],
  },
  {
    icon: 'fa-solid fa-user-secret',
    title: 'Embedded Tor',
    description: 'Route traffic via Tor to reduce metadata exposure and enhance privacy.',
    tech: ['Tor', 'Privacy', 'Anonymity'],
  },
])
</script>
