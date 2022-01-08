<!-- <script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { timeline } = await result.json();
    return {
      timeline
    };
  }
</script> -->
<!--<script>
  // import { onMount } from "svelte";

  // import Timeline from "../components/Timeline.svelte";
  // import InfoColumns from "../components/InfoColumns.svelte";


  // onMount(async () => {
  //   gtag("config", "UA-93549235-6", { page_path: "/" });
  // });

  // export let timeline = [];
</script>-->

<style>
  div.fullScreen {
    width: 100%;
    background-clip: border-box;
    background-origin: padding-box;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    box-sizing: border-box;
  }

  div.fullScreen p {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 3rem;
    font-weight: 500;
    color: #D03335;
    text-shadow: 5px 5px 5px #eee;
  }
  div.fullScreen > div.fullScreenContent {
    min-height: calc(100vh - 3rem); /* 3rem is nav height */
    background-color: rgba(0, 0, 0, 0); /* 4th arg was originally 0.5 to create tinting */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    box-sizing: border-box;
  }

  div.infoColumnSection,
  div.timelineSection {
    background-color: #f9f9f9;
    padding: 3rem 0;
  }

  div.partnersSection {
    margin-bottom: 6rem;
    padding: 3rem 0 1rem;
  }

  div.logoWrapper {
    max-height: 17rem;
    max-width: 17rem;
    margin: -3 auto 3rem;
  }
  .logo > * {
    height: 100%;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Patrick Singal</title>
</svelte:head>
<div class="root">
  <div class="fullScreen" style="background-image: url('background-source.webp')">
    <div class="fullScreenContent">
      <div class="contentWrapper">
        <div class="logoWrapper">
          <picture class="logo">
            <source srcset="circleHeadshot.webp" type="image/webp" />
            <source srcset="circleHeadshot.png" type="image/png" />
            <img src="circleHeadshot.webp" alt="Patrick Singal" />
          </picture>              
       </div>
        <p>
          “The Queen's Vertical Farming Team's mission is to develop a
          functional, small scale vertical farm. Drawing inspiration from the
          best current commercial practices, our goal is to gain a foothold as
          an innovator in a rapidly-expanding industry.”
        </p>
      </div>
    </div>
  </div>

</div>
