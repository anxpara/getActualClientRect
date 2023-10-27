<script lang="ts">
  import '../app.scss';
</script>

<nav title="trial collections and presets">
  <h1>collections & presets</h1>
  <ul>
    <li>
      <a href="/"> all </a>
    </li>
    <li>
      <a
        href="/?trialNames=control,padded-parent-rotated,scroll-in-rotate&showUntransformedRect&showUntransformedContainers"
      >
        offset rotations collection
      </a>
    </li>
    <li>
      <a href="/?showUntransformedRect">show untransformed rects</a>
    </li>
    <li>
      <a href="/?showUntransformedRect&showUntransformedContainers"> & untransformed containers </a>
    </li>
    <li>
      <a href="/"> clear options </a>
    </li>
  </ul>
</nav>

<slot />

<style lang="scss">
  nav {
    position: absolute;
    width: 100vw;
    height: 13em;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: coral;

    ul {
      padding-left: 1em;
    }
  }

  a {
    text-underline-offset: 0.2em;
    color: coral;
  }

  a:visited {
    color: coral;
  }
</style>
