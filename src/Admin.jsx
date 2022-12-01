import Mailjet from 'node-mailjet';
import React, { useEffect } from 'react'

const mailjet = new Mailjet({
   apiKey: '07ac58e575dd1452a6a67839c5810966',
   apiSecret: '610651e00f8431746ab2b222c9a507dd'
});

export default function Admin() {

   const [loading, setLoading] = React.useState(true);

   useEffect(() => {

      if (localStorage.getItem('adminPass') !== "qwerty") {
         window.location.href = "/"
         return;
      }
      setLoading(false)

   }, [])

   const sendMail = () => {
      const request = mailjet
         .post('send', { version: 'v3.1' })
         .request({
            Messages: [
               {
                  From: {
                     Email: "pilot@mailjet.com",
                     Name: "Mailjet Pilot"
                  },
                  To: [
                     {
                        Email: "passenger1@mailjet.com",
                        Name: "passenger 1"
                     }
                  ],
                  Subject: "Your email flight plan!",
                  TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                  HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
               }
            ]
         })

      request
         .then((result) => {
            console.log(result.body)
         })
         .catch((err) => {
            console.log(err.statusCode)
         })
   }

   return (
      <div>
         {
            loading ? <div className='mt-5 text-center fw-bold h5'>Loading...</div> :
               <div>
                  Admin
                  <button onClick={sendMail} className='btn btn-primary' >Send</button>
               </div>

         }
      </div>
   )
}
