<template>

    <div class="nav-bar">
    <b-navbar >
        <b-navbar-nav>
        <img class="nav-img" src="https://vuejs.org/images/logo.svg" alt="">    
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Service</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
    </div>   

    
</template>

<script>
export default {
   
    
}
</script>

<style scoped>

.nav-bar {
    background-color: #63c5ff;
    
}
.nav-img{
    width :6%;

}

</style>