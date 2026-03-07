<template>
  <main class="min-h-screen bg-white">
    <!-- Top bar -->
    <div class="h-[3px] bg-emerald-500" />
    <div class="max-w-5xl mx-auto px-6 md:px-12 py-16 animate-fade-up">
      <!-- Back -->
      <router-link to="/" class="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-gray-900 transition-colors mb-12">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back to home
      </router-link>

      <!-- Header -->
      <div class="mb-14">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-600">Download</span>
        <h1 class="mt-3 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Get 0xchat</h1>
        <p class="mt-3 text-gray-500 max-w-lg leading-relaxed">
          Available on iOS, Android, macOS, and Linux. Free, open source, and always up to date.
        </p>
      </div>

      <!-- Platform grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- iOS -->
        <router-link
          to="/downloadIOS"
          class="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-7 hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center">
              <font-awesome-icon icon="fa-brands fa-apple" class="text-white text-2xl" />
            </div>
            <div>
              <h2 class="font-bold text-gray-900 text-lg">iOS</h2>
              <p class="font-mono text-xs text-gray-400 mt-0.5">iPhone · iPad · iOS 13+</p>
              <div class="flex gap-1.5 mt-2">
                <span class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">App Store</span>
                <span class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">TestFlight</span>
              </div>
            </div>
          </div>
          <div class="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </router-link>

        <!-- Android -->
        <router-link
          to="/downloadANDROID"
          class="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-7 hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center">
              <font-awesome-icon icon="fa-brands fa-android" class="text-white text-2xl" />
            </div>
            <div>
              <h2 class="font-bold text-gray-900 text-lg">Android</h2>
              <p class="font-mono text-xs text-gray-400 mt-0.5">Android 8.0+ · Phones &amp; tablets</p>
              <div class="flex gap-1.5 mt-2">
                <span class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">Google Play</span>
                <span class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">GitHub APK</span>
              </div>
            </div>
          </div>
          <div class="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </router-link>

        <!-- macOS -->
        <a
          href="https://github.com/0xchat-app/0xchat-app-main/releases/download/v1.5.3-release-desktop/0xchat-macos-1.5.3.dmg"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-7 hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center">
              <font-awesome-icon icon="fa-brands fa-apple" class="text-white text-2xl" />
            </div>
            <div>
              <h2 class="font-bold text-gray-900 text-lg">macOS</h2>
              <p class="font-mono text-xs text-gray-400 mt-0.5">macOS 12+ · Apple Silicon &amp; Intel</p>
              <div class="flex gap-1.5 mt-2">
                <span class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">GitHub Release</span>
                <span class="font-mono text-[9px] uppercase tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full">DMG</span>
              </div>
            </div>
          </div>
          <div class="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>

        <!-- Linux -->
        <a
          href="https://github.com/0xchat-app/0xchat-app-main/releases/tag/v1.5.3-release-desktop"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-7 hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center">
              <font-awesome-icon icon="fa-brands fa-linux" class="text-white text-2xl" />
            </div>
            <div>
              <h2 class="font-bold text-gray-900 text-lg">Linux</h2>
              <p class="font-mono text-xs text-gray-400 mt-0.5">x64 · AppImage</p>
              <div class="flex gap-1.5 mt-2">
                <span class="font-mono text-[9px] uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">GitHub Release</span>
                <span class="font-mono text-[9px] uppercase tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full">AppImage</span>
              </div>
            </div>
          </div>
          <div class="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>
      </div>

      <!-- Quick-start info -->
      <div class="mt-10 border border-gray-200 rounded-2xl p-6 bg-gray-50">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-2 h-2 rounded-full bg-emerald-500" />
          <span class="font-semibold text-gray-900 text-sm">Getting started is simple</span>
        </div>
        <ol class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-[10px] font-bold flex items-center justify-center mt-0.5">1</span>
            <span class="text-sm text-gray-600">Download for your platform above</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-[10px] font-bold flex items-center justify-center mt-0.5">2</span>
            <span class="text-sm text-gray-600">Generate or import your Nostr key — no email or phone needed</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-[10px] font-bold flex items-center justify-center mt-0.5">3</span>
            <span class="text-sm text-gray-600">Connect to relays automatically and start messaging privately</span>
          </li>
        </ol>
      </div>
    </div>
  </main>
</template>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
