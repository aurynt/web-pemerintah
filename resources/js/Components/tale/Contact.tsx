import { Setting } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Contact({ setting }: { setting: Setting }) {
    const { post, data, setData, errors } = useForm({
        name: "",
        email: "",
        surname: "",
        subject: "",
        message: "",
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("contact"));
    };
    return (
        <div className="contact-us section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-us-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div id="map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                                            width="100%"
                                            height="670px"
                                            style={{
                                                border: 0,
                                                borderRadius: 23,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <form onSubmit={submit} id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="section-heading">
                                                    <h2>
                                                        <em>Contact Us</em>{" "}
                                                        &amp; Get In{" "}
                                                        <span>Touch</span>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input
                                                        type="name"
                                                        name="name"
                                                        id="name"
                                                        value={data.name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Your Name..."
                                                        autoComplete="on"
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input
                                                        type="surname"
                                                        name="surname"
                                                        id="surname"
                                                        value={data.surname}
                                                        onChange={(e) =>
                                                            setData(
                                                                "surname",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Your Surname..."
                                                        autoComplete="on"
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value={data.email}
                                                        onChange={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="email"
                                                        pattern="[^ @]*@[^ @]*"
                                                        placeholder="Your E-mail..."
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input
                                                        type="subject"
                                                        name="subject"
                                                        value={data.subject}
                                                        onChange={(e) =>
                                                            setData(
                                                                "subject",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="subject"
                                                        placeholder="Subject..."
                                                        autoComplete="on"
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <textarea
                                                        name="message"
                                                        value={data.message}
                                                        onChange={(e) =>
                                                            setData(
                                                                "message",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="message"
                                                        placeholder="Your Message"
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button
                                                        type="submit"
                                                        id="form-submit"
                                                        className="orange-button"
                                                    >
                                                        Send Message Now
                                                    </button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="more-info">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="info-item">
                                                    <i className="fa fa-phone" />
                                                    <h4>
                                                        <a href="#">
                                                            {setting.telp}
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="info-item">
                                                    <i className="fa fa-envelope" />
                                                    <h4>
                                                        <a href="#">
                                                            {setting.email}
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="info-item">
                                                    <i className="fa fa-map-marker" />
                                                    <h4>
                                                        <a href="#">
                                                            {setting.address}
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
