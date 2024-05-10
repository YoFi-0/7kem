import "../../style/index/index.css"
import Pro, {useIndexContext} from "./Context"
import Header from "../../components/Header"
import img_1 from "../../assets/img/1.png"
import img_2 from "../../assets/img/2.png"
import img_3 from "../../assets/img/3.png"
import img_4 from "../../assets/img/4.png"
import img_5 from "../../assets/img/5.png"
import img_6 from "../../assets/img/6.png"
import img_7 from "../../assets/img/7.png"
import img_8 from "../../assets/img/8.png"
import img_9 from "../../assets/img/9.png"
import img_10 from "../../assets/img/10.png"
import img_11 from "../../assets/img/11.png"
import img_12 from "../../assets/img/12.png"
import img_13 from "../../assets/img/12.png"
import img_14 from "../../assets/img/14.png"
import img_15 from "../../assets/img/15.png"

export default function () {
    const {} = useIndexContext()
    const imgList_2:string[] = [
        img_2,
        // img_4,
        img_12,
    ]
    const imgList_1:string[] = [
        img_1,
        img_3,
        img_5,
        img_6,
        img_7,
        img_8,
        img_9,
        img_10,
        img_11,
        img_13,
        img_14,
    ]

    return (
        <>
        <Header/>
        <section className="landing">
        <div className="_2">
  
            </div>
            <img className="effect" src={img_15} alt="effect" />
            <div className="_1">
 
            </div>
            

        </section>
        </>
    )
}



