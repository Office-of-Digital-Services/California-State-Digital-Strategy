document.addEventListener("DOMContentLoaded", () => {
  // Function to load and insert HTML from a file
  const loadHTML = (elementId, filePath) => {
    const element = document.getElementById(elementId);
    if (element) {
      fetch(filePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((html) => {
          element.innerHTML = html;
        })
        .catch((error) => {
          console.error("Error loading component:", error);
        });
    }
  };

  // Load the site footer into the main page
  loadHTML("site-footer-placeholder", "./site-footer.html");
});
