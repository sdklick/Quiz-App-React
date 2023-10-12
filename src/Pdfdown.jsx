import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Pdfdown = (props) => {
  const { pdfref } = props;
  const pdfdown = () => {
    const input = pdfref.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 5;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Random_Qna.pdf");
    });
  };
  return (
    <>
    <div class="position-relative mb-5 mt-2">
    <div class="position-absolute top-50 start-50 translate-middle">
    <button className="btn btn-success float-end" onClick={pdfdown}>
        <i class="fa fa-download"></i>
        <br />
        Download
      </button>
    </div>
    </div>
      
    </>
  );
};

export default Pdfdown;
