import React from 'react'
import Image from 'next/image'

const Section4 = () => {
    return (
        <div>
            <section className="section2 mt-16">
                <span className="span1 span2">
                    <h1>Featured charts</h1>
                </span>
                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/Top.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Your weekly update<br /> of the most played...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/songs.png'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Your weekly update<br /> of the most played...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/global.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Your daily update of<br /> the most played...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/USA.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Your daily update of<br /> the most played...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/viral.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Your daily update of<br /> the most viral tracks...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/vusa.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Your daily update of<br /> the most viral tracks...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section4