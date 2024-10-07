import React from 'react'
import Image from 'next/image'

const Section1 = () => {
    return (
        <div>
            <section className="section1">
                <span className="span1 span2">
                    <h1>Popular artist</h1>
                    <p>Show all</p>
                </span>
                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank">
                            <Image
                                src={'/Image/asake.png'}
                                alt={'logo'}
                                height={40}
                                className='rounded-full'
                                width={90} />
                        </a>
                        <div className="desc">Asake</div>
                        <a href="#" className="link">Artist</a>
                        <span className="subway--play-1"></span>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a>
                            <Image
                                src={'/Image/rema.jpeg'}
                                alt={'logo'}
                                height={40}
                                className='rounded-full'
                                width={90} />
                        </a>
                        <div className="desc">Shallipopi</div>
                        <a href="#" className="link">Artist</a>
                        <span className="subway--play-1"></span>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank">
                            <Image
                                src={'/Image/yong.jpeg'}
                                alt={'logo'}
                                height={40}
                                className='rounded-full'
                                width={90} />
                        </a>
                        <div className="desc">Kizz Daniel</div>
                        <a href="#" className="link">Artist</a>
                        <span className="subway--play-1"></span>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank">
                            <Image
                                src={'/Image/BURNA.jpeg'}
                                alt={'logo'}
                                height={40}
                                className='rounded-full'
                                width={90} />
                        </a>
                        <div className="desc">Victony</div>
                        <a href="#" className="link">Artist</a>
                        <span className="subway--play-1"></span>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank">
                            <Image
                                src={'/Image/vic.jpeg'}
                                alt={'logo'}
                                height={40}
                                className='rounded-full'
                                width={90} />
                        </a>
                        <div className="desc">Young John</div>
                        <a href="#" className="link">Artist</a>
                        <span className="subway--play-1"></span>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank">
                            <Image
                                src={'/Image/fire.jpeg'}
                                alt={'logo'}
                                height={40}
                                className='rounded-full'
                                width={90} />
                        </a>
                        <div className="desc">FireboyDML</div>
                        <a href="#" className="link">Artist</a>
                        <span className="subway--play-1"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1