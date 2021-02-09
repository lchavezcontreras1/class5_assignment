$(document).ready(
    function (){
    $("button").click(greeting);
    });
function greeting(e) {
    e.preventDefault();
    let rank = ($("input[name=rank]").val()).data("color");
    let firstName = $("input#firstname").val();
    let lastName= $("input#lastname").val();
    $("span#greeting").text(`Hello, ${rank} ${firstName} ${lastName}.`);
}
