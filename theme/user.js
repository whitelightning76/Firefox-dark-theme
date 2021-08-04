// Change Performance settings
user_pref("dom.ipc.processCount", 10);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);

// Increase network
user_pref("network.http.max-connections", 900);
user_pref("network.http.max-persistent-connections-per-server", 8);
 
// Enable WebRender compositor
user_pref("gfx.webrender.all", true);

// Enable general user interface CSS

// allow user stylesheets
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// enable proton
user_pref("browser.proton.enabled", true);
user_pref("browser.proton.places-tooltip.enabled", true);
// required for author sheets
user_pref("layout.css.moz-document.content.enabled", true);
user_pref("layout.css.xul-box-display-values.content.enabled", true);
user_pref("layout.css.xul-display-values.content.enabled", true);
// required for icons with data URLs
user_pref("svg.context-properties.content.enabled", true);
// required for acrylic gaussian blur
user_pref("layout.css.backdrop-filter.enabled", true);
// prevent bugs that would otherwise be caused by the custom scrollbars in the user-agent sheet
user_pref("layout.css.cached-scrollbar-styles.enabled", false);
// the theme doesn't have a light mode as of yet
user_pref("ui.systemUsesDarkTheme", 1);
// svg optimizations
user_pref("gfx.webrender.svg-images", true);
// allow stylesheets to modify trees in system pages viewed in regular tabs
user_pref("layout.css.xul-tree-pseudos.content.enabled", true);
// allow the color-mix() CSS function
user_pref("layout.css.color-mix.enabled", true);
// other CSS features
user_pref("layout.css.moz-outline-radius.enabled", true);
// avoid native styling
user_pref("browser.display.windows.non_native_menus", 1);
user_pref("widget.disable-native-theme-for-content", true);
user_pref("widget.non-native-theme.win.scrollbar.use-system-size", false);
// keep "all tabs" menu available at all times, useful for all tabs menu expansion pack
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("gfx.webrender.enabled", true);
user_pref("browser.tabs.tabClipWidth", 83);
user_pref("security.insecure_connection_text.enabled", true);



// Smooth scrolling
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.min_line_scroll_amount", 30);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);



