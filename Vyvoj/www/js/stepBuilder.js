
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
        // generateStep(
        //     function (stepUrl) {
        //         console.log('Click: ' + stepUrl);
        //         // downloadStep( '<head></head><body>' + stepUrl + '</body>');
        //         downloadStep('https://www.cadstudio.cz' );
        //     })
        getRivets(
            function (rivetsJson) {
                console.log(rivetsJson);
                openWindow(rivetsJson);
            }
        )
    }

)


// document.getElementById("exportStepBtn").addEventListener(
//     "click", 
//     generateStep(function(stepUrl){
//         console.log('asdfgfdsaASDFGFDS');
//         alert(stepUrl);
//     }))

function openWindow(stepUrl) {
    window.open(stepUrl);
}

function generateStep(callback) {
    console.log("Start generateStep(callback)");
    jQuery.ajax({
        url: '/step/generate',
        success: function (res) {
            console.log('Generate step file (client) - ' + res);
            callback(res.stepUrl)
        },

    });

}


function getRivets(callback) {
    console.log("Start getRivets(callback)");
    
    jQuery.ajax({
        url: '/step/getrivets',
        success: function (res) {
            console.log('getRivets done', res);
            callback(res)
        },
        error: function (jqxhr, textStatus, errThrown) {
            console.log('Error: ' + textStatus + ' errThrown: ' + errThrown);
            callback('Error callback');
        }
    });

}


// function getRivets(callback) {
//     console.log("Start getRivets(callback)");
//     jQuery.ajax({
//         url: '/step/getrivets',
//         success: function (res, textStatus) {
//             console.log('success getRivets(callback)');
//             console.log(textStatus);
//             var resAsString = JSON.stringify(res);
//             console.log('Rivets portfolio - ' + res);
//             callback(res);
//         },
//         //async: false,
//         error: function (jqxhr, textStatus, errThrown) { console.log('Error: ' + textStatus) },
//         complete: function (jqxhr, textStatus) { console.log('Complete: ' + textStatus) }
//     });

// }



