const pr = new Promise((resolve, reject) => {
    console.log("fetching user");

    setTimeout(() => {
        resolve({
            id:1, 
            name: "kapil"
        })
    }, 2000)
});

pr.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
})