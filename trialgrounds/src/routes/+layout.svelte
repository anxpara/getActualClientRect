<script lang="ts">
  import '../app.scss';
</script>

<slot />

<style lang="scss">
  @font-face {
    font-family: 'Inconsolata';
    src: url('/fonts/Inconsolata.ttf') format('truetype');
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100svh;

    overflow: hidden;
  }

  :global(body) {
    font-family: 'Inconsolata';
    color: coral;
    background: #111521;
  }

  :global(.test-container) {
    width: 14em;
    height: 12em;
    color: purple;
    outline: solid 2px;
  }

  :global(.test-element) {
    font-size: 2em;
    font-weight: 100;
    width: 5em;
    height: 4em;
    color: red;
    outline: solid 2px;
  }

  :global(.matcher-container) {
    position: absolute;
    top: 0;
    left: 0;
  }

  :global(.matcher) {
    position: absolute;
    font-size: 2em;
    font-weight: 500;

    top: 0;
    left: 0;

    outline: solid 2px;

    color: green;
  }
</style>
