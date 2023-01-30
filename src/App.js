import React, { useEffect } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useParams, Navigate } from 'react-router-dom';
import { participantsData } from './data3';
import MyDocument from './MyDocument';


function App() {

    const factor = 3250 / 2298;
    const { hasheduri } = useParams()
    const [pass, setPass] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [currentParticipant, setCurrentParticipant] = React.useState(null);

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
                                        <PDFDownloadLink document={<MyDocument currentParticipant={currentParticipant} />}
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
                                        <MyDocument currentParticipant={currentParticipant} />
                                    </PDFViewer>
                                </div>
                        }
                    </>
            }
        </>


    );
}

export default App;
