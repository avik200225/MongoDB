const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student')

	.then(() => console.log('database connected successfully'))

	.catch((e) => console.log('not connected', e))



const academicSchema = new mongoose.Schema({

	studentid: Number,

	name: String,

	grade: String,

	subjects: String,

})

const cocurricularSchema = new mongoose.Schema({

	studentid: Number,

	name: String,

	activities: String,

	achievements: String,

})

//collection

const academicRecord = new mongoose.model('academicRecord', academicSchema);
const cocurricularRecord = new mongoose.model('cocurricularRecord',cocurricularSchema);

//create  academic document

const createacademicDocument = async () => {

	try {

    	const Data = await academicRecord.create([

        	{

            	studentid: 123,

            	name: 'Avik',

            	grade: 'A',

            	subjects: 'ECE',

        	},

        	{
            	studentid: 101,

            	name: 'Satadru',

            	grade: 'B',

            	subjects: 'EE',

        	},

        	{
            	studentid: 111,

            	name: 'Sourojit',

            	grade: 'A',

            	subjects: 'BCA',

        	},

			{
				studentid: 121,

            	name: 'Bhaskar',

            	grade: 'A',

            	subjects: 'ECE',
			}

    	])
	}

	catch(e){

    	console.log('error');

	}

}

createacademicDocument();

//read academic data

const getacademicDocument=async()=>{

	const result=await academicRecord.find();
	console.log(result);
}

getacademicDocument();

//create  cocurricular document

const createcocurricularDocument = async () => {

	try {

    	const Data = await cocurricularRecord.create([

        	{

            	studentid: 123,

            	name: 'Avik',

            	activities: 'Cricket',

            	achievements: 'GRADE A',

        	},

        	{
            	studentid: 101,

            	name: 'Satadru',

            	activities: 'Football',

            	achievements: 'GRADE A',

        	},

        	{
            	studentid: 111,

            	name: 'Sourojit',

            	activities: 'TT',

            	achievements: 'GRADE B',

        	},

			{
            	studentid: 121,

            	name: 'Bhaskar',

            	activities: 'Cricket',

            	achievements: 'GRADE A',
			}

    	])
	}

	catch(e){

    	console.log('error');

	}

}

createcocurricularDocument();

//read cocurricular data

const getcocurricularDocument=async()=>{

	const result=await cocurricularRecord.find();
	console.log(result);
}

getcocurricularDocument();
