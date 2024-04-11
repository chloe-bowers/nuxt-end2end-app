<template>
  <div class="layout">
    <AwesomeNavbar />
    <div class="content">
      <AwesomeSidebar />

      <main>
        <slot />
      </main>
    </div>
    <AwesomeFooter />
  </div>
</template>
