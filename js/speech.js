/* ============================================================
   Read-aloud helper — uses the browser's built-in speech.
   No downloads, no internet needed. Great for early readers.
   ============================================================ */
window.ReadAloud = (function () {
  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  let speaking = false;

  function stop() {
    if (supported) window.speechSynthesis.cancel();
    speaking = false;
  }

  // Speak some text. `onState(isSpeaking)` lets the button update its label.
  function speak(text, onState) {
    if (!supported || !text) return;

    // If it's already talking, treat the click as "stop".
    if (window.speechSynthesis.speaking) {
      stop();
      if (onState) onState(false);
      return;
    }

    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;   // a touch slower, friendlier for kids
    u.pitch = 1.05;
    u.lang = "en-US";
    u.onend = () => { speaking = false; if (onState) onState(false); };
    u.onerror = () => { speaking = false; if (onState) onState(false); };

    speaking = true;
    if (onState) onState(true);
    window.speechSynthesis.speak(u);
  }

  return { supported, speak, stop };
})();
