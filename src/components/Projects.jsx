
const Projects = () => {
    return (
        <div className="py-20 bg-black">
            <h1 className="text-5xl text-center font-bold mb-10 text-white">Projects</h1>
            <div className="md:flex mx-auto w-fit md:gap-5">
                {/* projects 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/images/reading.jpg" alt="image 1" className="rounded-xl border border-teal-700" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Personal Fitness Trainer</h2>
                        <p className="text-justify">Personal fitness training project where a trainer creates and delivers safe and effective exercise programs for apparently healthy individuals.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Live Demo</button>
                            <button className="btn btn-primary">Source Code</button>
                        </div>
                    </div>
                </div>

                {/* projects 2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/images/reading.jpg" alt="image 2" className="rounded-xl border border-teal-700" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Personal Fitness Trainer</h2>
                        <p className="text-justify">Personal fitness training project where a trainer creates and delivers safe and effective exercise programs for apparently healthy individuals.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Live Demo</button>
                            <button className="btn btn-primary">Source Code</button>
                        </div>
                    </div>
                </div>

                {/* projects 3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/images/reading.jpg" alt="image 3" className="rounded-xl border border-teal-700" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Personal Fitness Trainer</h2>
                        <p className="text-justify">Personal fitness training project where a trainer creates and delivers safe and effective exercise programs for apparently healthy individuals.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Live Demo</button>
                            <button className="btn btn-primary">Source Code</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;