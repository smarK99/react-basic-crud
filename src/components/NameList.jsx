import React, { Fragment, useState } from 'react'
import uniqid from 'uniqid'

export const NameList = () => {

    const [name, setName] = useState("")

    const [namesList, setNamesList] = useState([])

    const [editMode, setEditMode] = useState(false)

    const [id, setId] = useState('')

    const addName = (event) => {
        //No se recarga la pag y no se pierden datos
        event.preventDefault()
        const newName = {
            id:uniqid(),
            nname:name
        }
        setNamesList([...namesList,newName])
        //Limpiamos el input de nombre
        setName("")
    }

    const deleteName = (id) => {
        const newArray = namesList.filter(item => item.id !== id)
        setNamesList(newArray)
    }

    const edit = (item) => {
        setEditMode(true)
        setName(item.nname)
        setId(item.id)
    }

    const editName = (e) => {
        e.preventDefault()
        const newArray = namesList.map( item => (item.id === id) ? {id:id, nname:name}: item)
        setNamesList(newArray)
        setEditMode(false)
    }





  return (
    <Fragment>
        <h1>BASIC CRUD</h1>
        <hr />
        <div className="row">
            <div className="col">
                <h2>Names List</h2>
                <ul className='list-group'>
                    {namesList.map( (e) =>
                        <>
                        <li key={e.id} className='list-group-item d-flex align-items-center justify-content-between'>
                            <span>{e.nname}</span>
                            <div className='w-50 d-flex justify-content-end gap-2'>
                                <button className='btn btn-primary' onClick={() => {edit(e)}}>Edit</button>
                                <button className='btn btn-danger' onClick={() => {deleteName(e.id)}}>Delete</button>
                            </div>
                        </li>                       
                        </>
                    )}
                </ul>
            </div>
            <div className="col">
                <h2>Add name</h2>
                <form onSubmit={editMode ? editName : addName} className='d-flex flex-column'>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} className='form-group mb-2'  placeholder='Write a name' value={name}/>
                    <input type="submit" value={editMode ? 'Edit': 'Add'} className='btn btn-success'/>
                </form>
            </div>
        </div>
    </Fragment>
  )      
}
