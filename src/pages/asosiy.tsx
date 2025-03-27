import Cards from "../components/card/cards";
import Cardsection from "..//components/sections/section"
import "./home.css"

const asosiy = () => {
    return (
        <div className="home-container">
            <div className="left-kasblar__kurslar">
                <Cardsection title={"Kasblarim"}>
                    <Cards title={"Frontend-ReactJs"} student={""} fullName={""} imageSrc="..\src\assets\ulugbek.png" cost={""} progress={77} button={"Darsni davom ettirish"} />
                </Cardsection>
                <Cardsection title={"Kurslarim"}>
                    <Cards title={"Bootsrap 5 bo'yicha mukammal kurs"} student={""} fullName={""} imageSrc="..\src\assets\bootstrap.jpeg" cost={""} progress={100} button={"Darsni davom ettirish"} />
                </Cardsection>

                <Cardsection title={"Mashxur kasblarimiz"} button="Barchasini ko'rish" path="/kasblar">
                    <Cards title={"Kiberxavsizlik: pentasting"} student={"1285 o'quvchi"} fullName={"Ulug'bek Muminuv"} imageSrc="..\src\assets\kiber.jpeg" cost={"3 000 000 so'm"} />
                    <Cards title={"Frontend-ReactJs"} student={"211 o'quvchi"} fullName={"Ulug;bek Samigjonov"} imageSrc="..\src\assets\ulugbek.png" cost={""} progress={100} />
                    <Cards title={"English for IT"} student={"816 o'quvchi"} fullName={"Behzod Botirov"} imageSrc="..\src\assets\english.jpeg" cost={"1 500 000 so'm"} />
                </Cardsection>
                <Cardsection title={"Mashhur kurslarimiz"} button="Barchasini ko'rish" path="/kurslar">
                    <Cards title={"Dasturlash asoslari. Pyhton"} student={"0 o'quvchi"} fullName={"Anvar Narzullayev"} imageSrc="..\src\assets\python.jpeg" cost={""} free="Bepul" />
                    <Cards title={"Frontend dasturlash asoslari"} student={"0 o'quvchi"} fullName={"MuhammadJavohir Sura'tov"} imageSrc="..\src\assets\html.jpeg" cost={""} free="Bepul" />
                    <Cards title={"Professional Node.js: noldan boshlab e'lonlar sayti yaratishni o'rganing"} student={"0 o'quvchi"} fullName={"Behruz Xolmominov"} imageSrc="..\src\assets\node.jpeg" cost={"247 000 so'm"} />
                </Cardsection>
            </div>


            <div className="right-sideBar">
                <img src="../src/assets/image.png" alt="" />
            </div>
        </div>
    )
}

export default asosiy;
