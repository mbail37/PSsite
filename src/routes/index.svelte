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
    font-style: bold;
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 500;
    /*color: #D03335;*/
    color: #eee;
    /*text-shadow: 5px 5px 5px #eee;*/
    text-shadow: 0px 0px 1px #222;
  }
  div.fullScreen > div.fullScreenContent {
    min-height: calc(100vh - 3rem); /* 3rem is nav height */
    background-color: rgba(0, 0, 0, 0); /* 4th arg was originally 0.5 to create tinting */
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 0rem 0;
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
    max-height: 14rem;
    max-width: 14rem;
    margin: 3 auto 3rem;
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
          Patrick Singal
        </p>
      </div>
    </div>
  </div>

</div>
