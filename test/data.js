var data = {
    'log': {
        'version':'1.1',
        'comment': null,
        'creator':{
            'name':'Firebug',
            'version':'1.5X.0b8'
        },

        'browser': {
            'name':'Firefox',
            'version':'3.6b6pre'
        },

        'pages':[{
            'startedDateTime':'2010-01-02T13:51:01.186Z',
            'id':'page_62143',
            'title':'Google',
            'comment': null,
            'pageTimings':{
                'onContentLoad':90,
                'onLoad':245
            }
        }],

        'entries':[{
            'pageref':'page_62143',
            'startedDateTime':'2010-01-02T13:51:01.186Z',
            'time':63,
            'request':{
                'method':'GET',
                'url':'http://www.google.cz/',
                'httpVersion':'HTTP/1.1',
                'queryString':[],
                'headersSize':632,
                'bodySize':-1,
                'cookies':[{
                    'name':'PREF',
                    'value':'ID',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                },{
                    'name':'NID',
                    'value':'29',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                }],

                'headers':[{
                    'name':'Host',
                    'value':'www.google.cz'
                },{
                    'name':'User-Agent',
                    'value':'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2b6pre) Gecko/20091230 Namoroka/3.6b6pre (.NET CLR 3.5.30729)'
                },{
                    'name':'Accept',
                    'value':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                },{
                    'name':'Accept-Language',
                    'value':'en-us,en;q=0.5'
                },{
                    'name':'Accept-Encoding',
                    'value':'gzip,deflate'
                },{
                    'name':'Accept-Charset',
                    'value':'ISO-8859-1,utf-8;q=0.7,*;q=0.7'
                },{
                    'name':'Keep-Alive',
                    'value':'115'
                },{
                    'name':'Connection',
                    'value':'keep-alive'
                },{
                    'name':'Cookie',
                    'value':'PREF=ID=580ec4c5a3534337:U=37a8fcc41ff49f78:TM=1260796678:LM=1260796682:S=9BgbomVM6pcnfah0; NID=29=OHyg2zMZl4IpG8C4a-Z5itM3gCXOuBPogGpTPVFPNsdpmIHJWX78ymRL_gqptvhr_IQrP319GQ1fxlKUsqaIokpxasPIIDq5ijatDmYiyamnCfJz8rXyNvt5GPjCJp2I'
                }]
            },
            'response':{
                'status':200,
                'statusText':'OK',
                'httpVersion':'HTTP/1.1',
                'redirectURL':'',
                'headersSize':224,
                'bodySize':3694,
                'content':{
                    'size':8564,
                    'mimeType':'text/html',
                    'text':"<!doctype html><html onmousemove=\'google&&google.fade&&google.fade()\'><head><meta http-equiv=\'content-type\' content=\'text/html; charset=UTF-8\'><title>Google</title><script>window.google={kEI:\'Sk8_S5PhGNT4_AbC2-HhBQ\',kEXPI:\'17259,18167,23129\',kCSI:{e:\'17259,18167,23129\',ei:\'Sk8_S5PhGNT4_AbC2-HhBQ\'},kHL:\'cs\',time:function(){return(new Date).getTime()},log:function(b,d,c){var a=new Image,e=google,g=e.lc,f=e.li;a.onerror=(a.onload=(a.onabort=function(){delete g[f]}));g[f]=a;c=c||\'/gen_204?atyp=i&ct=\'+b+\'&cad=\'+d+\'&zx=\'+google.time();a.src=c;e.li=f+1},lc:[],li:0};\u000awindow.google.sn=\'webhp\';window.google.timers={load:{t:{start:(new Date).getTime()}}};try{}catch(u){}window.google.jsrt_kill=1;\u000avar _gjwl=location;function _gjuc(){var e=_gjwl.href.indexOf(\'#\');if(e>=0){var a=_gjwl.href.substring(e);if(a.indexOf(\'&q=\')>0||a.indexOf(\'#q=\')>=0){a=a.substring(1);if(a.indexOf(\'#\')==-1){for(var c=0;c<a.length;){var d=c;if(a.charAt(d)==\'&\')++d;var b=a.indexOf(\'&\',d);if(b==-1)b=a.length;var f=a.substring(d,b);if(f.indexOf(\'fp=\')==0){a=a.substring(0,c)+a.substring(b,a.length);b=c}else if(f==\'cad=h\')return 0;c=b}_gjwl.href=\'/search?\'+a+\'&cad=h\';return 1}}}return 0}function _gjp(){!(window._gjwl.hash&&\u000awindow._gjuc())&&setTimeout(_gjp,500)};\u000awindow._gjp && _gjp()</script><style>td{line-height:.8em;}.gac_m td{line-height:17px;}form{margin-bottom:20px;}body,td,a,p,.h{font-family:arial,sans-serif}.h{color:#36c;font-size:20px}.q{color:#00c}.ts td{padding:0}.ts{border-collapse:collapse}em{font-weight:bold;font-style:normal}.lst{font:17px arial,sans-serif;margin-bottom:.2em;vertical-align:bottom;}input{font-family:inherit}.lsb,.gac_sb{font-size:15px;height:1.85em!important;margin:.2em;}#fctr,#ghead,#pmocntr,#sbl,#tba,#tbe,.fade{opacity:0;}#fctr,#ghead,#pmocntr,#sbl,#tba,#tbe,.fade{background:#fff;}#gbar{float:left;height:22px}.gbh,.gbd{border-top:1px solid #c9d7f1;font-size:1px}.gbh{height:0;position:absolute;top:24px;width:100%}#gbs,.gbm{background:#fff;left:0;position:absolute;text-align:left;visibility:hidden;z-index:1000}.gbm{border:1px solid;border-color:#c9d7f1 #36c #36c #a2bae7;z-index:1001}#guser{padding-bottom:7px !important;text-align:right}#gbar,#guser{font-size:13px;padding-top:1px !important}.gb1,.gb3,.gb3i,.gb3f{zoom:1;margin-right:.5em}.gb2,.gb2i,.gb2f{display:block;padding:.2em .5em}a.gb1,a.gb2,a.gb3,a.gb4{color:#00c !important}.gb2,.gb2i,.gb2f,.gb3,.gb3i,.gb3f{text-decoration:none}a.gb2:hover{background:#36c;color:#fff !important}</style><noscript><style>#fctr,#ghead,#pmocntr,#sbl,#tba,#tbe,.fade{opacity:1;}</style></noscript><script>google.y={};google.x=function(e,g){google.y[e.id]=[e,g];return false};window.gbar={qs:function(){},tg:function(e){var o={id:'gbar'};for(i in e)o[i]=e[i];google.x(o,function(){gbar.tg(o)})}};</script></head><body bgcolor=#ffffff text=#000000 link=#0000cc vlink=#551a8b alink=#ff0000 onload=\'document.f.q.focus();if(document.images)new Image().src='/images/nav_logo7.png'\' topmargin=3 marginheight=3><textarea id=csi style=display:none></textarea><div id=ghead><div id=gbar><nobr><b class=gb1>Web</b> <a href=\'http://images.google.cz/imghp?hl=cs&tab=wi\' onclick=gbar.qs(this) class=gb1>ObrÃ¡zky</a> <a href=\'http://video.google.cz/?hl=cs&tab=wv\' onclick=gbar.qs(this) class=gb1>Videa</a> <a href=\'http://maps.google.cz/maps?hl=cs&tab=wl\' onclick=gbar.qs(this) class=gb1>Mapy</a> <a href=\'http://news.google.cz/nwshp?hl=cs&tab=wn\' onclick=gbar.qs(this) class=gb1>ZprÃ¡vy</a> <a href=\'http://translate.google.cz/?hl=cs&tab=wT\' onclick=gbar.qs(this) class=gb1>PÅ™ekladaÄ</a> <a href=\'http://mail.google.com/mail/?hl=cs&tab=wm\' class=gb1>Gmail</a> <a href=\'http://www.google.cz/intl/cs/options/\' onclick=\'this.blur();gbar.tg(event);return !1\' aria-haspopup=true class=gb3><u>dalÅ¡Ã­</u> <small>&#9660;</small></a><div class=gbm id=gbi><a href=\'http://blogsearch.google.cz/?hl=cs&tab=wb\' onclick=gbar.qs(this) class=gb2>Blogy</a> <a href=\'http://www.youtube.com/?hl=cs&tab=w1&gl=CZ\' onclick=gbar.qs(this) class=gb2>YouTube</a> <a href=\'http://www.google.com/calendar/render?hl=cs&tab=wc\' class=gb2>KalendÃ¡Å™</a> <a href=\'http://picasaweb.google.cz/home?hl=cs&tab=wq\' onclick=gbar.qs(this) class=gb2>Fotografie</a> <a href=\'http://docs.google.com/?hl=cs&tab=wo\' class=gb2>Dokumenty</a> <a href=\'http://www.google.cz/reader/view/?hl=cs&tab=wy\' class=gb2>Reader</a> <a href=\'http://sites.google.com/?hl=cs&tab=w3\' class=gb2>Weby</a> <a href=\'http://groups.google.cz/grphp?hl=cs&tab=wg\' onclick=gbar.qs(this) class=gb2>Skupiny</a> <div class=gb2><div class=gbd></div></div><a href=\'http://www.google.cz/intl/cs/options/\' class=gb2>dÃ¡le takÃ© &raquo;</a> </div></nobr></div><div id=guser width=100%><nobr><a href=\'/url?sa=p&pref=ig&pval=3&q=http://www.google.cz/ig%3Fhl%3Dcs%26source%3Diglk&usg=AFQjCNEjIy3HcIoHHp-ysNPPMy6WitPxSg\' class=gb4>iGoogle</a> | <a href=\'/preferences?hl=cs\' class=gb4>NastavenÃ­ vyhledÃ¡vÃ¡nÃ­</a> | <a href=\'https://www.google.com/accounts/Login?hl=cs&continue=http://www.google.cz/\' class=gb4>PÅ™ihlÃ¡sit se</a></nobr></div><div class=gbh style=left:0></div><div class=gbh style=right:0></div></div> <center><br clear=all id=lgpd><div align=left style=\'background:url(/intl/en_com/images/logo_plain.png) no-repeat;height:110px;width:276px\' title=\'Google\' id=logo onload=\'window.lol&&lol()\'><div nowrap style=\'color:#666;font-size:16px;font-weight:bold;left:208px;position:relative;top:78px\'>ÄŒeskÃ¡ republika</div></div><br><form action=\'/search\' name=f><table cellpadding=0 cellspacing=0><tr valign=top><td width=25%>&nbsp;</td><td align=center nowrap><input name=hl type=hidden value=cs><input name=source type=hidden value=hp><input autocomplete=\'off\' onblur=\'google&&google.fade&&google.fade()\' maxlength=2048 name=q size=55 class=lst title=\'Vyhledat Googlem\' value=\'\'><br><input name=btnG type=submit value=\'Vyhledat Googlem\' class=lsb><input name=btnI type=submit value=\'ZkusÃ­m Å¡tÄ›stÃ­\' class=lsb></td><td nowrap width=25% align=left id=sbl><font size=-2>&nbsp;&nbsp;<a href=/advanced_search?hl=cs>RozÅ¡Ã­Å™enÃ© vyhledÃ¡vÃ¡nÃ­</a><br>&nbsp;&nbsp;<a href=/language_tools?hl=cs>JazykovÃ© nÃ¡stroje</a></font></td></tr><tr><td align=center colspan=3><font size=-1><span style=\'text-align:left\' class=fade><input id=all type=radio name=lr value=\'\' checked><label for=all> Prohledat Web </label> <input id=il type=radio name=lr value=\'lang_cs\'><label for=il> StrÃ¡nky pouze Äesky </label> </span></font></td></tr></table></form><br><span id=footer><center id=fctr><br><font size=-1><a href=\'/intl/cs/ads/\'>Inzerujte s Googlem</a> - <a href=\'/intl/cs/about.html\'>VÅ¡e o Google</a> - <a href=\'http://www.google.com/ncr\'>Google.com in English</a></font><p><font size=-2>&copy;2010 - <a href=\'/intl/cs/privacy.html\'>OsobnÃ­ Ãºdaje</a></font></p></center></span> <div id=xjsd></div><div id=xjsi><script>if(google.y)google.y.first=[];if(google.y)google.y.first=[];google.dstr=[];google.rein=[];window.setTimeout(function(){var a=document.createElement(\'script\');a.src=\'/extern_js/f/CgJjcxICY3orMAo4QUAdLCswDjgKLCswFjgULCswFzgELCswGDgELCswGTgNLCswJTjJiAEsKzAmOAgsKzAnOAIsKzA8OAEsKzBFOAAs/n26cL0r9CnM.js\';(document.getElementById(\'xjsd\')||document.body).appendChild(a);if(google.timers&&google.timers.load.t)google.timers.load.t.xjsls=(new Date).getTime();},0);\u000a;google.y.first.push(function(){google.ac.b=true;google.ac.i(document.f,document.f.q,'','');(function(){\u000avar a=window.google.f={};a.f=1;a.s=1;a.a=(new Date).getTime();function m(b,g,e,f){var d,c=[],i=[];for(var h=0,k;k=b[h++];){var l=document.getElementById(k);if(l)c.push(l)}for(var h=0,j;j=g[h++];){var o=n(j[0],j[1]);while(d=o.pop())c.push(d)}while(d=c.pop())i.push([d,\'opacity\',e,f,0,\'\']);return i}function n(b,\u000ag){var e=[];for(var f=document.getElementsByTagName(b),d=0,c=f[d];c=f[d++];)if(c.className==g)e.push(c);return e}google.fade=function(b){b=b||window.event;var g=1;if(b&&b.type==\'mousemove\'){var e=b.clientX,f=b.clientY;g=a.x||a.y?Math.abs(a.x-e)+Math.abs(a.y-f):0;a.x=e;a.y=f}var d=(new Date).getTime(),c=d-a.a;if(google.fx&&g&&c>602)if(a.f){a.f=0;var i=[\'fctr\',\'ghead\',\u000a\'pmocntr\',\'sbl\',\'tba\',\'tbe\'],h=[[\'span\',\'fade\'],[\'div\',\'gbh\']];google.fx.animate(602,m(i,h,0,1))}};\u000a})();\u000a});if(google.j&&google.j.en&&google.j.xi){window.setTimeout(google.j.xi,0);google.fade=null;}</script></div><script>(function(){\u000afunction a(){google.timers.load.t.ol=(new Date).getTime();google.report&&google.timers.load.t.xjs&&google.report(google.timers.load,google.kCSI)}if(window.addEventListener)window.addEventListener(\'load\',a,false);else if(window.attachEvent)window.attachEvent(\'onload\',a);google.timers.load.t.prt=(new Date).getTime();\u000a})();\u000a</script>"
                },
                'cookies':[],
                'headers':[{
                    'name':'Date',
                    'value':'Sat, 02 Jan 2010 13:51:06 GMT'
                },{
                    'name':'Expires',
                    'value':'-1'
                },{
                    'name':'Cache-Control',
                    'value':'private, max-age=0'
                },{
                    'name':'Content-Type',
                    'value':'text/html; charset=UTF-8'
                },{
                    'name':'Content-Encoding',
                    'value':'gzip'
                },{
                    'name':'Server',
                    'value':'gws'
                },{
                    'name':'Content-Length',
                    'value':'3694'
                },{
                    'name':'X-XSS-Protection',
                    'value':'0'
                }]
            },
            'cache':{},
            'timings':{
                'dns':0,
                'connect':0,
                'blocked':0,
                'send':0,
                'wait':63,
                'receive':0
            }
        },{
            'pageref':'page_62143',
            'startedDateTime':'2010-01-02T13:51:01.280Z',
            'time':62,
            'request':{
                'method':'GET',
                'url':'http://www.google.cz/intl/en_com/images/logo_plain.png',
                'httpVersion':'HTTP/1.1',
                'queryString':[],
                'headersSize':667,
                'bodySize':-1,
                'cookies':[{
                    'name':'PREF',
                    'value':'ID',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                },{
                    'name':'NID',
                    'value':'29',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                }],

                'headers':[{
                    'name':'Host',
                    'value':'www.google.cz'
                },{
                    'name':'User-Agent',
                    'value':'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2b6pre) Gecko/20091230 Namoroka/3.6b6pre (.NET CLR 3.5.30729)'
                },{
                    'name':'Accept',
                    'value':'image/png,image/*;q=0.8,*/*;q=0.5'
                },{
                    'name':'Accept-Language',
                    'value':'en-us,en;q=0.5'
                },{
                    'name':'Accept-Encoding',
                    'value':'gzip,deflate'
                },{
                    'name':'Accept-Charset',
                    'value':'ISO-8859-1,utf-8;q=0.7,*;q=0.7'
                },{
                    'name':'Keep-Alive',
                    'value':'115'
                },{
                    'name':'Connection',
                    'value':'keep-alive'
                },{
                    'name':'Referer',
                    'value':'http://www.google.cz/'
                },{
                    'name':'Cookie',
                    'value':'PREF=ID=580ec4c5a3534337:U=37a8fcc41ff49f78:TM=1260796678:LM=1260796682:S=9BgbomVM6pcnfah0; NID=29=OHyg2zMZl4IpG8C4a-Z5itM3gCXOuBPogGpTPVFPNsdpmIHJWX78ymRL_gqptvhr_IQrP319GQ1fxlKUsqaIokpxasPIIDq5ijatDmYiyamnCfJz8rXyNvt5GPjCJp2I'
                }]
            },
            'response':{
                'status':200,
                'statusText':'OK',
                'httpVersion':'HTTP/1.1',
                'redirectURL':'',
                'headersSize':272,
                'bodySize':7582,
                'content':{
                    'size':7582,
                    'mimeType':'image/png'
                },
                'cookies':[],
                'headers':[{
                    'name':'Content-Type',
                    'value':'image/png'
                },{
                    'name':'Last-Modified',
                    'value':'Mon, 17 Mar 2008 22:38:58 GMT'
                },{
                    'name':'Date',
                    'value':'Sat, 02 Jan 2010 13:51:05 GMT'
                },{
                    'name':'Expires',
                    'value':'Sun, 02 Jan 2011 13:51:05 GMT'
                },{
                    'name':'Server',
                    'value':'gws'
                },{
                    'name':'Content-Length',
                    'value':'7582'
                },{
                    'name':'Cache-Control',
                    'value':'public, max-age=31536000'
                },{
                    'name':'Age',
                    'value':'1'
                },{
                    'name':'X-XSS-Protection',
                    'value':'0'
                }]
            },
            'cache':{},
            'timings':{
                'dns':0,
                'connect':0,
                'blocked':0,
                'send':0,
                'wait':31,
                'receive':31
            }
        },{
            'pageref':'page_62143',
            'startedDateTime':'2010-01-02T13:51:01.296Z',
            'time':78,
            'request':{
                'method':'GET',
                'url':'http://www.google.cz/extern_js/f/CgJjcxICY3orMAo4QUAdLCswDjgKLCswFjgULCswFzgELCswGDgELCswGTgNLCswJTjJiAEsKzAmOAgsKzAnOAIsKzA8OAEsKzBFOAAs/n26cL0r9CnM.js',
                'httpVersion':'HTTP/1.1',
                'queryString':[],
                'headersSize':735,
                'bodySize':-1,
                'cookies':[{
                    'name':'PREF',
                    'value':'ID',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                },{
                    'name':'NID',
                    'value':'29',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                }],

                'headers':[{
                    'name':'Host',
                    'value':'www.google.cz'
                },{
                    'name':'User-Agent',
                    'value':'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2b6pre) Gecko/20091230 Namoroka/3.6b6pre (.NET CLR 3.5.30729)'
                },{
                    'name':'Accept',
                    'value':'*/*'
                },{
                    'name':'Accept-Language',
                    'value':'en-us,en;q=0.5'
                },{
                    'name':'Accept-Encoding',
                    'value':'gzip,deflate'
                },{
                    'name':'Accept-Charset',
                    'value':'ISO-8859-1,utf-8;q=0.7,*;q=0.7'
                },{
                    'name':'Keep-Alive',
                    'value':'115'
                },{
                    'name':'Connection',
                    'value':'keep-alive'
                },{
                    'name':'Referer',
                    'value':'http://www.google.cz/'
                },{
                    'name':'Cookie',
                    'value':'PREF=ID=580ec4c5a3534337:U=37a8fcc41ff49f78:TM=1260796678:LM=1260796682:S=9BgbomVM6pcnfah0; NID=29=OHyg2zMZl4IpG8C4a-Z5itM3gCXOuBPogGpTPVFPNsdpmIHJWX78ymRL_gqptvhr_IQrP319GQ1fxlKUsqaIokpxasPIIDq5ijatDmYiyamnCfJz8rXyNvt5GPjCJp2I'
                }]
            },
            'response':{
                'status':200,
                'statusText':'OK',
                'httpVersion':'HTTP/1.1',
                'redirectURL':'',
                'headersSize':306,
                'bodySize':8646,
                'content':{
                    'size':22832,
                    'mimeType':'text/javascript',
                    'text':"(function(){\u000aif(!google.nocsixjs&&google.timers&&google.timers.load.t)google.timers.load.t.xjses=(new Date).getTime();\u000a})();\u000a(function(){\u000agoogle.isOpera=false;google.isIE=false;google.isSafari=false;\u000agoogle.xhr=function(){var a=null;try{a=new XMLHttpRequest}catch(d){}return a};\u000agoogle.getComputedStyle=function(a,d,c){var b=c?\'\':0;var e=document.defaultView&&document.defaultView.getComputedStyle(a,\'\');b=e.getPropertyValue(d);b=c?b:parseInt(b,10);return b};google.getHeight=function(a){return google.getComputedStyle(a,\'height\')};google.getWidth=function(a){return google.getComputedStyle(a,\'width\')};google.getPageOffsetTop=function(a){return a.offsetTop+(a.offsetParent?google.getPageOffsetTop(a.offsetParent):0)};\u000agoogle.getPageOffsetLeft=function(a){return a.offsetLeft+(a.offsetParent?google.getPageOffsetLeft(a.offsetParent):0)};google.getPageOffsetStart=function(a){return google.getPageOffsetLeft(a)};google.getColor=function(a){return google.getComputedStyle(a,\'color\',true)};google.rhs=function(){};var f,h=location;\u000agoogle.nav=function(a,d){try{var c=location.protocol+\'//\'+location.host;if((new RegExp(\'^(\'+c+\')?/url\\\\?.*&rct=j(&|$)\')).test(a))if(d){google.r=1;d.location.replace(a)}else{if(!f){f=document.createElement(\'iframe\');f.style.display=\'none\';google.append(f)}google.r=1;f.src=a}else h.href=a}catch(b){h.href=a}};google.append=function(a){return(document.getElementById(\'xjsc\')||document.body).appendChild(a)};google.bind=function(a,d,c){a.addEventListener(d,c,false);};\u000a})();\u000a(function(){\u000avar c=window,f=Object,h=google,i=\'push\',j=\'length\',k=\'propertyIsEnumerable\',l=\'prototype\',m=\'call\';\u000afunction n(a){var b=typeof a;if(b==\'object\')if(a){if(a instanceof Array||!(a instanceof f)&&f[l].toString[m](a)==\'[object Array]\'||typeof a[j]==\'number\'&&typeof a.splice!=\'undefined\'&&typeof a[k]!=\'undefined\'&&!a[k](\'splice\'))return\'array\';if(!(a instanceof f)&&(f[l].toString[m](a)==\'[object Function]\'||typeof a[m]!=\'undefined\'&&typeof a[k]!=\'undefined\'&&!a[k](\'call\')))return\'function\'}else return\'null\';else if(b==\'function\'&&typeof a[m]==\'undefined\')return\'object\';return b}\u000afunction o(a){return(new p).serialize(a)}function p(){}p[l].serialize=function(a){var b=[];this.a(a,b);return b.join(\'\')};p[l].a=function(a,b){switch(typeof a){case \'string\':this.b(a,b);break;case \'number\':this.d(a,b);break;case \'boolean\':b[i](a);break;case \'undefined\':b[i](\'null\');break;case \'object\':if(a==null){b[i](\'null\');break}if(n(a)==\'array\'){this.c(a,b);break}this.e(a,b);break;case \'function\':break;default:throw Error(\'Unknown type: \'+typeof a);}};\u000avar q={'\'':'\\\\\'',\'\\\\\':\'\\\\\\\\\',\'/\':\'\\\\/\',\'\\u0008\':\'\\\\b\',\'\\u000c\':\'\\\\f\',\'\\n\':\'\\\\n\',\'\\r\':\'\\\\r\',\'\\t\':\'\\\\t\',\'\\u000b\':\'\\\\u000b\'},r=/\\uffff/.test(\'\\uffff\')?/[\\\\\\\'\\x00-\\x1f\\x7f-\\uffff]/g:/[\\\\\\\'\\x00-\\x1f\\x7f-\\xff]/g;p[l].b=function(a,b){b[i]('\'',a.replace(r,function(g){if(g in q)return q[g];var d=g.charCodeAt(0),e=\'\\\\u\';if(d<16)e+=\'000\';else if(d<256)e+=\'00\';else if(d<4096)e+=\'0\';return q[g]=e+d.toString(16)}),'\'')};p[l].d=function(a,b){b[i](isFinite(a)&&!isNaN(a)?a:\'null\')};\u000ap[l].c=function(a,b){var g=a[j];b[i](\'[\');for(var d=\'\',e=0;e<g;e++){b[i](d);this.a(a[e],b);d=\',\'}b[i](\']\')};p[l].e=function(a,b){b[i](\'{\');var g=\'\';for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if(typeof e!=\'function\'){b[i](g);this.b(d,b);b[i](\':\');this.a(e,b);g=\',\'}}b[i](\'}\')};c.google.stringify=o;if(c.JSON&&c.JSON.stringify&&navigator.userAgent.indexOf(\'Chrome\')==-1)c.google.stringify=c.JSON.stringify;h.History={};var s=[],t=\'#\';h.History.client=function(a){s[i](a);return s[j]-1};var u,v;function w(){var a=u.value;v=a?eval(\'(\'+a+\')\'):{}}h.History.save=function(a,b){if(u){w();v[t]||(v[t]={});v[t][a]=b;u.value=h.stringify(v)}};function x(){v=null;(u=document.getElementById(\'hcache\'))&&c.setTimeout(function(){w();for(var a=0;a<s[j];++a)v&&v[t]&&v[t][a]&&s[a][m](null,v[t][a])},0)}x();h.rein[i](function(){t=h.pageState;x()});\u000a})();\u000a(function(){\u000avar a,b;google.rhs=function(){if(!google.drhs)if(document.getElementById(\'mbEnd\')&&(a||b)){var d=google.getHeight(document.getElementById(\'rhsline\')),c=a?google.getHeight(a):0;if(b)c+=google.getHeight(b)+18;document.getElementById(\'rhspad\').style.height=c>d?Math.min(9999,c-d)+\'px\':(google.isIE?\'\':0)}};function e(){a=document.getElementById(\'tads\');b=document.getElementById(\'3po\');google.rhs()}e();google.bind(window,\'resize\',google.rhs);google.rein.push(e);\u000a})();\u000a(function(){\u000avar f=0,g=[];google.fx={};google.fx.linear=function(a){return a};google.fx.easeOut=function(a){return 1-Math.pow(1-a,3)};google.fx.easeInAndOut=function easeInAndOut(a){return(3-2*a)*a*a};google.fx.animate=function(a,d,e){for(var c=0,b;b=d[c++];){b[5]=b[5]==null?\'px\':b[5];b[4]=b[4]||google.fx.linear;h(b[0],b[1],b[2]+b[5])}g.push({b:a,a:e,d:google.time(),c:d});f=f||window.setInterval(i,15)};function i(){for(var a=0,d;d=g[a++];)j(d)||g.splice(--a,1);if(!g.length){window.clearInterval(f);f=0}}function j(a){var d=\u000agoogle.time()-a.d;if(d>=a.b){for(var e=0,c;c=a.c[e++];)h(c[0],c[1],c[3]+c[5]);a.a&&a.a();return 0}else{for(var e=0,c;c=a.c[e++];){var b=c[2]+(c[3]-c[2])*c[4](d/a.b);if(c[5]==\'px\')b=Math.round(b);h(c[0],c[1],b+c[5])}return 1}}function h(a){for(var d=1;d<arguments.length;d+=2){var e=arguments[d],c=arguments[d+1],b=a.style;if(b&&e in b)b[e]=c;else if(e in a)a[e]=c;}return a}google.fx.wrap=function(a){var d=document.createElement(\'div\');a.parentNode.replaceChild(d,a);d.appendChild(a);return d};google.fx.unwrap=function(a){a.parentNode.parentNode.replaceChild(a,a.parentNode)};google.dstr.push(function(){window.clearInterval(f);f=0;g=[]});\u000a})();\u000a(function(){\u000avar c=false,e=null,g=true,aa=c,h,i,j,m=\'\',n=e;var o=e,p=e,q=-1,s,t,u,v,w,z,A,B=0,C=0,D=e,E=0;var F,G;var I;\u000avar ca=\'13px\',da=\'17px\';\u000afunction ea(){if(!w)return;fa();P();w.value=z.value=\'\';window.clearTimeout(n);m=A=\'\';n=o=p=e;q=-1;B=C=E=0;I=0;}\u000avar ga=\'clients1.google.cz\';\u000afunction ia(a,b,d,k,f){s=a;t=b;G=document.getElementsByTagName(\'body\')[0];i=j=h=t.value;if(!b.init){google.bind(s,\'submit\',ja);t.setAttribute(\'autocomplete\',\'off\');google.bind(t,\'blur\',P);t.onkeypress=R;google.bind(t,\'keyup\',S);w=ka(\'aq\',\'f\');z=ka(\'oq\',i);u=\u000adocument.createElement(\'table\');u.cellSpacing=u.cellPadding=\'0\';v=u.style;u.className=\'gac_m\';s.appendChild(u);b.init=g}P();U();if(!aa){la();aa=g}A=[\'/complete/search\',\'?hl=\',google.kHL,(d?\'&ds=\'+d:\'\'),(k?\'&pq=\'+encodeURIComponent(k):\'\')].join(\'\');i=j=h=t.value;I=ma(t);\u000aW();(new Image).src=\'http://\'+ga+\'/generate_204\';}\u000afunction la(){var a=[];function b(l,r){a.push(l,\'{\',r,\'}\')}var d=google.ac.b;b(\'.gac_m\',\'cursor:default;border:1px solid #000;z-index:99;background:#fff;position:absolute;margin:0;font-size:\'+(d?\'17px\':ca));b(\'.gac_m td\',\'line-height:\'+(d?\'22px\':da));b(\'.gac_b\',\'background:#36c;color:#fff\');var k=\'padding-left:3px;white-space:nowrap;overflow:hidden;text-align:left;\';\u000ab(\'.gac_c\',k);b(\'.gac_d\',\'padding:0 3px;white-space:nowrap;overflow:hidden;text-align:right;color:green;font-size:0.77em\');b(\'.gac_b td\',\'color:#fff\');b(\'.gac_e\',\'padding:0 3px 2px;text-decoration:underline;text-align:right;color:#00c;font-size:0.77em;line-height:0.88em\');a=a.join(\'\');var f=document.createElement(\'style\');f.setAttribute(\'type\',\'text/css\');document.getElementsByTagName(\'head\')[0].appendChild(f);f.appendChild(document.createTextNode(a));}\u000afunction U(){if(u){v.left=na(t,\'offsetLeft\')+\'px\';v.top=na(t,\'offsetTop\')+t.offsetHeight-1+\'px\';v.width=t.offsetWidth+\'px\';}}function ka(a,b){var d=document.createElement(\'input\');d.type=\'hidden\';d.name=a;d.value=b;return s.appendChild(d)}\u000afunction R(a){var b=a.keyCode;if(b==27&&pa()){P();X(i);a.cancelBubble=g;return a.returnValue=c}if(b==38||b==40){C++;C%3==1&&V(b);return c}}function S(a){var b=a.keyCode;if(C==0)V(b);C=0;}\u000afunction V(a){if(t.value!=h){i=t.value;I=ma(t);z.value=i}a==40&&qa(q+1);a==38&&qa(q-1);U();if(m!=i&&!D)D=window.setTimeout(P,500);h=t.value;h==\'\'&&!n&&W()}function ra(){if(E)return;if(p)p.className=\'gac_a\';this.className=\'gac_b\';p=this;for(var a=0,b;b=o[a];a++)b==p&&(q=a)}\u000afunction qa(a){if(!m&&i){j=\'\';W();return}if(i!=m||!n)return;if(!o||o.length<=0)return;if(!pa()){Y();return}var b=o.length-1;if(p)p.className=\'gac_a\';if(a==b||a==-1){q=-1;X(i);t.focus();w.value=\'f\';return}else if(a>b)a=0;else if(a<-1)a=b-1;q=a;p=o.item(a);p.className=\'gac_b\';X(p.completeString);w.value=p.completeId}\u000afunction P(){if(D){window.clearTimeout(D);D=e}v&&(v.visibility=\'hidden\');}function Y(){v&&(v.visibility=\'visible\');U();E=1}function pa(){return!!v&&v.visibility==\'visible\'}\u000afunction fa(){if(u){u.innerHTML=\'\';}}\u000afunction sa(a){B>0&&B--;if(!u||a[0]!=i)return;if(D){window.clearTimeout(D);D=e}m=a[0];fa();var d=c;for(var k=0,f;k<a[1].length;k++)if(f=a[1][k]){d=g;var l=u.insertRow(-1);l.onclick=function(){X(this.completeString);ja();s.onsubmit&&s.onsubmit()==c||s.submit();};l.onmousedown=Z;l.onmouseover=ra;l.onmousemove=function(){if(E){E=0;ra.call(this)}};l.completeString=\u000af[0];l.completeId=f[2];l.className=\'gac_a\';var r=document.createElement(\'td\');$(r,f[0]);r.className=\'gac_c\';l.appendChild(r);var L=document.createElement(\'td\');$(L,f[1]);L.className=\'gac_d\';l.appendChild(L);}\u000aif(d){var y=u.insertRow(-1);y.onmousedown=Z;var x=document.createElement(\'td\');x.colSpan=2;y.className=\'gac_e\';y.appendChild(x);var T=document.createElement(\'span\');T.style.cursor=\'pointer\';x.appendChild(T);$(T,\'zavÅ™Ã­t\');T.onclick=function(){P();m=\'\';window.clearTimeout(n);\u000an=e;w.value=\'x\'}}q=-1;o=u.rows;(o&&o.length>0?Y:P)()}function ja(){P();if(z.value!=t.value)w.value=o&&o.item(q)&&o.item(q).completeId;else{z.value=\'\';if(B>=10)w.value=\'o\'}}\u000afunction W(){if(j!=i&&i){B++;F&&G.removeChild(F);F=document.createElement(\'script\');F.src=[\'http://\',ga,A,\'&q=\',encodeURIComponent(i),\'&cp=\'+I].join(\'\');G.appendChild(F);t.focus()}j=i;var a=100;for(var b=1;b<=(B-2)/2;++b)a*=\u000a2;a+=50;n=window.setTimeout(W,a)}function X(a){if(t)t.value=h=a}function na(a,b){var d=0;while(a){d+=a[b];a=a.offsetParent}return d}function $(a,b){a.appendChild(document.createTextNode(b))}\u000afunction Z(a){a.stopPropagation();return c}\u000afunction ma(a){var b=0,d=0;if(va(a)){b=a.selectionStart;d=a.selectionEnd}return b&&d&&b==d?b:0}\u000afunction va(a){try{return typeof a.selectionStart==\'number\'}catch(b){return c}}window.google.ac={i:ia,h:sa,u:X};google.bind(window,\'resize\',U);google.dstr.push(ea);\u000a})();\u000a(function(){\u000awindow.ManyBox={};var e,g,h=1,j=google.History.client(i);function k(a){for(var b in e)if(e[b].c&&a(e[b]))return}function l(a,b,c,d,f){this.c=a;this.i=b;this.C=d;this.o=f;this.q=\'/mbd?\'+(b?\'docid=\'+b:\'\')+\'&resnum=\'+a.replace(/[^0-9]/,\'\')+\'&mbtype=\'+d+\'&usg=\'+c+\'&hl=\'+(google.kHL||\'\');this.e={};this.l=\'\';g[a]={r:0,F:this.e,i:this.i,f:0};this.n=0}l.prototype.append=function(a){this.l+=\'&\'+a.join(\'&\')};function m(a,b){return document.getElementById(\'mb\'+b+a.c)}function n(a,b){a.h.style.paddingTop=b+\'px\';\u000aa.h.style.display=a.h.innerHTML?\'\':\'none\';if(b>a.n)a.n=b}function q(a){if(!a.B){a.B=1;a.d=m(a,\'b\');a.j=0;a.a=m(a,\'l\');a.m=a.a.getElementsByTagName(\'DIV\')[0];a.p=a.a.getElementsByTagName(\'A\')[0];a.z=a.p.innerHTML;a.o=a.o||a.z;a.m.title=\'Pro dalÅ¡Ã­ informace kliknÄ›te zde...\';a.a.G=function(b,c){var d=google.getPageOffsetStart(a.a),f=google.getPageOffsetTop(a.a);return b>d-5&&b<d+google.getWidth(a.a)+5&&c>f-5&&c<f+google.getHeight(a.a)+5};a.h=m(a,\'f\');n(a,0);a.a.onmousedown=r(a);a.a.onclick=s(a);a.a.go=function(){a.a.onmousedown();\u000aa.a.onclick()}}}function t(a){google.log(\'manybox\',[a.j?\'close\':\'open\',\'&id=\',a.c,\'&docid=\',a.i,\'&mbtype=\',a.C,a.l].join(\'\'))}function r(a){return function(){if(g[a.c].f){if(a.A++<3)t(a)}else if(a.e.k){t(a);g[a.c].f=(a.A=1)}else{var b=google.xhr();if(b){b.open(\'GET\',a.q+a.l+\'&zx=\'+google.time());a.t=0;b.onreadystatechange=function(){if(b.readyState==4){var c=0;if(b.status==200)try{eval(b.responseText);c=1}catch(d){}if(!c&&!a.D){g[a.c].f=0;a.D=1;a.q+=\'&cad=retry\';a.a.onmousedown()}else{a.u&&x(a);a.t=\u000a0}}};a.t=1;b.send(null)}g[a.c].f=(a.A=1)}}}function s(a){return function(){g[a.c].f||a.a.onmousedown();(a.u=a.t)||x(a)}}function y(a){if(!a.e.k){a.e.k=\'\\x3cfont color\\x3dred\\x3eChyba:\\x3c/font\\x3e Server nemohl dokonÄit vÃ¡Å¡ poÅ¾adavek. VyÄkejte 30 sekund a zkuste to znovu.\';a.H=a.a.onclick;a.a.onclick=function(){h=0;x(a);h=1;a.b.parentNode.removeChild(a.b);g[a.c].f=(a.e.k=(a.v=0));a.a.onclick=a.H}}if(!a.v){a.v=1;var b=document.getElementById(\'res\');a.I=b&&google.getPageOffsetStart(a.d)>google.getPageOffsetStart(b)+google.getWidth(b);a.b=document.createElement(\'div\');n(a,0);a.b.style.position=\'absolute\';\u000aa.b.style.paddingTop=(a.b.style.paddingBottom=\'6px\');a.b.style.display=\'none\';a.b.className=\'med\';var c=document.createElement(\'div\');a.b.appendChild(c);c.className=\'std\';c.innerHTML=a.e.k;a.h.parentNode.insertBefore(a.b,a.h)}}function i(a){h=0;ManyBox.init();k(function(b){if(b.i==a[b.c].i){b.e=a[b.c].F;if(a[b.c].r!=b.j)x(b)}else a[b.c].f=0});g=a;h=1;google.History.save(j,g)}ManyBox.create=function(a,\u000ab,c,d,f){return new l(a,b,c,d,f)};ManyBox.register=function(a,b,c,d,f){return e[a]=ManyBox.create(a,b,c,d,f)};google.bind(document,\'click\',function(a){a=a||window.event;var b=a.target||a.srcElement;while(b.parentNode){if(b.tagName==\'A\'||b.onclick)return;b=b.parentNode}k(function(c){if(c.a.G(a.clientX,a.clientY)){c.a.go();return 1}})});function z(){e={};g={};history.navigationMode=history.navigationMode&&\'fast\'}z();ManyBox.init=function(){k(q)};function A(a,b){a.b.style.clip=\'rect(0px,\'+(a.d.width||\u000a\'34em\')+\',\'+(b||1)+\'px,0px)\'}l.prototype.insert=function(a){this.e.k=a};function B(a){a.g=m(a,\'cb\');var b=a.g&&a.g.getAttribute(\'mbopen\');if(b){eval(b);a.onopen(a.g)}}function C(a){a.b.style.display=\'none\';a.m.style.backgroundPosition=\'-91px -74px\';a.p.innerHTML=a.z;a.j=(g[a.c].r=0);google.History.save(j,g)}function D(a,b,c,d,f){var u=c>0?150:75,v=google.time()-f,w=v<u&&h?v/u*c:(d>1?c-10:c),o=Math.max(a.s,b+w),p=o-a.s;A(a,p);a.d.style.height=o<0?0:(p?o+\'px\':\'\');n(a,Math.max(0,p-5));google.rhs();if(Math.abs(w)<\u000aMath.abs(c))window.setTimeout(function(){D(a,b,c,d-1,f)},30);else window.setTimeout(function(){c<0?C(a):B(a);if(!google.isIE&&a.I)a.b.style.width=\'100px\';a.b.style.position=(a.d.style.height=\'\');n(a,0);google.rhs();a.d.w=0},0)}function x(a){a.u=0;if(!a.d.w){a.d.w=1;var b;if(!a.j){a.s=google.getHeight(a.d);y(a);n(a,0);a.n=0;k(function(d){d.m.title=\'\'});a.m.style.backgroundPosition=\'-105px -74px\';a.p.innerHTML=a.o;A(a,1);a.b.style.position=\'absolute\';a.b.style.display=\'\';a.j=(g[a.c].r=1);google.History.save(j,\u000ag);b=a.b.offsetHeight}else{var c=a.g&&a.g.getAttribute(\'mbclose\');if(c){eval(c);a.onclose(a.g)}b=a.s-google.getHeight(a.d);a.h.style.display=\'none\';n(a,a.n);a.b.style.position=\'absolute\'}D(a,google.getHeight(a.d),b,google.isSafari?2:1,google.time())}}google.dstr&&google.dstr.push(z);\u000a})();\u000a(function(){\u000avar h=false,i=true,k,m;\u000afunction o(){k=document.createElement(\'style\');document.getElementsByTagName(\'head\')[0].appendChild(k);m=k.sheet;}\u000agoogle.addCSSRule=function(a,b){k||o();var e=a+\'{\'+b+\'}\';m.insertRule(e,m.cssRules.length);};google.acrs=function(a){for(var b=a.split(/{|}/),c=1;c<b.length;c+=2)google.addCSSRule(b[c-1],b[c])};google.Toolbelt={};\u000avar p=null,r=h,s=h,t=document.location.href.match(\'^.*?://[^/]*\')[0],u,v;function w(a,b){v=document.getElementById(\'tbd\');u=v.innerHTML=a;b||google.Toolbelt.toggle(null,null,i);google.j&&google.j.trap&&google.j.trap()}var y=google.History.client(function(a){w(a.content,a.open==google.Toolbelt.isToolbeltOpen())}),z=google.History.client(function(a){google.acrs(a)});google.Toolbelt.ascrs=function(a){google.acrs(a);google.History.save(z,a)};var A=[];google.rein.push(function(){A=[]});\u000agoogle.Toolbelt.registerToolbeltCallback=function(a){A.push(a)};function B(){for(var a=0,b;b=A[a++];)b()}google.rein.push(function(){A=[]});google.Toolbelt.listeners=function(){return A};var C=/([?&])tbo=([^&]*)(&|$)/;function D(a){var b=a.match(C);return b?b[2]:\'\'}function E(a){var b=D(a);return mbtb1.obd?b!=\'0\':b!=\'\'&&b!=\'0\'}google.Toolbelt.setCurrentTbo=function(a){return F(a,google.Toolbelt.isToolbeltOpen())};\u000afunction F(a,b){var c=mbtb1.obd&&!D(a)?\'\':\'1\',d=mbtb1.obd?\'0\':\'\',f=b?c:d;return a.replace(C,\'$1\').replace(/&$/,\'\')+(f?\'&tbo=\'+f:\'\')}\u000agoogle.Toolbelt.updateTbo=function(){var a=google.Toolbelt.isToolbeltOpen();if(!(a==E(google.base_href))){var b=document.getElementsByTagName(\'A\');google.base_href=F(google.base_href,a);for(var c=0,d;d=b[c++];)if(d.href.match(\'^(\'+t+\')?/(?!url|aclk|[^?]*$)\')&&d!=p&&!d.href.match(\'[?&]tbo=u(&|$)\')){d.href=F(d.href,a);}for(var c=0,e;e=document.forms[c++];)if(e.action.match(\'/search$\')){for(var g=\u000a0,q=0,j;j=e.elements[q++];)if(j.name==\'tbo\'){g=1;if(a)j.value=\'1\';else if(mbtb1.obd)j.value=\'0\';else j.parentNode.removeChild(j)}if(!g){var l=document.createElement(\'input\');l.type=\'hidden\';l.value=a?\'1\':\'0\';l.name=\'tbo\';e.appendChild(l)}}}};google.Toolbelt.isToolbeltOpen=function(){return/\\btbo\\b/.test(document.body.className)};\u000agoogle.Toolbelt.toggle=function(a,b,c){b=b||window.event;if(a)p=a;b&&b.stopPropagation();v=document.getElementById(\'tbd\');if(!v)return i;u=v.innerHTML;var d=v.getElementsByTagName(\'DIV\').length>0,f=google.Toolbelt.isToolbeltOpen(),e=c||!!document.getElementById(\'tbt5\')||mbtb1.na;if(f&&!s){H(h,e);google.log(\'toolbelt\',\'0&ei=\'+google.kEI);r=i}else if(d){H(i,\u000ae);r&&google.log(\'toolbelt\',\'1&ei=\'+google.kEI)}else{mbtb1.insert=w;var g=google.xhr();if(g){g.open(\'GET\',[google.pageState?google.pageState.replace(\'#\',\'/mbd?\'):google.base_href.replace(/^\\/search\\?/,\'/mbd?\'),\'&mbtype=29&resnum=1&tbo=1\',mbtb1.tbs?\'&tbs=\'+mbtb1.tbs:\'\',\'&docid=\',mbtb1.docid,\'&usg=\',mbtb1.usg,\'&zx=\',google.time()].join(\'\'),i);g.onreadystatechange=function(){if(g.readyState==4&&g.status==200)try{eval(g.responseText)}catch(q){window.location.replace(a.href)}};g.send(null);s=i;H(i,e)}return h}google.History.save(y,\u000a{content:u,open:s||!f});return s=h};function I(a){for(;a&&a.className!=\'tbt\';)a=a.parentNode;return a}google.Toolbelt.ctlClk=function(a,b){a=a||\'cdr_opt\';b=b||\'cdr_min\';var c=document.getElementById(a);if(c){c.className=\'tbots\';var d=I(c);if(d){for(var f=0,e;e=d.childNodes[f++];)if(e.className==\'tbos\')e.className=\'tbotu\';var g=document.getElementById(b);g&&g.focus()}}return h};google.Toolbelt.cdrClk=google.Toolbelt.ctlClk;\u000afunction J(a){return a.replace(/_/g,\'_1\').replace(/,/g,\'_2\').replace(/:/g,\'_3\')}google.Toolbelt.cdrSbt=function(){return K(\'ctbs\',{cdr_min:\'cd_min\',cdr_max:\'cd_max\'})};google.Toolbelt.clSbt=function(){return K(\'ltbs\',{l_in:\'cl_loc\'})};function K(a,b){var c=document.getElementById(a);if(c)for(var d in b){var f=J(document.getElementById(d).value),e=new RegExp(\'(\'+b[d]+\':)([^,]*)\');c.value=c.value.replace(e,\'$1\'+f)}return i}\u000agoogle.Toolbelt.tbosClk=function(a){var b=a||window.event,c=b.target||b.srcElement;if(c&&c.className==\'tbotu\'){c.className=\'tbos\';var d=I(c);if(d)for(var f=0,e;e=d.childNodes[f++];)if(e.className==\'tbots\')e.className=\'tbou\'}};var L=google.fx.easeOut,M=[[\'tads\',\'margin-left\',\'marginLeft\'],[\'res\',\'margin-left\',\'marginLeft\'],[\'tbd\',\'margin-left\',\'marginLeft\'],[\'mbEnd\',\'width\',\'width\'],[\'tbt3\',\'left\',\'left\'],[\'tbt8\',\'left\',\'left\'],[\'tbt5\',\'margin-left\',\'marginLeft\']],N=h;\u000afunction O(a){for(var b=0,c=0,d;d=M[c++];){var f=document.getElementById(d[0]);f&&a(f,d,b++)}}function P(){var a=[];O(function(b,c){var d=c[1];a.push(d==\'width\'?b.offsetWidth:google.getComputedStyle(b,d))});return a}\u000afunction H(a,b){if(!N){var c=[],d=P(),f=google.getComputedStyle(v,\'left\',i),e=document.getElementById(\'cdr_min\'),g=document.getElementById(\'cdr_max\');if(e&&g){e.style.width=google.getComputedStyle(e,\'width\',i);g.style.width=google.getComputedStyle(g,\'width\',i)}document.body.className=document.body.className.replace(/\\btbo\\b/,\'\')+(a?\' tbo\':\'\');google.Toolbelt.updateTbo();B();if(!b){if(a){f=google.getComputedStyle(v,\'left\',i);if(e&&g){e.style.width=google.getComputedStyle(e,\'width\',i);g.style.width=\u000agoogle.getComputedStyle(g,\'width\',i)}}var q=P();O(function(l,x,G){c.push([l,x[2],d[G],q[G],L])});var j=google.fx.wrap(v);j.style.position=\'absolute\';j.style.overflow=\'hidden\';j.style.left=f;v.style.display=\'block\';v.style.position=\'static\';N=i;google.fx.animate(a?400:200,c,function(){O(function(l,x){l.style[x[2]]=\'\'});v.style.position=\'absolute\';v.style.display=\'\';google.fx.unwrap(v);if(e&&g){e.style.width=\'\';g.style.width=\'\'}N=h})}}};\u000a})();\u000aif(!window.gbar||!gbar.close){window.gbar={};(function(){var e=window.gbar,g,j;function k(a){var b=window.encodeURIComponent&&(document.forms[0].q||\'\').value;if(b)a.href=a.href.replace(/([?&])q=[^&]*|$/,function(h,d){return(d||\'&\')+\'q=\'+encodeURIComponent(b)})}e.qs=k;function m(a,b,h,d,f,l){var i=document.getElementById(a),c=i.style;if(i){c.left=d?\'auto\':b+\'px\';c.right=d?b+\'px\':\'auto\';c.top=h+\'px\';c.visibility=j?\'hidden\':\'visible\';if(f){c.width=f+\'px\';c.height=l+\'px\'}else{m(g,b,h,d,i.offsetWidth,i.offsetHeight);j=j?\'\':a}}}e.tg=function(a){a=a||window.event;var b=a.target||a.srcElement;a.cancelBubble=true;if(!g){a=document.createElement(Array.every||window.createPopup?\'iframe\':\'div\');a.frameBorder=\'0\';a.src=\'#\';g=b.parentNode.appendChild(a).id=\'gbs\';document.onclick=e.close;if(e.alld){e.alld(function(){n(b)});return}}n(b)};function n(a){var b=0,h,d=window.navExtra;if(a.className!=\'gb3\')a=a.parentNode;var f=a.getAttribute(\'aria-owns\')||\'gbi\',l=a.offsetWidth,i=a.offsetTop>20?46:24,c;do b+=a.offsetLeft||0;while(a=a.offsetParent);if(f==\'gbi\')for(a=document.getElementById(f);d&&(h=d.pop());)a.insertBefore(h,a.firstChild).className=\'gb2\';else c=b=(document.documentElement.clientWidth||document.body.clientWidth)-b-l;j!=f&&e.close();m(f,b,i,c)}e.close=function(){j&&m(j,0,0)}})();;};\u000aif(google.y.first){for(var a=0,b;b=google.y.first[a];++a)b();delete google.y.first}for(a in google.y)google.y[a][1]?google.y[a][1].apply(google.y[a][0]):google.y[a][0].go();google.y.x=google.x;google.x=function(d,c){c&&c.apply(d);return false};google.y.first=[];\u000a(function (){\u000avar a=\'google\';if(window[a]){window[a].a={};window[a].c=1;function o(d,f,e){var b=d.t[f],c=d.t.start;if(!b||!(c||e))return undefined;if(e!=undefined)c=e;return b>c?b-c:c-b}window[a].report=function(d,f,e){var b=\'\';if(window[a].pt){b+=\'&srt=\'+window[a].pt;delete window[a].pt}{var c=document.getElementById(\'csi\');if(c){var h;if(window[a]._bfr!=undefined)h=window[a]._bfr;else{h=c.value;window[a]._bfr=h;c.value=1}if(h)return\'\'}}if(d.b)b+=\'&\'+d.b;if(window.parent!=window)b+=\'&wif=1\';var i=d.t,p=i.start,k=[];for(var j in i){if(j==\u000a\'start\')continue;p&&k.push(j+\'.\'+o(d,j))}delete i.start;if(f)for(var l in f)b+=\'&\'+l+\'=\'+f[l];var m=[e?e:\'/csi\',\'?v=3\',\'&s=\'+(window[a].sn||\'GWS\')+\'&action=\',d.name,\'\',\'\',b,\'&rt=\',k.join(\',\')].join(\'\');{var g=new Image,n=window[a].c++;window[a].a[n]=g;g.onload=(g.onerror=function(){delete window[a].a[n]});g.src=m;g=null}return m}};if(google.timers&&google.timers.load.t){if(!google.nocsixjs)google.timers.load.t.xjsee=google.time();window.setTimeout(function(){if(google.timers.load.t){google.timers.load.t.xjs=google.time();google.timers.load.t.ol&&google.report(google.timers.load,google.kCSI)}},0)};\u000a})();\u000a"
                },
                'cookies':[],
                'headers':[{
                    'name':'Content-Type',
                    'value':'text/javascript; charset=UTF-8'
                },{
                    'name':'Expires',
                    'value':'Sat, 01 Jan 2011 00:00:00 GMT'
                },{
                    'name':'Last-Modified',
                    'value':'Sat, 03 Jan 2009 00:00:00 GMT'
                },{
                    'name':'Cache-Control',
                    'value':'private, x-gzip-ok=\'\''
                },{
                    'name':'Content-Encoding',
                    'value':'gzip'
                },{
                    'name':'Date',
                    'value':'Sat, 02 Jan 2010 13:51:06 GMT'
                },{
                    'name':'Server',
                    'value':'gws'
                },{
                    'name':'Content-Length',
                    'value':'8646'
                },{
                    'name':'X-XSS-Protection',
                    'value':'0'
                }]
            },
            'cache':{},
            'timings':{
                'dns':0,
                'connect':0,
                'blocked':0,
                'send':0,
                'wait':62,
                'receive':16
            }
        },{
            'pageref':'page_62143',
            'startedDateTime':'2010-01-02T13:51:01.389Z',
            'time':47,
            'request':{
                'method':'GET',
                'url':'http://clients1.google.cz/generate_204',
                'httpVersion':'HTTP/1.1',
                'queryString':[],
                'headersSize':651,
                'bodySize':-1,
                'cookies':[{
                    'name':'PREF',
                    'value':'ID',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                },{
                    'name':'NID',
                    'value':'29',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                }],
                'headers':[{
                    'name':'Host',
                    'value':'clients1.google.cz'
                },{
                    'name':'User-Agent',
                    'value':'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2b6pre) Gecko/20091230 Namoroka/3.6b6pre (.NET CLR 3.5.30729)'
                },{
                    'name':'Accept',
                    'value':'image/png,image/*;q=0.8,*/*;q=0.5'
                },{
                    'name':'Accept-Language',
                    'value':'en-us,en;q=0.5'
                },{
                    'name':'Accept-Encoding',
                    'value':'gzip,deflate'
                },{
                    'name':'Accept-Charset',
                    'value':'ISO-8859-1,utf-8;q=0.7,*;q=0.7'
                },{
                    'name':'Keep-Alive',
                    'value':'115'
                },{
                    'name':'Connection',
                    'value':'keep-alive'
                },{
                    'name':'Referer',
                    'value':'http://www.google.cz/'
                },{
                    'name':'Cookie',
                    'value':'PREF=ID=580ec4c5a3534337:U=37a8fcc41ff49f78:TM=1260796678:LM=1260796682:S=9BgbomVM6pcnfah0; NID=29=OHyg2zMZl4IpG8C4a-Z5itM3gCXOuBPogGpTPVFPNsdpmIHJWX78ymRL_gqptvhr_IQrP319GQ1fxlKUsqaIokpxasPIIDq5ijatDmYiyamnCfJz8rXyNvt5GPjCJp2I'
                }]
            },
            'response':{
                'status':204,
                'statusText':'No Content',
                'httpVersion':'HTTP/1.1',
                'redirectURL':'',
                'headersSize':146,
                'bodySize':0,
                'content':{
                    'size':0,
                    'mimeType':'text/html'
                },
                'cookies':[],
                'headers':[{
                    'name':'Content-Length',
                    'value':'0'
                },{
                    'name':'Content-Type',
                    'value':'text/html'
                },{
                    'name':'Date',
                    'value':'Sat, 02 Jan 2010 13:51:06 GMT'
                },{
                    'name':'Server',
                    'value':'GFE/2.0'
                },{
                    'name':'X-XSS-Protection',
                    'value':'0'
                }]
            },
            'cache':{},
            'timings':{
              'dns':0,
              'connect':0,
              'blocked':0,
              'send':0,
              'wait':47,
              'receive':0
            }
        },{
            'pageref':'page_62143',
            'startedDateTime':'2010-01-02T13:51:01.452Z',
            'time':31,
            'request':{
                'method':'GET',
                'url':'http://www.google.cz/images/nav_logo7.png',
                'httpVersion':'HTTP/1.1',
                'queryString':[],
                'headersSize':654,
                'bodySize':-1,

                'cookies':[{
                    'name':'PREF',
                    'value':'ID',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                },{
                    'name':'NID',
                    'value':'29',
                    'comment': '',
                    'domain': '',
                    'path': '/',
                    'expires': false,
                    'httpOnly': false,
                    'secure': false
                }],

                'headers':[{
                      'name':'Host',
                      'value':'www.google.cz'
                },{
                      'name':'User-Agent',
                      'value':'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2b6pre) Gecko/20091230 Namoroka/3.6b6pre (.NET CLR 3.5.30729)'
                },{
                    'name':'Accept',
                    'value':'image/png,image/*;q=0.8,*/*;q=0.5'
                },{
                    'name':'Accept-Language',
                    'value':'en-us,en;q=0.5'
                },{
                    'name':'Accept-Encoding',
                    'value':'gzip,deflate'
                },{
                    'name':'Accept-Charset',
                    'value':'ISO-8859-1,utf-8;q=0.7,*;q=0.7'
                },{
                    'name':'Keep-Alive',
                    'value':'115'
                },{
                    'name':'Connection',
                    'value':'keep-alive'
                },{
                    'name':'Referer',
                    'value':'http://www.google.cz/'
                },{
                    'name':'Cookie',
                    'value':'PREF=ID=580ec4c5a3534337:U=37a8fcc41ff49f78:TM=1260796678:LM=1260796682:S=9BgbomVM6pcnfah0; NID=29=OHyg2zMZl4IpG8C4a-Z5itM3gCXOuBPogGpTPVFPNsdpmIHJWX78ymRL_gqptvhr_IQrP319GQ1fxlKUsqaIokpxasPIIDq5ijatDmYiyamnCfJz8rXyNvt5GPjCJp2I'
                }]
            },

            'response':{
                'status':200,
                'statusText':'OK',
                'httpVersion':'HTTP/1.1',
                'redirectURL':'',
                'headersSize':275,
                'bodySize':5401,
                'content':{
                    'size':5401,
                    'mimeType':'image/png'
                },
                'cookies':[],
                'headers':[{
                    'name':'Content-Type',
                    'value':'image/png'
                },{
                    'name':'Last-Modified',
                    'value':'Thu, 23 Jul 2009 17:45:03 GMT'
                },{
                    'name':'Date',
                    'value':'Sat, 02 Jan 2010 13:05:54 GMT'
                },{
                    'name':'Expires',
                    'value':'Sun, 02 Jan 2011 13:05:54 GMT'
                },{
                    'name':'Server',
                    'value':'gws'
                },{
                    'name':'Content-Length',
                    'value':'5401'
                },{
                    'name':'Cache-Control',
                    'value':'public, max-age=31536000'
                },{
                    'name':'Age',
                    'value':'2712'
                },{
                    'name':'X-XSS-Protection',
                    'value':'0'
                }]
            },
            'cache':{},
            'timings':{
                'dns':0,
                'connect':0,
                'blocked':0,
                'send':0,
                'wait':31,
                'receive':0
            }
        }]
    }
}
