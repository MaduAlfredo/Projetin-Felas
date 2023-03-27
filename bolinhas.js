 var bolinhaA = document.getElementById('pa');
var bolinhaB = document.getElementById('poltrona');
var bolinhaC = document.getElementById('sol');
var bolinhaD = document.getElementById('ferramentas');
var bolinhaE = document.getElementById('mesa');

var aumento = 1.1;

bolinhaA.onmouseover = function () { this.style.width = (this.clientWidth * aumento) + "px"; };
bolinhaA.onmouseout = function () { this.style.width = (this.clientWidth / aumento) + "px"; };

 bolinhaB.onmouseover = function () { this.style.width = (this.clientWidth * aumento) + "px"; };
 bolinhaB.onmouseout = function () { this.style.width = (this.clientWidth / aumento) + "px"; };

 bolinhaC.onmouseover = function () { this.style.width = (this.clientWidth * aumento) + "px"; }; 
bolinhaC.onmouseout = function () { this.style.width = (this.clientWidth / aumento) + "px"; };

bolinhaD.onmouseover = function () { this.style.width = (this.clientWidth * aumento) + "px"; };
 bolinhaD.onmouseout = function () { this.style.width = (this.clientWidth / aumento) + "px"; };

bolinhaE.onmouseover = function () { this.style.width = (this.clientWidth * aumento) + "px"; };
 bolinhaE.onmouseout = function () { this.style.width = (this.clientWidth / aumento) + "px"; };
