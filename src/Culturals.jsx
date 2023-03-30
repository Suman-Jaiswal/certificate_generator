import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// import Mailjet from 'node-mailjet';
import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { culturalsData } from './culturalsData';
import MyDocument from './MyDocument';
import cult1 from './certificates/culturals/1.png'
import cult2 from './certificates/culturals/2.png'
import cult3 from './certificates/culturals/3.png'
import cult4 from './certificates/culturals/4.png'
import cult5 from './certificates/culturals/5.png'
import cult6 from './certificates/culturals/6.png'
import cult7 from './certificates/culturals/7.png'
import cult8 from './certificates/culturals/8.png'
import cult9 from './certificates/culturals/9.png'
import cult10 from './certificates/culturals/10.png'
import cult11 from './certificates/culturals/11.png'
import cult12 from './certificates/culturals/12.png'
import cult13 from './certificates/culturals/13.png'
import cult14 from './certificates/culturals/14.png'
import cult15 from './certificates/culturals/15.png'
import cult16 from './certificates/culturals/16.png'
import cult17 from './certificates/culturals/17.png'
import Domain from './Domain';

const domains = [
    "Battle of Bands",
    "Voice of Fluxus",
    "Hunkaar",
    "Show it Down",
    "On the Beat",
    "Mono Acting",
    "Through the Lens",
    "Live Sketching",
    "Stand Up",
    "Mehfil",
    "Doodle Up",
    "Elegancia",
    "Shutter Up",
    "3D Render Challenge",
    "Gaming Montage Making",
    "Kalamkaar",
    "Online Short Film Making",
]

