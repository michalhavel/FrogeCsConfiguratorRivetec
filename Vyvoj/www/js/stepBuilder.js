
// function getForgeToken(callback) {
//     jQuery.ajax({
//       url: '/user/token',
//       success: function (res) {
//         console.log('res de token client', res);
//         callback(res.access_token, res.expires_in)
//       }
//     });

//   }

// Button_Click
document.getElementById("exportStepBtn").addEventListener(
    "click",
    function () {
        generateStep(
            function (stepUrl) {
                console.log('Click: ' + stepUrl);
                // downloadStep( '<head></head><body>' + stepUrl + '</body>');
                downloadStep('https://www.cadstudio.cz' );
            })
    }
 
)


// document.getElementById("exportStepBtn").addEventListener(
//     "click", 
//     generateStep(function(stepUrl){
//         console.log('asdfgfdsaASDFGFDS');
//         alert(stepUrl);
//     }))

function downloadStep(stepUrl){
    window.open(stepUrl);
}

function generateStep(callback) {
    console.log("Start generateStep(callback)");
    jQuery.ajax({
        url: '/step/generate',
        success: function (res) {
            console.log('Generate step file (client) - ' + res);
            callback(res.stepUrl)
        }
    });

}



