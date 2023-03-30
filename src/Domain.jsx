import { StyleSheet } from '@react-pdf/renderer';
import React from 'react'
import { culturalsData } from './culturalsData';

export default function Domain({ participants, certificates, state, setState, handleOpen, cert }) {

    const styles2 = StyleSheet.create({
        view: {
            position: "relative",
            width: "100%",
            height: "inherit",
        },
        img: {
            width: "100%",
            height: "100%",
            border: "1px dotted rgba(0,0,0,0.5)",
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
                participants && participants.length > 0 &&
                <div className="p-3 pt-0 mx-2" style={{ width: 600, height: '97vh', overflowY: 'scroll' }} >
                    <div className="d-flex my-2 justify-content-evenly p-3 position-sticky top-0 bg-light rounded" style={{ zIndex: 10, boxShadow: '0px 1px 3px 0px #aaa' }}>
                        <button disabled={state === 0} onClick={() => setState(prev => prev - 1)} className="btn btn-sm btn-primary">{'<<'}</button>
                        <div className="p text-center"><b>{participants[0].domain}</b> ({state * 10} - {state * 10 + 10})</div>
                        <button
                            disabled={state === Math.floor(culturalsData.filter(d => d.domain === participants[0].domain).length / 10)}
                            onClick={() => setState(prev => prev + 1)} className="btn btn-sm btn-primary">{'>>'}
                        </button>
                    </div>
                    <div className="row pt-1">
                        {
                            participants.map((curr, i) =>
                                <div key={i} className="col-6 p-1" >
                                    <div style={styles2.view} id="preview" onClick={() => handleOpen(curr, cert)} role={'button'}>
                                        <img src={cert} alt='' style={styles2.img} />
                                        <div style={styles2.name}>{curr.name}</div>
                                        <div style={styles2.hash} > {curr.hash}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </>
    )
}
