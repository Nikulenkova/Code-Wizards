import "./styles.css"

export const InputFile = ({accept, multiple, files, setFiles}) => {
    const handlChange = (event) =>{
        const files = event.target.files;
        setFiles([...files]);
    };

    const handleDelete = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    return(
        <div className="input-file-container">
            <label className="input-file-label">
                <input type="file" className="input-file-element" accept = {accept} multiple={multiple} onChange={handlChange}/>
                <span className="input-file-placeholder">Загрузить фотографию</span>
            </label>
            <div className="c-1">
                {files && files.length > 0 && files.map((file, i) =>
                    <div key={i} className="input-file-info">
                        {file.name}
                        <span className="delete-icon" onClick={() => handleDelete(i)}>✕</span>
                    </div>
                )}
            </div>
        </div>
    )
}
