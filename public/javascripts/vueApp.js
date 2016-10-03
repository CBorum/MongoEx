/**
 * Created by ChristopherBorum on 18/09/16.
 */
Vue.config.delimiters = ['${', '}']

new Vue({
    el: '#app',
    data: {
        allJokes: [],
        randomJoke: "",
        jokeById: {},
        toGetId: "",
        toDeleteId: "",
        toDeleteStatus: "",
        toPutId: "",
        newJoke: {},
        newJokeStatus: ""
    },
    methods: {
        getAllJokes: function () {
            Vue.http.get('/api/jokes').then((response) => {
                this.allJokes = JSON.parse(response.body)
            }, (response) => {
                console.log(response.body)
            })
        },
        getRandomJoke: function () {
            Vue.http.get('/api/joke/random').then((response) => {
                this.randomJoke = JSON.parse(response.body)
            }, (response) => {
                console.log(response.body)
            })
        },
        getJokeById: function () {
            Vue.http.get('/api/joke/' + this.toGetId).then((response) => {
                this.jokeById = JSON.parse(response.body)
                if (this.jokeById.length <= 0) {
                    this.jokeById.joke = "Invalid id";
                } else {
                    this.jokeById = this.jokeById[0];
                }
            }, (response) => {
                this.jokeById.joke = "Invalid id";
                console.log(response.body)
            })
        },
        postJoke: function () {
            this.newJoke.type = this.newJoke.type.split(',');
            this.newJoke.lastEdited = new Date().toISOString();
            Vue.http.post('/api/joke/', this.newJoke).then((response) => {
                this.newJokeStatus = "Success";
                this.getAllJokes();
            }, (response) => {
                this.newJokeStatus = "Invalid id";
                console.log(response.body)
            })
        },
        editJoke: function () {
            this.editJoke.type = this.editJoke.type.split(',');
            Vue.http.put('/api/joke/', this.editJoke).then((response) => {
                this.editJoke = "Success";
                this.getAllJokes();
            }, (response) => {
                this.editJoke = "Invalid id";
                console.log(response.body)
            })
        },
        deleteJoke: function () {
            Vue.http.delete('/api/joke/' + this.toDeleteId).then((response) => {
                this.toDeleteStatus = "Success";
                this.getAllJokes();
            }, (response) => {
                this.toDeleteStatus = "Invalid id";
                console.log(response.body)
            })
        }
    },
    ready: function () {
        this.getAllJokes();
        this.getRandomJoke();
    }
})

