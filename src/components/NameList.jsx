import React, { Fragment, useState } from 'react'
import uniqid from 'uniqid'

export const NameList = () => {

    const [name, setName] = useState("")

    const [namesList, setNamesList] = useState([])

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





  return (
    <Fragment>
        <h1>BASIC CRUD</h1>
        <hr />
        <div className="row">
            <div className="col">
                <h2>Names List</h2>
                <ul className='list-group'>
                    {namesList.map( (e) =>
                        <li key={e.id} className='list-group-item'>{e.nname}</li>
                    )}
                </ul>
            </div>
            <div className="col">
                <h2>Add name</h2>
                <form onSubmit={(e)=>addName(e)} className='form-group'>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} className='form-group m-3' placeholder='Write a name' value={name}/>
                    <input type="submit" value="Add" className='btn btn-success'/>
                </form>
            </div>
        </div>
    </Fragment>
  )      
}
