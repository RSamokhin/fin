

function showOperations()
{
    var data = {
        title: "123",
        value: "1234"
    };

    alert(template(data));
}

document.body.addEventListener('click', function(){
    showOperations();
});