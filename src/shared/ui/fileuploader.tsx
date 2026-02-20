import { Button } from ".";
import { FontSize, Margin, Radius } from "./ui.const";
import React, { useRef, useState, type JSX } from "react";
import type { TSize } from "./ui.type";

interface IFileUploader {
    accept?: string
    buttonLabel: string
    label?: string
    margin?: TSize
    multiple?: boolean
    note?: string
    required?: boolean
    rounded?: TSize | `full`
    size?: TSize
    onFilesChange?: (files: Array<File>) => void
}

export default function FileUploader ({ accept, buttonLabel, label, margin, multiple, note, required, rounded, size, onFilesChange }: IFileUploader): JSX.Element {
    const labelSize: TSize = size ?? `md`;
    const [ files, setFiles ] = useState<Array<File>>([]);
    const [ isDragging, setIsDragging ] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFiles (selectedFiles: FileList | null): void {
        if (!selectedFiles) return;
        const format = accept?.replaceAll(` `, ``).split(`,`);

        const fileArray = format ? 
            Array.from(selectedFiles).filter(file => format.includes(file.type) || format.includes(`.${ file.name.split(`.`).pop() }`))
            : Array.from(selectedFiles);
        const updateFiles = multiple ? [ ...files, ...fileArray ] : fileArray;
        // console.log(updateFiles)
        setFiles(updateFiles);
        onFilesChange?.(updateFiles);
    }

    function handleDrop (e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    }

    // function removeFile (index: number): void {
    //     const updatedFiles = files.filter((_, i) => i !== index);
    //     setFiles(updatedFiles);
    //     onFilesChange?.(updatedFiles);
    // }

    return (
        <div style={{ margin: Margin[ margin ?? `md` ] }}>
            {
                label && 
                <div className="text-[#9C9C9C]" style={{ fontSize: FontSize[ labelSize ] }}>
                    { label } { required && <span className="text-red-500">*</span> }
                </div>
            }
            <div className="transition h-48 flex justify-center items-center border-2"
            style={{ borderRadius: Radius[ rounded ?? `none` ], borderColor: isDragging ? `green` : `#EEE` }}
            onDragOver={e => {
                e.preventDefault();
                setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={ handleDrop }
            onClick={ () => inputRef.current?.click() }>
                <div className="text-center p-2 pointer-events-none">
                    <i className="bi bi-upload text-2xl"></i>
                    <div className="transition text-sm" style={{ color: isDragging ? `green` : `#9C9C9C` }}>
                        {
                            isDragging ? `Drop here` : `Drag & drop file${ multiple ? `s` : `` } here or click to upload`
                        }
                    </div>
                </div>
            </div>
            <Button label={ buttonLabel } rounded="lg" onClick={ () => inputRef.current?.click() } />
            {
                note && 
                <div className="text-xs text-[#9C9C9C] text-center">{ note } { required && <span className="text-red-500">*</span> }</div>
            }
            <input
                ref={ inputRef }
                accept={ accept ?? `*` }
                type="file"
                className="hidden"
                multiple={ multiple }
                onChange={ (e) => handleFiles(e.target.files) }
            />
        </div>
    )

}