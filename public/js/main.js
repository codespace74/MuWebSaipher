/*------------------ Circular Progress Bar ------------------------*/
$(function(){
  $('.circlestat').circliful();
});

/*------------------ Circular Progress Bar ------------------------*/

(function(a){a.fn.circliful=function(b,d){var c=a.extend({fgcolor:"#556b2f",bgcolor:"#eee",fill:false,width:15,dimension:200,fontsize:15,percent:50,animationstep:1,iconsize:"20px",iconcolor:"#999",border:"default",complete:null},b);return this.each(function(){var w=["fgcolor","bgcolor","fill","width","dimension","fontsize","animationstep","endPercent","icon","iconcolor","iconsize","border"];var f={};var F="";var n=0;var t=a(this);var A=false;var v,G;t.addClass("circliful");e(t);if(t.data("text")!=undefined){v=t.data("text");if(t.data("icon")!=undefined){F=a("<i></i>").addClass("fa "+a(this).data("icon")).css({color:f.iconcolor,"font-size":f.iconsize})}if(t.data("type")!=undefined){j=a(this).data("type");if(j=="half"){s(t,"circle-text-half",(f.dimension/1.45))}else{s(t,"circle-text",f.dimension)}}else{s(t,"circle-text",f.dimension)}}if(a(this).data("total")!=undefined&&a(this).data("part")!=undefined){var I=a(this).data("total")/100;percent=((a(this).data("part")/I)/100).toFixed(3);n=(a(this).data("part")/I).toFixed(3)}else{if(a(this).data("percent")!=undefined){percent=a(this).data("percent")/100;n=a(this).data("percent")}else{percent=c.percent/100}}if(a(this).data("info")!=undefined){G=a(this).data("info");if(a(this).data("type")!=undefined){j=a(this).data("type");if(j=="half"){D(t,0.9)}else{D(t,1.25)}}else{D(t,1.25)}}a(this).width(f.dimension+"px");var i=a("<canvas></canvas>").attr({width:f.dimension,height:f.dimension}).appendTo(a(this)).get(0);var g=i.getContext("2d");var r=i.width/2;var q=i.height/2;var C=f.percent*360;var H=C*(Math.PI/180);var l=i.width/2.5;var B=2.3*Math.PI;var z=0;var E=false;var o=f.animationstep===0?n:0;var p=Math.max(f.animationstep,0);var u=Math.PI*2;var h=Math.PI/2;var j="";var k=true;if(a(this).data("type")!=undefined){j=a(this).data("type");if(j=="half"){B=2*Math.PI;z=3.13;u=Math.PI*1;h=Math.PI/0.996}}function s(J,x,y){a("<span></span>").appendTo(J).addClass(x).text(v).prepend(F).css({"line-height":y+"px","font-size":f.fontsize+"px"})}function D(y,x){a("<span></span>").appendTo(y).addClass("circle-info-half").css("line-height",(f.dimension*x)+"px")}function e(x){a.each(w,function(y,J){if(x.data(J)!=undefined){f[J]=x.data(J)}else{f[J]=a(c).attr(J)}if(J=="fill"&&x.data("fill")!=undefined){A=true}})}function m(x){g.clearRect(0,0,i.width,i.height);g.beginPath();g.arc(r,q,l,z,B,false);g.lineWidth=f.width+1;g.strokeStyle=f.bgcolor;g.stroke();if(A){g.fillStyle=f.fill;g.fill()}g.beginPath();g.arc(r,q,l,-(h),((u)*x)-h,false);if(f.border=="outline"){g.lineWidth=f.width+13}else{if(f.border=="inline"){g.lineWidth=f.width-13}}g.strokeStyle=f.fgcolor;g.stroke();if(o<n){o+=p;requestAnimationFrame(function(){m(Math.min(o,n)/100)},t)}if(o==n&&k&&typeof(b)!="undefined"){if(a.isFunction(b.complete)){b.complete();k=false}}}m(o/100)})}}(jQuery));


$(".btn-button").click(function(){
  $("."+$(this).attr("data-class")).toggleClass("active");
  $(this).toggleClass("active");
});


var mediaQuery = window.matchMedia('(min-width: 1390px)');

if (mediaQuery.matches) {
	// Paralax
	$( document ).on( 'mousemove', function( e ) {
	            var amountMovedX = 200 - 30 * ( (e.pageX + 1) / $( document ).width() );
	            var amountMovedY = 200 - 30 * ( (e.pageY + 1) / $( window ).height() );

	            $( '#move-object' ).css( {'margin-right': '-' + amountMovedX + 'px', 'margin-top' : '-' + amountMovedY + 'px' });
	} );
}

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