export default function Culturals() {

    // const [isLogin, setIsLogin] = React.useState(false);

    const [state0, setState0] = React.useState(0);
    const [state1, setState1] = React.useState(0);
    const [state2, setState2] = React.useState(0);
    const [state3, setState3] = React.useState(0);
    const [state4, setState4] = React.useState(0);
    const [state5, setState5] = React.useState(0);
    const [state6, setState6] = React.useState(0);
    const [state7, setState7] = React.useState(0);
    const [state8, setState8] = React.useState(0);
    const [state9, setState9] = React.useState(0);
    const [state10, setState10] = React.useState(0);
    const [state11, setState11] = React.useState(0);
    const [state12, setState12] = React.useState(0);
    const [state13, setState13] = React.useState(0);
    const [state14, setState14] = React.useState(0);
    const [state15, setState15] = React.useState(0);
    const [state16, setState16] = React.useState(0);

    const [participants0, setParticipants0] = React.useState([]);
    const [participants1, setParticipants1] = React.useState([]);
    const [participants2, setParticipants2] = React.useState([]);
    const [participants3, setParticipants3] = React.useState([]);
    const [participants4, setParticipants4] = React.useState([]);
    const [participants5, setParticipants5] = React.useState([]);
    const [participants6, setParticipants6] = React.useState([]);
    const [participants7, setParticipants7] = React.useState([]);
    const [participants8, setParticipants8] = React.useState([]);
    const [participants9, setParticipants9] = React.useState([]);
    const [participants10, setParticipants10] = React.useState([]);
    const [participants11, setParticipants11] = React.useState([]);
    const [participants12, setParticipants12] = React.useState([]);
    const [participants13, setParticipants13] = React.useState([]);
    const [participants14, setParticipants14] = React.useState([]);
    const [participants15, setParticipants15] = React.useState([]);
    const [participants16, setParticipants16] = React.useState([]);


    const [show, setShow] = React.useState(false);
    const [currentParticipant, setCurrentParticipant] = React.useState(null);
    const [currentImg, setCurrentImg] = React.useState(null);
    const [show1, setShow1] = React.useState(false);
    const [password, setPassword] = React.useState("");

    useEffect(() => {
        setParticipants0(culturalsData.filter(p => p.domain === domains[0]).splice(10 * state0, 10));
    }, [state0])

    useEffect(() => {
        setParticipants1(culturalsData.filter(p => p.domain === domains[1]).splice(10 * state1, 10));
    }, [state1])

    useEffect(() => {
        setParticipants2(culturalsData.filter(p => p.domain === domains[2]).splice(10 * state2, 10));
    }, [state2])

    useEffect(() => {
        setParticipants3(culturalsData.filter(p => p.domain === domains[3]).splice(10 * state3, 10));
    }, [state3])

    useEffect(() => {
        setParticipants4(culturalsData.filter(p => p.domain === domains[4]).splice(10 * state4, 10));
    }, [state4])

    useEffect(() => {
        setParticipants5(culturalsData.filter(p => p.domain === domains[5]).splice(10 * state5, 10));
    }, [state5])

    useEffect(() => {
        setParticipants6(culturalsData.filter(p => p.domain === domains[6]).splice(10 * state6, 10));
    }, [state6])

    useEffect(() => {
        setParticipants7(culturalsData.filter(p => p.domain === domains[7]).splice(10 * state7, 10));
    }, [state7])

    useEffect(() => {
        setParticipants8(culturalsData.filter(p => p.domain === domains[8]).splice(10 * state8, 10));
    }, [state8])

    useEffect(() => {
        setParticipants9(culturalsData.filter(p => p.domain === domains[9]).splice(10 * state9, 10));
    }, [state9])

    useEffect(() => {
        setParticipants10(culturalsData.filter(p => p.domain === domains[10]).splice(10 * state10, 10));
    }, [state10])

    useEffect(() => {
        setParticipants11(culturalsData.filter(p => p.domain === domains[11]).splice(10 * state11, 10));
    }, [state11])

    useEffect(() => {
        setParticipants12(culturalsData.filter(p => p.domain === domains[12]).splice(10 * state12, 10));
    }, [state12])

    useEffect(() => {
        setParticipants13(culturalsData.filter(p => p.domain === domains[13]).splice(10 * state13, 10));
    }, [state13])

    useEffect(() => {
        setParticipants14(culturalsData.filter(p => p.domain === domains[14]).splice(10 * state14, 10));
    }, [state14])

    useEffect(() => {
        setParticipants15(culturalsData.filter(p => p.domain === domains[15]).splice(10 * state15, 10));
    }, [state15])

    useEffect(() => {
        setParticipants16(culturalsData.filter(p => p.domain === domains[16]).splice(10 * state16, 10));
    }, [state16])



    const login = (e) => {
        e.preventDefault();
        if (password === "123456") {
            setShow1(false);
            // setIsLogin(true);
        }
        else {
            alert("Wrong Password");
        }
    }

    const handleOpen = (participant, img) => {
        setCurrentParticipant(participant);
        setCurrentImg(img);
        setShow(true);
    }


    return (
        <>
            {
                false ? <div className='mt-5 text-center fw-bold'  >
                    <div className="btn btn-primary" onClick={() => setShow1(true)}>Admin Login</div>
                </div> :
                    <>
                        <div className="d-flex" style={{ width: 'fit-content' }}>
                            <Domain cert={cult1} participants={participants0} state={state0} setState={setState0} handleOpen={handleOpen} />
                            <Domain cert={cult2} participants={participants1} state={state1} setState={setState1} handleOpen={handleOpen} />
                            <Domain cert={cult3} participants={participants2} state={state2} setState={setState2} handleOpen={handleOpen} />
                            <Domain cert={cult4} participants={participants3} state={state3} setState={setState3} handleOpen={handleOpen} />
                            <Domain cert={cult5} participants={participants4} state={state4} setState={setState4} handleOpen={handleOpen} />
                            <Domain cert={cult6} participants={participants5} state={state5} setState={setState5} handleOpen={handleOpen} />
                            <Domain cert={cult7} participants={participants6} state={state6} setState={setState6} handleOpen={handleOpen} />
                            <Domain cert={cult8} participants={participants7} state={state7} setState={setState7} handleOpen={handleOpen} />
                            <Domain cert={cult9} participants={participants8} state={state8} setState={setState8} handleOpen={handleOpen} />
                            <Domain cert={cult10} participants={participants9} state={state9} setState={setState9} handleOpen={handleOpen} />
                            <Domain cert={cult11} participants={participants10} state={state10} setState={setState10} handleOpen={handleOpen} />
                            <Domain cert={cult12} participants={participants11} state={state11} setState={setState11} handleOpen={handleOpen} />
                            <Domain cert={cult13} participants={participants12} state={state12} setState={setState12} handleOpen={handleOpen} />
                            <Domain cert={cult14} participants={participants13} state={state13} setState={setState13} handleOpen={handleOpen} />
                            <Domain cert={cult15} participants={participants14} state={state14} setState={setState14} handleOpen={handleOpen} />
                            <Domain cert={cult16} participants={participants15} state={state15} setState={setState15} handleOpen={handleOpen} />
                            <Domain cert={cult17} participants={participants16} state={state16} setState={setState16} handleOpen={handleOpen} />
                        </div>

                        <Modal size={'lg'} show={show} onHide={() => setShow(false)}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <PDFViewer width={'100%'} height={533} showToolbar={false} >
                                    <MyDocument currentParticipant={currentParticipant} currentImg={currentImg} />
                                </PDFViewer>
                            </Modal.Body>
                            <Modal.Footer>
                                <div style={{ textAlign: 'center' }}>
                                    <PDFDownloadLink document={<MyDocument currentParticipant={currentParticipant} currentImg={currentImg} />}
                                        fileName={`${currentParticipant && currentParticipant.name}.pdf`}>
                                        {({ blob, url, loading, error }) =>
                                            loading ? <div>Loading...</div> :
                                                <button className="btn btn-primary btn-sm">
                                                    Download
                                                </button>
                                        }
                                    </PDFDownloadLink>
                                </div>
                            </Modal.Footer>
                        </Modal>


                    </>
            }
            <Modal size={'sm'} show={show1} onHide={() => setShow1(false)}>
                <form onSubmit={login}>
                    <Modal.Header closeButton>
                        Enter Admin Password
                    </Modal.Header>
                    <Modal.Body>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-success' type='submit'>Submit</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
