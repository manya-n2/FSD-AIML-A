//SYNCHRONOUS
function sleepSync(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

function login() {
  console.log("Login started");
  sleepSync(2000);
  console.log("Login end");
}

function getData() {
  console.log("Get Data started");
  sleepSync(8000);
  console.log("Get Data end");
}

function calculateData() {
  console.log("Calculate Data started");
  sleepSync(3000);
  console.log("Calculate Data end");
}

function sendSMS() {
  console.log("Send SMS started");
  sleepSync(1000);
  console.log("Send SMS end");
}

function logout() {
  console.log("Logout started");
  sleepSync(1000);
  console.log("Logout end");
}

function runSyncFlow() {
  login();
  getData();
  calculateData();
  sendSMS();
  logout();
  console.log("Synchronous flow completed");
}
function login() {
  return new Promise(resolve => {
    console.log("Login started");
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 2000);
  });
}

function getData() {
  return new Promise(resolve => {
    console.log("Get Data started");
    setTimeout(() => {
      console.log("Get Data end");
      resolve();
    }, 8000);
  });
}

function calculateData() {
  return new Promise(resolve => {
    console.log("Calculate Data started");
    setTimeout(() => {
      console.log("Calculate Data end");
      resolve();
    }, 3000);
  });
}

function sendSMS() {
  return new Promise(resolve => {
    console.log("Send SMS started");
    setTimeout(() => {
      console.log("Send SMS end");
      resolve();
    }, 1000);
  });
}
