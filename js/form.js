 $(document).ready(function () {
            $("#submit_contact").click(function () {
                debugger;
                let name = $("#name").val();
                let email = $("#email").val();
                let message = $("#message").val();
                let nameRegex = /^[a-z A-Z,.'-]+$/;
                let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if( (!nameRegex.test(name))|| (!emailRegex.test(email)) || (message == "" || message == undefined)) 
            {
                if (!nameRegex.test(name)) {
                    $("#name-error-message").html("Please enter the Name");
                } else {
                    $("#name-error-message").hide();
                }
                if (!emailRegex.test(email)) {
                    $("#email-error-message").html("Please enter the valid Email");
                } else {
                    $("#email-error-message").hide();
                } 
                if (message == "" || message == undefined) {
                    $("#message-error-message").html("Please enter the Message");
                }
                else {
                    $("#message-error-message").hide();
                }
            }
            else {
                $("#name-error-message").hide();
                $("#email-error-message").hide();
                $("#message-error-message").hide();
                $("#name").val("");
                $("#email").val("");
                $("#message").val("");
                $("#alert").html("Your message has been sent. We will reply soon. Thank you!");
                let contact =
                {
                    websiteName: "Yafanew",
                    name: name,
                    emailId: email,
                    message: message
                };
                  
                  fetch('https://website-mail-service.vercel.app/',{
                    method: "POST",
                    body: JSON.stringify(contact),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                  })
                  .then(response => response.json()) 
                  .then(json => console.log(json));
            } 
            });
        });
