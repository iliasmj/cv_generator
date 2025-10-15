//Add calling /cv/pdf route on pdf button click event

//Gets display language from <html lang="...">
const displayLanguage = document.documentElement.lang;
console.log(displayLanguage);

const pdfButton = document.getElementById("pdf");
const generatePdf = function() {
    if (displayLanguage == "en") {
        window.location.href = `/cv/pdf?display_language=🇬🇧`;
    }
    if (displayLanguage == "fr") {
        window.location.href = `/cv/pdf?display_language=🇫🇷`;
    }
}
pdfButton.addEventListener("click", generatePdf);