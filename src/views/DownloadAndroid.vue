<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-12"
  >
    <div class="w-full max-w-6xl mx-auto animate-fade-in-up">
      <header class="text-center mb-16">
        <h1
          class="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight"
        >
          DOWNLOAD 0xchat⚡️
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Get 0xchat for Android devices
        </p>
      </header>

      <section aria-label="Android Download" class="w-full max-w-3xl mx-auto">
        <div
          class="group relative overflow-hidden bg-gray-900 rounded-3xl p-8 border border-gray-700"
        >
          <div
            class="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-60 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <div
              class="flex items-center justify-center w-20 h-20 bg-green-900/30 rounded-2xl mb-6"
            >
              <div class="text-4xl">🤖</div>
            </div>

            <h2 class="text-2xl font-bold text-white mb-2">Android</h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              Download from Google Play or get the latest release from GitHub
            </p>

            <div class="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.oxchat.nostr"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between w-full rounded-2xl px-6 py-4 bg-black/30 border border-gray-700 hover:border-green-400/60 hover:bg-black/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500"
                aria-label="Open 0xchat on Google Play"
              >
                <span class="text-white font-semibold">Google Play</span>
                <span
                  class="flex items-center text-green-400 font-semibold text-sm"
                >
                  Open
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="https://github.com/0xchat-app"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between w-full rounded-2xl px-6 py-4 bg-black/30 border border-gray-700 hover:border-green-400/60 hover:bg-black/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500"
                aria-label="Open 0xchat on GitHub"
              >
                <span class="text-white font-semibold">GitHub Releases</span>
                <span
                  class="flex items-center text-green-400 font-semibold text-sm"
                >
                  Open
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div class="mt-8 pt-8 border-t border-gray-700">
              <h3 class="text-lg font-bold text-white mb-4">Requirements</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Android 8.0 or later
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Compatible with phones and tablets
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Free to download and use
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center mt-10">
        <router-link
          to="/download"
          class="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors font-semibold"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Download Options
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
