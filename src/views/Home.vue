<template>
  <div class="min-h-screen bg-black">
    <Hero />
    <Services />
    <SupportedNIPs />
    <Contact />
    <FAQ />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Services from "@/components/Services.vue";
import Hero from "@/components/Hero.vue";
import SupportedNIPs from "@/components/SupportedNIPs.vue";
import Contact from "@/components/Contact.vue";
import FAQ from "@/components/FAQ.vue";
</script>
