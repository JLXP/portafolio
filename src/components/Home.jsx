import React from 'react';
import Typewriter from 'typewriter-effect';

export const Home = () => {
    return (
        <section className="w-full">
            <p>kk</p>
            oo
            <p>ñññ</p>
            <p>sss</p>
            <Typewriter
                options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
            />

        </section>
    )
}
