import { FaHome, FaPhone, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="p-10 ">
                <div className=" md:flex">
                    <div className="w-1/2 font-bold">
                        <div className="flex items-center text-lg gap-4">
                            <FaHome />
                            <a className="link link-hover">17/6 Tolarbagh, Mirpur-1
                                <br />
                                Dhaka, Bangladesh</a>
                        </div>
                        <div className="flex items-center text-lg gap-4">
                            <FaPhone />
                            <a className="link link-hover">+8801648470056</a>
                        </div>
                        <div className="flex items-center text-lg gap-4">
                            <MdOutlineEmail />
                            <a className="link link-hover">222mhasan@gmail.com</a>
                        </div>
                    </div>

                    <div className="text-start font-bold mt-10 md:mt-0">
                        <h1 className="text-2xl">Me</h1>
                        <p>This is me Mehedi Hasan and a Web Developer. I enjoy to discussing new projects and coding practice</p>

                        <div className="flex gap-3 text-3xl my-5">
                            <a href="https://github.com/222mhasan"><FaGithub /></a>
                            <a href="https://www.facebook.com/"><FaFacebook /></a>
                            <a href="https://www.linkedin.com/in/mehedi-hasan-a39541254/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;