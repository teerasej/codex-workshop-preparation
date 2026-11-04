<script setup>
import { computed, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import images from '../images.json'
const props = defineProps({ asset: String, eager: Boolean })
const item = computed(() => images[props.asset])
const failed = ref(false)
watch(() => props.asset, () => { failed.value = false })
</script>
<template>
  <figure v-if="item" class="prep-image" :data-asset="asset" :style="{ aspectRatio: `${item.width} / ${item.height}` }">
    <img v-if="!failed" :src="withBase(item.sources[0].url)" :srcset="item.sources.map(s => `${withBase(s.url)} ${s.width}w`).join(', ')" sizes="(min-width: 960px) 688px, calc(100vw - 48px)" :width="item.width" :height="item.height" :alt="item.alt" :loading="eager ? 'eager' : 'lazy'" decoding="async" @error="failed = true" />
    <figcaption v-else>{{ item.alt }}</figcaption>
  </figure>
</template>
