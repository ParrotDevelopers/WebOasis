const corsUrl="https://cors.weboasis.workers.dev/corsproxy/?apiurl=",selectedUrl="https://duckduckgo.com/ac/?q=",searchTerm=searchInput.placeholder;let AutoComp=[];async function fetchAutoComp(searchTerm){AutoComp=[];let res=await fetch(corsUrl+selectedUrl+searchTerm);data=await res.json(),await data.map((item=>{AutoComp.push(item.phrase)})),selectedIndex=-1,buildHelp()}function handleSearchReset2(e){buildHelp()}