const initState = {
    projects: [
        {id: "1", title:"Hello", content: "This is how we do it"},
        {id: "2", title:"bye", content: "This is hoewew we wefwefdo it"},
        {id: "3", title:"Yo", content: "Come over to we do it"},
    ]
}

const projectReducer = (state=initState, action) => {

    switch(action.type){
        case "CREATE_PROJECT":
            console.log('created project', action.payload)
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log('created project error', action.err)
            return state
        default:
            return state


    }       

}
   
export default projectReducer