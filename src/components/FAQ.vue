<template>
  <section
    id="faq"
    class="relative min-h-screen flex items-center pl-6 md:pl-12 pr-6 md:pr-28 overflow-hidden bg-black"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"
      />
      <div
        class="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slower"
      />
    </div>

    <!-- Side Label (Vertical) -->
    <div class="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">
      <span
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap hover:text-yellow-300 transition-colors duration-300"
      >
        FAQ
      </span>
    </div>

    <div
      class="flex flex-col items-stretch justify-center h-full relative z-10 max-w-6xl mr-auto"
    >
      <!-- Section Header (Left aligned) -->
      <div class="mb-12">
        <span
          class="font-mono text-[10px] uppercase tracking-[0.3em] text-yellow-300"
        >
          04 / Help Center
        </span>
        <h2
          class="mt-4 text-4xl md:text-6xl tracking-tight text-white font-bold"
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p class="mt-4 font-mono text-sm text-gray-400 max-w-2xl">
          Quick answers about setup, privacy, and getting help.
        </p>
        <div class="flex items-center my-8 gap-4">
          <font-awesome-icon icon="fa-solid fa-bolt" class="text-yellow-300 text-2xl" />
          <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-yellow-300 to-transparent" />
        </div>
      </div>

      <!-- FAQ List -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="group relative border border-gray-800/40 p-6 transition-all duration-500 hover:border-yellow-300/60"
        >
          <!-- Corner bracket -->
          <div class="absolute top-0 left-0 w-14 h-14 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-300 to-transparent" />
            <div class="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-yellow-300 to-transparent" />
          </div>

          <div class="flex items-start gap-4">
            <div
              class="shrink-0 w-10 h-10 rounded-lg border border-gray-800/60 bg-black/40 flex items-center justify-center"
            >
              <font-awesome-icon :icon="item.icon" class="w-5 h-5 text-yellow-300" />
            </div>

            <div>
              <h3 class="text-white font-semibold tracking-tight">
                {{ item.question }}
              </h3>
              <p class="mt-2 font-mono text-xs text-gray-400 leading-relaxed">
                {{ item.answer }}
              </p>
            </div>
          </div>

          <div class="mt-4 h-[1px] bg-gradient-to-r from-yellow-300/20 to-transparent" />
          <div class="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
            <font-awesome-icon icon="fa-solid fa-circle-question" class="w-4 h-4 text-yellow-300/70" />
            Quick tip
          </div>
          <p class="mt-2 font-mono text-xs text-gray-500">
            {{ item.tip }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    icon: 'fa-solid fa-mobile-screen',
    question: 'Do I need a phone number or email to use 0xchat?',
    answer:
      'No. 0xchat is built on Nostr and uses keys for identity, so you can get started without traditional sign-ups.',
    tip: 'If you are new to Nostr, start by creating a new key and keep it safe.',
  },
  {
    icon: 'fa-solid fa-key',
    question: 'What do I use to log in?',
    answer:
      'You log in with your Nostr key (for example, an nsec private key). Your key is your account, so protect it like a password.',
    tip: 'Never share your private key (nsec). Consider using a trusted signer if you have one.',
  },
  {
    icon: 'fa-solid fa-lock',
    question: 'Are messages encrypted?',
    answer:
      '0xchat supports encrypted direct messages (including NIP-04 and NIP-44). Encryption applies to compatible message types and clients.',
    tip: 'If someone cannot decrypt your message, they may be using a client that does not support the same DM format.',
  },
  {
    icon: 'fa-solid fa-download',
    question: 'Where can I download the app?',
    answer:
      'Use the Download page to get the latest iOS or Android build from official stores, or follow our GitHub organization for updates.',
    tip: 'Always install from trusted sources and keep your app updated.',
  },
  {
    icon: 'fa-solid fa-comment',
    question: 'How do I get support?',
    answer:
      'Email support@0xchat.com with as much detail as possible (device, OS version, and steps to reproduce).',
    tip: 'Including screenshots and timestamps helps us diagnose faster.',
  },
  {
    icon: 'fa-solid fa-bug',
    question: 'How do I report a bug or request a feature?',
    answer:
      'The best place is our GitHub organization. Open an issue with steps to reproduce and what you expected vs what happened.',
    tip: 'If the issue is security-sensitive, email support instead of posting publicly.',
  },
]
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
