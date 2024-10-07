import React from 'react'
import Image from 'next/image'

const Section5 = () => {
    return (
        <div>
            <section className="section2 mt-16">
                <span className="span1 span2">
                    <h1>Featured charts</h1>
                    <p>Show all</p>
                </span>
                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/rock.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Rock legends & epic<br /> songs that continue...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/all.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">The biggest songs of<br /> the 2020s.Cover...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/chill.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Just lean back and<br /> enjoy relaxed beats.</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/lofi.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">chill beats, lofi vibes<br /> new tracks every...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/TTH.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">The hottest 50. Cover<br /> Lady Gaga & Bruno...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <div className='mt-3'>
                            <Image
                                src={'/Image/Jazz.jpeg'}
                                alt={'logo'}
                                height={40}
                                width={90} />
                        </div>
                        <a href="#" class="link">Soft instrumental<br /> Jazz for all your...</a>
                        <span class="subway--play-1"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section5