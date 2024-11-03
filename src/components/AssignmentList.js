import Assignment from "./Assignment";
import AssignmentTags from "./AssignmentTags";
import Panel from "./Panel.js";


export default{
    components:{Assignment, AssignmentTags, Panel},

    template:`
    
    <Panel v-show=" show && assignments.length"> 

        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">{{title}} <span>({{assignments.length}})</span></h2>
            <button v-show="canToggle" @click="show=false">&times;</button>
        </div>

        <assignment-tags 
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
       
        
        />
        
        <ul class="border border-slate-500 border-4 rounded-lg divide-y divide-slate-500">
            <assignment 
                v-for="assignment in filteredAssignments" 
                :key="assignment.id" 
                :assignment="assignment"
            ></assignment>
        </ul>

        <slot></slot>

    </Panel>
    
    
    `,
    props:{

        assignments: Array, 
        title: String,
        canToggle: {type:Boolean, default:false }

    },
    data() {

        return {

            currentTag:"All", 
            show: true
        };

    },
    
    computed:{

        filteredAssignments() {
            if(this.currentTag === 'All'){

                return this.assignments;

            }

            return this.assignments.filter(a => a.tag === this.currentTag); 
        }
    }
}