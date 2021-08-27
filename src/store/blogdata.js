export default{
    namespaced:true,
    state :{
        blog:[
            {id:0, title:'Blog1', content:'this is the blog 1 content', like:0},
            {id:1, title:'Blog2', content:'this is the blog 2 content', like:0},
            {id:2, title:'Blog3', content:'this is the blog 3 content', like:0},
            {id:3, title:'Blog4', content:'this is the blog 4 content', like:0}
        ]
    },
    mutations:{
        incLike(state, id){
            let blogindx=state.blog.findIndex(b => b.id == id)
            state.blog[blogindx].like++;
        },
        addBlog(state, Blog){
            state.blog.push(Blog)
        }
    },
    getters:{
       getdata: (state)=>(id)=>{
           return state.blog.find(blo => blo.id === id)
       }       
    }
}