<script>
    import { Modal } from "carbon-components-svelte";
    import { Button } from '@svelteuidev/core';

    import Tabs from "./Tabs.svelte"
    let open = false;
  </script>
  
  <Button on:click={() => (open = true)}>Get Books</Button>
  <Modal size="lg" passiveModal bind:open modalHeading="Library" on:open on:close>
  <div class="modal">
    <Tabs />
    </div>
    </Modal>
    