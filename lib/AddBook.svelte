<!-- <script>
	let bookName;
	let bookAuthor;
    let bookPages;
    let bookPrice;
	let result;
	
	async function doPost () {
		const res = await fetch('https://localhost:4000/', {
			method: 'POST',
            headers: { "Content-Type": "application/json", Accept: "*/*" },
			body: JSON.stringify({
				bookName,
				bookAuthor,
                bookPages,
                bookPrice
			}),
		});
		
		const json = await res.json()
		result = JSON.stringify(json)
	};
</script>


<input bind:value={bookName} />
<br />
<input bind:value={bookAuthor} />
<br />
<input bind:value={bookPages} />
<br />
<input bind:value={bookPrice} />
<br />
<button type="button" on:click={doPost}>
	Post it.
</button> -->

<script lang="ts">
    import { TextInput } from "carbon-components-svelte";
    import { Button } from '@svelteuidev/core';

  //   let books = {
  //     bookName: '',
  //     bookAuthor: '',
  //     bookPages: '',
  //     bookPrice: ''
  //   }
  
  //   function formHandler(event) {
  //       event.preventDefault()
  //       fetch('http://localhost:2000/',{
  //   method:  'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     bookName: bookName,
  //     bookAuthor:   bookAuthor,
  //    bookPages:   bookPages,
  //    bookPrice:   bookPrice
  //   })
  // })
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  
  //   }


    const addUser = async () => {
    const bookNameInput = document.getElementById(
      "bookName"
    ) as HTMLInputElement;
    const bookAuthorInput = document.getElementById(
      "bookAuthor"
    ) as HTMLInputElement;
    const bookPagesInput = document.getElementById(
      "bookPages"
    ) as HTMLInputElement;
    const bookPriceInput = document.getElementById(
      "bookPrice"
    ) as HTMLInputElement;
    const bookStateInput = document.getElementById(
      "bookState"
    ) as HTMLInputElement;
    const res = await fetch(`http://localhost:2000`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "*/*" },
      body: JSON.stringify({
        bookName: bookNameInput.value,
        bookAuthor: bookAuthorInput.value,
        bookPages: bookPagesInput.value,
        bookPrice: bookPriceInput.value,
      }),
    });
    let data = await res.json();
    console.log("Book Added", data);
  };
    
  </script>
  
  <section>
    <!-- <form>
      <div>
        <label for="bookName">BookName: </label>
        <input type="text" id="bookName" bind:value={books.bookName}>
      </div>
      <div>
        <label for="bookAuthor">BookAuthor: </label>
        <input type="text" id="bookAuthor" bind:value={books.bookAuthor}>
      </div>
      <div>
        <label for="bookPages">BookPages: </label>
        <textarea id="bookPages" bind:value={books.bookPages}></textarea>
      </div>
      <div>
        <label for="bookPrice">BookPrice: </label>
        <textarea id="bookPrice" bind:value={books.bookPrice}></textarea>
      </div>
    </form> -->
    <TextInput id="bookName" inline labelText="BookName" placeholder="Enter Book name..." />
    <br />
    <TextInput id="bookAuthor" inline labelText="BookAuthor" placeholder="Enter Book author..." />
    <br />
    <TextInput id="bookPages" inline labelText="BookPages" placeholder="Enter Book pages..." />
    <br />
    <TextInput id="bookPrice" inline labelText="BookPrice" placeholder="Enter Book price..." />
    <br />
    <Button on:click="{addUser}">Create Post</Button>
  </section>