import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useParams, Navigate } from 'react-router-dom';
import { participantsData } from './data';


function App() {

   const factor = 3250 / 2298;

   const [height, setHeight] = React.useState(700);
   const [width, setWidth] = React.useState(700 * factor);
   const { hasheduri } = useParams()
   const [pass, setPass] = React.useState(false);
   const [loading, setLoading] = React.useState(true);
   const [currentParticipant, setCurrentParticipant] = React.useState(null);


   console.log(hasheduri)

   const participants = participantsData

   // Create Document Component
   const MyDocument = () => (
      <Document>
         <Page size="A4" orientation="landscape" style={styles.page}>
            <View style={styles.view}>
               <Image src="cert.png" style={styles.img}></Image>
               <Text style={styles.name}>{currentParticipant.name}</Text>
            </View>
         </Page>
      </Document>
   );

   const styles = StyleSheet.create({
      page: {
         flexDirection: 'row',
         backgroundColor: '#000'
      },
      view: {
         position: "relative",
         width: "100%",
         height: "100%",
      },
      img: {
         width: "100%",
         height: "100%",
      },
      name: {
         position: "absolute",
         top: "42%",
         width: "100%",
         textAlign: "center",
         fontSize: 700 / 15,
      }
   });

   const styles2 = StyleSheet.create({
      view: {
         position: "relative",
         width: "100%",
         height: "100%",
      },
      img: {
         width: "100%",
         height: "100%",
      },
      name: {
         position: "absolute",
         top: "42%",
         width: "100%",
         textAlign: "center",
         fontSize: height / 15,
      }
   });

   useEffect(() => {
      const participant = participants.find(participant => participant.hash === hasheduri);
      if (!participant) {
         setPass(false);
         setLoading(false);
         return;
      }
      setPass(true);
      setLoading(false);
      setCurrentParticipant(participant);

      const preview = document.querySelector("#preview");
      if (!preview) return;
      const w = preview.clientWidth;
      setWidth(w);
      setHeight(w / factor);
   }, [factor, hasheduri, participants]);



   return (
      <>
         {
            loading ? <div className='mt-5 text-center fw-bold h5'>Loading...</div> :
               <>
                  {
                     !pass ?
                        <Navigate to="/"></Navigate> :
                        <div className="App m-auto">
                           <PDFViewer width={'100%'} height={700} showToolbar={false} style={styles.iframe}>
                              <MyDocument />
                           </PDFViewer>
                           <div className="cert-wrapper" style={{ width: "100%", maxWidth: 700 * factor, margin: "auto", maxHeight: 700 }}>
                              <div style={styles2.view} id="preview">
                                 <img src="cert.png" alt='' style={styles2.img} />
                                 <div style={styles2.name}>{currentParticipant.name}</div>
                              </div>

                           </div>
                           <div style={{ margin: 20, textAlign: 'center' }}>

                              <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
                                 {({ blob, url, loading, error }) =>
                                    loading ? <div>Loading...</div> :
                                       <button className="btn-animated d-flex btn btn-primary btn-lg">
                                          <div className="btn-cover">
                                             Download
                                          </div>
                                          <div className="btn-revealer text-center">
                                             <img width={20} src="downloading.png" alt="" style={{ filter: "invert(1)" }} />
                                          </div>
                                       </button>
                                 }
                              </PDFDownloadLink>
                           </div>
                        </div>
                  }
               </>
         }
      </>


   );
}

export default App;
