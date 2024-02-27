<!-- <script>
    let books = null;
    let showAll = false;
    let showMy = false;
    const getBooks = async () => {
      const response = await fetch(
        "http://localhost:3000/books/"
      );
      const result = await response.json();
      console.log(result);
      books = result;
    };

  </script>
  
 <button on:click={getBooks}>Get Books</button> -->
  
<!--  <section><button on:click={() => {getBooks(); showAll = !showAll}}>All Books</button></section>
  <section><button on:click={() => {getBooks(); showMy = !showMy}}>My Books</button></section>
{#if showMy}
{#if books}
{#each books.myBook as book}
<div><p>{book}</p></div>
{/each}
{/if}
{/if}
{#if showAll}
{#if books}
{#each books.allBooks as book}
<div><p>{book}</p></div>
{/each}
{/if}
{/if}
  
  <style>
    div {
      background-color: rgb(191, 122, 220);
      padding: 10px;
      margin: 10px;
      border-radius: 15px;
    }
    section{
      margin:1em;
      text-align: center;
    }
  </style> -->
  
  <script>
    let books = [];
    const getBooks = async () => {
      const response = await fetch(
        "https://9zoccau208.execute-api.ap-south-1.amazonaws.com/serverless_lambda_stage/books"
      );
      const result = await response.json();
      books = result.message;
      console.log(books);
    };
  </script>
  
  <div class="container">
    <button on:click={getBooks}>Get Books</button>
    {#if books.length > 0}
      {#each books as book}
        <div class="row">{book}</div>
      {/each}
    {/if}
  </div>
  
  <style>
    .container {
      text-align: center;
      margin-top: 50px;
    }
    .row {
      background-color: rgb(190, 209, 199);
      padding: 10px;
      margin: 20px;
      border-radius: 15px;
      width: auto;
    }
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #bcbcbc;
      cursor: pointer;
      transition: border-color 0.25s;
      text-align: center;
      border: solid rgb(105, 72, 72);
      margin-left: auto;
      margin-right: auto;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  
    div {
      background-color: rgb(191, 122, 220);
      padding: 10px;
      margin: 10px;
      border-radius: 15px;
    }
  </style>
  