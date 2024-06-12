<script lang="ts">
  import viteLogo from '/abn-logo.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://abndigital.com.ar/" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
  </div>
  <h1>DART</h1>

  <div class="card">
    <Counter />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
