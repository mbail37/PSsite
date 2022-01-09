<script>
  import { fade } from "svelte/transition";
  import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  export let portfolio;

  let selectedProject;

  const showProject = project => {
    selectedProject = project;
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      //gtag("event", "view_item", { event_label: selectedProject.name });
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const stopPropagation = e => e.stopPropagation();
</script>

<style>
  .imageWrapper {
    height: 330px;
    width: 330px;
    overflow: hidden;
    margin-bottom: 0.7rem;
    position: relative;
  }

  .portfolioProject.clickable {
    cursor: pointer;
  }
  .imageWrapper .portfolioProjectImage > * {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .imageWrapper div.caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 0.5rem;
    font-size: 0.9rem;
    line-height: 0.9rem;
    box-sizing: border-box;
    height: 3rem;
    bottom: -3rem;
    transition: bottom 0.3s ease;
  }

  .imageWrapper:hover div.caption {
    bottom: 0;
  }

  @media (hover: none) {
    .imageWrapper div.caption {
      bottom: 0 !important;
    }
  }

  div.portfolio {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem auto 0;
    max-width: calc(370px * 3);
  }
  div.portfolioProject {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.2rem;
  }
  div.name {
    font-weight: 600;
    color: var(--darkGrey);
    font-size: 0.9rem;
    line-height: 0.9rem;
  }

  /* div.position {
    color: var(--darkGrey);
    font-weight: 500;
    font-style: italic;
    font-size: 0.9rem;
    line-height: 2rem;
} */

  div.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 48;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .modal div.modalContent {
    min-width: 90%;
    min-height: 60%;
    margin: auto;
    padding: 1rem;
  }

  .modal div.modalHead {
    display: flex;
    align-items: center;
  }

  .modal div.nameAndPosition > * {
    padding: 0;
    margin: 0;
    text-transform: unset;
    font-weight: 500;
  }

  div.modalHead > div.modalImageWrapper {
    min-width: 30rem;
    max-width: 45rem;
    /* height: 4rem;
    width: 4rem;
    border-radius: 50%; */
    overflow: hidden;
    margin-right: 2rem;
  }

  .modal div.modalImageWrapper picture > * {
    /* max-height: 30rem; */
    height: 100%;
    width: 100%;
    /*height: 100%;
    width: 100%*/
  }

  /* .modal div.modalPosition {
    font-size: 0.9rem;
  } */

  .modal div.modalBlurb {
    font-size: 0.75rem;
    line-height: 0.85rem;
    font-weight: 300;
  }

  /*.modal p.blurb {
    margin: 1.5rem 0;
    line-height: 1.8rem;
  }*/

  .modal h3 {
    font-size: 1.1rem;
  }
</style>

{#if selectedProject}
  <div
    class="modal"
    in:fade={{ duration: 100 }}
    on:click={() => showProject(null)}>
    <div class="modalContent contentWrapper">
      <div class="modalHead">
        <div class="modalImageWrapper">
          <picture class="portfolioProjectImage">
            <source
              srcset="{`/portfolio/${selectedProject.image}`}.webp"
              type="image/webp" />
            <source
              srcset="{`/portfolio/${selectedProject.image}`}.png"
              type="image/jpeg" />
            <img
              src="{`/portfolio/${selectedProject.image}`}.webp"
              alt={selectedProject.name} />
          </picture>
        </div>
        <div class="nameAndPosition">
          <h3>{selectedProject.name}</h3>
          <!-- <div class="modalPosition">{selectedProject.position}</div> -->
          <div class="modalBlurb">{selectedProject.blurb}</div> <!--I added this just now-->
        </div>
      </div>
      <!--<p class="blurb">{selectedProject.blurb}</p>-->
    </div>
  </div>
{/if}
<div class="portfolio {selectedProject ? 'noScroll' : ''}">
  {#each portfolio as project}
    <div
      class="portfolioProject {project.blurb ? 'clickable' : ''}"
      on:click={() => {
        if (project.blurb) {
          showProject(project);
        }
      }}>
      <div class="imageWrapper">
        <picture class="portfolioProjectImage">
          <source srcset="{`/portfolio/${project.image}`}.webp" type="image/webp" />
          <source srcset="{`/portfolio/${project.image}`}.png" type="image/png" />
          <img src="{`/portfolio/${project.image}`}.webp" alt={project.name} />
        </picture>
        <div class="caption">
          <div class="name">{project.name}</div>
          <!-- <div class="position">{project.position}</div> -->
        </div>
      </div>
    </div>
  {/each}
</div>
