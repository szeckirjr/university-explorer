<template>
  <div class="h-screen flex flex-col">
    <TopNav />
    <NuxtLoadingIndicator :throttle="0" color="red" :height="6" />
    <NuxtPage />
  </div>
</template>
