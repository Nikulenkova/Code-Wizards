import React from "react";
import css from "../styles/Reject_request.css"
import { useState } from "react";

const BackButton = () => {
    const onClick = () => {
        window.location.assign('/read_appeal');
    };

    return (
        <button className="back-button_1" onClick={onClick}>Назад</button>
    );
};

export const File = ({accept, multiple, files, setFiles}) => {
    const handlChange = (event) =>{
    const files = event.target.files;
    setFiles([...files]);
    };

    return(
        <div className="input-file-container">
            <label className="inputFile">
                <input type="file" className="input-file-element" accept = {accept} multiple={multiple} onChange={handlChange}/>
                <span className="input-file-placeholder">Загрузить фотографию</span>
            </label>
            <div className="c-1">
            {files && files.length > 0 && files.map((file,i) =>
            <p className="input-file-info" key = {i}>
            {file.name}
            </p>)}
            </div>
        </div>
    )
}

const Reject_request = () => {
    const [photo, setPhoto] = useState(null);
    const [inputValue, setInputValue] = useState("");
    return (
        <React.Fragment>
            <BackButton/>
            <div className="container_1">
            <div className="data-section">
            <form className="form_1">
            <p>Для удобства определите тему обращения</p>
                    <input className = "input_2" type="text" name="name"/>
                    <p>Укажите причину отклонения</p>
                    <textarea className = "input_3" type="text" name="application"/>
                <p>Загрузите фото(максимум 3 фото)</p>
                <File accept =".png,.jpg,.jpeg" multiple = {true} files={photo} setFiles={setPhoto}/> 
            </form>
            </div>
            <div className="button-container_answer">
            <button className="send_answer">Отправить</button>
            </div>
            </div>
        </React.Fragment>
        )
    }
    export default Reject_request
