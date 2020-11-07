google.charts.load('current', {
    'packages': ['map']
}, { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawChart);

//data is formatted for google map

var origData = [
    ['Lat', 'Long', 'Name', 'Hiking'],
    [32.240731, -99.879139, 'Abilene State Park', 'Yes'],
    [33.230731, -94.249693, 'Atlanta State Park', 'Yes'],
    [30.945036, -103.786663, 'Balmorhea State Park', 'No'],
    [29.269902, -103.757351, 'Barton Warnock Visitor Center', 'Yes'],
    [30.110149, -97.286864, 'Bastrop State Park', 'Yes'],
    [29.75581, -95.090349, 'Battleship Texas State Historic Site', 'No'],
    [26.186987, -98.381888, 'Bentsen-Rio Grande Valley State Park', 'Yes'],
    [29.470458, -103.957922, 'Big Bend Ranch State Park', 'Yes'],
    [32.232288, -101.490728, 'Big Spring State Park', 'Yes'],
    [30.093082, -98.423845, 'Blanco State Park', 'Yes'],
    [33.546727, -96.144758, 'Bonham State Park', 'Yes'],
    [29.371, -95.631921, 'Brazos Bend State Park', 'Yes'],
    [30.039098, -97.158295, 'Buescher State Park', 'Yes'],
    [32.680233, -94.176361, 'Caddo Lake State Park', 'Yes'],
    [34.410296, -101.053264, 'Caprock Canyons State Park', 'Yes'],
    [32.621721, -96.979087, 'Cedar Hill State Park', 'Yes'],
    [28.465773, -98.354195, 'Choke Canyon State Park', 'Yes'],
    [32.252365, -97.549617, 'Cleburne State Park', 'Yes'],
    [31.022965, -98.442401, 'Colorado Bend State Park', 'Yes'],
    [33.28773, -95.65792, 'Cooper Lake State Park', 'Yes'],
    [34.112176, -99.743296, 'Copper Breaks State Park', 'Yes'],
    [33.013, -94.690587, 'Daingerfield State Park', 'Yes'],
    [30.599103, -103.92945, 'Davis Mountains State Park', 'Yes'],
    [30.015773, -100.208552, 'Devils Sinkhole State Natural Area (Rocksprings Visitor Center)', 'No'],
    [29.939694, -100.970206, 'Devils River State Natural Area', 'Yes'],
    [32.246194, -97.813375, 'Dinosaur Valley State Park', 'Yes'],
    [33.810339, -96.599971, 'Eisenhower State Park', 'Yes'],
    [30.496033, -98.819952, 'Enchanted Rock State Natural Area', 'Yes'],
    [26.126411, -97.956518, 'Estero Llano Grande State Park', 'Yes'],
    [31.765346, -96.073282, 'Fairfield Lake State Park', 'Yes'],
    [26.582801, -99.142716, 'Falcon State Park', 'Yes'],
    [31.187372, -95.976646, 'Fort Boggy State Park', 'Yes'],
    [29.542511, -104.326348, 'Fort Leaton State Historic Site', 'Yes'],
    [31.592347, -96.526655, 'Fort Parker State Park', 'Yes'],
    [33.206158, -98.156966, 'Fort Richardson State Park & Historic Site / Lost Creek Reservoir State Trailway', 'Yes'],
    [31.842388, -106.486444, 'Franklin Mountains State Park', 'Yes'],
    [29.198755, -94.956212, 'Galveston Island State Park', 'Yes'],
    [29.598887, -99.743981, 'Garner State Park', 'Yes'],
    [28.656544, -97.387265, 'Goliad State Park & Historic Site', 'Yes'],
    [28.133503, -96.98428, 'Goose Island State Park', 'Yes'],
    [29.549316, -98.764715, 'Government Canyon State Natural Area', 'Yes'],
    [29.853084, -98.504463, 'Guadalupe River State Park', 'Yes'],
    [29.628034, -99.181086, 'Hill Country State Natural Area', 'Yes'],
    [29.863258, -98.489913, 'Honey Creek State Natural Area', 'No'],
    [31.926453, -106.042437, 'Hueco Tanks State Park & Historic Site', 'Yes'],
    [30.628404, -95.525921, 'Huntsville State Park', 'Yes'],
    [30.592638, -103.943469, 'Indian Lodge', 'Yes'],
    [30.737356, -98.369007, 'Inks Lake State Park', 'Yes'],
    [29.610016, -100.452465, 'Kickapoo Cavern State Park', 'Yes'],
    [33.758578, -98.395201, 'Lake Arrowhead State Park', 'Yes'],
    [33.053955, -95.099155, 'Lake Bob Sandlin State Park', 'Yes'],
    [31.856987, -99.028641, 'Lake Brownwood State Park', 'Yes'],
    [27.539343, -99.451383, 'Lake Casa Blanca International State Park', 'Yes'],
    [32.318219, -100.936476, 'Lake Colorado City State Park', 'Yes'],
    [28.063101, -97.872178, 'Lake Corpus Christi State Park', 'Yes'],
    [30.656897, -95.001093, 'Lake Livingston State Park', 'Yes'],
    [32.812655, -98.043368, 'Lake Mineral Wells State Park', 'Yes'],
    [30.308582, -96.634692, 'Lake Somerville State Park - Birch Creek Unit', 'Yes'],
    [32.841871, -95.993667, 'Lake Tawakoni State Park', 'Yes'],
    [31.931234, -97.356833, 'Lake Whitney State Park', 'Yes'],
    [29.855409, -97.697742, 'Lockhart State Park', 'Yes'],
    [30.684441, -98.35097, 'Longhorn Cavern State Park', 'Yes'],
    [29.807719, -99.570697, 'Lost Maples State Natural Area', 'Yes'],
    [30.237656, -98.626279, 'Lyndon B. Johnson State Park & Historic Site', 'Yes'],
    [32.27795, -94.566051, 'Martin Creek Lake State Park', 'Yes'],
    [30.846627, -94.165869, 'Martin Dies, Jr. State Park', 'Yes'],
    [30.180752, -97.722007, 'Mckinney Falls State Park', 'Yes'],
    [31.890791, -97.697566, 'Meridian State Park', 'Yes'],
    [31.542272, -95.232191, 'Mission Tejas State Park', 'Yes'],
    [31.618795, -102.812112, 'Monahans Sandhills State Park', 'Yes'],
    [31.321559, -97.46915, 'Mother Neff State Park', 'Yes'],
    [27.672162, -97.175309, 'Mustang Island State Park', 'Yes'],
    [30.101079, -98.820704, 'Old Tunnel State Park', 'Yes'],
    [29.596906, -97.58514, 'Palmetto State Park', 'Yes'],
    [34.984709, -101.701867, 'Palo Duro Canyon State Park', 'Yes'],
    [30.308054, -98.257649, 'Pedernales Falls State Park', 'Yes'],
    [32.873573, -98.559331, 'Possum Kingdom State Park', 'Yes'],
    [32.353794, -95.993554, 'Purtis Creek State Park', 'Yes'],
    [33.429802, -97.056449, 'Ray Roberts Lake State Park - Johnson Branch Unit', 'Yes'],
    [25.996275, -97.5712694, 'Resaca de la Palma State Park', 'Yes'],
    [31.463922, -100.508038, 'San Angelo State Park', 'Yes'],
    [29.675539, -94.043525, 'Sea Rim State Park', 'Yes'],
    [29.700094, -101.312875, 'Seminole Canyon State Park & Historic Site', 'Yes'],
    [29.857461, -95.160029, 'Sheldon Lake State Park & Environmental Learning Center', 'Yes'],
    [30.445396, -99.804102, 'South Llano River State Park', 'Yes'],
    [29.811982, -96.108059, 'Stephen F. Austin State Park', 'Yes'],
    [32.48218, -95.283396, 'Tyler State Park', 'Yes'],
    [30.250499, -94.1787, 'Village Creek State Park', 'Yes'],
    [31.80939, -106.478426, 'Wyler Aerial Tramway', 'No']
];

function drawChart() {

    //form to change based on dropdown

    selection = document.getElementById("thedropdown").value;

    //if 0 selected, maps everything
    if (selection == 0) {

        document.getElementById("tableWrapper").style.display = "none";

        // creates visualization using newData array
        var options = {
            mapType: 'normal',
            showInfoWindow: true,
        }

        var data = google.visualization.arrayToDataTable(origData);
        var map = new google.visualization.Map(document.getElementById('map_div'));
        map.draw(data, options);


    }

    // if there is a selection
    else {

        document.getElementById("tableWrapper").style.display = "block";
        //start a new array to include only data that is selected
        var newData = [
            ['Lat', 'Long', 'Name', 'Hiking']
        ];

        //ISSUE STARTS HERE
        //loop to go match selection and create a new array
        for (i = 0; i < origData.length; i++) {
            if (origData[i][3] == selection) {
                // only data that meets the selection criteria goes into newData array
                let sort = newData.push(origData[i]);

                //Count total numbers in loop
                let count = sort.length;

                //Result = count / by total (pre determined number)
                let result = count / 89
                console.log(result);
            } //end if

        } //end for

        //clears out answer div in html

        document.getElementById("mapanswer").innerHTML = " ";

        //loop that writes the data in newData, line by line with breaks.
        for (i = 1; i < newData.length; i++) {
            document.getElementById("mapanswer").innerHTML += "<tr><td>" + newData[i][2] + "</td><td>" + newData[i][3] + "</td></tr>";
        }
        var options = {
            mapType: 'normal',
            showInfoWindow: true,
        }

        // creates visualization using newData array
        var data = google.visualization.arrayToDataTable(newData);
        var map = new google.visualization.Map(document.getElementById('map_div'));
        map.draw(data, options);

    } // end else

} //end function
