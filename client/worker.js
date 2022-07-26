console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  // var options = {
  //   body,
  //   icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  // };
  console.log("Push Recieved...");
  e.waitUntil(self.registration.showNotification(data.title, {body: data.body}));
});
