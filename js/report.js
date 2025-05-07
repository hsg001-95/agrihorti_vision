document.addEventListener("DOMContentLoaded", function() {
  const reportData = JSON.parse(localStorage.getItem("latestReport"));

  if (!reportData) {
    document.getElementById('latestReport').innerHTML = "<p>No report found. Please analyze an image first!</p>";
    return;
  }

  document.getElementById('latestReport').innerHTML = `
    <h2>Disease: ${reportData.disease}</h2>
    <p><strong>Date:</strong> ${reportData.date}</p>
    <p><strong>Symptoms:</strong> ${reportData.symptoms}</p>
    <p><strong>Treatment:</strong> ${reportData.treatment}</p>
    <p><strong>Future Treatment:</strong> ${reportData.future}</p>
    <p><strong>Care Instructions:</strong> ${reportData.care}</p>
    <p><strong>Medicines:</strong> ${reportData.medicines}</p>
    <p><strong>Precautions:</strong> ${reportData.precautions}</p>
  `;
});

function downloadPDF() {
  const element = document.getElementById('latestReport');
  html2pdf().from(element).save('AgriHorti_Report.pdf');
}