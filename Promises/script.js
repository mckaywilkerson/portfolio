



var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();


// 2nd promise
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
          if (isFriendHome) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
          }
          else {
            var error = new Error('Your friend is not home');
          }
        }
    );
};

// does the same thing as 2nd promise
var showOff2 = function (phone) {
  var message = 'Hey friend, I have a new ' +
    phone.color + ' ' + phone.brand + ' phone';

  return Promise.resolve(message);
};


var askMom2 = function() {
console.log('before asking Mom'); // log before
willIGetNewPhone
    .then(showOff)
    .then(function (fulfilled) {
        console.log(fulfilled);
    })
    .catch(function (error) {
        console.log(error.message);
    });
console.log('after asking mom'); // log after
};


// set it for button number four
document.getElementById("run4").addEventListener("click", function(event) {
  clear();
  doIt();
  output("we are about to call mom directly");
  askMom2();
});


(async () => {
    await askMom();
})();
// These 2 functions do the same thing (do bottom one)
async function doIt() {
  await askMom4();
};
