
const intialState ={
    Contacts:[
        {
            id:1,
            name:'Akash Sangwan',
            email:'akashsangwan98@gmail.com',
            phone:'9582773798'
        },
        {
            id: 2,
            name:'Sudhanshu Sangwan',
            email:'sudhanshusangwan@gmail.com',
            phone:'8510051587'
         },
    ],
    contact:null,
    selectedContact:[]
}

const  contactReducer= (state=intialState, action) =>{

switch(action.type){
    case 'ADD_TO_CONTACT':
        return{
            ...state,
            Contacts:[action.payload,...state.Contacts]
        }
    case 'EDIT_CONTACT':
       var arr= state.Contacts.filter((contact)=> contact.id==action.payload);
       arr=arr.values();
       for(let val of arr){
           arr=val;
       }
        return{
            ...state,
            contact:arr,
        }

    case 'UPDATE_CONTACT':
        return{
            ...state,
            Contacts:state.Contacts.map((contact)=>
                contact.id==action.payload.id?action.payload:contact
            ),
        }

    case 'DELETE_CONTACT':
        return{
            ...state,
            Contacts:state.Contacts.filter((contact)=> contact.id!=action.payload),
        }
    case 'SELECT_ALL':
        return{
            ...state,
            selectedContact:action.payload
        }
    case 'CLEAR_ALL':
        return{
            ...state,
            selectedContact:[]
        }
    case 'DELETE_ALL':
        return{
            ...state,
            Contacts:[]
        }
    default:
        return state;
}
}

export default contactReducer;