import { PdfViewer } from '../components/DocumentViewer'
import { MyDropzone } from '../components/DropZone'

export const App = () => {

  return (
    <>
      <div className='w-4/5 mx-auto text-center border mt-10'>
        <MyDropzone />
        <PdfViewer/>
      </div>
    </>
  )
}
