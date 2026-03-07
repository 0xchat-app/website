<template>
  <section id="faq" class="bg-white py-28 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <!-- Left: Header + open source card -->
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-emerald-600">04 / Help Center</span>
          <h2 class="mt-3 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">FAQ</h2>
          <p class="mt-3 text-gray-500 leading-relaxed">
            Quick answers about setup, privacy, and getting help.
          </p>

          <!-- Open source callout card -->
          <div class="mt-10 border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <font-awesome-icon icon="fa-brands fa-github" class="text-gray-700" />
              <span class="font-mono text-xs uppercase tracking-widest text-gray-500">Open Source</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Built by developers, for everyone</h3>
            <p class="font-mono text-xs text-gray-400 leading-relaxed mb-4">
              0xchat is open source with no warranties. We fix issues promptly — contributions and bug reports are always welcome.
            </p>
            <a
              href="https://github.com/0xchat-app"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-gray-900 text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <font-awesome-icon icon="fa-brands fa-github" />
              View on GitHub
            </a>
          </div>
        </div>

        <!-- Right: FAQ items -->
        <div class="lg:col-span-2 flex flex-col gap-4">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                <font-awesome-icon :icon="item.icon" class="text-gray-600 text-xs" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-2">{{ item.question }}</h3>
                <p class="font-mono text-xs text-gray-500 leading-relaxed">{{ item.answer }}</p>
                <div class="mt-3 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span class="font-mono text-[10px] text-gray-400">{{ item.tip }}</span>
                </div>
              </div>
            </div>
          </div>
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
    answer: 'No. 0xchat is built on Nostr and uses cryptographic keys for identity. No traditional sign-up required.',
    tip: 'New to Nostr? Start by generating a new key and store it securely.',
  },
  {
    icon: 'fa-solid fa-key',
    question: 'What do I use to log in?',
    answer: 'You log in with your Nostr private key (nsec). Your key is your account — protect it like a password.',
    tip: 'Never share your private key (nsec). Consider using a hardware signer.',
  },
  {
    icon: 'fa-solid fa-lock',
    question: 'Are messages encrypted?',
    answer: '0xchat supports encrypted direct messages including NIP-17 and NIP-EE MLS secret chats. Encryption applies to compatible message types.',
    tip: 'Both sides must support the same DM format for decryption to work.',
  },
  {
    icon: 'fa-solid fa-download',
    question: 'Where can I download the app?',
    answer: 'Use the Download page for iOS, Android, macOS, and Linux builds from official stores and GitHub releases.',
    tip: 'Always install from trusted sources and keep the app updated.',
  },
  {
    icon: 'fa-solid fa-comment',
    question: 'How do I get support?',
    answer: 'Email support@0xchat.com with your device, OS version, and steps to reproduce the issue.',
    tip: 'Screenshots and timestamps help us diagnose problems faster.',
  },
  {
    icon: 'fa-solid fa-bug',
    question: 'How do I report a bug or request a feature?',
    answer: 'Open an issue on our GitHub organization with reproduction steps and expected vs actual behavior.',
    tip: 'For security issues, email support instead of posting publicly.',
  },
]
</script>
