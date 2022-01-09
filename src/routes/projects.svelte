<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { projects } = await result.json();
    return {
      projects
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import ProjectsImages from "../components/ProjectsImages.svelte";
  import PageHeader from "../components/PageHeader.svelte";

//   onMount(async () => {
//     gtag("config", "UA-93549235-6", { page_path: "/projects" });
//   });
  export let projects = [];
</script>

<svelte:head>
  <title>Patrick Singal</title>
</svelte:head>
<PageHeader>Projects</PageHeader>
<ProjectsImages {projects} />
