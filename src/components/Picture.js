import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import "./animatePicture.css"
import clsx from "clsx";

export default function Picture(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [jello, setJello] = useState(false);
    const [audioPlayerRef, setAudioPlayerRef] = useState(null)

    useEffect(() => {
        setAudioPlayerRef(props.audioPlayerRef);
    }, [props.audioPlayerRef]);

    return (
        <>
            <div className="x">
                <div className="y">
                    <img onMouseEnter={() => setIsMouseOver(true)}
                         onMouseLeave={() => setIsMouseOver(false)}
                         onClick={() => {
                             setJello(true);
                             props.handleClick();
                         }}
                         onAnimationEnd={() => {
                             setJello(false);
                         }}
                         className={clsx("inline-block rounded-md shadow-2xl bg-white focus:shadow-none",
                             {
                                 ["color-change-2x"]: isMouseOver,
                                 ["jello-horizontal"]: jello
                             })}
                         src={props.asset}
                         alt="Greg"/>
                </div>
            </div>
        </>
    );
}

Picture.propTypes = {
    asset: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};