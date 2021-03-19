import React, { Component } from 'react';
import Introduce from '../../Components/Common/Introduce/Introduce'
import TeamMember from '../../Components/TeamComponents'
class index extends Component {
    render() {
        return (
            <div>
                <Introduce pageTitle="Team"/>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <TeamMember name="Ph.D Adrian Molises" position="DEVELOPER AND LEAD INSTRUCTOR" img="https://i.pinimg.com/474x/58/c3/e2/58c3e222b2eb3aacf67e45e987f318d6.jpg"/>
                            <TeamMember name="Ph.D Adrian mois" position="DEVELOPER AND LEAD INSTRUCTOR" img="https://i.pinimg.com/474x/58/c3/e2/58c3e222b2eb3aacf67e45e987f318d6.jpg"/>
                            <TeamMember name="Ph.D Adrian muoi" position="DEVELOPER AND LEAD INSTRUCTOR" img="https://i.pinimg.com/474x/58/c3/e2/58c3e222b2eb3aacf67e45e987f318d6.jpg"/>
                            <TeamMember name="Ph.D Adrian mo" position="DEVELOPER AND LEAD INSTRUCTOR" img="https://i.pinimg.com/474x/58/c3/e2/58c3e222b2eb3aacf67e45e987f318d6.jpg"/>
                            <TeamMember name="Ph.D Adrian mut" position="DEVELOPER AND LEAD INSTRUCTOR" img="https://i.pinimg.com/474x/58/c3/e2/58c3e222b2eb3aacf67e45e987f318d6.jpg"/>
                            <TeamMember name="Ph.D Adrian mouse" position="DEVELOPER AND LEAD INSTRUCTOR" img="https://i.pinimg.com/474x/58/c3/e2/58c3e222b2eb3aacf67e45e987f318d6.jpg"/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default index;