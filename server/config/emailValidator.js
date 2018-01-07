const nodemailer = require("nodemailer");

module.exports = {
    createLink:() => {	
        let link = '';					
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 16; i > 0; --i) {
        link += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        console.log(link)
        return link
    },

    send:(link,req,email) => {
        /*
        Here we are configuring our SMTP Server details.
        STMP is mail server which is responsible for sending and recieving email.
        */
        var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "qwertuptest@gmail.com",
                pass: "passwordpassword"
            }
        });
        var mailOptions;
        /*------------------SMTP Over-----------------------------*/

        url="http://139.59.119.171/verify?id="+link;
        
        mailOptions={
            to : email,
            subject : "Young Founders School - Please confirm your Email account",
            html : `Hello,
            <br> Thank you for registering as a ${req.body.tier}.
            <br> Please click on the link to verify your email.
            <br><a href="${url}">Click here to verify</a>`
        }
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
            }
        }); 
    },
    reset:(link,req,email) => {
        /*
        Here we are configuring our SMTP Server details.
        STMP is mail server which is responsible for sending and recieving email.
        */
        var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "qwertuptest@gmail.com",
                pass: "passwordpassword"
            }
        });
        var mailOptions;
        /*------------------SMTP Over-----------------------------*/


        url="http://localhost:8000/passwordreset?id="+link;
        
        mailOptions={
            to : email,
            subject : "Young Founders School - Forgot your password? No worries",
            html : "Hello,<br> You recently requested to reset your password, so let’s get that sorted for you quickly.<br><a href="+url+">Click here to reset your password</a>" 
        }
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
            }
        }); 
    }
}

/*<html>
    <head>
    <title>Node.JS Email application</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
        var from,to,subject,text;
        $("#send_email").click(function(){      
            to=$("#to").val();      
            $("#message").text("Sending E-mail...Please wait");
            $.get("http://localhost:8000/send",{to:to},function(data){
            if(data=="sent")
            {
                $("#message").empty().html("<p>Email is been sent at "+to+" . Please check inbox !</p>");
            }
    
    });
        });
    });
    </script>
    <style>
    #container
    {
        margin-left:400px;
        margin-top:50px;
    }
    #to,#subject,#content
    {
        font-family: "Segoe UI";
        font-size:18px;
        width:530px;
    }
    h1
    {
        font-family: "Segoe UI";
        font-size:40px; 
        color: #3b5998;
    }
    p
    {
        color:green;
    }
    #send_email
    {
        font-size:15px;
        font-family: "Segoe UI";
    }
    #message
    {
        font-size:18px;
    }
    </style>
    </head>
    <body>
    <div id="container">
    <h1>Email-verification System in Node.js</h1>
    <input type="text" id="to" placeholder="Enter E-mail which you want to verify"><br>
    <button id="send_email">Send Email</button><br>
    <span id="message"></span>
    </div>
    </body>
    </html>
*/