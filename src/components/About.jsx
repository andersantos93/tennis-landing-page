import "../styles/about.css"

export default function About() {
    return (
        <section className="domore py-5 gap-">
            <div className="container text-center d-flex flex-column">
                <h2 className="">About the Club</h2>
                <p>At the award-winning ProShot. than just a cold calculated business - it is passion!</p>
                <p>Vilas Tennis Academy offers tennis camps and professional programs every week of the year in Punta Cana (Dominican Republic) for juniors and adults tennis player.</p>
                <div className="">
                    <a href="#" className="btn btn-primary me-3">About</a>
                    <a href="#" className="btn btn-outline-primary">Gallery</a>
                </div>
            </div>
            <div className="container text-center mt-4 numbers p-4">
                <div className="row mt-3 mb-3">
                    <div className="col-6 col-md-6 mb-5">
                        <div>12</div>
                        <div>Tennis Courts</div>
                    </div>
                    <div className="col-6 col-md-6">
                        <div>999+</div>
                        <div>Club Members</div>
                    </div>
                    <div className="col-6 col-md-6">
                        <div>45</div>
                        <div>Tournaments/Year</div>
                    </div>
                    <div className="col-6 col-md-6">
                        <div>3000+</div>
                        <div>Visitor Yearly</div>
                    </div>
                </div>
            </div>
        </section>
    )
}