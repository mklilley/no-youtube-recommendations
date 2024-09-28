// Function to hide or show recommendations
function toggleRecommendations(hide) {
  const recommendations = document.querySelector('#secondary');
  if (recommendations) {
    recommendations.style.display = hide ? 'none' : '';
  }
}

// Check the initial state when the content script loads
chrome.storage.local.get("disabled", (data) => {
  toggleRecommendations(data.disabled);
});

// Set up an observer to handle dynamic content changes on YouTube
const observer = new MutationObserver(() => {
  chrome.storage.local.get("disabled", (data) => {
    toggleRecommendations(data.disabled);
  });
});

// Start observing the document for changes in child elements or subtree
observer.observe(document.body, { childList: true, subtree: true });

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "toggleRecommendations") {
    toggleRecommendations(message.disabled);
  }
});
