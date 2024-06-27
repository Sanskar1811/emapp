const express = require("express") ; 
const cors = require("cors") ;
const nodemailer = require("nodemailer") ;

app = express();
app.use(cors());
app.use(express.json());

app.post("/sem" , (req , res ) => {
	let data = [ req.body.name , req.body.phone , req.body.query ] ;
	let name = req.body.name ; 
	let txt = "Phone = " + req.body.phone + " and " +  " Query = " + req.body.query ; 
		
	const transporter = nodemailer.createTransport({
  service: "gmail",
      auth: {
    user: "sanskargawade85@gmail.com",
    pass: "gbtnnycngaoccbby",
  },
});


const mailOptions = {
  from: 'sanskargawade85@gmail.com',
  to: 'neetsbelgum@gmail.com',
  subject: 'Enquiry from : ' + name ,
  text: txt
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error: " , error);
    res.status(500).json(error);
    
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).json("Mail send");
  }
});	


});


app.listen(9000 , ()=> { console.log("Ready to serve @ 9000"); }) ; 
