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
    Search,
  } from "carbon-components-svelte";
  import Modal from "./Modal.svelte"
  import { Avatar, Icon, MaterialApp } from 'svelte-materialify';
  let isSideNavOpen = false;
  import TreeView from "./Treeview.svelte"
</script>

<header>
  <h2>Library svelte</h2>
  <Search size="sm"/>
  <div class="avatar">
    <MaterialApp>
      <div class="d-flex justify-space-around">
        <Avatar tile class="blue white-text"><b>M</b></Avatar>
      </div>
    </MaterialApp>
  </div>
</header>
<div class="color">
  <Grid>
    <Row>
      <div class="border">
        <Column aspectRatio="16x9">
          <TreeView />
        </Column>
      </div>
      <!-- <Column aspectRatio="2x1">2x1</Column> -->
    </Row>
  </Grid>
<div class="conten">
<!-- <h1>Welcome</h1>
<h1>To</h1>
<h1>Digital</h1>
<h1>Library...</h1> -->
<div class="center">
  <Modal />
</div>
</div>
</div>

<style>
  .border{
    /* font-size: 11em; */
    /* color: #fff; */
    margin-top: 4em;
    border: 1px solid #000;
    background-color: #efefef;
  }
  .conten{
    margin-top: 3em;
    /* background: linear-gradient(#ffd89b , #19547b); */
    /* padding: 10em; */
  }
  .center{
    display: flex;
    justify-content: center;
    padding: 1.5em;
  }
  .color{
    background-color: #EFEAE6;
  }
  header{
    color: #fff;
    display: inline-flex;
width: -moz-available;
background: rgb(40, 39, 39);
  }
  h2{
    width: -moz-available;
    font-size: large;
    padding: .3em;
  }
  .avatar{
    padding: .2em;
  }
</style>