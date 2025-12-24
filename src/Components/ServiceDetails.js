import { useParams } from "react-router-dom";
import services from "../data/Service.json";
import styles from "../Styles/ServiceDetails.module.css"
import { Col, Row } from "react-bootstrap"
import FooterTwo from "./FooterTwo";
// import { FiList } from "react-icons/fi";
export default function ServiceDetails() {
    const { id } = useParams();
    const service = services.find(item => item.id === id);
    const features = [
        "Customized plant based on conditions",
        "Consideration of aesthetic choices",
        "Expert advice on plant maintenance",
        "Diversity of plant species",
        "Consideration of seasonal interest",
        "Recommendations for edibles and herbs",
    ];

    const Detailsicons = [
        { icons: "/images/a-icon1.svg", },
        { icons: "/images/a-icon2.svg", },
        { icons: "/images/a-icon3.svg", },
        { icons: "/images/a-icon4.svg", },
        { icons: "/images/a-icon5.svg", },
        { icons: "/images/a-icon6.svg", },
    ]
    return (
            <div className={styles.SDetails}>
           
        <div className={styles.parent}>
            <Row>
                <Col md={8} sm={12} lg={8} xl={8} xxl={8}>
                    <div className="pe-4">

                        <div className={styles.breadcrumb}>
                            <a href=""> Home |</a>
                            <a href="">Services |</a>
                            <a href="">  Details</a>
                            <h1 className={styles.title}>{service.title}</h1>
                        </div>
                        <div className={styles.main}>
                            <img src={service.main} alt="" />
                        </div>
                        <div className={styles.paras}>
                            <p>{service.details}</p>
                            <p>{service.detailtwo}</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} lg={4} xl={4} xxl={4}>
                    <div className={styles.side}>
                        <img src={service.side} alt="" />
                    </div>
                    <div className={styles.features}>
                        {features.map((item, index) => (
                            <div key={index} className={styles.Iconcard}>
                                <img  src={Detailsicons[index].icons}    alt=""  width="20px" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>    

        <FooterTwo/> 
            </div>
    );
}
