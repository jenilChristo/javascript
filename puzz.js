function constfuncs() 
{
    var funcs = [];
    for(var i = 0; i < 10; i++)
        funcs[i] = function() { return i; };
    return funcs;
}
var funcs = constfuncs();
funcs[5]();

var var1 = "JavaScript";
(function()
 { 
    var var2 = " Scripting Language";
    alert(var1 + var2); 
 })();
alert(var1 + var2);


var a = []; 
a.unshift(1); 
a.unshift(22);
a.shift();


var name1 = "Hacker";
function DisplayName () 
{
var name2 = "Earth"; 
print(name2+name1); 
}
DisplayName();

var s = "7123456 or 90000?";
var pattern = /d{4}/;
var output = s.match(pattern);
document.write(output);