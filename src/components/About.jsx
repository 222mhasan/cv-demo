
const About = () => {
    return (
        <div className="py-12 bg-black text-white">
            <div className="m-auto w-fit">
                <img className="w-52 rounded-full border-2 border-teal-700" src="/src/images/dragon.png" alt="" />
            </div>
            <div className="md:flex justify-evenly items-center mt-10 ">
                <div className="w-3/4 md:w-1/2 mx-auto">
                    <h1 className="text-center text-4xl font-bold mb-5">Who Am I ?</h1>
                    <p className="font-semibold text-lg">A focused and diligent Frontend Developer. Experienced in using JavaScript, as well as the React.js library to develop front end applications. Curious and eager to learn new technologies. Passionate about giving best and following coding practice. I create responsive secure websites for my clients. My superior focus and attention to detail combined with my extensive knowledge of HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, Redux, Node.js, Express.js, React Native, MongoDB and Git makes me an exceptional choice. Being a fast learner, I quickly pick up business knowledge related to my project.</p>
                </div>
                <div className="mx-auto w-fit mt-6">
                    <img className="w-72 rounded-lg border-2 border-teal-700" src="/src/images/coding-.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;