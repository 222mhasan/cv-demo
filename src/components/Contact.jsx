
const Contact = () => {
    return (
        <div className="bg-black pt-10">
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="my-10 max-w-3xl shrink-0 w-full rounded-lg shadow-2xl bg-base-100">
                        <div className="mt-8">
                            <h1 className="text-5xl font-bold text-center">Contact Me</h1>
                        </div>
                        <form className="w-[500px] p-5 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Subject</span>
                                </label>
                                <input type="text" placeholder="subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered text-lg h-40" placeholder="type your message here"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;