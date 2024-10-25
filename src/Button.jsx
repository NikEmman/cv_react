/* eslint-disable react/prop-types */

export default function Button({isEditable, onEditClick, onSaveClick}){
    return(
        <button onClick ={isEditable ? onSaveClick:onEditClick}>{isEditable ? "Save":"Edit"}</button>
    )
}