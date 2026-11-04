<script setup>
import { withBase } from 'vitepress'
import sections from '../../sections.json'
</script>
<template>
  <div class="section-grid">
    <a v-for="s in sections" :key="s.slug" class="section-card" :href="withBase(`/sections/${s.slug}`)">
      <span class="section-number">Section {{ s.number }}<span v-if="s.optional" class="optional-tag">Optional · Mac</span></span>
      <h3>{{ s.title }}</h3><p>{{ s.description }}</p><span class="card-action">Open section <span aria-hidden="true">→</span></span>
    </a>
  </div>
</template>
