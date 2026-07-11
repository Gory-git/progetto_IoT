var lang_num=0;

var lang_name=new Object();	
lang_name.en = 'English'
lang_name.zhcn = '简体中文'
lang_name.port = 'Português'
lang_name.italy = 'Italiano'

lang_num=0;
var user_lang_array=new Array();
user_lang_array[lang_num++] = new lang_entry(lang_name.en, 	0);
//user_lang_array[lang_num++] = new lang_entry(lang_name.italy,	3);
user_lang_array[lang_num++] = new lang_entry(lang_name.zhcn,	1);
//user_lang_array[lang_num++] = new lang_entry(lang_name.port,	2);

function lang_entry(name, value)
{
	this.name = name ;
	this.value = value ;
}

function QueryString(){
	var name,value,i;
	var str=location.href;
	var num=str.indexOf("?");
	if (num==-1)
	{
		return ;
	}
	str=str.substr(num+1);
	var arrtmp=str.split("&");
	for(i=0;i < arrtmp.length;i++){
		num=arrtmp[i].indexOf("=");
		if(num>0){
			name=arrtmp[i].substring(0,num);
			value=arrtmp[i].substr(num+1);
			this[name]=value;
		}
	}
}

/*function initLang()
{
	if (isNaN(SelLang)==false)
		user_lang = SelLang;
	switch (user_lang)
	{
		case 1:
			pg_login = ZhcnLogin;
			break;
		default:
			pg_login = EnLogin;
			break;
	}
	
}*/
