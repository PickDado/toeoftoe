<template>
    <div class="box" @click="cambio()">{{simbolo}}</div>
</template>

<script>
export default {
    data(){return{
        simbolo:" ",
        turno:this.$store.state.turno
    }},
    methods:{
        cambio(){
            this.simbolo=this.$store.state.turno;
            this.$store.commit("Cambio")
        },
        
        
    }
}
</script>

<style scoped>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 60px;
    height: 60px;
    font-size: xx-large;
    color: aliceblue;
    border: 1px solid wheat;
}
</style>