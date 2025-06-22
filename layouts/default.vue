<template>
  <div class="overflow-y-auto overflow-x-hidden w-screen h-screen">
    <div class="fixed focus opacity-30 lg:opacity-80"/>
    <div class="noise z-1"/>
    <div class="noise z-1"/>

    <div class="pt-6 pb-14 md:px-10 text-sm! md:text-2xl! bg-gradient-to-b from-black/50">
      <UContainer class="flex items-center max-w-[800px]">
        <nuxt-link to="/" class="shrink-0 pr-4 opacity-95 hover:opacity-100">
          <img class="h-[35px]" src="/logo.png">
        </nuxt-link>
        <span class="px-4">
          <nuxt-link to="/about"> {{ $t('about') }} </nuxt-link>
        </span>
        <span class="px-4 pointer-events-none text-stone-600 line-through relative"> 
          <nuxt-link to="/shop"> {{$t('shop') }} </nuxt-link>
          <span class="text-sm absolute right-0 bottom-[-10px]">({{ $t('soon') }})</span>
        </span>
        <span class="pl-4"> 
          <nuxt-link to="/works"> {{ $t('works') }} </nuxt-link>
        </span>
      </UContainer>
    </div>

    <UContainer class="max-w-[800px]">
      <slot/>
    </UContainer>
  </div>
</template>

<style scoped>
.router-link-active {
  position: relative;
  color: var(--color-stone-200);
  pointer-events: none;

  &:after {
    content: '.';
    position: absolute;
    right: -7px;
  }
}
</style>