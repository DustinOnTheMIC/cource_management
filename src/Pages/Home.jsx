import React from 'react';
import Header from '../Components/Header/Index'
import bg1 from '../Assets/images/bg_1.jpg'

function Home(props) {
    return (
        <div>
            <Header />

            {/* Đang test, chưa biết bỏ vào component nào */}
            
            <section class="hero-wrap" style={{backgroundImage: `url(${bg1})`}}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text align-items-center">
                        <div class="col-lg-5">
                            <div class="text mt-5 pt-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                <span class="subheading">Welcome to Academia</span>
                                <h1 class="mb-4">Best Online Education Expertise </h1>
                                <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p>
                                    <a href="#this" class="btn btn-primary p-4 py-3">Get Started Now! 
                                        <span class="ion-ios-arrow-round-forward"></span>
                                    </a>
                                    <a href="#this" class="btn btn-white p-4 py-3">View Course
                                        <span class="ion-ios-arrow-round-forward"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    );
}

export default Home;