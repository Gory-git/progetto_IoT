////////////////////////////////////////////////////////////////////////////////
var sel_ap_id = -1;
var t_line=0;
function key_style(size, maxlength)
{
	get_by_id("keyValue").size = size;
	get_by_id("keyValue").maxLength = maxlength;
}

function sel_Ap(sel)
{
	var str = strList[sel].split("|"); 
	sel_ap_id=sel;
	show_div(true, "div_cli");
	show_div(false, "cli_list");
	
	wl_ssid = str[1];//ssid
	get_by_id("ap_wSsid").value=str[1];
	wl_chan = str[6];
	
	if (str[4]!="NO")
	{
		get_by_id("keyValue").value="";
		get_by_id("u_ms").innerHTML="";
		show_div(true, "div_encry");
		if (str[4]=="WEP")
		{
			key_style(26, 26);
			wl_method=ws_w_wep;
		}
		else if (str[4].indexOf("WPA2") != -1)
		{
			key_style(26, 64);
			wl_method=ws_w_wpa2;
		}
		else if (str[4].indexOf("WPA") != -1)
		{
			key_style(26, 64);
			wl_method=ws_w_wpa;
		}
	}
	else
	{
		wl_method=ws_w_no;
		show_div(false, "div_encry");
	}
	
	if (wl_method==ws_w_wpa2) //wpa2_tkip_aes
	{
		if (str[8].indexOf("aes") != -1)
			wl_wpa2ciphersuite = "aes";
		else if (str[8].indexOf("tkip") != -1)
			wl_wpa2ciphersuite = "tkip";
	}
	else if (wl_method==ws_w_wpa) //wpa_tkip_aes
	{
		if (str[7].indexOf("aes") != -1)
			wl_ciphersuite = "aes";
		else if (str[7].indexOf("tkip") != -1)
			wl_ciphersuite = "tkip";
	}
}

function do_cli_del()
{
	if (t_line>0)
	{
		for (i=t_line;i>=1;i--)
			document.getElementById('cli_list').deleteRow(i);
	}
}

function do_cli_list()
{
	strList = resText.split(";");
	do_cli_del();
	
	for (i=0;i<strList.length;i++)
	{
		if (strList[i]!="")
		{
			var val = strList[i].split("|");
			var x=document.getElementById("cli_list").insertRow(i+1);
			t_line =i+1;
			for (j=1;j<=6;j++)
			{
				var y = x.insertCell(j-1);
				y.align="center";
				if (j==6)
					y.innerHTML = "<input type=\"button\" class=\"button1 accentColor\" name=\"select\" id=\"select_"+ i +"\" value=\"" +share.select+ "\" onClick=\"sel_Ap("+ val[0] +")\">";
				else if (j==5)
				{
					var d= (parseInt(val[j])*100)/40;
					if (d>=100)
						d=100;
					y.innerHTML =d+"%";
				}
				else
					y.innerHTML = val[j];
			}
		}
	}
}

var C_count=0;
var rp_1_btn=["cli_refresh", "next"];

function Cli_List()
{
	if (C_count>20)
	{
		alert(wlan.bs_msg1);
		C_count=0;
		CtlDisabled(false, rp_1_btn);
		show_div(false, "cli_scan");
		return 0;
	}
	if (resText==""){
		setTimeout("Cli_List()", 500);
		C_count++;
	}
	else
	{
		if (resText=="0")
			alert(wlan.bs_msg1);
		else
			do_cli_list();
		resText="";
		C_count=0;
		CtlDisabled(false, rp_1_btn);
		show_div(false, "cli_scan");
	}
}

function Loadding(){  
	bar= bar+1;
	amount =amount + line;
	get_by_id("chart").value=amount;
	if (bar<load_time){
		setTimeout("Loadding();",load_step);
		if (bar%100==0)
		{
			amount="|";
		}
	}  else  {
		
	}  
} 
function Cli_Refresh()
{
	CtlDisabled(true, rp_1_btn);
	show_div(true, "cli_scan");
	show_div(false, "div_cli");
	show_div(true, "cli_list");
	amount ="|";bar=0;
	Loadding();
	showHint("live.wlan.htm");
	Cli_List();
}

var bar = 0;  var line = "|";  var amount ="|";
var load_time=400;  var load_step=50;
var c_id = "";


