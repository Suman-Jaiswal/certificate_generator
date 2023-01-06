import { Document, Image, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import React, { useEffect } from 'react'

export default function MyDocument({ currentParticipant }) {

   const [img, setImg] = React.useState(null)

   const factor = 3250 / 2298;
   const height = 1080;
   const width = 1080 * factor;

   useEffect(() => {
      if (!currentParticipant) return;
      if (currentParticipant.domain === "App Development") setImg("6.png");
      else if (currentParticipant.domain === "Machine Learning") setImg("4.png");
      else setImg("5.png");
   }, [currentParticipant])

   const styles = StyleSheet.create({
      page: {
         flexDirection: 'row',
         backgroundColor: '#000',
         width: width,
         height: height,
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
         top: "50%",
         width: "100%",
         textAlign: "center",
         fontSize: height / 25,
         transformOrigin: "100% 100%",
         color: "#32312f",
      }
   });

   return (
      <Document>
         <Page size="A4" orientation="landscape" style={styles.page}>
            <View style={styles.view}>
               <Image src={img} style={styles.img}></Image>
               <Text style={styles.name}>{currentParticipant.name}</Text>
            </View>
         </Page>
      </Document>
   )
}
