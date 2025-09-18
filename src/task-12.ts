function sendDoneStatus(callback: (status: string) => void): void {
    callback("done");
}

console.log(sendDoneStatus);

