function elementContains(elmOuter, elmInner)
{
	while (elmInner && elmInner != elmOuter)
	{
		elmInner = elmInner.parentNode;
	}
	if (elmInner == elmOuter)
	{
		return true;
	}
	return false;
}

function getPageXY(elm)
{
	var point = { x: 0, y: 0 };
	while (elm)
	{
		point.x += elm.offsetLeft;
		point.y += elm.offsetTop;
		elm = elm.offsetParent;
	}
	return point;
}

function setPageXY(elm, x, y)
{
	var parentXY = {x: 0, y: 0 };

	if (elm.offsetParent)
	{
		parentXY = getPageXY(elm.offsetParent);
	}

	elm.style.left = (x - parentXY.x) + 'px';
	elm.style.top  = (y - parentXY.y) + 'px';
}

function browser_too_old()
{
	// if the browser doesn't even support
	// document.getElementById, give up now.
	if (!document.getElementById)
	{
		return true;
	}

	// check for downlevel browsers
	// Opera 6, IE 5/Mac are not supported
	var version;
	var offset;

	offset = navigator.userAgent.indexOf('Opera');
	if (offset != -1)
	{
		version = parseInt('0' + navigator.userAgent.substr(offset + 6), 10);
		if (version < 7)
		{
			return true;
		}
	}

	offset = navigator.userAgent.indexOf('MSIE');
	if (offset != -1)
	{
		if (navigator.userAgent.indexOf('Mac') != -1)
		{
			return true;
		}
	}
	return false;
}

function attach_menu(element)
{
	var parent;
	// attach hover to parent li
	parent = element.parentNode;
	parent.onmouseover = function (e)
	{
		var i;
		var child;
		var point;

		// stop the pure css hover effect
		//          this.style.paddingBottom = '0';

		for (i = 0; i < this.childNodes.length; i++)
		{
			child = this.childNodes[i];
			if (child.nodeName == 'UL')
			{
				point = getPageXY(this);
				//  setPageXY(child, point.x+40, point.y + this.offsetHeight);
				// setPageXY(child, point.x+(this.offsetWidth/2), point.y);
				child.style.visibility = 'visible';
				child.style.display = 'block';
			}
		}
		return false;
	};
	parent.onmouseout = function (e)
	{
		var relatedTarget = null;
		if (e)
		{
			relatedTarget = e.relatedTarget;
			// work around Gecko Linux only bug where related target is null
			// when clicking on menu links or when right clicking and moving
			// into a context menu.
			if (navigator.product == 'Gecko' && navigator.platform.indexOf('Linux') != -1 && !relatedTarget)
			{
				relatedTarget = e.originalTarget;
			}
		}
		else if (window.event)
		{
			relatedTarget = window.event.toElement;
		}

		if (elementContains(this, relatedTarget))
		{
			return false;
		}

		var i;
		var child;
		for (i = 0; i < this.childNodes.length; i++)
		{
			child = this.childNodes[i];
			if (child.nodeName == 'UL')
			{
				child.style.visibility = 'hidden';
				child.style.display = 'none';
			}
		}
		return false;
	};

}

function cssjsmenur(menudiv)
{
	var i;
	var j;
	var node;
	var child;
	var parent;
	// top menu items
	var topmenu = new Array();
	for (i = 0; i < menudiv.childNodes.length; i++)
	{
		node = menudiv.childNodes[i];
		if (node.nodeName == 'LI')
		{
			topmenu[topmenu.length] = node;
		}
	}

	for (i = 0; i < topmenu.length; i++)
	{
		node = topmenu[i];
		for (j = 0; j < node.childNodes.length; j++)
		{
			child = node.childNodes[j];
			if (child.nodeName == 'UL')
			{
				attach_menu(child);
				cssjsmenur(child);
			}
		}
	}
}

function cssjsmenu(menuid)
{

	if(browser_too_old())
		return;

	// top menu - ul
	var menudiv = document.getElementById(menuid);
	cssjsmenur(menudiv)

	return true;
}

