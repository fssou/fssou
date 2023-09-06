var app = new Vue({
    el: '#page-wrapper',
    data: {
        message: "",
        idade: 0
    },
    computed: {
        getIdade: function() {
            return new Date().getFullYear() - 1995;
        },
    },
    methods: {        
    },
    onCreated: function() {
        console.log(`created ${new Date()}`);
    }
});
