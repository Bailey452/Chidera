import React from 'react'

const Footer = () => {
    return (
        <div>
            <section class='footer'>
                    <div class="card11">
                        <div class="card2">
                            <ul>
                                <h6>Company</h6>
                                <li><a href="#" class="anchor">About</a></li>
                                <li><a href="#" class="anchor">Jobs</a></li>
                                <li><a href="#" class="anchor">For the Record</a></li>
                            </ul>
                        </div>
                        <div class="card2">
                            <ul>
                                <h6>Communities</h6>
                                <li><a href="#" class="anchor">For Artists</a></li>
                                <li><a href="#" class="anchor">Developers</a></li>
                                <li><a href="#" class="anchor">Advertising</a></li>
                                <li><a href="#" class="anchor">Investors</a></li>
                                <li><a href="#" class="anchor">Vendors</a></li>
                            </ul>
                        </div>
                        <div class="card2">
                            <ul>
                                <h6>Useful links</h6>
                                <li><a href="#" class="anchor">Support</a></li>
                                <li><a href="#" class="anchor">Free Mobile App</a></li>
                            </ul>
                        </div>
                        <div class="card2">
                            <ul>
                                <h6>Spotify Plans</h6>
                                <li><a href="#" class="anchor">Premium Individual</a></li>
                                <li><a href="#" class="anchor">Premium Duo</a></li>
                                <li><a href="#" class="anchor">Premium Family</a></li>
                                <li><a href="#" class="anchor">Premium Student</a></li>
                                <li><a href="#" class="anchor">Spotify Free</a></li>
                            </ul>
                        </div>
                        <div class="card2">
                            <ul>
                                <span class="mage--instagram-circle"></span>
                                <span class="ant-design--twitter-circle-filled"></span>
                                <span class="mdi--facebook"></span>
                            </ul>
                        </div>
                    </div>
                    {/* <hr> */}
                    <div class="footcardtext">
                        &copy; 2024 Spotify AB
                    </div>
            </section>
        </div>
    )
}

export default Footer