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
    line-height: 1rem;
    box-sizing: border-box;
    height: 4.5rem;
    bottom: -4rem;
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
    font-weight: 700;
    color: var(--darkGrey);
    font-size: 1.1rem;
  }

  div.position {
    color: var(--darkGrey);
    font-weight: 500;
    font-style: italic;
  }
  div.position,
  div.contact {
    font-size: 0.9rem;
    color: var(--darkGrey);
  }
  div.contact {
    height: 0.9rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  div.contact > div {
    width: 0.8rem;
    margin: 0 0.2rem;
  }

  div.contact,
  div.contact a {
    color: var(--darkGrey);
  }

  div.contact a:hover {
    color: #444 !important;
  }

  div.contact > div:first-child {
    margin-left: 0;
  }

  div.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 48;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .modal div.modalHead {
    display: flex;
    align-items: center;
  }

  .modal div.modalContent {
    min-width: 60%;
    min-height: 60%;
    margin: auto;
    padding: 1rem;
  }

  .modal div.nameAndPosition > * {
    padding: 0;
    margin: 0;
    text-transform: unset;
    font-weight: 500;
  }

  div.modalHead > div.modalImageWrapper {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1.2rem;
  }

  .modal div.modalImageWrapper picture > * {
    height: 100%;
    width: 100%;
  }

  .modal div.modalContact {
    font-size: 0.9rem;
    display: flex;
    margin-bottom: 1rem;
  }

  .modal div.modalPosition {
    font-size: 0.9rem;
  }
  .modal div.modalContact > a {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 1.5rem;
    color: var(--darkGrey);
    text-decoration: none;
  }

  .modal .iconWrapper {
    width: 0.9rem;
    height: 0.9rem;
  }

  .modal div.modalContact > a:hover {
    color: #444 !important;
  }

  .modal div.modalContact > a > span {
    margin-left: 0.4rem;
    line-height: 1rem;
  }

  .modal p.blurb {
    margin: 1.5rem 0;
    line-height: 1.8rem;
  }

  .modal h3 {
    font-size: 1.5rem;
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
              srcset="{`/portfolio/${selectedProject.image}`}.jpg"
              type="image/jpeg" />
            <img
              src="{`/portfolio/${selectedProject.image}`}.jpg"
              alt={selectedProject.name} />
          </picture>
        </div>
        <div class="nameAndPosition">
          <h3>{selectedProject.name}</h3>
          <div class="modalPosition">{selectedProject.position}</div>
        </div>
      </div>
      <p class="blurb">{selectedProject.blurb}</p>
      <div class="modalContact">
        {#if selectedProject.email}
          <a
            target="_blank"
            rel="noopener noreferrer"
            on:click={stopPropagation}
            href="mailto:{selectedProject.email}">
            <span class="iconWrapper">
              <FaEnvelope />
            </span>
            <span>Email</span>
          </a>
        {/if}
        {#if selectedProject.linkedIn}
          <a
            target="_blank"
            rel="noopener noreferrer"
            on:click={stopPropagation}
            href="https://www.linkedin.com/in/{selectedProject.linkedIn}/">
            <span class="iconWrapper">
              <FaLinkedin />
            </span>
            <span>LinkedIn</span>
          </a>
        {/if}
        {#if selectedProject.gitHub}
          <a
            target="_blank"
            rel="noopener noreferrer"
            on:click={stopPropagation}
            href="https://github.com/{selectedProject.gitHub}">
            <span class="iconWrapper">
              <FaGithub />
            </span>
            <span>GitHub</span>
          </a>
        {/if}
      </div>
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
          <source srcset="{`/portfolio/${project.image}`}.jpg" type="image/jpeg" />
          <img src="{`/portfolio/${project.image}`}.jpg" alt={project.name} />
        </picture>
        <div class="caption">
          <div class="name">{project.name}</div>
          <div class="position">{project.position}</div>
          <div class="contact">
            {#if project.email}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={stopPropagation}
                  href="mailto:{project.email}">
                  <FaEnvelope />
                </a>
              </div>
            {/if}
            {#if project.linkedIn}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={stopPropagation}
                  href="https://www.linkedin.com/in/{project.linkedIn}">
                  <FaLinkedin />
                </a>
              </div>
            {/if}
            {#if project.gitHub}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={stopPropagation}
                  href="https://github.com/{project.gitHub}">
                  <FaGithub />
                </a>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
