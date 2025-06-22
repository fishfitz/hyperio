<script setup>
  const { locale } = useI18n()
  const { data } = await useAsyncData(() => queryCollection(`works_${locale.value}`).all())

  const activeWork = ref()
  const items = computed(() => data.value?.toSorted?.((a, b) => a.meta.body.index - b.meta.body.index))
</script>

<template>
  <div>
    <h1 class="text-3xl md:text-6xl tracking-tight mb-15"> — {{ $t('works') }} </h1>
    <div v-for="{ id, meta: { body } } in items" :key="id" class="max-w-[800px] mb-6">
      <h2 class="text-3xl pb-2"> {{ body.title }} </h2>
      <p class="text-justify pb-6" v-html="body.description"/>

      <div class="pb-2 grid grid-cols-2 gap-4">
        <div v-for="(work, index) in body.works" :key="index" class="pb-6">
          <a class="relative group" @click="activeWork = work">
            <div class="bg-cover aspect-square rounded-lg mb-1" :style="{ backgroundImage: `url(${work.pics[0]})` }"/>
            <Icon
              class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-2 opacity-0 group-hover:opacity-85 transition-opacity duration-700" 
              name="teenyicons:search-outline" 
              size="80px"
            />
            <div class="absolute">
              — {{ work.title }}
              <Icon name="teenyicons:search-outline" size="13px" class="ml-2 invisible pointer-coarse:visible" />
            </div>
          </a>
        </div>
      </div>
    </div>

      <UModal
        :open="!!activeWork"
        :title="activeWork?.title"
        :description="activeWork?.description"
        :ui="{ content: 'bg-black', body: 'p-0! overflow-hidden' }"
        :close="{ size: 'xl', class: 'cursor-pointer bg-transparent!' }"
        fullscreen
        @update:open="activeWork = undefined"
      >
        <template #body>
          <UCarousel
            v-slot="{ item }" 
            :items="activeWork?.pics"
            :ui="{
              controls: 'absolute bottom-16 inset-x-12',
              dot: 'w-5 h-3',
              arrows: 'invisible md:visible relative mx-6',
              next: 'scale-150 cursor-pointer bg-transparent!',
              prev: 'scale-150 cursor-pointer bg-transparent!'
            }"
            dots
            autoplay
            loop
            arrows
            wheel-gestures
            prev-icon="i-lucide-chevron-left"
            next-icon="i-lucide-chevron-right"
          >
            <div
              :style="{ background: `url(${item})` }"
              class="max-w-full h-[calc(100vh-150px)] md:h-[calc(100vh-81px)] bg-contain! bg-no-repeat! bg-center!" 
              @click="index++"
            />
          </UCarousel>
        </template>
      </UModal>
  </div>
</template>