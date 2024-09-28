# No YouTube Recommendations Chrome Extension

## Overview

**No YouTube Recommendations** is a simple Chrome extension designed to improve your productivity by hiding YouTube's sidebar recommendations. With a single click on the extension icon, you can toggle the visibility of the recommendations on and off, helping you to stay focused on your intended content.

## Features

- **Toggle Recommendations Visibility**: Click the extension icon to hide or show YouTube recommendations.
- **Dynamic Content Handling**: The extension uses a `MutationObserver` to handle dynamic content changes on YouTube, ensuring recommendations remain hidden when you navigate between videos.
- **Minimalist Design**: The icon indicates the state of the extension (on or off) using a visual cue, making it easy to see whether recommendations are currently visible or blocked.
- **Badge Indicator**: A badge with "OFF" text appears when YouTube recommendations are blocked.

## Installation

1. **Clone or Download** this repository:
    ```bash
    git clone https://github.com/mklilley/no-youtube-recommendations.git
    ```
2. **Open Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** by clicking the toggle in the top-right corner.
4. Click on **Load unpacked** and select the folder containing this repository.
5. The extension will now be added to Chrome.

## How to Use

- Click the extension icon in the Chrome toolbar to toggle recommendations on YouTube.
- When the extension is **active** (no badge), recommendations are visible.
- When the badge shows **OFF**, recommendations are hidden.

## How It Works

1. The extension uses a `content.js` script to hide or show YouTube's recommendations based on a stored state.
2. A `background.js` script manages the state and updates the extension's icon and badge text.
3. The `content.js` script includes a `MutationObserver` that keeps recommendations hidden even when navigating dynamically on YouTube.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
