<template>
  <div class="container">
    <div class="sample-page">
      <div class="row nav-bar">
        <navigation-bar></navigation-bar>
      </div>
      <div class="row banner">
        <banner-img></banner-img>
      </div>
      <div class="row card-tile">
        <div class="col-md-3">
          <button
            class="mx-2 mt-2"
            style="text-transform: capitalize"
            outlined
            rounded
            color="#ffab01"
            dark
            small
            @click="visible = !visible"
          >Toggle Component</button>
          <my-card v-if="visible"></my-card>
        </div>
        <div>{content}</div>
        <div class="col-md-3">
          <my-card></my-card>
        </div>
        <div class="col-md-3">
          <my-card></my-card>
        </div>
        <div class="col-md-3">
          <my-card></my-card>
        </div>
      </div>
      <div class="row table-form">
        <div class="col-md-3">
          <list-name></list-name>
        </div>
        <div class="col-md-9">
          <login-form></login-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

const socket = io("http://localhost:3001");
export default {
  data() {
    return {
      visible: false,
    };
  },
  created()
  {
    socket.on("content-created", (comment) => {
  console.log(comment);
});
  },
  methods:
  {


  }
};

</script>

<style>
.card-tile {
  padding-bottom: 25px;
}
</style>
