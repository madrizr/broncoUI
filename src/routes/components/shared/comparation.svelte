<script lang="ts">
    import CompareImage from "../compare-image/compare-image.svelte";
    export let imageLeftSrc = "/assets/comparation/bronco-white.jpg";
    export let imageRightSrc  = "/assets/comparation/bronco-color.jpg";
  
    // too many quotes to deal with, storing as a variable is easier
    const handleBackgroundImage = `url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')`;
  </script>

    <CompareImage
    imageLeftSrc= {imageLeftSrc}
    imageLeftAlt="left"
    imageRightSrc= {imageRightSrc}
    imageRightAlt="right"
    --handle-size="2.5rem"
    --handle-background-image={handleBackgroundImage}
    --handle-border-width="0.125rem"
    --slider-color="#ffffff"
    --slider-width="0.125rem"
  >
  </CompareImage>
  