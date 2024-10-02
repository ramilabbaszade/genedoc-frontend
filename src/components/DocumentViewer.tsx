import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";


// https://github.com/wojtekmaj/react-pdf/wiki/Recipes 😎

export const PdfViewer = ({ className }: { className?: string }) => {
    const [numPages, setNumPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const onDocumentLoad = ({ numPages }: { numPages: number }) => setNumPages(numPages);

    const pdfFile = "";

    const [pageHeight, setPageHeight] = useState(window.innerHeight * 0.8);

    useEffect(() => {
        function handleResize() {
            setPageHeight(window.innerHeight * 0.8);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={className}>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoad}>
                <Page pageNumber={currentPage} height={pageHeight} />
            </Document>
        </div>
    );
};
