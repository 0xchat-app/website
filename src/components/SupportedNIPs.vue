<template>
  <section id="supported-nips" class="bg-gray-50 py-28 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Header -->
      <div class="mb-16">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-600">03 / Network Protocols</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Supported NIPs</h2>
        <p class="mt-3 text-gray-500 max-w-xl leading-relaxed">
          0xchat implements a comprehensive set of Nostr Improvement Proposals for a complete decentralized communication experience.
        </p>
      </div>

      <!-- NIPs grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(nip, index) in nips"
          :key="index"
          class="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-default"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-xs font-bold text-gray-900 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-lg">{{ nip.number }}</span>
            <div class="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
              <font-awesome-icon :icon="nip.icon" class="text-gray-500 text-xs" />
            </div>
          </div>
          <h3 class="font-semibold text-gray-900 text-sm mb-1">{{ nip.title }}</h3>
          <p class="font-mono text-xs text-gray-400 leading-relaxed">{{ nip.description }}</p>
          <div v-if="nip.note" class="mt-3">
            <span class="font-mono text-[9px] uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
              {{ nip.note }}
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-2xl">
        <div class="flex-1">
          <h3 class="font-bold text-gray-900">Open Standards, Open Future</h3>
          <p class="font-mono text-xs text-gray-400 mt-1">
            NIPs define how Nostr clients and relays communicate. All implementations are open source and auditable.
          </p>
        </div>
        <a
          href="https://github.com/nostr-protocol/nostr"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 inline-flex items-center gap-2 bg-gray-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
        >
          <font-awesome-icon icon="fa-brands fa-github" />
          Nostr Spec
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const nips = ref([
  { number: 'NIP-01', icon: 'fa-solid fa-link', title: 'Basic protocol flow', description: 'Core Nostr protocol specification' },
  { number: 'NIP-05', icon: 'fa-solid fa-file-signature', title: 'DNS-based key mapping', description: 'Human-readable identifiers via DNS' },
  { number: 'NIP-09', icon: 'fa-solid fa-trash', title: 'Event Deletion', description: 'Delete events from relays' },
  { number: 'NIP-17', icon: 'fa-solid fa-user-group', title: 'Private group management', description: 'Secure group chats', note: 'Secure groups' },
  { number: 'NIP-28', icon: 'fa-solid fa-comment', title: 'Public Chat', description: 'Public channels and rooms' },
  { number: 'NIP-29', icon: 'fa-solid fa-user-group', title: 'Relay groups', description: 'Group relay management', note: 'Open / closed group' },
  { number: 'NIP-44', icon: 'fa-solid fa-heart', title: 'Versioned Encryption', description: 'Enhanced message privacy' },
  { number: 'NIP-57', icon: 'fa-solid fa-bolt', title: 'Lightning Zaps', description: 'Lightning Network payments' },
  { number: 'NIP-58', icon: 'fa-solid fa-medal', title: 'Badges', description: 'User badges and achievements' },
  { number: 'NIP-100', icon: 'fa-solid fa-video', title: 'WebRTC Signaling', description: 'Voice and video calls', note: 'Audio / Video' },
  { number: 'NIP-101', icon: 'fa-solid fa-shuffle', title: 'Alias Key Exchange', description: 'Key exchange protocols' },
  { number: 'NIP-EE', icon: 'fa-solid fa-shield-halved', title: 'MLS Secret Chat', description: 'Multi-party end-to-end encryption', note: 'Desktop beta' },
])
</script>
