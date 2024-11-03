export default{
    template:`
        <li class="" > <!-- for each assignment in the array of assigments filter those that are not complete-->

                <label class=" p-2 flex justify-between items-center">
                    {{assignment.name}}
                    <input type="checkbox" v-model="assignment.complete" class="ml-2">
                </label>
                
                
                
        </li>


    `,
    props:
    {
        assignment: Object
        
    }
 
}