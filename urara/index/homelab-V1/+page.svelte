<script lang="ts">
  import { onMount } from 'svelte'
  import mermaid from 'mermaid'

  onMount(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      flowchart: {
        htmlLabels: true,
        curve: 'basis'
      },
      themeVariables: {
        primaryColor: '#3B82F6',
        primaryTextColor: '#fff',
        primaryBorderColor: '#60A5FA',
        lineColor: '#94A3B8',
        secondaryColor: '#475569',
        tertiaryColor: '#1E293B'
      }
    })
  })
</script>

<div class="prose prose-invert max-w-none mx-auto px-6 py-16">
  <slot />
</div>

<style>
  :global(.prose) {
    max-width: 65ch;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.prose pre) {
    background-color: #1a1b26;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1.5rem 0;
  }

  :global(.prose code) {
    color: #7dd3fc;
    background: rgba(125, 211, 252, 0.1);
    padding: 0.2em 0.4em;
    border-radius: 0.25em;
  }

  :global(.prose h1, .prose h2, .prose h3, .prose h4) {
    color: #fff;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  :global(.prose ul, .prose ol) {
    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 1.5em;
  }

  :global(.prose li) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  :global(.prose a) {
    color: #60a5fa;
    text-decoration: none;
  }

  :global(.prose a:hover) {
    text-decoration: underline;
  }
</style>
