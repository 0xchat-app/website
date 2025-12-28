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
        class="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap hover:text-[#818CF8] transition-colors duration-300"
      >
        FAQ
      </span>
    </div>

    <!-- Open Source Disclaimer Card (Right Side) -->
    <div class="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 z-10">
      <div class="disclaimer-card">
        <div class="disclaimer-icon">💻</div>
        <div class="disclaimer-badge">OPEN SOURCE</div>
        <h3 class="disclaimer-title">Built by Developers, For Everyone</h3>
        <p class="disclaimer-text">
          We are a team of talented developers passionate about privacy and decentralization. 
        </p>
        <p class="disclaimer-text">
          This app is <span class="text-[#818CF8] font-semibold">open source</span> and comes with 
          <span class="text-[#818CF8] font-semibold">no warranties</span>. While we strive to fix everything promptly, 
          you may encounter bugs — which is normal for open source projects.
        </p>
        <div class="disclaimer-footer">
          <font-awesome-icon icon="fa-brands fa-github" class="text-gray-400 text-sm" />
          <span class="disclaimer-footer-text">Community Driven</span>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-stretch justify-center h-full relative z-10 max-w-6xl mr-auto"
    >
      <!-- Section Header (Left aligned) -->
      <div class="mb-12">
        <span
          class="font-mono text-[10px] uppercase tracking-[0.3em] text-[#818CF8]"
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
          <font-awesome-icon icon="fa-solid fa-bolt" class="text-[#818CF8] text-2xl" />
          <div class="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-[#818CF8] to-transparent" />
        </div>
      </div>

      <!-- FAQ List -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="group relative border border-gray-800/40 p-6 transition-all duration-500 hover:border-[#818CF8]/60"
        >
          <!-- Corner bracket -->
          <div class="absolute top-0 left-0 w-14 h-14 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#818CF8] to-transparent" />
            <div class="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#818CF8] to-transparent" />
          </div>

          <div class="flex items-start gap-4">
            <div
              class="shrink-0 w-10 h-10 rounded-lg border border-gray-800/60 bg-black/40 flex items-center justify-center"
            >
              <font-awesome-icon :icon="item.icon" class="w-5 h-5 text-[#818CF8]" />
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

          <div class="mt-4 h-[1px] bg-gradient-to-r from-[#818CF8]/20 to-transparent" />
          <div class="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
            <font-awesome-icon icon="fa-solid fa-circle-question" class="w-4 h-4 text-[#818CF8]/70" />
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

/* Open Source Disclaimer Card */
.disclaimer-card {
  position: relative;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(129, 140, 248, 0.2);
  border-left: 4px solid rgba(129, 140, 248, 0.6);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  animation: slide-in-right 0.8s ease-out;
}

.disclaimer-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 16px;
  animation: float-icon 3s ease-in-out infinite;
}

.disclaimer-badge {
  display: inline-block;
  background: rgba(129, 140, 248, 0.15);
  border: 1px solid rgba(129, 140, 248, 0.4);
  color: #818CF8;
  font-family: var(--font-orbitron), monospace;
  font-size: 0.65rem;
  font-weight: 900;
  padding: 4px 12px;
  border-radius: 4px;
  letter-spacing: 0.15em;
  margin-bottom: 16px;
}

.disclaimer-title {
  font-family: var(--font-orbitron), monospace;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  line-height: 1.3;
}

.disclaimer-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 12px;
}

.disclaimer-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.disclaimer-footer-text {
  font-family: monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float-icon {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
