function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  function onGot(item) {
    // console.log("Got:")
    // console.log(item);
    const minMins = item.minutes | 2;
    const minSecs = item.seconds | 0;

    setInterval(() => {
        $('.badge-shape-wiz__text').each(function() {
            let time = $(this).text();
            if (/^([0-9])?[0-9]:[0-9][0-9]$/.test(time)) {
                let [mins, secs] = time.split(":");
                mins, secs = parseInt(mins), parseInt(secs);

                if (mins < minMins || (mins == minMins && secs < minSecs)) {
                    // console.log("Blocking: " + time);
                    $(this).closest('#dismissible').remove();
                }
            }
        });
    }, 1000);
  }
  
  const getting = browser.storage.sync.get(["minutes", "seconds"]);
  getting.then(onGot, onError);
  

