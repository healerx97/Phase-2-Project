import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Downloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        const ratio = input.offsetHeight / input.offsetWidth
        html2canvas(input, {useCORS: true, scrollY: -window.scrollY})
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgProps= pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = ratio * pdfWidth

                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`${downloadFileName}.pdf`);
                console.log(`${pdfWidth}, ${pdfHeight}`)
            })
    }

    return <button onClick={downloadPdfDocument}>Download Pdf</button>

}

export default Downloader;