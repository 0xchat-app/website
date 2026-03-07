<template>
  <main class="min-h-screen bg-white">
    <div class="h-[3px] bg-emerald-500" />
    <div class="max-w-2xl mx-auto px-6 py-16 animate-fade-up">
      <router-link to="/download" class="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-gray-900 transition-colors mb-12">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        All platforms
      </router-link>

      <div class="flex items-center gap-4 mb-8">
        <div class="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center">
          <font-awesome-icon icon="fa-brands fa-android" class="text-white text-2xl" />
        </div>
        <div>
          <h1 class="text-3xl font-black text-gray-900 tracking-tight">Android</h1>
          <p class="font-mono text-xs text-gray-400 mt-0.5">Phones &amp; tablets · Android 8.0+</p>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <a
          href="https://play.google.com/store/apps/details?id=com.oxchat.nostr"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
          aria-label="Open 0xchat on Google Play"
        >
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gray-100 border border-gray-100 flex items-center justify-center">
              <font-awesome-icon icon="fa-brands fa-google-play" class="text-gray-700 text-xl" />
            </div>
            <div>
              <div class="font-bold text-gray-900">Google Play</div>
              <div class="font-mono text-xs text-gray-400">Stable release</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-mono text-[9px] uppercase tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full">Recommended</span>
            <svg class="w-4 h-4 text-gray-300 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>

        <a
          href="https://github.com/0xchat-app"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
          aria-label="Open 0xchat on GitHub"
        >
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gray-100 border border-gray-100 flex items-center justify-center">
              <font-awesome-icon icon="fa-brands fa-github" class="text-gray-700 text-xl" />
            </div>
            <div>
              <div class="font-bold text-gray-900">GitHub Releases</div>
              <div class="font-mono text-xs text-gray-400">Direct APK download</div>
            </div>
          </div>
          <svg class="w-4 h-4 text-gray-300 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>

      <div class="mt-8 border border-gray-100 rounded-2xl p-5 bg-gray-50">
        <h3 class="font-bold text-gray-900 text-sm mb-3">Requirements</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 font-mono text-xs text-gray-500">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            Android 8.0 or later
          </li>
          <li class="flex items-center gap-2 font-mono text-xs text-gray-500">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            Compatible with phones and tablets
          </li>
          <li class="flex items-center gap-2 font-mono text-xs text-gray-500">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            Free to download and use
          </li>
        </ul>
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
