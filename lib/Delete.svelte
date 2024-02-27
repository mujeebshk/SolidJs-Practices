<script lang="ts">
  import { ActionIcon } from '@svelteuidev/core';
    import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte";
    import { TextInput } from '@svelteuidev/core';
    const deleteBook = async () => {
      const bookNameInput = document.getElementById(
      "bookName"
    ) as HTMLInputElement;
      let resp = await fetch("http://localhost:2000/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookName: bookNameInput.value, }),
      });
      const result = await resp.json();
      console.log("deleteicon", result);
    };
  </script>
  <main>
    <div class="bin">
    <TextInput
    id="bookName"
    placeholder="Enter Book Name"
  />
  <br />
              <ActionIcon
              color="gray600"
              size={50}
                on:click={deleteBook}
              >
              <TrashCan size={32} />
            </ActionIcon>
            </div>
  </main>
  <style>
    /* .card {
      background-color: #9D9A9A;
      padding: 1.5em;
    } */
  </style>