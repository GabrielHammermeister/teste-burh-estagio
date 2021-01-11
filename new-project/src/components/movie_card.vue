

<template>
    <div>
        <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="movie.Poster" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{movie.Title}}</h5>
                <p class="card-text">{{movie.Plot}}</p>
                <!-- <a href="about_movie.html" class="btn btn-primary">More</a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie_card',
    props: ['movie']

}
</script>

<style>

.card {
    display: flex;
    margin: 0 auto;
}


</style>