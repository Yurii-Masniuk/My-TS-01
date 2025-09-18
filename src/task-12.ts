type Callback = (message: string) => void;


function sendDoneStatus(callback: Callback): void {
    callback("done");
}

sendDoneStatus((message) => {
    console.log('Task status', message);
})

