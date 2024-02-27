<script>
    import {
      Header,
      HeaderNav,
      HeaderNavItem,
      HeaderNavMenu,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
    } from "carbon-components-svelte";
    import { Tabs } from '@svelteuidev/core';
    import GetBooks from "./GetBooks.svelte"
    import AddBook from "./AddBook.svelte"
    import Delete from "./Delete.svelte"
    let active = 0;

function onActiveChange(event) {
    const { index, key } = event.detail;
    console.log("Tab active", index, key);
}
  </script>
  
  <div class="tabs">
        <Tabs bind:active={active} on:change={onActiveChange} color='teal' position='center'>
            <Tabs.Tab label="Get" tabKey="first">            
                    <div class="conten">
                    <div class="tab">
                        <Content>
                            <Grid>
                                <Row>
                                    <Column>
                                        <GetBooks />
                                        <br />
                                        <!-- <Button color="orange" ripple>Add Books</Button> -->
                                    </Column>
                                </Row>
                            </Grid>
                        </Content>
                    </div>
            </div></Tabs.Tab>
            <Tabs.Tab label="Add" tabKey="second">
                    <div class="tab">
                        <Content>
                            <br />
                            <AddBook />
                            <br />
                            <!-- <Button>Add Book</Button> -->
                        </Content>
                    </div>
            </Tabs.Tab>
            <Tabs.Tab label="Delete" tabKey="third">
                      <div class="tab">
                    <Content>
                        <Delete />
                        <!-- <Button>Delete Book</Button> -->
                    </Content>
                </div>
            </Tabs.Tab>
        </Tabs>
  </div>
  
  <style>
    /* .conten{
      background: linear-gradient(#ffd89b , #19547b);
    } */
    .tab{
      height: 100vh;
      /* display: flex;
      justify-content: center; */
    }
    /* .tabs{
      margin-top: 3em;
    } */
  </style>