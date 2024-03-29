import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setStatusHome} from "../slices/statusSlice";

const Intro = () => {
    const { player }  = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <section className="intro">
            <div className="animated-title">
                <div className="text-top">
                    <div>
                        <span className="topSpan">Good evening,</span>
                        <span className="topSpan2">
                            <span><img src={player._avatar}
                                       alt="Avatar" className="avatar"/></span> {player._username}
                        </span></div>
                </div>
                <div className="text-bottom">
                    <div><span className="tetris">Red</span>Tetris.</div>
                </div>
            </div>
        </section>
    );
};

export default Intro