<script setup>
  definePageMeta({
    layout: false
  })
</script>

<template>
  <div class="bg-stone-900 relative">
    <div class="fixed bottom-0 h-screen w-screen mix-blend-lighten flex justify-between pointer-events-none z-0">
      <div class="bg-home bg-home-1 w-screen grow lg:grow-0"/>
      <div class="bg-home bg-home-2 hidden lg:block"/>
    </div>

    <div class="fixed focus opacity-50 lg:opacity-100"/>
    <div class="noise z-1"/>
    <div class="noise z-1"/>

    <UContainer class="max-w-[900px]">
      <div class="flex flex-row items-center h-screen">
        <div class="w-full text-center relative">
          <h1 class="relative inline-block p-[30px] font-title text-center text-7xl! md:text-9xl tracking-tight mb-30 text-white! text-shadow-lg text-shadow-stone-900">
            HYPERIO

            <small class="text-3xl! absolute bottom-[2px] right-[40px]">
              alien shapes
            </small>
          </h1>

          <div class="text-center mt-3">
            <menu class="text-4xl md:text-5xl leading-16 md:leading-20 tracking-tight">
              <li>
                <NuxtLink to="/about"> {{ $t('about') }} </NuxtLink>
              </li>
              <li class="text-nowrap">
                <NuxtLink to="/shop" class="relative pointer-events-none text-stone-700 line-through">
                  {{ $t('shop') }}
                  <span class="text-sm absolute right-0 bottom-0">({{ $t('soon') }})</span>
                </NuxtLink>
              </li>
              <li> 
                <NuxtLink to="/works"> {{ $t('works') }} </NuxtLink>
              </li>
            </menu>
          </div>

          <div class="mt-22 text-6xl font-thin flex items-center justify-between w-[150px] m-auto">
            <UTooltip text="https://instagram.com/hyperio" :delay-duration="0">
              <a href="https://instagram.com/hyperio">
                <Icon name="ant-design:instagram-filled"/>
              </a>
            </UTooltip>
            <UTooltip text="hello@hyperio.fr" :delay-duration="0">
              <a href="mailto:hello@hyperio.fr" class="-translate-y-[2px]">
                <Icon name="teenyicons:envelope-solid" size="50px"/>
              </a>
            </UTooltip>

          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
  .bg-home {
    width: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  .bg-home-1 {
    background-image: url(/home/home1-high.jpg);
    background-position: top right;
  }

  .bg-home-2 {
    background-image: url(/home/home2-high.jpg);
    background-position: top left;
  }

  h1::before,  h1::after {
    padding: 30px;
    color: white;
    content: "HYPERIO";
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    opacity: 0;
  }

  h1::before {
    left: 3px;
    text-shadow: -2px 0 var(--purple);
    animation-name: glitch-animation-1;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }

  h1::after {
    left: -3px;
    text-shadow: -2px 0 var(--blue1);
    animation-name: glitch-animation-2;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }

  @keyframes glitch-animation-1 {
    44% { opacity: 0 }
    45% {
      opacity: 1;
      clip: rect(27px, 550px, 45px, 30px);
    }
    45.5% {
      clip: rect(58px, 550px, 123px, 30px);
    }
    46% {
      clip: rect(3px, 550px, 142px, 30px);
    }
    46.5% {
      clip: rect(69px, 550px, 70px, 30px);
    }
    47% {
      clip: rect(91px, 550px, 119px, 30px);
    }
    47.5% {
      clip: rect(53px, 550px, 101px, 30px);
    }
    48% {
      clip: rect(64px, 550px, 55px, 30px);
    }
    48.5% {
      clip: rect(146px, 550px, 34px, 30px);
    }
    49% {
      clip: rect(26px, 550px, 77px, 30px);
    }
    49.5% {
      clip: rect(149px, 550px, 108px, 30px);
    }
    50% {
      clip: rect(75px, 550px, 86px, 30px);
    }
    50.5% {
      clip: rect(22px, 550px, 75px, 30px);
    }
    51% {
      clip: rect(158px, 550px, 105px, 30px);
    }
    51.5% {
      clip: rect(68px, 550px, 159px, 30px);
    }
    52% {
      clip: rect(61px, 550px, 58px, 30px);
    }
    52.5% {
      clip: rect(109px, 550px, 121px, 30px);
    }
    53% {
      clip: rect(121px, 550px, 84px, 30px);
    }
    53.5% {
      clip: rect(60px, 550px, 131px, 30px);
    }
    54% {
      clip: rect(61px, 550px, 5px, 30px);
    }
    54.5% {
      clip: rect(16px, 550px, 155px, 30px);
    }
    55% {
      clip: rect(36px, 550px, 47px, 30px);
    }
    56% { opacity: 0 }
  }
  
  @keyframes glitch-animation-2 {
    44% { opacity: 0 }
    45% {
      opacity: 1;
      clip: rect(108px, 550px, 105px, 30px);
    }
    45.5% {
      clip: rect(109px, 550px, 39px, 30px);
    }
    46% {
      clip: rect(11px, 550px, 131px, 30px);
    }
    46.5% {
      clip: rect(13px, 550px, 142px, 30px);
    }
    47% {
      clip: rect(156px, 550px, 61px, 30px);
    }
    47.5% {
      clip: rect(147px, 550px, 97px, 30px);
    }
    48% {
      clip: rect(35px, 550px, 85px, 30px);
    }
    48.5% {
      clip: rect(4px, 550px, 23px, 30px);
    }
    49% {
      clip: rect(82px, 550px, 39px, 30px);
    }
    49.5% {
      clip: rect(38px, 550px, 19px, 30px);
    }
    50% {
      clip: rect(61px, 550px, 123px, 30px);
    }
    50.5% {
      clip: rect(126px, 550px, 116px, 30px);
    }
    51% {
      clip: rect(96px, 550px, 53px, 30px);
    }
    51.5% {
      clip: rect(115px, 550px, 59px, 30px);
    }
    52% {
      clip: rect(74px, 550px, 132px, 30px);
    }
    52.5% {
      clip: rect(33px, 550px, 70px, 30px);
    }
    53% {
      clip: rect(130px, 550px, 98px, 30px);
    }
    53.5% {
      clip: rect(108px, 550px, 36px, 30px);
    }
    54% {
      clip: rect(22px, 550px, 2px, 30px);
    }
    54.5% {
      clip: rect(155px, 550px, 75px, 30px);
    }
    55% {
      clip: rect(58px, 550px, 31px, 30px);
    }
    56% { opacity: 0 }
  }
</style>