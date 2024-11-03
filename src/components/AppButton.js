export default{

    template:`
    <button 
         :class="{
            'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-blue-600 hover:bg-blue-700' : type === 'primary',
            ' bg-orange-100 hover:bg-orange-300' : type === 'secondary',
            'bg-gray-300 hover:bg-gray-600' : type === 'muted',
            'is-Loading' : processing
         }"

         :disabled="procesing"
    >
       <slot/>
    </button>
  
  `,
  props: {

    type: {

      type: String, 
      default: 'primary',
    },
    processing:{

    type:Boolean, 
    default: false
    }
  
  }
}