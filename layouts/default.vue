<template>
  <div class="layout">
    <AwesomeNavbar />
    <div class="content">
      <div class="sidebar">
        <AwesomeSidebar />
      </div>
      <main>
        <slot />
      </main>
    </div>
    <AwesomeFooter />
  </div>
</template>
