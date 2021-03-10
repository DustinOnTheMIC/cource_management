import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <section class="ftco-intro py-5 bg-primary">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-10">
                            <div class="row g-lg-5">
                                <div class="col-md-7 text-lg-right">
                                    <h2 class="mb-0">Newsletter - Stay tune and get the latest update</h2>
                                    <p>Far far away, behind the word mountains</p>
                                </div>
                                <div class="col-md-5 border-left d-flex align-items-center">
                                    <form action="#" class="subscribe-form">
                                        <div class="form-group d-flex align-items-center">
                                            <input type="text" class="form-control" placeholder="Enter email address"></input>
                                            <a href="#" class="btn-icon"><span class="fa fa-paper-plane"></span></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default index;