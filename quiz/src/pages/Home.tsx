import { useEffect, useState } from "react";
import Quiz from '../components/Quiz/quiz';

const Home: React.FC = () => {
    const [TypeQuestion, setTypeQestion] = useState<"QCM"|"Input">("QCM")
    const [Question, setQuestion] = useState<string>("")
    const [Choices, setChoices] = useState<string[]>([])
    const [ReponseUser, setResponseUser] = useState<string | null>(null)

    useEffect(() => {
        setQuestion("Pourquoi Thimothée ressemble à Orelsan ?")
        setChoices(["son visage", "sa coupe", "ses lunettes", "son charisme"])
    }, [])

    const onCheck = (rep:string) => {
        setResponseUser(rep)
    }

    const handleChangeType = () => {
        if (TypeQuestion === "QCM") {
            setTypeQestion("Input")
        } else {
            setTypeQestion("QCM")
        }
    }
    
    return (<>
        <div className="flex items-center justify-center">
            <Quiz Type={TypeQuestion} Question={Question} Choices={Choices} onCheck={onCheck}/>
        </div>
        <div className="mt-5">
            <button onClick={handleChangeType}>
                {TypeQuestion === "Input" ? (
                    <p>QCM</p>
                ):(
                    <p>Input</p>
                )}
            </button>
        </div>
        <div className="mt-5">
            {ReponseUser && (
                <p>ta reponse est : {ReponseUser}</p>
            )}
        </div>
    </>);
};

export default Home;
