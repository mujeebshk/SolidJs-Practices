<script lang="ts">
      import { Tile } from "carbon-components-svelte";
      import { Button } from '@svelteuidev/core';
//  import { onMount } from "svelte";
//   const endpoint = "https://localhost:4000/";
//   let posts = [];

//   const search = onMount(async function () {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     console.log(data);
//     posts = data;
//   });

let books = null;
    const getBooks = async () => {
      const response = await fetch(
        "http://localhost:2000/"
      );
      const result = await response.json();
      console.log(result);
      books = result;
    };
</script>
<main>
    <Button on:click={getBooks}>Get books</Button>
    {#if books}
    {#each books as article}
    <Tile>
            <div class="card">
            <p>BookName: {article.bookName}</p>
            <p>BookAuthor: {article.bookAuthor}</p>
            <p>BookPages: {article.bookPages}</p>
            <p>BookPrice: {article.bookPrice}</p>
            <p>BookState: {article.bookState}</p>
        </div>
        </Tile>
  {/each}
  {/if}
</main>
<style>
    .card{
        background-color: #9d9a9a;
        padding: 1.5em;
    }
</style>