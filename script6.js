function calculate() {
    var mode = document.getElementById("mode").value;
    var distance = parseFloat(document.getElementById("distance").value);
    var result = document.getElementById("result");

    var emissionsPerKm = {
        walking: 0, // Assume negligible emissions for walking
        public_transport: 0.03, // Hypothetical value for public transport emissions per km
        carpooling: 0.15, // Hypothetical value for carpooling emissions per km
        personal_vehicle: 0.2 // Hypothetical value for personal vehicle emissions per km
    };

    var totalEmissions = emissionsPerKm[mode] * distance;

    result.innerHTML = "<p>Total emissions: " + totalEmissions.toFixed(2) + " kg CO2</p>";
}
function navigate(){
    var target2="http://127.0.0.1:3000/index1.html";
    window.location.href=target2;
}