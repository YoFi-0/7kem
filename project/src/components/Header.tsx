import "./style/header.css"
import logo from "../assets/img/logo.png"
import { header_item } from "./contents"
export default function() {

    return <div className="header">
        <div className="no"></div>
        <ul>
            {header_item.map((value, i) => {
                return <li key={i}><a href={value.href}>{value.name}</a></li>
            })}            
        </ul>
        <img src={logo} alt="logo" />
    </div>
}