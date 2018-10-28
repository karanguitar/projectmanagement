export const createProject  = (project) =>{
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        //make async call to database 
        const fireStore = getFirestore()
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: "Dizzy",
            authorLastName : "Rascal",
            authorId: 123434,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                payload: project
            })
        })
        .catch((err) =>{
            dispatch({
                type: "CREATE_PROJECT_ERROR",
                err
            })
        })
    }
}