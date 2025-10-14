//Add calling /cv/pdf route on pdf button click event
const pdfButton = document.getElementById("pdf");
const getPdf = function() {
    window.location.href = "/cv/pdf";
};
pdfButton.addEventListener("click", getPdf);