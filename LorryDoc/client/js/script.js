
// Ajax used to recieve data from server
$.ajax({url: "http://localhost:3000/getdata",
crossDomain: true,
success: function(result){
    console.log(result[2]);

    // Result looped, each given an index and value
    $.each(result, function( index, value ) {
        console.log(value+index)
    });
    console.log(result)

    // Get element "See"-button
    var seeBtn = document.getElementById('btn-see');

    // Add eventListener to "See"-button
    seeBtn.addEventListener('click', function(){

        // Get selected div for later placement
        var symptoms2 = document.getElementById('symptoms2');

        // Create new button element, add result from database as innerHTML, set attribute
        var smokeBtn = document.createElement('button');
        smokeBtn.innerHTML = result[0];
        smokeBtn.setAttribute('id', smokeBtn);

        // Append newly created button to div
        symptoms2.appendChild(smokeBtn);

    });
    


}});