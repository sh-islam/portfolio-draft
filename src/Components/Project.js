import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import KUTE from 'kute.js'
import './Project.css';


function ProjectCard({ project }) {
    const x = useMotionValue();
    const y = useMotionValue();
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <motion.div
            className='project-container'
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='project-contents'>
                <motion.div
                    className='project-title'
                    style={{ x: x, y: y, scale: 0.5 }}
                    drag={false}>
                    <h2>{project.title}</h2>
                </motion.div>
                <img src={project.imgLink} alt={project.title} />
                <p>{project.content}</p>
               <div className='project-icons' style={{display: 'flex', justifyContent:"center", alignItems:"center"}}>
               <a href={project.gitLink}>
                    github links
               </a>
               </div>
            </div>
        </motion.div>
    );
}

export default function Project() {
    const projectData = [
        {
            title: 'Dino-run',
            gitLink: 'https://github.com/sh-islam/dino-run',
            imgLink: 'https://raw.githubusercontent.com/sh-islam/dino-run/main/demo.png',
            content: "Recreation of Google's dinosaur game. Created using Pygame."
        },
        {
            title: 'Dino-run',
            gitLink: 'https://github.com/sh-islam/dino-run',
            imgLink: 'https://raw.githubusercontent.com/sh-islam/dino-run/main/demo.png',
            content: "Recreation of Google's dinosaur game. Created using Pygame."
        }
    ];

    // For y-scrolling effects
    const { scrollYProgress } = useScroll();

    // Blob animations
    useEffect(() => {
        const tween1 = KUTE.fromTo(
            '#Blob1',
            { path: '#Blob1' },
            { path: '#Blob2' },
            { repeat: true, duration: 5000, yoyo: true }
        );
        tween1.start();

        const tween2 = KUTE.fromTo(
            '#right-blob1',
            { path: '#right-blob1' },
            { path: '#right-blob2' },
            { repeat: true, duration: 2000, yoyo: true }
        );
        tween2.start();

        const tween3 = KUTE.fromTo(
            '#left-blob1',
            { path: '#left-blob1' },
            { path: '#left-blob2' },
            { repeat: true, duration: 1000, yoyo: true }
        );
        tween3.start();

        const tween4 = KUTE.fromTo(
            '#left-blob3',
            { path: '#left-blob3' },
            { path: '#left-blob4' },
            { repeat: true, duration: 2000, yoyo: true }
        );
        tween4.start();

    }, []);


    return (
        <div className='Project-section' style={{ display: "flex", flexDirection: "column", width: "100vw", justifyContent: "center", alignItems: "center" }}>
            <div className='layered-border top'></div>
            <div className='project-header'>
            <h1 style={{zIndex:"1", position: "absolute", color: "#E0E1DD", fontSize: "32px", fontFamily: 'Noto Sans Display, sans-serif' }}>Projects</h1>
                <section className='project-blob-animation'>
                    <svg id="project-center-blob" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(446.19524600260536 291.18364598799127)"><path id="Blob1" d="M156.8 -135.8C202.8 -110.8 239.4 -55.4 236 -3.4C232.6 48.6 189.1 97.1 143.1 134.1C97.1 171.1 48.6 196.6 0.6 196C-47.4 195.4 -94.8 168.8 -136.1 131.8C-177.4 94.8 -212.7 47.4 -224.4 -11.7C-236 -70.7 -224.1 -141.4 -182.8 -166.4C-141.4 -191.4 -70.7 -170.7 -7.7 -163.1C55.4 -155.4 110.8 -160.8 156.8 -135.8" fill="#142134"></path></g>
                        <g transform="translate(463.18003217285457 331.55583053470684)"><path style={{ visibility: "hidden" }} id="Blob2" d="M80.2 -148.9C108 -122.8 137.6 -109.7 158 -87C178.4 -64.3 189.7 -32.2 195.3 3.2C201 38.7 200.9 77.3 188.1 113.1C175.3 148.9 149.6 181.8 116.2 187.5C82.7 193.2 41.3 171.6 4.9 163.1C-31.5 154.6 -63 159.1 -92.2 151C-121.3 142.8 -148.1 121.9 -167.2 94.6C-186.3 67.3 -197.6 33.7 -208.9 -6.5C-220.2 -46.7 -231.3 -93.3 -221.5 -136.6C-211.7 -179.9 -180.8 -219.9 -140.4 -238.7C-100 -257.5 -50 -255.3 -11.9 -234.6C26.2 -214 52.3 -175 80.2 -148.9" fill="#142134"></path></g>
                    </svg>
                    <svg id="project-right-blob" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(485.21076966755527 310.43297288600445)"><path id="right-blob1" d="M95.3 -170.9C119.3 -151.2 131.5 -117.1 145.5 -86.2C159.5 -55.3 175.3 -27.7 174.7 -0.3C174.1 27 157.2 54 140.1 79.5C123 105.1 105.8 129.2 82.4 145.5C59 161.9 29.5 170.4 0.2 170.1C-29.2 169.9 -58.3 160.7 -101.6 155.9C-144.9 151 -202.4 150.5 -227.5 125.3C-252.5 100 -245.3 50 -239.6 3.3C-234 -43.5 -230 -87 -202.9 -108.7C-175.7 -130.3 -125.3 -130.1 -87.7 -141.9C-50 -153.6 -25 -177.3 5.3 -186.5C35.7 -195.8 71.3 -190.6 95.3 -170.9" fill="#1f2b3d"></path></g>
                        <g transform="translate(482.3158491002582 312.4441671151957)"><path style={{ visibility: "hidden" }} id="right-blob2" d="M89.3 -150.8C128.5 -131.9 182 -134 198.5 -112.3C215 -90.7 194.5 -45.3 181.5 -7.5C168.5 30.3 163.1 60.7 156.2 98.9C149.2 137.2 140.9 183.3 114.6 199.3C88.3 215.3 44.2 201.2 7.3 188.6C-29.7 176.1 -59.3 165.1 -87.2 150C-115 134.9 -141.1 115.7 -176.3 90C-211.4 64.3 -255.7 32.2 -266.5 -6.2C-277.4 -44.7 -254.7 -89.3 -225.8 -125.9C-196.9 -162.4 -161.7 -190.7 -123 -209.9C-84.3 -229.1 -42.2 -239 -8.6 -224.2C25 -209.3 50 -169.6 89.3 -150.8" fill="#1f2b3d"></path></g>
                    </svg>
                    <svg id="project-left-blob" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(432.828101770549 304.36839759490704)"><path id="left-blob1" d="M102.2 -152.5C145.1 -152.3 201.1 -150.4 231.6 -124.7C262.1 -99 267.1 -49.5 255.1 -6.9C243.1 35.7 214.2 71.3 183.6 96.7C152.9 122.1 120.4 137.3 89.6 151.6C58.7 165.9 29.3 179.5 -5.1 188.3C-39.5 197.1 -79 201.2 -118.5 191.8C-158.1 182.5 -197.7 159.7 -207.8 125.5C-217.9 91.3 -198.4 45.7 -202.2 -2.2C-205.9 -50 -232.9 -100 -225.5 -139C-218.2 -177.9 -176.6 -205.9 -133.3 -205.9C-90 -205.9 -45 -177.9 -7.7 -164.7C29.7 -151.4 59.3 -152.8 102.2 -152.5" fill="#101C2C"></path></g>
                        <g transform="translate(462.45985811300807 291.6812008282418)"><path id="left-blob2" style={{ visibility: "hidden" }} d="M72.7 -132.9C95.3 -112.8 115.6 -95.6 146.5 -74C177.3 -52.3 218.7 -26.2 238 11.2C257.3 48.5 254.7 97 228.3 126.3C201.8 155.6 151.7 165.7 109.7 176.8C67.7 187.9 33.8 199.9 -4.7 208C-43.2 216.1 -86.3 220.2 -126 207.8C-165.7 195.4 -201.9 166.4 -230.4 129.1C-258.8 91.7 -279.4 45.8 -274.9 2.6C-270.4 -40.7 -240.9 -81.3 -210.6 -115.5C-180.4 -149.7 -149.4 -177.5 -114.2 -190.3C-79 -203.2 -39.5 -201.1 -7.2 -188.5C25 -176 50 -152.9 72.7 -132.9" fill="#101C2C"></path></g>
                    </svg>
                    <svg id="project-left-top-blob" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(433.82330352880524 294.22279294064344)"><path id="left-blob3" d="M111.4 -126.4C144.6 -78.3 171.8 -39.1 173.1 1.3C174.4 41.7 149.8 83.4 116.6 133.4C83.4 183.4 41.7 241.7 0.2 241.5C-41.2 241.2 -82.5 182.5 -108 132.5C-133.5 82.5 -143.2 41.2 -140.3 2.9C-137.4 -35.4 -121.7 -70.7 -96.2 -118.9C-70.7 -167 -35.4 -228 1.9 -229.9C39.1 -231.8 78.3 -174.6 111.4 -126.4" fill="#1F2B3D"></path></g>
                    <g transform="translate(464.1681468569797 309.60080068897173)"><path id='left-blob4' d="M156.6 -164.1C197.3 -116 220.6 -58 221.1 0.5C221.6 58.9 199.2 117.9 158.5 165.2C117.9 212.5 58.9 248.3 11.8 236.5C-35.4 224.7 -70.7 165.4 -118.4 118C-166 70.7 -226 35.4 -243.7 -17.7C-261.4 -70.7 -236.8 -141.4 -189.1 -189.6C-141.4 -237.8 -70.7 -263.4 -6.4 -257C58 -250.6 116 -212.3 156.6 -164.1" fill="#1F2B3D"></path></g>
                    </svg>
                </section>
                <div className="motion-container" style={{ zIndex: "-1", fontFamily: 'Noto Sans Display, sans-serif' }}>
                    <motion.div
                        style={{
                            x: useTransform(
                                scrollYProgress,
                                [0, 1],
                                ["calc(-50vw -100%)", "calc(50vw + 500%)"]
                            ),
                        }}
                    >
                        <h1 style={{ fontSize: "23px", color: "#142134" }}>Projects</h1>
                    </motion.div>
                    <motion.div
                        style={{
                            x: useTransform(
                                scrollYProgress,
                                [0, 1],
                                ["calc(-80vw)", "calc(80vw)"]
                            ),
                        }}
                    >
                        <h1 style={{ fontSize: "20px", color: "#142134" }}>Projects</h1>
                    </motion.div>
                    <motion.div
                        style={{
                            x: useTransform(
                                scrollYProgress,
                                [0, 1],
                                ["calc(-100vw)", "calc(100vw)"]
                            ),
                        }}
                    >
                        <h1 style={{ fontSize: "25px", color: "#101C2C" }}>Projects</h1>
                    </motion.div>
                </div>
            </div>
            <div className='Projects'>
                {projectData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className='layered-border bottom'></div>
        </div>
    );
}
