import React from 'react';
import { Header } from '../../Layout/Header/Header';
import { Footer } from '../../Layout/Footer/Footer';
import { HomeCanvas } from '../../Components/HomeCanvas';

export function Homepage() {
    return (
        <> 
            <Header />
            <HomeCanvas />
            <Footer />
        </>
    )
}
