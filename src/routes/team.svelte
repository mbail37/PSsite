<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { team } = await result.json();
    return {
      team
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import TeamImages from "../components/TeamImages.svelte";
  import PageHeader from "../components/PageHeader.svelte";

  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/design-portfolio" });
  });
  export let team = [];
</script>

<svelte:head>
  <title>Design Portfolio</title>
</svelte:head>
<PageHeader>Design Portfolio</PageHeader>
<TeamImages {team} />
