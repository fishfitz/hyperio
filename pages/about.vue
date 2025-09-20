<script setup>
  const { locale } = useI18n()
  const { data } = await useAsyncData(() => queryCollection(`about_${locale.value}`).all())
</script>

<template>
  <div>
    <h1 class="text-3xl! md:text-6xl! tracking-tight mb-16"> — {{ $t('about') }} </h1>

    <div class="text-justify content">
      <ContentRenderer :value="data?.[0]" />
      
      <NuxtLink to="/works" class="mt-8 tracking-tight text-3xl! font-title">
        <span class="text-sm inline-block -translate-y-[6px]">➤</span> {{ $t('gallery') }}
      </NuxtLink>
    </div>

    <div/>
  </div>
</template>