//ASYNCHRONOUS
function logout() {
  return new Promise(resolve => {
    console.log("Logout started");
    setTimeout(() => {
      console.log("Logout end");
      resolve();
    }, 1000);
  });
}

function getData(){

}

async function runAsyncFlow() {
    await login();
    await getData();
    await sendSMS();
    await calculate

  console.log("Asynchronous flow completed");
}