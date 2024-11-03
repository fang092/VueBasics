
export default {
template:`
        <div class="flex gap-2">
            <button 
                class="border rounded-lg px-1 py-1 text-xs my-4" 
                :class="{'border-blue-500 text-blue-500' : tag === currentTag}"
                v-for="tag in tags"
                @click="$emit('update:currentTag', tag)"
             >{{tag}}</button>
        </div>
    `,

    props:{
        initialTags: Array,
        currentTag: String
    },

computed:{

    tags(){

        return [ 'All', ...new Set(this.initialTags)];
    }

}

}