import Assignments from "./Assignments";
import Panel from "./Panel";

export default{

    components:{Assignments, Panel},

   template:`
   <div class="grid gap-6">
        <assignments></assignments>

        


   `,
    
   props:{

        add:Object

    }
}