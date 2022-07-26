console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("push recieved");
  const options = {
    body : data.body,
    icon : "https://www.nitm.ac.in/p/logo"
  }
  console.log(data);
  self.registration.showNotification(data.title,options);
});
