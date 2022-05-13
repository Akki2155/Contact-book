import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToContact } from '../../actions';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';

export const AddContact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const dispatch = useDispatch();
    let navigate=useNavigate();
    
    function createContact(e){
        e.preventDefault();
        // console.log("name",name);
        // console.log("email",email);
        // console.log("phone",phone);


        const new_contact={
            id:shortid.generate(),
            name: name,
            phone:phone,
            email:email
        }
        dispatch(addToContact(new_contact));
        navigate('/');
    }
  return (
    <div>
        <div className='card border-0 shadow'>
          <div className='card-header bg-primary heading'>Add a Contact</div>
          <div className='card-body'>
                <form onSubmit={(e)=> createContact(e)}>
                    <div className='form-group spacing'>
                    <input className='form-control' type="text" placeholder="Enter the Name of Contact" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    </div>
                    <div className='form-group spacing'>
                    <input className='form-control' type="text" placeholder="Enter the Phone Number of Contact" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
                    </div>
                    <div className='form-group spacing'>
                    <input className='form-control' type="text" placeholder="Enter the Email of Contact" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    </div>
                    <button className='btn btn-primary spacing' type='submit'>Add To Contact</button>
                </form>
          </div>
        </div>
    </div>
  )
}
