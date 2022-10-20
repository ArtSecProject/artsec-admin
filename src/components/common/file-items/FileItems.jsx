import React from 'react';
import { BsFileEarmarkImage } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'

const FileItem = ({ file, deleteFile }) => {
    return (
        <>
            <li
                className="flex bg-green-200 p-2 space-x-2 items-center rounded-md list-none"
                key={file.name}>
                <BsFileEarmarkImage className='mr-2' />
                <p>{file.name}</p>
                <div className="justify-end cursor-pointer">
                    <div className="loading"></div>
                    {file.isUploading && <FontAwesomeIcon icon={faSpinner} className="text-[20px]"
                        onClick={() => deleteFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <FontAwesomeIcon icon={faTrash}
                            onClick={() => deleteFile(file.name)} className="text-[20px]" />
                    }
                </div>
            </li>
        </>
    )
}

export default FileItem