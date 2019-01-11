// Registration - Service Worker

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/serviceWorker.js', { scope: '/' })
    
        .then(function (registration) {

            if (registration.installing) {

                console.log('Service Worker - Status: Installing Process');

            } else if (registration.waiting) {

                console.log('Service Worker - Status: Installing Finish');

            } else if (registration.active) {

                console.log('Service Worker - Status: Active');

            }

        }).catch(function (error) {

            console.log('Registration failed with ' + error);

        });

}