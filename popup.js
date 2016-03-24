chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

    url = "https://hyper-tldr.herokuapp.com/summary?url="+tabs[0].url+"&lines=4";
    document.getElementById("iframe").src = url;

});
