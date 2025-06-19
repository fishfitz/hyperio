<script setup>
  const { locale, setLocaleCookie } = useI18n()
  const changeLocale = () => {
    setLocaleCookie(locale.value === 'fr' ? 'en' : 'fr')
    window.location.reload()
  }
</script>

<template>
   <a
    class="fixed right-6 bottom-4 md:right-10 md:bottom-10 scale-150"
    color="neutral"
    size="xl"
    @click="changeLocale"
  >
    <Icon :name="locale === 'fr' ? 'circle-flags:lang-fr' : 'circle-flags:en-us'"/>
  </a>
</template>