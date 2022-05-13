import React from 'react';

export const addToContact = (contact) => {
    return {
          type:'ADD_TO_CONTACT',
          payload: contact
    }
  }

  export const editContact = (id) => ({
    type: 'EDIT_CONTACT',
    payload:id
  })

  export const updateContact = (contact) => ({
    type: 'UPDATE_CONTACT',
    payload:contact
  })

  export const deleteContact =(id)=> ({
        type:'DELETE_CONTACT',
        payload:id
  })

  export const selectAllContact = (id) => ({
    type: 'SELECT_ALL',
    payload: id,
  })

  export const clearAllContact = () => ({
    type: 'CLEAR_ALL'
  })

  export const deleteALLContact = () => ({
    type: 'DELETE_ALL'
  })
  
  
  
  