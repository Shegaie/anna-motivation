import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import "./animatePicture.css"
import clsx from "clsx";
import Picture from "./Picture";
import gregAsset from "../assets/greg-removebg-preview.png"
import useSound from 'use-sound';
import sfx1Path from '../assets/HD MLG OHHH GREEN SCREEN + FREE DOWNLOAD.mp3';
import sfx2Path from '../assets/We\'ll Be Right Back [Green Screen].mp3';

export default function FamilyCard(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [jello, setJello] = useState(false);
    const audioPlayerRef = useRef();
    const [sfx1] = useSound(sfx1Path);
    const [sfx2] = useSound(sfx2Path);
    const sfxArray = [sfx1, sfx2];

    const startAudio = () => {
        sfxArray[Math.floor(Math.random() * sfxArray.length)]();
    }

    return (
        <>
            <Picture handleClick={startAudio} asset={gregAsset}/>
        </>
    );
}

FamilyCard.propTypes = {
};