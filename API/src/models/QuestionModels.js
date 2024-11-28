const mongoose = require('mongoose')

const QuestionShema = new mongoose.Schema({
    type:{type:String,required:true,enum:['QCM','Input']},
    theme:{type:String,required:false},
    question:{type:String,required:true},
    choices:{
        type:[String],
        default: null,
        validate: {
            validator: function (v) {
                return v === null || Array.isArray(v);
            },
            message: 'Le champ choices doit être un tableau de chaînes de caractères ou null.',
        },
    },
    answer:{type:String,required:true}
});

const Question = mongoose.model('Question', QuestionShema);

module.exports = Question