// flutter_bootstrap.js

console.log("Flutter bootstrap loaded");

function loadFlutterApp() {
    console.log("Loading Flutter app...");

    const flutterScript = document.createElement('script');
    flutterScript.src = "main.dart.js"; // path to compiled Flutter JS
    flutterScript.defer = true;

    flutterScript.onload = () => {
        console.log("Flutter app loaded successfully!");
    };

    flutterScript.onerror = (error) => {
        console.error("Failed to load Flutter app!", error);
    };

    document.body.appendChild(flutterScript);
}

// Handle both cases: DOM already loaded or still loading
if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM ready, initializing Flutter bootstrap...");
        loadFlutterApp();
    });
} else {
    // DOM is already ready
    console.log("DOM already ready, initializing Flutter bootstrap...");
    loadFlutterApp();
}
