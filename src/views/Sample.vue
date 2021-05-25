<template>

<div class="container">
    <div class="sample-page">
        <div class="row navbar"><navigation-bar></navigation-bar></div>
        <div class="row banner">
            <banner-img>
            </banner-img>

        </div>
        <div class="row card-tile">
            <div class="col-md-3"><my-card> </my-card></div>
            <div class="col-md-3"> <my-card> </my-card></div>
            <div class="col-md-3"><my-card> </my-card></div>
            <div class="col-md-3"><my-card> </my-card></div>            
        </div>
        <div class="row table-form">
            <div class="col-md-3"><list-name></list-name> </div>
            <div class="col-md-9">
                <login-form>
                </login-form>
            </div>
        </div>

    </div>

</div>
    
</template>

<script>

export default {
  
   
   

};

    
   

</script>

<style>
.card-tile {
    padding-bottom: 25px;
}
</style>
