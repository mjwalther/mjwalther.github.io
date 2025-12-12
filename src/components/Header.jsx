import { Face } from "./Face"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"


export const Header = () => {
    const headerStyle = {marginBottom: "2px", marginTop: "2px"}

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <Face imageUrl="me.jpg" />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"}}>
                <h1 style={{marginBottom: "5px"}}>Matthias Jiro Walther</h1>
                <h2 style={headerStyle}>Data and Computer Science @ Stanford University</h2>
                <h3 style={headerStyle}>jiro /at/ stanford.edu</h3>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="https://github.com/mjwalther" aria-label="Github Link" ><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "#6abe83"}}/></a>
                    <a href="https://www.linkedin.com/in/jirowalther/" aria-label="LinkedIn Link"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "#84c9fb"}}/></a>                </div>
            </div>
        </div>
    )

}