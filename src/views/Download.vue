<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-12"
  >
    <div class="w-full max-w-6xl mx-auto animate-fade-in-up">
      <!-- Header -->
      <header class="text-center mb-16">
        <h1
          class="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight"
        >
          DOWNLOAD 0XCHAT⚡️
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Get started with secure, private messaging on your favorite platform
        </p>
      </header>

      <!-- Download Options Grid -->
      <section
        aria-label="Download Options"
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <!-- iOS Card -->
        <router-link
          to="/downloadIOS"
          class="group relative overflow-hidden bg-gray-900 rounded-3xl p-8 border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500"
          tabindex="0"
          aria-label="iOS: Download for iPhone and iPad"
        >
          <!-- Gradient Glow -->
          <div
            class="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <!-- Icon -->
            <div
              class="flex items-center justify-center w-20 h-20 bg-purple-900/30 rounded-2xl mb-6 group-hover:bg-purple-800/40 group-hover:scale-110 transition-all duration-300"
            >
              <font-awesome-icon icon="fa-brands fa-apple" class="text-4xl text-white" />
            </div>

            <!-- Content -->
            <h2
              class="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"
            >
              iOS
            </h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              Download for iPhone and iPad
            </p>

            <!-- Features -->
            <ul class="space-y-2 text-sm text-gray-400">
              <li class="flex items-center gap-2">
                <svg
                  class="w-4 h-4 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                App Store
              </li>
              <li class="flex items-center gap-2">
                <svg
                  class="w-4 h-4 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                iOS 13+
              </li>
            </ul>

            <!-- Arrow -->
            <div
              class="mt-6 flex items-center text-purple-400 font-semibold text-sm group-hover:translate-x-2 transition-transform"
            >
              Download now
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
            </div>
          </div>
        </router-link>

        <!-- Android Card -->
        <router-link
          to="/downloadANDROID"
          class="group relative overflow-hidden bg-gray-900 rounded-3xl p-8 border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500"
          tabindex="0"
          aria-label="Android: Download for Android devices"
        >
          <!-- Gradient Glow -->
          <div
            class="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <!-- Icon -->
            <div
              class="flex items-center justify-center w-20 h-20 bg-green-900/30 rounded-2xl mb-6 group-hover:bg-green-800/40 group-hover:scale-110 transition-all duration-300"
            >
              <font-awesome-icon icon="fa-brands fa-android" class="text-4xl text-white" />
            </div>

            <!-- Content -->
            <h2
              class="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors"
            >
              Android
            </h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              Download for Android devices
            </p>

            <!-- Features -->
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
                Google Play
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
                Android 8+
              </li>
            </ul>

            <!-- Arrow -->
            <div
              class="mt-6 flex items-center text-green-400 font-semibold text-sm group-hover:translate-x-2 transition-transform"
            >
              Download now
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
            </div>
          </div>
        </router-link>

        <!-- macOS Card (Coming Soon) -->
        <div
          class="group relative overflow-hidden bg-gray-900/50 rounded-3xl p-8 border border-gray-700 opacity-60 cursor-not-allowed"
          aria-label="macOS: Coming Soon"
        >
          <div class="relative z-10">
            <!-- Icon -->
            <div
              class="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl mb-6"
            >
              <font-awesome-icon icon="fa-brands fa-apple" class="text-4xl text-white" />
            </div>

            <!-- Content -->
            <h2
              class="text-2xl font-bold text-white mb-2"
            >
              macOS
            </h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              Download for Mac computers
            </p>

            <!-- Coming Soon Badge -->
            <div class="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
          </div>
        </div>

        <!-- Linux Card (Coming Soon) -->
        <div
          class="group relative overflow-hidden bg-gray-900/50 rounded-3xl p-8 border border-gray-700 opacity-60 cursor-not-allowed"
          aria-label="Linux: Coming Soon"
        >
          <div class="relative z-10">
            <!-- Icon -->
            <div
              class="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl mb-6"
            >
              <font-awesome-icon icon="fa-brands fa-linux" class="text-4xl text-white" />
            </div>

            <!-- Content -->
            <h2
              class="text-2xl font-bold text-white mb-2"
            >
              Linux
            </h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              Download for Linux systems
            </p>

            <!-- Coming Soon Badge -->
            <div class="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
          </div>
        </div>

        <!-- Windows Card (Coming Soon) -->
        <div
          class="group relative overflow-hidden bg-gray-900/50 rounded-3xl p-8 border border-gray-700 opacity-60 cursor-not-allowed"
          aria-label="Windows: Coming Soon"
        >
          <div class="relative z-10">
            <!-- Icon -->
            <div
              class="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl mb-6"
            >
              <font-awesome-icon icon="fa-brands fa-windows" class="text-4xl text-white" />
            </div>

            <!-- Content -->
            <h2
              class="text-2xl font-bold text-white mb-2"
            >
              Windows
            </h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              Download for Windows PC
            </p>

            <!-- Coming Soon Badge -->
            <div class="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      <!-- Back Button -->
      <div class="text-center mt-10">
        <router-link
          to="/"
          class="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors font-semibold"
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
          Back to Home
        </router-link>
      </div>
    </div>
  </main>
</template>

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