import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";



export default{
    components: { AssignmentList , AssignmentCreate },

    template:`
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
              <assignment-create @add="add"></assignment-create>
            </assignment-list>
            
            <assignment-list :assignments="filters.completed" title="Completed Assignments" can-toggle ></assignment-list>
        </section>

        
       

`,

data(){

    return {
      //an array of assignments

      assignments: [], 


    }
  },

  computed: {
    filters(){

        return{
            inProgress: this.assignments.filter(assignment=> !assignment.complete),
            completed: this.assignments.filter(assignment=> assignment.complete)

        }
    }
  },
  created() {

    fetch('http://localhost:3001/assignments')//making contact and promise
      .then(response => response.json()) 
        .then(assignments => { //when you have the data im looking for


          this.assignments = assignments;
          //assign to data property
          //console.log(data) //print it out


        })
    
  },
  methods: {
    add(name){
      this.assignments.push({

        name: name,
        completed:false,
        id:this.assignments.length +1

      });

   

    }
  },
}