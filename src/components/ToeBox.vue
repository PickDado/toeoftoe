<template>
    <div class="box" @click.once="cambio()">{{simbolo}}</div>
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
            this.$store.commit("Cambio");   
        },
    
        
        
    }
}
</script>

<style scoped>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(25, 21, 36);
    width: 60px;
    height: 60px;
    font-size: xx-large;
    color: aliceblue;
    border: 1px solid wheat;
    transition-property: background-color;
    transition-duration: 0.2s;
    user-select: none;
}
.box:hover{
background-color: rgb(90, 44, 102);
}
.box:active{
    background-color: rgb(15, 7, 17);
}
</style>