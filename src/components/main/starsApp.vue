<script>

export default{
    name: 'starsApp',
    data() {
        return{
        }
    },
    props:{
        finalVote: Number,
        maxStars: Number,
    }
}
</script>

<template>
    <div class="star-votes">
        <i v-for="vote in maxStars" :class="(vote <= finalVote) ? 'fa-solid fa-star' : 'fa-regular fa-star'" ></i>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';

.star-votes{
    background-color: variables.$opac;
}
.fa-solid{
    color: variables.$stars;
}

.fa-regular{
    color: variables.$emptystars;

}

</style>