// Initialize the disabled state in storage and set the default icon and badge.
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ disabled: true });
  updateIconAndBadge(true);
});

// Handle the extension icon click event
chrome.action.onClicked.addListener((tab) => {
  // Get the current state
  chrome.storage.local.get("disabled", (data) => {
    const newState = !data.disabled; // Toggle state

    // Update storage with the new state
    chrome.storage.local.set({ disabled: newState }, () => {
      // Update the icon and badge based on the new state
      updateIconAndBadge(newState);

      // Send a message to the content script to toggle recommendations
      chrome.tabs.sendMessage(tab.id, { action: "toggleRecommendations", disabled: newState });
    });
  });
});

// Function to update the icon and badge based on the state
function updateIconAndBadge(isDisabled) {
  // Use a badge to show state
  chrome.action.setBadgeText({ text: isDisabled ? "OFF" : "" });
  chrome.action.setBadgeBackgroundColor({ color: isDisabled ? "#B0B0B0" : "#4688F1" });
}
