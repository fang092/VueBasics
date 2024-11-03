export default{

    template:`
        
            <form @submit.prevent="add">
                <div class="text-slate-500 mt-4 border border-slate-500 border-4 rounded-lg flex w-fit ">
                    <input v-model="newAssignment" class=" p-2" placeholder="New Assignment...">
                    <button type="submit" class="bg-white text-black font-bold p-2 border-l ">Add</button>
                </div>
            </form>
       
    
    
    
    
    `,
    
    data(){

        return{
            newAssignment:''
        }
    },
    methods: {
        add(){

            this.$emit('add', this.newAssignment);

            this.newAssignment ="";

            // this.assignments.push({
      
            //   name: this.newAssignment,
            //   completed:false,
            //   id:this.assignments.length +1
      
            // });
      
         
      
          }
    }


}