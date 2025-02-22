import Navbar from "../components/Navbar";
import homeimg from "../assets/Main.png";

export default function Home() {
    return (
        <>
            <div className="px-4">
                <Navbar />
                <div className="row g-4">
                    {Array(10).fill().map((_, i) => (
                        <div className="col-3 mb-4" key={i}> {/* mb-4 to add margin between rows */}
                            <div className="card">
                                <a href="#"><img src={homeimg} className="card-img-top" alt="..." /></a>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}