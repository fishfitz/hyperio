<script setup>
useSeoMeta({
  title: 'Hyperio',
  ogTitle: 'Hyperio',
  description: 'Alien shapes.',
  ogDescription: 'Alien shapes.',
  ogImage: 'https://hyperio.fr/home/home2-high.jpg',
  twitterCard: 'summary_large_image'
})

const { locale } = useI18n()

useHead({
  htmlAttrs: { lang: locale }
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <LangPicker/>
  </UApp>
</template>