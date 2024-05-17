function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      minutes: parseInt(document.querySelector("#minutes").value),
      seconds: parseInt(document.querySelector("#seconds").value)
    });
  }
  
  function restoreOptions() {
    function setCurrentChoice(result) {
      document.querySelector("#minutes").value = result.minutes || 2;
      document.querySelector("#seconds").value = result.seconds || 0;
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    let getting = browser.storage.sync.get(["minutes", "seconds"]);
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);
  