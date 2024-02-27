<script>
    import { Button, ButtonSet } from "carbon-components-svelte";
    import ChangeCatalog from "carbon-icons-svelte/lib/ChangeCatalog.svelte";
    import { AspectRatio } from "carbon-components-svelte";
  </script>
  <AspectRatio ratio="16x9">
    <div class="button">
        <ButtonSet stacked>
            <Button icon={ChangeCatalog}>Get Books</Button>
            <Button kind="ghost" icon={ChangeCatalog}>Add Book</Button>
            <Button icon={ChangeCatalog}>Delete Book</Button>
        </ButtonSet>
    </div>
  </AspectRatio>

  <style>
    .button {
        margin-top: 5em;
        justify-content: center;
align-items: center;
display: flex;
min-width: 320px;
min-height: 100vh;
    }
  </style>
  