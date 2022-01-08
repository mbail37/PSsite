<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { portfolio } = await result.json();
    return {
      portfolio
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import PortfolioImages from "../components/PortfolioImages.svelte";
  import PageHeader from "../components/PageHeader.svelte";

  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/portfolio" });
  });
  export let portfolio = [];
</script>

<svelte:head>
  <title>Design Portfolio</title>
</svelte:head>
<PageHeader>Design Portfolio</PageHeader>
<PortfolioImages{portfolio} />
