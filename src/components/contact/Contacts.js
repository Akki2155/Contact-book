import React from 'react'
import Avatar from 'react-avatar'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions';

export const Contacts = ({contact, SelectAll}) => {
    const dispatch= useDispatch();
    const name =contact.name;
    const email =contact.email;
    const phone= contact.phone;
    const id= contact.id;
  return (
       <tr>
      <td>
            <div className='custom-control custom-checkbox'>
            <input checked={SelectAll} type='checkbox' className='custom-control-input'/>
            <label className='custom-control-label'></label>
          </div>
      </td>
      <td className='align-left'><div><Avatar  name={name} size='45' round={true}/></div>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
          <Link to={`/contact/edit/${id}`}>
          <span className='material-icons'>edit</span>
          </Link>
          <Link to={'/'} className='material-icons' onClick={()=>{
            dispatch(deleteContact(id))
          }}>delete
          </Link>
      </td>
    </tr>
  ) 
}

