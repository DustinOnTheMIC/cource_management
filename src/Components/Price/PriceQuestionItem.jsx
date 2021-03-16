import React, { Component } from 'react';

class PriceQuestionItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {idCollapse,isShow} = this.props
        return (
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${idCollapse}`}
                         aria-controls={`${idCollapse}`}>
                        How to Enroll This Online Courses?
                    </button>
                </h2>
                <div id={`${idCollapse}`} class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                    </div>
                </div>
            </div>
        );
    }
}

export default (PriceQuestionItem);