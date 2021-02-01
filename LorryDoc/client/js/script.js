
// Ajax used to recieve data from server
$.ajax({url: "http://localhost:3000/getdata",
crossDomain: true,
success: function(symptoms2Table){
    console.log(symptoms2Table[2]);

    // Result looped, each given an index and value
    $.each(symptoms2Table, function( index, value ) {
        console.log(value+index)
    });
    console.log(symptoms2Table)

    // Get element "See"-button
    var seeBtn = document.getElementById('btn-see');

    // Add eventListener to "See"-button
    seeBtn.addEventListener('click', function(){

        // Get selected div for later placement
        var symptoms2List = document.getElementById('symptoms2');

        // Create new button element, add symptoms2Table from database as innerHTML, set attribute
        var smokeBtn = document.createElement('button');
        smokeBtn.innerHTML = symptoms2Table[0];
        smokeBtn.setAttribute('id', smokeBtn);
        smokeBtn.setAttribute('class', 'rounded w3-button w3-blue w3-padding-large m-2');
        smokeBtn.style.display = "block";

        var leakBtn = document.createElement('button');
        leakBtn.innerHTML = symptoms2Table[1];
        leakBtn.setAttribute('id', leakBtn);
        leakBtn.setAttribute('class', 'rounded w3-button w3-blue w3-padding-large m-2');
        leakBtn.style.display = "block";

        var tireBtn = document.createElement('button');
        tireBtn.innerHTML = symptoms2Table[2];
        tireBtn.setAttribute('id', tireBtn);
        tireBtn.setAttribute('class', 'rounded w3-button w3-blue w3-padding-large m-2');
        tireBtn.style.display = "block";

        var warningBtn = document.createElement('button');
        warningBtn.innerHTML = symptoms2Table[3];
        warningBtn.setAttribute('id', warningBtn);
        warningBtn.setAttribute('class', 'rounded w3-button w3-blue w3-padding-large m-2');
        warningBtn.style.display = "block";

        // Append newly created button to div
        symptoms2List.appendChild(smokeBtn);
        symptoms2List.appendChild(leakBtn);
        symptoms2List.appendChild(tireBtn);
        symptoms2List.appendChild(warningBtn);

        var symptomsList = document.getElementById('symptoms');

        symptomsList.style.display = "none";
        symptoms2List.style.display = "block";


    });
    


}});