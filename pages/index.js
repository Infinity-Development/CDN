import Head from 'next/head';

const Index = () => {
    const title = "Infinity CDN";
    const description = "Custom Content Delivery Network for Infinity Bots and Infinity Development";
    const keywords = "discord, bot list, cdn, content, delivery";
    
    return (
        <div className="container">
            <Head>

                {/* Naming meta */}
                <title>{title}</title>
                <meta content={title} name="title" />
                <meta content={description} name="description" />
                <meta content={keywords} name="keywords" />
                
                {/* Contact meta */}
                <meta content="Toxic Dev · TheRealToxicDev" name="author" />
                <link href="https://github.com/TheRealToxicDev" rel="me" type="text/html" />
                <link href="mailto:toxic.dev09@gmail.com" rel="me" />
                
                {/* Browser config meta */}
                <meta content="utf-8" name="charset" />
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <meta content="width=device-width,initial-scale=1,user-scalable=no" name="viewport" />
                <link rel="manifest" href="/manifest.json" />
                <meta content="English" name="language" />
                <base href="/" />
                <meta content="#1D2022" name="theme-color" meta="meta" />
                <meta content="#1D2022" name="msapplication-TileColor" />

                {/* Open Graph tags */}
                <meta content="website" property="og:type" />
                <meta content="https://cdn.infinitybots.xyz" property="og:url" />
                <meta content={title} property="og:title" />
                <meta content={description} property="og:description" />
                <meta property="og:image" src="/images/png/Infinity5.png" />
                <meta content="en_US" property="og:locale" />
                
                {/* Twitter tags */}
                <meta content="summary" name="twitter:card" />
                <meta content="https://cdn.infinitybots.xyz" name="twitter:url" />
                <meta content={title} name="twitter:title" />
                <meta content={description} name="twitter:description" />
                <meta content="/images/png/Infinity5.png" name="twitter:image" />

                {/* Icons */}
                <link href="/images/png/Infinity5.png" rel="shortcut icon" type="image/png" /> 
                <link href="/images/png/Infinity5.png" rel="icon" type="image/png" />
                <link href="/images/png/Infinity5.png" rel="icon" sizes="180x180" type="image/png" />
                <link href="/images/png/Infinity5.png" rel="icon" sizes="152x152" type="image/png" />
                <link href="/images/png/Infinity5.png" rel="mask-icon" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="57x57" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="72x72" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="76x76" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="114x114" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="120x120" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="144x144" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="152x152" />
                <link href="/images/png/Infinity5.png" rel="apple-touch-icon" sizes="180x180" />

            </Head>
            <div className="sub-container">
                <img src="/images/png/Infinity.png" style={{ width: '125px', height: '125px'}}/>
                <h1>Infinity CDN</h1>
                <hr />
                <h3>
                    Proudly serving content for <span style={{color: '#7289DA'}}>Infinity Bot List</span>
                    <br /><br />
                    If you know what you're looking for here. Please provide a valid image/file link or endpoint
                </h3>
                <hr />
                <a href="https://infinitybots.gg"><button className="viewbutton">Main Website</button></a>
                <a href="https://blog.botlist.app"><button className="viewbutton">Blog Site</button></a>
            </div>

            <style jsx>{`
                ::selection {
                    background-color: #ffffff;
                    color: #7289DA
                }
                .container {
                    width: 100%;
                    height: 120vh;
                    text-align: center;
                    text-align: -webkit-center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: #16151D;
                }
                .sub-container {
                    text-align: -webkit-center;
                    width: 60%;
                    max-width: 500px;
                    background: linear-gradient(266.6deg, #23272A 46.48%, #23272A 61.97%);
                    border-radius: 20px;
                    padding: 40px 40px;
                    color: #aaaaaa;
                    box-shadow: 14px 14px 50px 10px #8A6AFD, inset 14px 14px 10px rgba(46, 51, 54, 0.2);
                }
                @font-face {
                    font-family: Balsamiq Sans;
                    src: url(fonts/Quicksand-Bold.ttf);
                }
                
                img {
                    width: 100%
                }
                h2 {
                    font-family: Balsamiq Sans;
                    font-size: calc(1.1rem + 0.3vw);
                }
                @media (min-width: 1200px) {
                    h2 a {
                        font-size: 1.5rem;
                    }
                }
                h3 {
                    font-size: 1.2rem;
                    font-family: Balsamiq Sans;
                    margin: 0px; 
                    padding: 0
                }
                .viewbutton {
                    color: white;
                    border-radius: 20px;
                    margin-top: 10px;
                    margin-right: 10px;
                    margin-left: 10px;
                    margin-bottom: 10px;
                    text-align: center;
                    padding: 10px;
                    text-decoration: none;
                    font-size: 18px;
                    transition: all 0.5s;
                    line-height: 25px;
                    width: 130px;
                    border-radius: 20px;
                    outline: none;
                    border: none;
                    background-color: #7289FF;
                    outline-style: inherit;
                    outline-color: rgb(177, 81, 255);
                    cursor: pointer;
                    transition-duration: 0.5s;
                    -webkit-transition-duration: 0.5s;
                    -moz-transition-duration: 0.5s;
                  }
            `}</style>
        </div>
    )
};

export default Index;
