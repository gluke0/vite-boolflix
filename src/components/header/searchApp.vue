<script>
    export default{
        data(){
            return{
                name: 'searchApp',
            }
        }
    }
</script>


<template>

    <form action="#">
        <div class="searchbar input-group">
            <label for="searchbar" class="input-group-text">
                <i class="fa-solid fa-magnifying-glass"> </i>
            </label>
            <input type="search" id="searchbar" class="form-control" placeholder="Cerca film o serie TV">
        </div>
    </form>

</template>


<style lang="scss" scoped>
@use '../../style/partials/variables';

form{
    width: 35%;
    padding-top: 1.7rem;
}

</style>