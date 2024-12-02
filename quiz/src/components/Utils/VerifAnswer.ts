const verifAnswer = async(AnswerUser:string, CorrectAnswer:string):Promise<boolean> => {
    const CleanAnswerUser:string = await CleanAnswer(AnswerUser);
    const CleanCorrectAnswer:string = await CleanAnswer(CorrectAnswer);
    if (CleanAnswerUser === CleanCorrectAnswer) {return true};
    if (await MissOrAddOneLetter(CleanAnswerUser, CleanCorrectAnswer) || await MissOrAddOneLetter(CleanCorrectAnswer, CleanAnswerUser)) {return true}
    if (await RemovePronouns(CleanAnswerUser, CleanCorrectAnswer)) {return true}
    return false
};

const CleanAnswer = async(Answer:string):Promise<string> => {
    return  Answer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z]/g, "").toUpperCase()
};

const MissOrAddOneLetter = async (Answer1: string, Answer2: string):Promise<boolean> => {
    const TabAnswer2: string[] = Answer2.split("");
    for (const [index, _ ] of TabAnswer2.entries()) {
        const TabAnswer2Test: string[] = [...TabAnswer2];
        TabAnswer2Test.splice(index, 1);
        const Answer2Test:string = TabAnswer2Test.join("")
        if (Answer1 === Answer2Test) {return true}
    }
    return false;
};


const RemovePronouns = async (Answer1:string, Answer2:string):Promise<boolean> => {
    const ListOfAnswer1 = await testPronouns(Answer1)
    const ListOfAnswer2 = await testPronouns(Answer2)
    for (let element1 of ListOfAnswer1) {
        for (let element2 of ListOfAnswer2) {
            if (element1 === element2) {
                return true;
            }
        }
    }
    return false;
};

const testPronouns = async (word:string):Promise<string[]> => {
    let res:string[] = [word];
    const Pronouns:string[] = ["UN", "UNE", "LE", "LA", "LES", "DU", "DE LA", "DE L'", "DES","MON", "MA", "MES", "TON", "TA", "TES", "SON", "SA", "SES","NOTRE", "NOS", "VOTRE", "VOS", "LEUR", "LEURS", "CE", "CET", "CETTE", "CES"];
    for (let pronoun of Pronouns) {
        const regex = new RegExp(`^${pronoun}`, 'i');
        if (regex.test(word)) {
            res.push(word.replace(regex, ''))
        }
    }
    return res;
};

export default verifAnswer;