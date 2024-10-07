import React from 'react'
import Image from 'next/image'

const Section3 = () => {
    return (
        <div>
            <section className="section2 mt-16">
                <span className="span1 span2">
                    <h1>Popular radio</h1>
                    <p>Show all</p>
                </span>
                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/OMAH.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">With Burna Boy, <br /> Victony,Ruger and...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/AYO.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">With Rybeena,LIona,<br /> Young Jonn and more</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/ASAKE.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">With Young Jonn,<br /> Shallipopi,Olamide...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/seyi.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">With Tml Vibez,Ayo<br /> Maff,Muyeez and...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/ODUM.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">With Young Jonn,<br /> Shallipopi,Ayo Maff...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/Liona.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">With Ayo Maff,<br /> Rybeena,Tml Vibez...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section3