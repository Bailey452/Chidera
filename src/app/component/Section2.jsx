import React from 'react'
import Image from 'next/image'

const Section2 = () => {
    return (
        <div>
            <section class="section2">
                <span className="span1 span2">
                    <h1>Popular albums</h1>
                    <p>Show all</p>
                </span>
                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/HEIS.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <div class="desc">HEIS</div>
                        <a href="#" class="link">Rema</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div>
                            <div className='mt-3'>
                                <Image
                                    src={'/Image/Lungu.jpeg'}
                                    alt={'logo'}
                                    height={40}
                                    width={90} />
                            </div>
                        </div>
                        <div class="desc">Lungu Boy</div>
                        <a href="#" class="link">Asake</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/jiggy.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <div class="desc">Jiggy Forever</div>
                        <a href="#" class="link">Young Jonn</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/ade.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <div class="desc">Adedamola</div>
                        <a href="#" class="link">Fireboy DML</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <Image
                            src={'/Image/MAFF.jpeg'}
                            alt={'logo'}
                            height={40}
                            width={90} />
                        <div class="desc">MAFFIAN</div>
                        <a href="#" class="link">Ayo Maff</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/proff.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <div class="desc">Loseyi Professor</div>
                        <a href="#" class="link">Seyi Vibes</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2