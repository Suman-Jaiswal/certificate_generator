import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer';
import Mailjet from 'node-mailjet';
import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { participantsData } from './data';
import MyDocument from './MyDocument';

const mailjet = new Mailjet({
   apiKey: '07ac58e575dd1452a6a67839c5810966',
   apiSecret: '610651e00f8431746ab2b222c9a507dd'
});

export default function Admin() {

   const [loading, setLoading] = React.useState(true);
   const [state1, setState1] = React.useState(0);
   const [state2, setState2] = React.useState(0);
   const [state3, setState3] = React.useState(0);

   const [show, setShow] = React.useState(false);
   const [currentParticipant, setCurrentParticipant] = React.useState(null);

   const [participants1, setParticipants1] = React.useState(participantsData.filter(p => p.domain === "AI/ML").splice(0, 10));
   const [participants2, setParticipants2] = React.useState(participantsData.filter(p => p.domain === "Ethical Hacking").splice(0, 10));
   const [participants3, setParticipants3] = React.useState(participantsData.filter(p => p.domain === "Robotics and Internet of Things").splice(0, 10));

   useEffect(() => {

      // if (localStorage.getItem('adminPass') !== "qwerty") {
      //    window.location.href = "/"
      //    return;
      // }
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
                        Email: currentParticipant.email,
                        Name: currentParticipant.name
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

   console.log(participants1)

   useEffect(() => {
      setParticipants1(participantsData.filter(p => p.domain === "AI/ML").splice(10 * state1, 10));
   }, [state1])
   useEffect(() => {
      setParticipants2(participantsData.filter(p => p.domain === "Ethical Hacking").splice(10 * state2, 10));
   }, [state2])
   useEffect(() => {
      setParticipants3(participantsData.filter(p => p.domain === "Robotics and Internet of Things").splice(10 * state3, 10));
   }, [state3])

   const styles2 = StyleSheet.create({
      view: {
         position: "relative",
         width: "100%",
         height: "inherit",
      },
      img: {
         width: "100%",
         height: "100%",
      },
      name: {
         position: "absolute",
         top: "49%",
         width: "100%",
         textAlign: "center",
         fontSize: 200 / 15,
         fontWeight: "bold",
         color: "#555",
      }
   });

   const handleOpen = (participant) => {
      setCurrentParticipant(participant);
      setShow(true);
   }

   return (
      <div>
         {
            loading ? <div className='mt-5 text-center fw-bold h5'>Loading...</div> :
               <div className='container-fluid'>
                  <div className="d-flex justify-content-between">
                     <div className="" style={{ width: "31%" }}>
                        <div className="d-flex justify-content-evenly p-3">
                           <button disabled={state1 === 0} onClick={() => setState1(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                           <div className="p text-center"> <b> AI/ML</b> ({state1 * 10} - {state1 * 10 + 10}) </div>
                           <button disabled={state1 === 18} onClick={() => setState1(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}</button>
                        </div>
                        <div className="row">
                           {
                              participants1 && participants1.length > 0 && participants1.map((curr, i) =>
                                 <div key={i} className="col-6 p-2" style={{
                                    border: "1px dotted grey",
                                 }}>
                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                       <img src="2.png" alt='' style={styles2.img} />
                                       <div style={styles2.name}>{curr.name}</div>

                                    </div>
                                 </div>
                              )
                           }
                        </div>
                     </div>
                     <div className="" style={{ width: "31%" }}>
                        <div className="d-flex justify-content-evenly p-3">
                           <button disabled={state2 === 0} onClick={() => setState2(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                           <div className="p text-center"><b>Ethical Hacking</b> ({state2 * 10} - {state2 * 10 + 10})</div>
                           <button disabled={state2 === 5} onClick={() => setState2(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}</button>
                        </div>
                        <div className="row">
                           {
                              participants2 && participants2.length > 0 && participants2.map((curr, i) =>
                                 <div key={i} className="col-6 p-2" style={{
                                    border: "1px dotted grey",
                                 }}>
                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                       <img src="3.png" alt='' style={styles2.img} />
                                       <div style={styles2.name}>{curr.name}</div>

                                    </div>
                                 </div>
                              )
                           }
                        </div>
                     </div>
                     <div className="" style={{ width: "31%" }}>
                        <div className="d-flex justify-content-evenly p-3">
                           <button disabled={state3 === 0} onClick={() => setState3(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                           <div className="p text-center"> <b> Robotics & IOT</b>({state3 * 10} - {state3 * 10 + 10})</div>
                           <button disabled={state3 === 9} onClick={() => setState3(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}</button>
                        </div>
                        <div className="row">
                           {
                              participants3 && participants3.length > 0 && participants3.map((curr, i) =>
                                 <div key={i} className="col-6 p-2" style={{
                                    border: "1px dotted grey",
                                 }}>
                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                       <img src="4.png" alt='' style={styles2.img} />
                                       <div style={styles2.name}>{curr.name}</div>

                                    </div>
                                 </div>
                              )
                           }
                        </div>
                     </div>
                  </div>

                  {/* <button onClick={sendMail} className='btn btn-primary' >Send</button> */}
               </div>
         }
         <Modal size={'lg'} show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
               <PDFViewer width={'100%'} height={533} showToolbar={false} >
                  <MyDocument currentParticipant={currentParticipant} />
               </PDFViewer>
            </Modal.Body>
            <Modal.Footer>
               <div style={{ textAlign: 'center' }}>
                  <PDFDownloadLink document={<MyDocument currentParticipant={currentParticipant} />}
                     fileName={`${currentParticipant && currentParticipant.name}.pdf`}>
                     {({ blob, url, loading, error }) =>
                        loading ? <div>Loading...</div> :
                           <button className="btn btn-primary btn-sm">
                              Download
                           </button>
                     }
                  </PDFDownloadLink>
               </div>
               <button className='btn btn-success' onClick={sendMail}>Send Mail</button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}
