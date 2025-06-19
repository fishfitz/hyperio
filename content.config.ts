import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: Object.fromEntries(Object.entries({
    about: {
      type: 'page',
      source: 'about/**.md'
    },
    works: {
      type: 'data',
      source: 'works/**.yml',
      schema: z.object({})
    }
  }).flatMap(([key, value]) => ['en', 'fr'].map(lang => [
    `${key}_${lang}`,
    defineCollection({ 
      ...value, 
      source: String(value.source).replace('/', `/${lang}/`)
    })
  ])))
})