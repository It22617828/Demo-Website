script.js 
document.addEventListener("DOMContentLoaded", () => {
    const scanDiv = document.getElementById("scan-results");
    if (scanDiv) {
        chrome.storage?.local.get("reportData", (data) => {
            if (data.reportData) {
                scanDiv.innerHTML = "";
                data.reportData.forEach(supplier => {
                    const entry = document.createElement("div");
                    entry.innerHTML = `<strong>${supplier.name}</strong>: ${supplier.status} <br> <em>${supplier.issues}</em>`;
                    scanDiv.appendChild(entry);
                });
            }
        });
    }
});
