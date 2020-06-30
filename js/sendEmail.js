function sendMail(contactForm) {
    emailjs.send("gmail", "uganda", {
        "from_name": contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "about_uganda": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });

}