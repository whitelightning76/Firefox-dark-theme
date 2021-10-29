/* Firefox userChrome script
 * Add a slim switch on left of main content to toggle Firefox's native sidebar
 * Tested on Firefox 78
 * Author: garywill (https://github.com/garywill)
 */

console.log("sidebar_switch.js");

(() => {
    const bbrowser = document.getElementById("browser");
    
    if ( bbrowser && document.getElementById("main-window") && document.getElementById("TabsToolbar") && document.getElementById("urlbar-container") )
    {
        var switcher_c =  document.createElement("vbox");
        var switcher =  document.createElement("vbox");
        
        switcher.id = "sidebar_switcher";
        switcher_c.id = "sidebar_switcher_c";
 
        switcher_c.style.position = "relative";
        switcher_c.style.display = "block";
        switcher_c.style.zIndex = "9999999";
        
        switcher.style.width="2.5px";
        switcher.style.minWidth="2.5px";
        switcher.style.maxWidth="2.5px";
        switcher.style.height="100%";
        switcher.style.position = "absolute";
        switcher.style.backgroundColor = "rgb(159, 159, 198) "; 
        
        switcher.tooltipText = "Click to toggle sidebar"
 
        switcher_c.appendChild(switcher);
        bbrowser.insertBefore(switcher_c, bbrowser.childNodes[0]);
        
        switcher.addEventListener('click', async function(){
            await SidebarUI.toggle();
        
        });
        
        for (var i=0; i< document.styleSheets.length; i++ )
        {
            try{
                document.styleSheets[i].insertRule(" #sidebar_switcher { opacity: 0.0; } ");
                document.styleSheets[i].insertRule(" #sidebar_switcher:hover { opacity: 0.4; } ");
                break;
            }catch(err){}
        }
        
        
        const nav_tb = document.getElementById("navigator-toolbox");
        var tabsbar_fullscr_observer = new MutationObserver(function(){
            if(nav_tb.getAttribute("inFullscreen")) // fullscreen
            {
                if(document.fullscreen) // video fullscreen
                {   
                    switcher_c.style.display = "none"; // hide
                }
            }
            else // not fullscreen
            {
                switcher_c.style.display = "block";  
            }
            
        });
        tabsbar_fullscr_observer.observe(nav_tb,{attributes:true});
        
        
    }
})();
