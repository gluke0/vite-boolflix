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
    <div class="star-votes text-end">
        <i v-for="vote in maxStars" :class="(vote <= finalVote) ? 'fa-solid fa-star' : 'fa-regular fa-star'" ></i>
    </div>
</template>