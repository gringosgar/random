
// Condensed Array
 
var random = new Array ("http://grizzlyganja.neocities.org/random/tmrp.html","http://grizzlyganja.neocities.org/stuff/i1.html","http://grizzlyganja.neocities.org/stuff/s.html","http://grizzlyganja.neocities.org/p/18entst.html","https://grizzlyg.keybase.pub/jQuery-Plugin-To-Create-Terminal-style-Typing-Effects-TypeWriting-js/index.html","http://grizzlyganja.neocities.org/ul.html","http://grizzlyganja.neocities.org/random/eir.html", "http://grizzlyganja.neocities.org/webstuff.html", "http://grizzlyganja.neocities.org/startpage.html", "http://grizzlyganja.neocities.org/random/rh.html","http://grizzlyganja.neocities.org/random/dc-is-cunt.html","http://grizzlyganja.neocities.org/random/btp.html","http://grizzlyganja.neocities.org/random/gpms.html","http://grizzlyganja.neocities.org/420.html","http://grizzlyganja.neocities.org/random/puppystart.html","http://grizzlyganja.neocities.org/random/dwstart.html","https://grizzlyg.keybase.pub/notepad/gs.html","https://grizzlyganja.neocities.org/random/Bollocks-to-Boris.html","http://grizzlyganja.neocities.org/random/sg.html","https://fuckmuppet.neocities.org/muppetDocument1.html","https://randomstart.runkodapps.com","https://randomstart.runkodapps.com/ht.html","https://grizzlyganja.neocities.org/en.html","https://grizzlyganja.neocities.org/w/hello.html","https://grizzlyganja.neocities.org/stuff/tinternet.html","https://grizzlyganja.neocities.org/w/dubtreck.html","https://randomstart.runkodapps.com/tc.html","https://gringosgar.github.io/","https://grizzlyganja.neocities.org/random/cs.html")

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}


function blink() {
	var blinks = document.getElementsByTagName('blink');
	for (var i = blinks.length - 1; i >= 0; i--) {
	  var s = blinks[i];
	  s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
	}
	window.setTimeout(blink, 700);
  }
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
  else if (window.addEventListener) window.addEventListener("load", blink, false);
  else if (window.attachEvent) window.attachEvent("onload", blink);
  else window.onload = blink;


tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
if(nyear<1000) nyear+=1900;
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}