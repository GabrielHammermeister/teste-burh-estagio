Vue.component('movie-card', {
    props: ['movie'],
    template:
    `
    <div class="card" style="width: 18rem">
        <img class="card-img-top" :src="movie.Poster" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{movie.Title}}</h5>
            <p class="card-text">{{movie.Plot}}</p>
            <a href="about_movie.html" class="btn btn-primary">More</a>
        </div>
    </div>
    `
})


Vue.component('search-movie', {
    template:
    `
    <div>
        <img id="initial-ilustration" src="../burh/1.png">
        <h3>Procure por um Filme</h3>
    </div>
    `
})

Vue.component('not-found', {
    template:
    `
    <div>
        <h1>Not Found</h1>
    </div>
    `
})

var app = new Vue({

    el: '#meuapp',
    data: {
        info: null,
        title: ""
    },
    methods: {
        search:function (event){
            axios.get(`http://www.omdbapi.com/?t=${this.title}&apikey=5a5e9a3b`)
            .then((response) => {
                this.info = response
                console.log(this.info)
            })
            
        }
    }
})