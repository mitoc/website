
var subMenus = ['activitiesMenu','rentalsMenu','infoMenu', 'toolsMenu', 'aboutMenu'];
var lastMenu;

function toggleSubMenu ( menuId ) {

    var i = 0;
    for ( i = 0 ; i < subMenus.length ; i++ ) {
	Element.hide ( subMenus[i] );
    }

    Effect.Appear ( menuId );
    lastMenu = menuId;
}

function loadContent ( url ) {
   
   var newUrl = "http://web.mit.edu/mitoc/www/new/index.shtml?loc=" + url + "&lastMenu=" + lastMenu;
   window.location.href = newUrl;
}

function loadBareContent ( url ) {
   var newUrl = url + "?lastMenu=" + lastMenu;
   window.location.href = newUrl;
}

function loadFromAjax ( url ) {
    var options = {asynchronous:true, method:'get'};
//    Element.hide ('contentHeader');
    new Ajax.Updater ('body', url, options );
//    Effect.Appear('body');

}

function onPageLoad () {

    var params = window.location.search.replace ("?loc=", "");
    var sign = params.search ("&");
    if ( sign > 0 ) {
	var location = params.substr (0, sign);
	if ( location != "" ){
	   loadFromAjax ( location );
        }

        var menu = params.substr (sign, params.length).replace ("&lastMenu=", "");
	if ( menu != "" && menu != "undefined" ) {
	    Element.show (menu);
 	    lastMenu = menu;
	}
    }
  
    Element.show ('body');
//Effect.Appear('body');

}

