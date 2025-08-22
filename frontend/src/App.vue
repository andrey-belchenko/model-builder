<template>
  <div id="app">
    <header class="app-header">
      <h1>UML Model Builder</h1>
      <nav class="main-nav">
        <router-link to="/" class="nav-link">Projects</router-link>
        <router-link to="/explorer" class="nav-link">Model Explorer</router-link>
        <router-link to="/diagram" class="nav-link">Diagram Editor</router-link>
        <router-link to="/form" class="nav-link">Form Editor</router-link>
      </nav>
    </header>
    
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// Component logic will be added here
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.app-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

.main-nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #34495e;
}

.nav-link.router-link-active {
  background-color: #3498db;
}

.app-main {
  flex: 1;
  padding: 2rem;
  background: #f8f9fa;
  overflow: auto;
}
</style>
