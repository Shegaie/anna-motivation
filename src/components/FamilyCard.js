import React, {useEffect, useRef, useState} from 'react';
import "./animatePicture.css"
import Picture from "./Picture";
import gregAsset from "../assets/Picture/greg-removebg-preview.png"
import {useGregSFX} from "./FamilySound/useGregSFX";

export default function FamilyCard(props) {
    const sfxArray = useGregSFX();

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