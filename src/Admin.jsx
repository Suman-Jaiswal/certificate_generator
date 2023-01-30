import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer';
// import Mailjet from 'node-mailjet';
import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { participantsData } from './data';
import MyDocument from './MyDocument';

// const mailjet = new Mailjet({
//    apiKey: '07ac58e575dd1452a6a67839c5810966',
//    apiSecret: '610651e00f8431746ab2b222c9a507dd'
// });


// certificates photos
const certificates = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
]

const domains = [
    "AI/ML",
    "Ethical Hacking",
    "Robotics and Internet of Things",
    "App Development",
    "Machine Learning",
    "Python Programming",
    "Data Science",
    "Web Development",
]

export default function Admin() {

    const [isLogin, setIsLogin] = React.useState(false);

    const [state0, setState0] = React.useState(0);
    const [state1, setState1] = React.useState(0);
    const [state2, setState2] = React.useState(0);
    const [state3, setState3] = React.useState(0);
    const [state4, setState4] = React.useState(0);
    const [state5, setState5] = React.useState(0);
    const [state6, setState6] = React.useState(0);
    const [state7, setState7] = React.useState(0);

    const [participants0, setParticipants0] = React.useState([]);
    const [participants1, setParticipants1] = React.useState([]);
    const [participants2, setParticipants2] = React.useState([]);
    const [participants3, setParticipants3] = React.useState([]);
    const [participants4, setParticipants4] = React.useState([]);
    const [participants5, setParticipants5] = React.useState([]);
    const [participants6, setParticipants6] = React.useState([]);
    const [participants7, setParticipants7] = React.useState([]);

    const [show, setShow] = React.useState(false);
    const [currentParticipant, setCurrentParticipant] = React.useState(null);
    const [show1, setShow1] = React.useState(true);
    const [password, setPassword] = React.useState("");

    useEffect(() => {
        setParticipants0(participantsData.filter(p => p.domain === domains[0]).splice(10 * state0, 10));
    }, [state0])

    useEffect(() => {
        setParticipants1(participantsData.filter(p => p.domain === domains[1]).splice(10 * state1, 10));
    }, [state1])

    useEffect(() => {
        setParticipants2(participantsData.filter(p => p.domain === domains[2]).splice(10 * state2, 10));
    }, [state2])

    useEffect(() => {
        setParticipants3(participantsData.filter(p => p.domain === domains[3]).splice(10 * state3, 10));
    }, [state3])

    useEffect(() => {
        setParticipants4(participantsData.filter(p => p.domain === domains[4]).splice(10 * state4, 10));
    }, [state4])

    useEffect(() => {
        setParticipants5(participantsData.filter(p => p.domain === domains[5]).splice(10 * state5, 10));
    }, [state5])

    useEffect(() => {
        setParticipants6(participantsData.filter(p => p.domain === domains[6]).splice(10 * state6, 10));
    }, [state6])

    useEffect(() => {
        setParticipants7(participantsData.filter(p => p.domain === domains[7]).splice(10 * state7, 10));
    }, [state7])

    const login = (e) => {
        e.preventDefault();
        if (password === "123456") {
            setShow1(false);
            setIsLogin(true);
        }
        else {
            alert("Wrong Password");
        }
    }

    const handleOpen = (participant) => {
        setCurrentParticipant(participant);
        setShow(true);
    }

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
        },
        hash: {
            position: "absolute",
            top: "2%",
            width: "100%",
            textAlign: "center",
            fontSize: 12,
            fontWeight: "bold",
            color: "#333",
            cursor: "select",
        },
    });

    return (
        <>
            {
                !isLogin ? <div className='mt-5 text-center fw-bold'  >
                    <div className="btn btn-primary" onClick={() => setShow1(true)}>Admin Login</div>
                </div> :
                    <>
                        <div className="d-flex" style={{ width: 'fit-content' }}>

                            {
                                participants0 && participants0.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }} >
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state0 === 0} onClick={() => setState0(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants0[0].domain}</b> ({state0 * 10} - {state0 * 10 + 10})</div>
                                        <button
                                            disabled={state0 === Math.floor(participantsData.filter(d => d.domain === participants0[0].domain).length / 10)}
                                            onClick={() => setState0(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>
                                    </div>
                                    <div className="row">
                                        {
                                            participants0.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[0]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                            }

                            {
                                participants1 && participants1.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }}>
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state1 === 0} onClick={() => setState1(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants1[0].domain}</b> ({state1 * 10} - {state1 * 10 + 10})</div>
                                        <button
                                            disabled={state1 === Math.floor(participantsData.filter(d => d.domain === participants1[0].domain).length / 10)}
                                            onClick={() => setState1(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>

                                    </div>
                                    <div className="row">
                                        {
                                            participants1.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[1]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                            }

                            {
                                participants2 && participants2.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }}>
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state2 === 0} onClick={() => setState2(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants2[0].domain}</b> ({state2 * 10} - {state2 * 10 + 10})</div>
                                        <button
                                            disabled={state2 === Math.floor(participantsData.filter(d => d.domain === participants2[0].domain).length / 10)}
                                            onClick={() => setState2(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>
                                    </div>
                                    <div className="row">
                                        {
                                            participants2.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[2]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }

                            {
                                participants3 && participants3.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }}>
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state3 === 0} onClick={() => setState3(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants3[0].domain}</b> ({state3 * 10} - {state3 * 10 + 10})</div>
                                        <button
                                            disabled={state3 === Math.floor(participantsData.filter(d => d.domain === participants3[0].domain).length / 10)}
                                            onClick={() => setState3(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>
                                    </div>
                                    <div className="row">
                                        {
                                            participants3.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[3]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }

                            {
                                participants4 && participants4.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }}>
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state4 === 0} onClick={() => setState4(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants4[0].domain}</b> ({state4 * 10} - {state4 * 10 + 10})</div>
                                        <button
                                            disabled={state4 === Math.floor(participantsData.filter(d => d.domain === participants4[0].domain).length / 10)}
                                            onClick={() => setState4(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>
                                    </div>
                                    <div className="row">
                                        {
                                            participants4.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[4]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }

                            {
                                participants5 && participants5.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }}>
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state5 === 0} onClick={() => setState5(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants5[0].domain}</b> ({state5 * 10} - {state5 * 10 + 10})</div>
                                        <button
                                            disabled={state5 === Math.floor(participantsData.filter(d => d.domain === participants5[0].domain).length / 10)}
                                            onClick={() => setState5(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>
                                    </div>
                                    <div className="row">
                                        {
                                            participants5.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[5]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }

                            {
                                participants6 && participants6.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }}>
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state6 === 0} onClick={() => setState6(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants6[0].domain}</b> ({state6 * 10} - {state6 * 10 + 10})</div>
                                        <button
                                            disabled={state6 === Math.floor(participantsData.filter(d => d.domain === participants6[0].domain).length / 10)}
                                            onClick={() => setState6(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>
                                    </div>
                                    <div className="row">
                                        {
                                            participants6.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[6]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }

                            {
                                participants7 && participants7.length > 0 &&
                                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '98vh', overflowY: 'scroll' }}>
                                    <div className="d-flex justify-content-evenly p-3 position-sticky top-0 bg-light" style={{ zIndex: 10 }}>
                                        <button disabled={state7 === 0} onClick={() => setState7(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                                        <div className="p text-center"><b>{participants7[0].domain}</b> ({state7 * 10} - {state7 * 10 + 10})</div>
                                        <button
                                            disabled={state7 === Math.floor(participantsData.filter(d => d.domain === participants7[0].domain).length / 10)}
                                            onClick={() => setState7(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                                        </button>
                                    </div>
                                    <div className="row">
                                        {
                                            participants7.map((curr, i) =>
                                                <div key={i} className="col-6 p-2" style={{
                                                    border: "1px dotted grey",
                                                }}>
                                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr)} role={'button'}>
                                                        <img src={certificates[7]} alt='' style={styles2.img} />
                                                        <div style={styles2.name}>{curr.name}</div>
                                                        <div style={styles2.hash} > {curr.hash}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }

                        </div>

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
