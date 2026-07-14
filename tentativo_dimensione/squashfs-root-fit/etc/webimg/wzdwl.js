var wl_ssid;
var wl_chan=0;
var wl_method = 0; //None
var wl_authType="auto";
var wl_length = 1; //WEP64
var wl_format = 2; //Hex
var wl_key = "0000000000";
var wl_wpaAuth = "psk";
var wl_pskFormat = "0";
var wl_ciphersuite;
var wl_wpa2ciphersuite;
var wl_pskValue;
var wl_use1x="OFF";

function wzd_show_authentication(id)
{
	var val=get_by_id(id).value;
	show_div(false, "div_wpa");
	if (val==0)
	{}
	else if (val==2||val==4||val==6)
	{
		show_div(true, "div_wpa");
	}
}


function SetWlValue()
{
	get_by_id("wlan_ssid").value = wl_ssid;
	get_by_id("wlan_channel").value = wl_chan;
	get_by_id("wlan_security_mode").value=wl_method;
	get_by_id("wlan_ieee8021x").value = wl_use1x;
	if (wl_method==ws_w_wep)
	{
		get_by_id("wlan_authtype").value=wl_authType;
		get_by_id("length").value=wl_length;
		get_by_id("format").value=wl_format;
		get_by_id("key").value=wl_key;
	}
	else if (wl_method==ws_w_wpa||wl_method==ws_w_wpa2||wl_method==ws_w_mix)
	{
		get_by_id("wlan_wpaAuth").value=wl_wpaAuth;
		get_by_id("wlan_wpa_psk_fmt").value=wl_pskFormat;
		if (wl_method==ws_w_wpa)
		{
			get_by_id("wlan_wpa_cs").value = wl_ciphersuite;
		}
		else if (wl_method==ws_w_wpa2)
		{
			get_by_id("wlan_wpa2_cs").value = wl_wpa2ciphersuite;
		}
		else if (wl_method==ws_w_mix)
		{
			get_by_id("wlan_wpa_cs").value = wl_ciphersuite;
			get_by_id("wlan_wpa2_cs").value = wl_wpa2ciphersuite;
		}
		get_by_id("wlan_wpa_psk").value = wl_pskValue;
	}
}

function CheckWpaKey(id)
{
	var error=true;
	var val=get_by_id(id);
	if ((8<=val.value.length && val.value.length<=63) && (check_space(val)==true))
	{
		wl_pskFormat="0"; //Passphrase
		error=false;
	}
	else if (val.value.length==64&&checkHex(val.value)==true)
	{
		wl_pskFormat="1"; //HEX (64 characters)
		error=false;
	}
	
	if (error)
	{
		alert(home.alert1);
		val.value="";
		val.focus();
		return false;
	}
	wl_pskValue = val.value;
	return true;
}

function CheckWepKey(id)
{
	var error=true;
	var val=get_by_id(id);
	if (val.value.length==5||val.value.length==10)
	{
		wl_length=1;//wep64
		if (val.value.length==5 && checkStr(val.value)==true)
		{
			wl_format = 1;
			error=false;
		}
		else if (val.value.length==10 && checkHex(val.value)==true)
		{
			wl_format = 2;
			error=false;
		}
	}
	else if (val.value.length==13||val.value.length==26)
	{
		wl_length=2;//wep128
		if (val.value.length==13 && checkStr(val.value)==true)
		{
			wl_format = 1;
			error=false;
		}
		else if (val.value.length==26 && checkHex(val.value)==true)
		{
			wl_format = 2;
			error=false;
		}
	}
	
	if (error)
	{
		alert(wlan.se_msg6);
		val.value="";
		val.focus();
		return false;
	}
	wl_key = val.value; //key
}

function initApValue()
{
	if (wl_method==ws_w_wep)
	{}
	else if (wl_method==ws_w_wpa||wl_method==ws_w_wpa2||wl_method==ws_w_mix)
	{
		if (wl_method==ws_w_wpa)
		{
			wl_ciphersuite = "aes";
		}
		else if (wl_method==ws_w_wpa2)
		{
			wl_wpa2ciphersuite = "aes";
		}
		else if (wl_method==ws_w_mix)
		{
			wl_ciphersuite = "aes/tkip";
			wl_wpa2ciphersuite = "aes/tkip";
		}
	}
	SetWlValue();
}
