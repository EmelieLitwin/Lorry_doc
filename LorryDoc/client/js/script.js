
//////////////////// CREATING STEP 2 IN USER FLOW ////////////////////

// Ajax used to recieve "symptoms2Table" data from server
$.ajax({url: "http://localhost:3000/getdata",
crossDomain: true,
success: function(symptoms2Table){


    // Get element "See" button
    var seeBtn = document.getElementById('btn-see');

    // Add eventListener to "See" button
    seeBtn.addEventListener('click', function(){

        // Get selected div for later placement
        var symptoms2List = document.getElementById('symptoms2');

        // Create new button elements, add symptoms2Table from database as innerHTML, set attributes
        var smokeBtn = document.createElement('button');
        smokeBtn.innerHTML = symptoms2Table[0];
        smokeBtn.setAttribute('id', 'smokeBtn');
        smokeBtn.setAttribute('class', 'btns');
        smokeBtn.style.display = "block";

        var leakBtn = document.createElement('button');
        leakBtn.innerHTML = symptoms2Table[1];
        leakBtn.setAttribute('id', 'leakBtn');
        leakBtn.setAttribute('class', 'btns');
        leakBtn.style.display = "block";

        var tireBtn = document.createElement('button');
        tireBtn.innerHTML = symptoms2Table[2];
        tireBtn.setAttribute('id', 'tireBtn');
        tireBtn.setAttribute('class', 'btns');
        tireBtn.style.display = "block";

        var warningBtn = document.createElement('button');
        warningBtn.innerHTML = symptoms2Table[3];
        warningBtn.setAttribute('id', 'warningBtn');
        warningBtn.setAttribute('class', 'btns');
        warningBtn.style.display = "block";

        // Append newly created buttons to div
        symptoms2List.appendChild(smokeBtn);
        symptoms2List.appendChild(leakBtn);
        symptoms2List.appendChild(tireBtn);
        symptoms2List.appendChild(warningBtn);

        // Get initial symptoms list
        var symptomsList = document.getElementById('symptoms');

        // Hide initial symptoms list, show newly created symptoms2List
        symptomsList.style.display = "none";
        symptoms2List.style.display = "block";
        


//////////////////// CREATING STEP 3 IN USER FLOW ////////////////////

        // Ajax used to recieve data from server
        $.ajax({url: "http://localhost:3000/getnextdata",
        crossDomain: true,
        success: function(symptoms3Table){


            // Add eventListener to "Smoke" button
            smokeBtn.addEventListener('click', function(){

                // Get selected div for later placement
                var symptoms3List = document.getElementById('symptoms3');

                // Create new button elements, add symptoms3Table from database as innerHTML, set attributes
                var engineBtn = document.createElement('button');
                engineBtn.innerHTML = symptoms3Table[0];
                engineBtn.setAttribute('id', 'engineBtn');
                engineBtn.setAttribute('class', 'btns');
                engineBtn.style.display = "block";

                var exhaustBtn = document.createElement('button');
                exhaustBtn.innerHTML = symptoms3Table[1];
                exhaustBtn.setAttribute('id', 'exhaustBtn');
                exhaustBtn.setAttribute('class', 'btns');
                exhaustBtn.style.display = "block";


                // Append newly created buttons to div
                symptoms3List.appendChild(engineBtn);
                symptoms3List.appendChild(exhaustBtn);


                // Hide symptoms2List, show newly created symptoms3List
                symptoms2List.style.display = "none";
                symptoms3List.style.display = "block";



//////////////////// CREATING STEP 4 IN USER FLOW ////////////////////

                // Ajax used to recieve data from server
                $.ajax({url: "http://localhost:3000/getlastdata",
                crossDomain: true,
                success: function(resolution){


                    // Add eventListener to "Engine" button
                    engineBtn.addEventListener('click', function(){

                        // Get selected div for later placement
                        var resolutionList = document.getElementById('solution-description');
                        var solution = document.getElementById('solution');
                        var mechanic = document.getElementById('mechanic');


                        // Create new button elements, add symptoms3Table from database as innerHTML, set attributes
                        var resolutionDescription = document.createElement('p');
                        resolutionDescription.innerHTML = resolution[0];
                        resolutionDescription.setAttribute('id', 'resolutionDescription');
                        resolutionDescription.setAttribute('class', 'card-text');


                        // Append newly created buttons to div
                        resolutionList.appendChild(resolutionDescription);


                        // Hide symptoms2List, show newly created symptoms3List
                        symptoms3List.style.display = "none";
                        solution.style.display = "block";
                        resolutionList.style.display = "block";
                        mechanic.style.display = "block";
                        mechanic.style.textAlign = "center";


                    });

                }});



            });

        }});

    });

}});

