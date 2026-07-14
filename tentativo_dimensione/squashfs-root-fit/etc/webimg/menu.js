// JavaScript Document

function url_entry(url, string) { 
	this.url = url ;
	this.string = string ;
}

function dw(str){document.write(str);}

var main_menu = new Array();
var sub_home = new Array();
var sub_inet = new Array();
var sub_wlan = new Array();
var sub_fire = new Array();
var sub_advset = new Array();
var sub_admin = new Array();
var sub_status = new Array();
var sub_help = new Array();
var menunum = 0;
var num=0;

//main_menu[num++] = new url_entry("home.htm", menu.bchome);
//main_menu[num++] = new url_entry("tcpiplan.htm", menu.tcpip);
main_menu[num++] = new url_entry("tcpipadv.htm", menu.tcpip);
main_menu[num++] = new url_entry("wlbasic.htm", menu.wireless);
if(wsopmode==1||wsopmode==6)
{
	main_menu[num++] = new url_entry("portfilter.htm", menu.firewall);
	main_menu[num++] = new url_entry("ddns.htm", menu.advance);
}
//main_menu[num++] = new url_entry("admin.htm", menu.admin);
main_menu[num++] = new url_entry("status.htm", menu.status);
menunum = num;

num=0;
sub_wlan[num++] = new url_entry("wlbasic.htm", menu.wlbasic);
sub_wlan[num++] = new url_entry("wlsecurity.htm", menu.wlsecurity);
sub_wlan[num++] = new url_entry("wladvanced.htm", menu.wladvanced);
sub_wlan[num++] = new url_entry("wlactrl.htm", menu.wlactrl);
sub_wlan[num++] = new url_entry("wlsch.htm", menu.wlsch);
sub_wlan[num++] = new url_entry("wlwds.htm", menu.wlwds); 
sub_wlan[num++] = new url_entry("wlwps.htm", menu.wlwps);

num=0;

//sub_inet[num++] = new url_entry("tcpiplan.htm", menu.tcpiplan);
	//sub_inet[num++] = new url_entry("tcpipwan.htm", menu.tcpipwan);
if(wsopmode==1||wsopmode==6)
sub_inet[num++] = new url_entry("tcpipadv.htm", menu.tcpip_adv);
sub_inet[num++] = new url_entry("tcpip_staticdhcp.htm", inet.static_h2);
sub_inet[num++] = new url_entry("dhcptbl.htm", inet.client_h2);

num=0;
sub_fire[num++] = new url_entry("portfilter.htm", menu.portfilter);
sub_fire[num++] = new url_entry("ipfilter.htm", menu.ipfilter);
sub_fire[num++] = new url_entry("macfilter.htm", menu.macfilter);
sub_fire[num++] = new url_entry("urlfilter.htm", menu.urlfilter);
sub_fire[num++] = new url_entry("portfw.htm", menu.portfw);
sub_fire[num++] = new url_entry("dmz.htm", menu.dmz);
//sub_fire[num++] = new url_entry("dos.htm", menu.dos);

num=0;
sub_advset[num++]= new url_entry("ddns.htm", menu.ddns);
//sub_advset[num++]= new url_entry("vlan.htm", menu.vlan);
sub_advset[num++]= new url_entry("qos.htm", menu.qos);

num=0;
/*sub_admin[num++] = new url_entry("admin.htm", menu.admin);
sub_admin[num++] = new url_entry("ntp.htm", menu.tz);
sub_admin[num++] = new url_entry("syslog.htm", menu.syslog);
sub_admin[num++] = new url_entry("upload.htm", menu.upgrade);
sub_admin[num++] = new url_entry("saveconf.htm", menu.saveconf);
*/
num=0;
sub_help[num++] = new url_entry("http://www.wavlink.com/eshop/article_cat.php?id=8", menu.support);
//sub_help[num++] = new url_entry("http://www.wavlink.com", menu.compurl);
