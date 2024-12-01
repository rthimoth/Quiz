const verifAnswer = async(AnswerUser:string, CorrectAnswer:string):Promise<boolean> => {
    if (AnswerUser === CorrectAnswer) {
        return true;
    }  
    return false;
  };
  
  export default verifAnswer;