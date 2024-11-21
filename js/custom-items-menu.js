function openCustomLinksNav(){document.getElementById("custom_links_nav").style.width="250px",document.CustomLinksNavOpened=!0}function closeCustomLinksNav(){document.getElementById("custom_links_nav").style.width="0",document.CustomLinksNavOpened=!1}function getCustomLinkItems(){return localStorage.getItem("menu-items")?JSON.parse(localStorage.getItem("menu-items")):{}}function storeCustomLinkItems(menuItems){localStorage.setItem("menu-items",JSON.stringify(menuItems))}function getDefaultSystemLinks(){return window.linkMenu}function buildCustomUserLinksMenu(){let linkMenu=getCustomLinkItems(),categories=Object.keys(linkMenu),elements=[];for(let a=0;a<categories.length;a++){if(linkMenu[categories[a]].length<2)continue;let svg="";elements.push(`<li class="cat-separator">\n\t\t${0==a?"":"<hr/>"}\n\t\t<a >${svg} <span>${categories[a]}</span></a>\n\t\t<hr/>\n\t\t</li>`);for(let e=1;e<linkMenu[categories[a]].length;e++)elements.push(`<li>\n\t\t\t<span class="remove-custom-link"\n\t\t\tdata-category="${categories[a]}"\n\t\t\tdata-index="${e}"\n\t\t\tonclick="customLinkRemoveConfirmation(event)" >x</span>\n\t\t\t<a target='_blank' class='cat-item' href="${linkMenu[categories[a]][e][1]}">${linkMenu[categories[a]][e][0]}</a></li>`)}document.getElementById("userCustomLinks").innerHTML=elements.join("\n")}function getCustomLinkItemsCatImage(category){let links=getDefaultSystemLinks();return links[category]?links[category][0]:[]}function addCustomLinkToLinkItems(url,title,category,color){let linkItems=getCustomLinkItems();return linkItems[category]||(linkItems[category]=[],linkItems[category].push([color])),linkItems[category].push([title,url,""]),linkItems}function addCustomLinkToMenu(url,title,category,color){storeCustomLinkItems(addCustomLinkToLinkItems(url,title,category,color)),buildCustomUserLinksMenu(),perfectSrollBars.customLinks.update()}function removeCustomLink(category,index){let links=getCustomLinkItems(),newList=[];for(let i=0;i<links[category].length;i++)i!=index&&newList.push(links[category][i]);newList.length<2?delete links[category]:links[category]=newList,storeCustomLinkItems(links),buildCustomUserLinksMenu()}function customLinkRemoveConfirmation(ev){let category=ev.srcElement.attributes["data-category"].nodeValue,index=ev.srcElement.attributes["data-index"].nodeValue;var label=getCustomLinkItems()[category][index][0];confirmModal.style.display="block",overlay.style.display="block",document.getElementById("modal-label").innerHTML=label,document.getElementById("deleteLink").addEventListener("click",(function(){removeCustomLink(category,index),confirmModal.style.display="none",overlay.style.display="none"}),{once:!0})}const perfectSrollBars={customLinks:null};function setPerfectScrollbar(){perfectSrollBars.customLinks=new PerfectScrollbar("#userCustomLinks"),perfectSrollBars.customLinks.update(),document.getElementById("userCustomLinks").scrollTop=0,document.querySelector("#userCustomLinks>div.ps__rail-y").style.opacity=1}(()=>{let checkInterval=setInterval((()=>{if(linkMenu){try{buildCustomUserLinksMenu(),window.addLinkToMenu=(url,name,category)=>{addCustomLinkToMenu(url,name,document.getElementById("custom-category-name").value,document.getElementById("custom-category-color").value)},setPerfectScrollbar()}catch(e){console.log(e)}clearInterval(checkInterval)}}),30)})();