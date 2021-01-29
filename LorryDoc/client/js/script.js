
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
}});