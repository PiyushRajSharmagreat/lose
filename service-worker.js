self.addEventListener('push', function(event) {
    const options = event.data.json();
    event.waitUntil(self.registration.showNotification(options.title, options));
});