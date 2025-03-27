import { ReactNode } from "react";
import "./section.css"
import { useNavigate } from "react-router-dom";

interface sectionProps {
    title: string;
    children: ReactNode;
    button?: string;
    path?: string;
}

const cardsection: React.FC<sectionProps> = ({ title, button, path, children }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (path) navigate(path); // Faqat path mavjud bo‘lsa, yo‘naltiramiz
    };

    return (
        <div className="sectionLeft">
            <h2 className="section-title">{title}</h2>
            <div className="cards">
                {children}
            </div>

            {typeof button === "string" && (
                <div className="btnDiv">
                    <button onClick={handleNavigate} className="btnSection">{button}</button>
                </div>
            )}
        </div>
    );
};

export default cardsection;
