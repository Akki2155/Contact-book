import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToContact, editContact, updateContact } from '../../actions';
import shortid from 'shortid';
import { useNavigate, useParams } from 'react-router-dom';



export const EditContact = () => {
    let {id}=useParams();

    const contact=useSelector((state)=>state.contact.contact);
    // console.log(contact)
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const dispatch = useDispatch();
    let navigate= useNavigate();
  

   
    
    useEffect(()=>{
      if(contact!=null){
        setname(contact.name);
        setemail(contact.email);
        setphone(contact.phone);
      }
      dispatch(editContact(id));
    },[contact])


    function updatedContact(e){
      e.preventDefault();
      const update_contact=Object.assign(contact,{
        name:name,
        email:email,
        phone:phone,
        id:id,
      })
      
      dispatch(updateContact(update_contact));
      navigate('/');
    }
   
  return (
    <div>
        <div className='card border-0 shadow'>
          <div className='card-header bg-primary heading'>Edit Contact</div>
          <div className='card-body'>
                <form onSubmit={(e)=>updatedContact(e)}>
                    <div className='form-group spacing'>
                    <input className='form-control' type="text" placeholder="Enter the Name of Contact" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    </div>
                    <div className='form-group spacing'>
                    <input className='form-control' type="text" placeholder="Enter the Phone Number of Contact" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
                    </div>
                    <div className='form-group spacing'>
                    <input className='form-control' type="text" placeholder="Enter the Email of Contact" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    </div>
                    <button className='btn btn-danger spacing' type='submit'>Edit Contact</button>
                </form>
          </div>
        </div>
    </div>
  )
}
