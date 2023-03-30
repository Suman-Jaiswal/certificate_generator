import React, { useEffect } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useParams, Navigate } from 'react-router-dom';
import { participantsData } from './data';
import MyDocument from './MyDocument';
import cult1 from './certificates/culturals/1.png';
import cult2 from './certificates/culturals/2.png';
import cult3 from './certificates/culturals/3.png';
import cult4 from './certificates/culturals/4.png';
import cult5 from './certificates/culturals/5.png';
import cult6 from './certificates/culturals/6.png';
import cult7 from './certificates/culturals/7.png';
import cult8 from './certificates/culturals/8.png';
import cult9 from './certificates/culturals/9.png';
import cult10 from './certificates/culturals/10.png';
import cult11 from './certificates/culturals/11.png';
import cult12 from './certificates/culturals/12.png';
import cult13 from './certificates/culturals/13.png';
import cult14 from './certificates/culturals/14.png';
import cult15 from './certificates/culturals/15.png';
import cult16 from './certificates/culturals/16.png';
import cult17 from './certificates/culturals/17.png';

console.log(participantsData)

function App() {

    const factor = 3250 / 2298;
    const { hasheduri } = useParams()
    const [pass, setPass] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [currentParticipant, setCurrentParticipant] = React.useState(null);
    const [currentImg, setCurrentImg] = React.useState(null);

    const participants = participantsData

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
        if (participant.hash.includes('BOB'))
            setCurrentImg(cult1)

        else if (participant.hash.includes('VOF'))
            setCurrentImg(cult2)

        else if (participant.hash.includes('HNK'))
            setCurrentImg(cult3)

        else if (participant.hash.includes('SID'))
            setCurrentImg(cult4)

        else if (participant.hash.includes('OTB'))
            setCurrentImg(cult5)

        else if (participant.hash.includes('MA'))
            setCurrentImg(cult6)

        else if (participant.hash.includes('TTL'))
            setCurrentImg(cult7)

        else if (participant.hash.includes('LS'))
            setCurrentImg(cult8)

        else if (participant.hash.includes('STU'))
            setCurrentImg(cult9)

        else if (participant.hash.includes('MHF'))
            setCurrentImg(cult10)

        else if (participant.hash.includes('DDU'))
            setCurrentImg(cult11)

        else if (participant.hash.includes('ELG'))
            setCurrentImg(cult12)

        else if (participant.hash.includes('SHU'))
            setCurrentImg(cult13)

        else if (participant.hash.includes('3DR'))
            setCurrentImg(cult14)

        else if (participant.hash.includes('GMM'))
            setCurrentImg(cult15)

        else if (participant.hash.includes('KLM'))
            setCurrentImg(cult16)

        else if (participant.hash.includes('OSC'))
            setCurrentImg(cult17)

        else
            setCurrentImg(null)



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
                                    <div style={{ margin: 20, textAlign: 'center' }}>
                                        <span className='me-3'>Download your Certificate by clicking the "Download" button! </span>
                                        <PDFDownloadLink document={<MyDocument currentImg={currentImg} currentParticipant={currentParticipant} />}
                                            fileName={`${currentParticipant && currentParticipant.name}.pdf`}

                                        >
                                            {({ blob, url, loading, error }) =>
                                                loading ? <div>Loading...</div> :
                                                    <button className="btn btn-primary btn-sm">
                                                        Download
                                                    </button>
                                            }
                                        </PDFDownloadLink>
                                    </div>
                                    <PDFViewer width={'100%'} height={810} showToolbar={false} >
                                        <MyDocument currentImg={currentImg} currentParticipant={currentParticipant} />
                                    </PDFViewer>
                                </div>
                        }
                    </>
            }
        </>


    );
}

export default App;
