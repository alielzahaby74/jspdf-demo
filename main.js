import { jsPDF } from "jspdf";


document.getElementById('generate-pdf').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    console.log(text);
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("./a4.pdf");
});
