import { Document, Image, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import React, { useEffect } from 'react'

export default function MyDocument({ currentParticipant, currentImg }) {

    const [img, setImg] = React.useState(null)

    const factor = 3250 / 2298;
    const height = 1080;
    const width = 1080 * factor;

    console.log(currentImg);
    useEffect(() => {
        if (!currentParticipant) return;
        if (currentImg) return
        if (currentParticipant.domain === "AI/ML") setImg("1.png");
        else if (currentParticipant.domain === "Ethical Hacking") setImg("2.png");
        else if (currentParticipant.domain === "Robotics and Internet of Things") setImg("3.png");
        else if (currentParticipant.domain === "App Development") setImg("4.png");
        else if (currentParticipant.domain === "Machine Learning") setImg("5.png");
        else if (currentParticipant.domain === "Python Programming") setImg("6.png");
        else if (currentParticipant.domain === "Data Science") setImg("7.png");
        else if (currentParticipant.domain === "Web Development") setImg("8.png");
        else if (currentParticipant.domain === "Battle of Bands") setImg("cult1.png");
    }, [currentParticipant, currentImg])

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
                    <Image src={currentImg ? currentImg : img} style={styles.img}></Image>
                    <Text style={styles.name}>{currentParticipant.name}</Text>
                </View>
            </Page>
        </Document>
    )
}
