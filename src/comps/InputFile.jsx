import React from "react";
import { MdFileDownload } from "react-icons/md";
import '../comps/styles.css';

export const InputFile = ({ accept, multiple, files, setFiles }) => {
    const handleChange = (event) => {
        const selectedFiles = event.target.files;
        setFiles([...selectedFiles]);
    };
    const handleDelete = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };
    return (
        <div className="input-file-container">
            <input type="file" className="input-file-element" accept={accept} multiple={multiple} onChange={handleChange} />
            {files && files.length > 0 && files.map((file, i) => (
                <p className="input-file-info" key={i}>
                    {file.name}
                    <span className="delete-icon" onClick={() => handleDelete(i)}>✕</span>
                </p>
            ))}
        </div>
    );
};
