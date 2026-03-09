import { useCallback } from "react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";

interface ImageDropZoneProps {
    disabled?: boolean
}

export default function ImageDropZone(props: ImageDropZoneProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
    }, [])

    const options: DropzoneOptions = {
        accept: {
            "image/*": [".jpg", ".jpeg", ".png"],
        },
        disabled: props.disabled,
        onDrop: onDrop,
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone(options)

    return (
        <div {...getRootProps()} className="aspect-4/3 bg-gray-100 text-gray-500 rounded flex items-center text-center text-sm border">
            <div>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files ...</p> :
                        <p>Drag &amp; drop some files here, or click to select files</p>
                }
            </div>
        </div>
    )
}