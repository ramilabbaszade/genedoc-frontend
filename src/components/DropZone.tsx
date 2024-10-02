import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useAppStore } from '../lib/store'

export const MyDropzone = () => {
  const { pdfItem, setPdfItem } = useAppStore()

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles)
    setPdfItem(acceptedFiles[0].path)
    // Do something with the files
  }, [])

  const accept = {
    'application/pdf': ['.pdf']  
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, maxFiles:2})

  return (
    <div className='bg-gray-100 py-10' {...getRootProps()}>
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} type="file" accept=".pdf" />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
          pdfItem:{pdfItem}
        </div>
        <aside>
          <h4>Files</h4>
          <ul>Files list</ul>
        </aside>
      </section>
    </div>
  )
}