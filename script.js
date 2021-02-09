$(document).ready(function (){
    $("button").click(greeting);
});
function greeting(e){
    e.preventDefault();
    //Hello, Rank, First Name Last Name
    let rank = ($("input[name=rank]").val()).data("color");
    let firstName = $("input#firstname").val();
    let lastName= $("input#lastname").val();
    $("p#greeting").text(`Hello, ${rank} ${firstName} ${lastName}.`);
}
