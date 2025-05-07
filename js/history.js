document.addEventListener("DOMContentLoaded", function() {
  const historyData = JSON.parse(localStorage.getItem("reportHistory")) || [];

  if (historyData.length === 0) {
    document.getElementById('historyReports').innerHTML = "<p>No history found. Analyze crops to generate history.</p>";
    return;
  }

  historyData.forEach((report, index) => {
    const reportItem = document.createElement('div');
    reportItem.className = "history-item";
    reportItem.innerHTML = `
      <p><strong>${report.disease}</strong> - ${report.date}</p>
    `;
    reportItem.onclick = () => {
      localStorage.setItem('latestReport', JSON.stringify(report));
      window.location.href = "report.html";
    };
    document.getElementById('historyReports').appendChild(reportItem);
  });
});
