
//////////////////// CREATING STEP 2 IN USER FLOW ////////////////////

// Ajax used to recieve "symptoms2Table" data from server
$.ajax({
    url: "http://localhost:3000/getdata",
    crossDomain: true,
    success: function (symptoms2Table) {
        // Get selected div for later placement
        var symptoms2List = document.getElementById('symptoms2');
        // Get element "See" button
        var seeBtn = document.getElementById('btn-see');
        // Add eventListener to "See" button
        seeBtn.addEventListener('click', function () {
            //Creates an array with IDs for button elements
            let idArray = ['smokeBtn', 'leakBtn', 'tireBtn', 'warningBtn']
            //Looping through table to create a button for every symptom that matches previous choice (3=see)
            for (var i = 0; i < symptoms2Table.length; i++) {
                if (symptoms2Table[i].symptoms_id == '3') {
                    var btn = document.createElement("button");
                    btn.innerHTML = symptoms2Table[i].description;
                    btn.setAttribute('class', 'btns')
                    btn.setAttribute('id', idArray[i])
                    symptoms2.appendChild(btn);
                    let linebreak = document.createElement("br");
                    symptoms2.appendChild(linebreak);
                } else {
                    //If the object doesn't match previous choice it's removed from the array
                    symptoms2Table.splice(i, 1)
                }
            }
            // Get initial symptoms list
            var symptomsList = document.getElementById('symptoms');

            // Hide initial symptoms list, show newly created symptoms2List
            symptomsList.style.display = "none";
            symptoms2List.style.display = "block";



            //////////////////// CREATING STEP 3 IN USER FLOW ////////////////////

            // Ajax used to recieve data from server
            $.ajax({
                url: "http://localhost:3000/getnextdata",
                crossDomain: true,
                success: function (symptoms3Table) {
                    // Add eventListener to "Smoke" button
                    smokeBtn.addEventListener('click', function () {
                        // Get selected div for later placement
                        var symptoms3List = document.getElementById('symptoms3');
                        //Creates an array with IDs for button elements
                        let idArray = ['engineBtn', 'exhaustBtn']
                        //Looping through table to create a button for every symptom that matches ID from previous table
                        for (var i = 0; i < symptoms3Table.length; i++) {
                            if (symptoms3Table[i].symptoms2_id == symptoms2Table[0].idSymptoms2) {
                                var btn = document.createElement("button");
                                btn.innerHTML = symptoms3Table[i].description;
                                btn.setAttribute('class', 'btns')
                                btn.setAttribute('id', idArray[i])
                                symptoms3List.appendChild(btn);
                                let linebreak = document.createElement("br");
                                symptoms3List.appendChild(linebreak);
                            } else {
                                //If the object doesn't match previous choice it's removed from the array
                                symptoms3Table.splice(i, 1)

                            }
                        }

                        // Hide symptoms2List, show newly created symptoms3List
                        symptoms2List.style.display = "none";
                        symptoms3List.style.display = "block";



                        //////////////////// CREATING STEP 4 IN USER FLOW ////////////////////

                        // Ajax used to recieve data from server
                        $.ajax({
                            url: "http://localhost:3000/getlastdata",
                            crossDomain: true,
                            success: function (resolutionArr) {
                                // Add eventListener to "Engine" button
                                engineBtn.addEventListener('click', function () {
                                    // Get selected div for later placement
                                    var resolutionList = document.getElementById('solution-description');
                                    var solution = document.getElementById('solution');
                                    var mechanic = document.getElementById('mechanic');
                                    //Looping through table to create a button for every solution that matches ID from previous table
                                    for (var i = 0; i < resolutionArr.length; i++) {
                                        if (resolutionArr[i].idSymptoms3 == symptoms3Table[0].solution_id) {

                                            var resolutionDescription = document.createElement("p");
                                            var resolution = document.createElement("h5");
                                            resolution.innerHTML = i + 1 + '. ' + resolutionArr[i].suggestion;
                                            resolution.setAttribute('class', 'card-title')
                                            resolutionDescription.innerHTML = resolutionArr[i].description;
                                            resolutionDescription.setAttribute('class', 'card-text')
                                            resolutionList.appendChild(resolution);
                                            resolutionList.appendChild(resolutionDescription);
                                            let line = document.createElement("hr");
                                            resolutionList.appendChild(line);

                                        } else {
                                            //If the object doesn't match previous choice it's removed from the array
                                            resolutionArr.splice(i, 1)
                                        }
                                    }

                                    // Hide symptoms2List, show newly created symptoms3List
                                    symptoms3List.style.display = "none";
                                    solution.style.display = "block";
                                    resolutionList.style.display = "block";
                                    mechanic.style.display = "block";
                                    mechanic.style.textAlign = "center";


                                });

                            }
                        });



                    });

                }
            });

        });

    }
});

