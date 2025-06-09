import {useRef} from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import '../assets/ImageSlider.css';

function ImageSlider(){
    const sliderRef = useRef();

    //Uses GSAP animation to move the images in the ImageSlider
    useGSAP(() => {
        gsap.to('.slide-track', {
        xPercent: -50,
        duration: 50,
        ease: 'linear',
        repeat: -1,
        });
    }, []);

    const images = []; //Creates an empty array

    //Uses a for loop with the push() method to add image path to the array.
    for (let i = 1; i <= 13; i++) {
        images.push(`/images/${i}.jpg`);
    }

    //Uses the spread operator and map() method to duplicate the objects and add the path and unique identifier.
    return (
        <div className="sliderContainer" ref={sliderRef}>
            <div className="slide-track">
                {[...images, ...images].map((src, i) => (
                    <img key={i} src={src} alt={`images of bakeries and cafes`} />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;