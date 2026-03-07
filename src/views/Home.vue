<template>
  <div class="min-h-screen bg-white">
    <Hero />
    <Features />
    <SupportedNIPs />
    <FAQ />
    <Contact />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Features from "@/components/Features.vue";
import Hero from "@/components/Hero.vue";
import SupportedNIPs from "@/components/SupportedNIPs.vue";
import Contact from "@/components/Contact.vue";
import FAQ from "@/components/FAQ.vue";
</script>
