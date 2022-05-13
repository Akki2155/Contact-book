import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllContact, deleteALLContact, selectAllContact } from '../../actions'
import { Contacts } from './Contacts'
export const Contact = () => {
    const contacts= useSelector((state)=>state.contact.Contacts)
    const Selected_Contacts= useSelector((state)=>state.contact.selectedContact)
    const dispatch= useDispatch();
    
    const [SelectAll, setSelectAll] = useState(false)

    useEffect(()=>{

      if(SelectAll){
        dispatch(selectAllContact(contacts.map(contact=> contact.id)))
      }
      else if(!SelectAll)
      {
        dispatch(clearAllContact())
      }
    },[SelectAll])


  return (
    <div>
    {
      Selected_Contacts.length>0?<button onClick={()=>
      {
        dispatch(deleteALLContact())
      }} className='btn btn-danger del-all'>Delete All</button>:null
    }

   <table class="table shadow">
   <thead>
    <tr>
      <th scope="col">
          <div className='custom-control custom-checkbox'>
            <input type='checkbox' className='custom-control-input' onClick={()=>{
              setSelectAll(!SelectAll)
            }}/>
            <label className='custom-control-label'></label>
          </div>
      </th>
      <th  scope="col">Name</th> 
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contact)=>{
      return(  
        <Contacts contact={contact} key={contact.id} SelectAll={SelectAll}/>
      )
    })}
  </tbody>
</table>
</div>
  )
}
