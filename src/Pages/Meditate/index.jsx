import React from 'react';
import { Header } from '../../Layout/Header/Header';
import { Footer } from '../../Layout/Footer/Footer';
import { MedCanvas } from '../../Components/MedCanvas';

export function Meditate() {
    return (
        <>
            <Header />
            <MedCanvas />
            <Footer />
        </>
    )
}
