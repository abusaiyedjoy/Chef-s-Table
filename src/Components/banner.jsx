
const banner = () => {
    return (
        <div className="hero h-[600px] object-center rounded-xl container mx-auto" style={{ backgroundImage: 'url(https://i.ibb.co/tMRm4cs/man-cook-holds-pan-with-vegetables-flying-air.jpg)' }}>
            <div className="hero-overlay rounded-xl bg-opacity-55"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-6xl font-extrabold">Discover an exceptional cooking <br />class tailored for you!</h1>
                    <p className="mb-5 text-lg text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="flex  justify-center items-center gap-5">
                        <button className="btn hover:border-green-500 text-white rounded-full  bg-green-500 border-green-500 hover:bg-green-500">Explore now</button>
                        <button className="btn hover:bg-green-500 rounded-full border-green-500 hover:border-green-500 text-white btn-outline">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default banner;