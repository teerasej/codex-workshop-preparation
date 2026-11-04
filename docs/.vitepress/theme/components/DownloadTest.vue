<script setup>
import { withBase } from 'vitepress'
</script>
<template>
  <div class="download-test">
    <a class="download-button" :href="withBase('/files/preparation-download-test.zip')" download="preparation-download-test.zip">Download test ZIP <span aria-hidden="true">↓</span></a>
    <span class="download-note">Small ZIP · 3 sample files · no installation</span>
  </div>
</template>
