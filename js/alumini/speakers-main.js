var arrPresent = [];
var section_present = document.getElementById("all-speakers-present");
var m_contents_present = document.getElementById("model_contents_present");

//To add a speaker just add an element
// in the below array and add its
//respective properties like name, pic, about, etc
//(
//and keep the element id as NULL
// it will automatically generate it
arrPresent.push({
    name: "Ujjwal Khandelwal",
    pic: "images/Alumini/ujjwalkhandelwal.jpg",
    who1: "Software Engineer",
    who2: "Accenture, Japan",
    who3: "BTech-MTech, ME(2015-20)",
    about: "Ujjwal Khandelwal is a Y15 batch (B-Tech, M-Tech) student in the department of Mechanical Engineering at IIT Kanpur. He is currently working as a Software Engineer in Accenture, Japan. He was one of the toppers in his department and his INTERNSHIP EXPERIENCES includes Tele-Research Intern at National University of Singapore and Machine Learning Intern at ISMRITI. His interests include but are not limited to the field of Machine Learning, NLP, and Data Analysis. He is a core member of the Bhaktivedanta Club, IIT Kanpur and coordinated many times Bhagavad Gita Lecture Series, Janmashtami Programs and various retreats ",
    id: ""
}, {
    name: "Dr. Jayant Mohanta",
    pic: "images/Alumini/jayantamohanta.jpg",
    who1: "Assistant Professor, ME",
    who2: "IIT Jodhpur",
    who3: "Post Doctoral Research(2018-21)",
    about: "Dr. Jayant Kumar Mohanta aka Jayantesh Krishna Das did his B-Tech in department of Mechanical Engineering at IIT Indore from 2010-14 and later completed his P.h.D in just 4 years from IIT Indore. He than came to IIT Kanpur for Post-doc in Robotics under Prof. Laxmidhar Behera and worked on various interesting projects . He is currently an assistant professor at IIT Jodhpur in the ME Department. He got connected to the teachings of Bhagavad during his undergraduate days and is now very expert to teach that science in a very interesting and thoughtful manner.",
    id: ""
}, {
    name: "Jitendra Soni",
    pic: "images/Alumini/jitendrasoni.jpeg",
    who1: "Ph.D. Student, MSE",
    who2: "IIT Delhi",
    who3: "BTech-MTech, MSE(2015-2020)",
    about: "He completed his B.Tech and M.Tech in the department of Material Science and Engineering at IIT Kanpur from 2015-2020. He was introduced to Bhaktivedanta Club by Keshav Prabhu (his batch mate) in the initial years and since then he is connected with Sir and his teachings of Bhagavad Gita. Currently, he is pursuing his PhD from IIT Delhi.",
    id: ""
}, {
    name: "Ravi Prakash",
    pic: "images/Alumini/raviprakash.jpg",
    who1: "Postdoctoral researcher",
    who2: "TU Delft, Netherlands",
    who3: "PhD, EE(2014-21)",
    about: " Dr. Ravi Prakash aka Ravi Nitai Chandra Das was Institute Gold Medalist during  B-Tech in department of Electrical Engineering at NIT Silchar from 2010-14 and later completed his P.h.D in Robotics from IIT Kanpur under Prof. Laxmidhar Behera and worked on various interesting projects . He is currently an a PostDoc in TU Delft, Netherlands where he works on developing robots that learn from humans. He got connected to the teachings of Bhagavad during the first year of his undergraduate days and is now teaching this science in a lucid and thoughtful manner. He has been preaching this message for more than 10 years now and is very popular in student programs.",
    id: ""
}, {
    name: "Madhav Rijal",
    pic: "images/Alumini/madhavrijal.jpeg",
    who1: "Ms in Mechatronics",
    who2: "Southern Denmark University",
    who3: "MTech(2019-2021)",
    about: "Madhav Rijal completed his MTech from IIT-KANPUR in 2021. He came in connection with BVC during his first semester. He was attracted to krishna consciousness due to scientific discourse on Bhagawat Gita presented by Dr. Laila Purushottam DAS. He often used to tell that food prepared at Bhaktivedānta club is entirety different from Normal food. Our prasadam did various magic for him. He appreciated Bhaktivedānta club for bringing positive change in his life as he often quotes ' I was living like animal before coming in the association of club members' . ",
    id: ""
}, {
    name: "Sachin Kumar Sahoo",
    pic: "images/Alumini/sachinsahoo.jpg",
    who1: "Management Trainee",
    who2: "Tata Steel",
    who3: "BTech, ME(2015-19)",
    about: "Sachin Kumar Sahoo did his B-tech in department of Mechanical Engineering at IIT Kanpur from 2015-2019. He is now working as a Management Trainee at Tata Steel in R&D department. He came in Krishna Consciousness in the 2nd year of his undergraduate days ",
    id: ""
}, {
    name: "Trilok Meena",
    pic: "images/Alumini/trilokmeena.jpg",
    who1: "Design Trainee Engineer",
    who2: "HAL",
    who3: "BTech, EE(2015-19)",
    about: "Trilok Meena did his B-Tech in Electrical Engineer at IIT Kanpur from 2015-19. He is currently an Design Trainee Engineer at HAL in RWRDC division Bengaluru. He got connected to the teachings of Bhagavad gita during third year of his undergraduate days and has been practicing from the last 4 years.",
    id: ""
}, {
    name: "Krishna Meena",
    pic: "images/Alumini/krishnameena.jpg",
    who1: "Student",
    who2: "",
    who3: "B.Tech, ME(2015-19)",
    about: "Krishan Meena did his B.Tech in the department of Mechanical Engineering at IIT Kanpur from 2015-2019. He came in contact with the BVC-IITK devotees in 6th semester. He was part of various trips and events organised by the club.",
    id: ""
}, {
    name: "Abhishek Panchal",
    pic: "images/Alumini/abhishekpanchal.jpg",
    who1: "Ph.D. Student, MSE",
    who2: "NUS, Singapore",
    who3: "BTech, MSE(2015-19)",
    about: "Abhishek Panchal did his BTech from IIT Kanpur(2015-19) in the department of Materials Science and Engineering. He got connected to the teachings of Bhagavad Gita in 3rd year through the programs and trips organized by Prof. Laxmindhar Behera. He was a part of the organizing team for 2018 Janmashtami festival at IIT Kanpur. He is currently pursuing PhD at NUS in area of solid state battery devices and also mentoring others to take advantage of this invaluable science of Bhagavad Gita. ",
    id: ""
}, {
    name: "Sunil Kumar Dutta",
    pic: "images/Alumini/sunildatta.jpg",
    who1: "Ph.D. Student, ME",
    who2: "IIT Delhi",
    who3: "MTech, ME(2017-19)",
    about: "Sunil Kumar Dutta had joined  IIT Kanpur in 2017 for the MTech program in Mechanical Engineering. He came in contact with BVC with the help of his friend. Since then, he has been coming to BVC. He has been part of different festival celebrations, retreats, and morning programs. Currently, he is doing Ph.D. from IIT Delhi in the Department of  Applied Mechanics.",
    id: ""
}, {
    name: "Pranav Kulkarni",
    pic: "images/Alumini/pranavkulkarni.jpeg",
    who1: "M.Sc. Student, ME",
    who2: "Aalto University, Finland",
    who3: "BTech, ME(2015-19)",
    about: "Pranav Kulkarni did his B-Tech in the department of Mechanical Engineering at IIT Kanpur from 2015-19 and is currently pursuing his MSc in Mechanical Engineering from Aalto University in Finland. He got connected to the teachings of Bhagavad Gita during his third year of undergraduate studies at IIT Kanpur. He is actively preaching the message of Bhagavad Gita in Marathi and serving at ISKCON Helsinki.",
    id: ""
}, {
    name: "Shashi Kumar Munda",
    pic: "images/Alumini/shashimunda.png",
    who1: "Student",
    who2: "",
    who3: "BS, MTH(2013-17)",
    about: "He did his Bachelor's degree in Maths and Scientific Computing at IIT Kanpur 2013-17.",
    id: ""
}, {
    name: "Manish Kumar Meena",
    pic: "images/Alumini/manishmeena.jpg",
    who1: "Physics Faculty",
    who2: " ",
    who3: "BTech, ME(2013-17)",
    about: "Manish Kumar has done his Btech from IIT Kanpur mechanical engineering, later he joined as a physics HOD in one of the devotee coaching connected to Iskcon pune to serve society and to preach upcoming generation in krishna consciousness along with material education and to be practicing KC seriously while considering it to be integral part of human life. During his time in college he got in touch with BVC iitk in third year and got inspired to propogate mission of Chaitanya mahaprabhu and Prabhupada after getting knowledge from Bhagvat Gita and hearing about lord from different speakers specially Behera sir.",
    id: ""
        // }, {
        //     name: "Anmol Awasthi",
        //     pic: "images/Alumini/.png",
        //     who1: "Working at Pvt Firm",
        //     who2: "",
        //     who3: "Dual Degree, ChE(2011-16)",
        //     about: "I completed my dual degree in Chemical Engg in 2016 and currently am working as a researcher at a pvt firm.",
        //     id: ""
}, {
    name: "Dr. Venkata Buddhiraju",
    pic: "images/Alumini/venkatabuddhiraju.png",
    who1: "Senior Research Scientist",
    who2: "TCS",
    who3: "PhD, CHE(2012-16)",
    about: " Dr. Venkata Buddhiraju did BTech-MTech from Chemical Engineering Department, IIT Bombay. Later, he pursued his Ph.D. at IIT Kanpur. Currently he is a very senior Research Scientist at Tata Consultancy Services (TCS). During his stay at IIT Kanpur, he was the overall coordinatior of BVC for many years. He has organized many big festivals and events of BVC, and he had a very sweet relationship with all other members of BVC",
    id: ""
}, {
    name: "Udit Singh",
    pic: "images/Alumini/uditsingh.jpg",
    who1: "Process Engineer",
    who2: "GreEngine Pvt Ltd",
    who3: "MTech, EEM(2013-16)",
    about: " I did my BTech from NIT Raipur from there I was connected to to choice ISKCON base where students Preach message of BG and teachers, brahmachari from ISKCON Juhu also coming there. In 2013 in final year of my BTech days I got to visit Mayapur dham. Then I joined Mtech in Environmental engineering and management at IIT Kanpur. One day Vedant Sutra Prabhu also called as Vipul Prabhu came to my room with a flyer which contain information about Bhagavad Gita learning classes is going on in the campus. Then I started to visit Dr laxmidhar Behera home and listen Shrimad Bhagwat from him since 2013. From there my journey started at bhaktivedanta club I was actively participating in events like Janmashtami, Balram jayanti and Radha ashtami. I am very thankful to Mr Devkinandan Pr Ji and Bhanu Prakash Prabhu ji who helped me in my Mtech days to complete my thesis and I also thank doctor laxmidhar Behera for teaching me Bhagwat Geeta.",
    id: ""
}, {
    name: "Chahat Upreti",
    pic: "images/Alumini/chahatupreti.jpg",
    who1: "Ph.D. Student",
    who2: "University of Texas, Dallas",
    who3: "BTech-MTech, BSBE(2011-16)",
    about: "Chahat Upreti aka Chaitanya Bhava Das is Y11 batch (BTech-MTech) student in BSBE at IIT Kanpur. He was selected for prestigious SURGE Research Internship at IIT Kanpur in his 2nd year summers and he joined as a Research Scholar at Mitacs Inc. at Lehbridge Canada in 3rd year summers. Later In Master's thesis, he worked on the extraction of gene modifications in biomedical text and using it to discover new functional genetic networks at IIT Kanpur and is currently pursuing Ph.D. at The University of Texas, Dallas. He was a very active member of Bhaktivedanta Club after coming to IIT Kanpur and is a serious practitioner of Mantra Meditation. His Character and behaviour is exemplary and ideal for everyone",
    id: ""
}, {
    name: "Shrikant Awate",
    pic: "images/Alumini/shrikantawate.jpg",
    who1: "Senior Software Developer",
    who2: "SAP Pune",
    who3: "MTech, CSE(2012-14)",
    about: "Shrikant Awate did his Btech from MIT Pune in department of CSE in 2005-2009. He than joined as Business Technology Associate Consultant at ZS Associates till 2012. He later came for Masters at IIT Kanpur in CSE Department and from 2014 onwards he is working as a Software Developer at SAP, Pune. He was the Janmashtami coordinator of his time and he was the one who coordinated the first Bhagavad Gita Lecture Series of Prof. Laxmidhar Behera at huge scale at IITK in 2013.",
    id: ""
}, {
    name: "Dr. Akhaya Nayak",
    pic: "images/Alumini/akhayanayak.jpg",
    who1: "Faculty, HSS",
    who2: "IIM Indore",
    who3: "PhD, HSS(Sociology) 2013",
    about: "Dr. Akhaya Kumar Nayak is a faculty member in the area of Humanities and Social Sciences (Sociology). He has earned his doctorate degree from Indian Institute of Technology Kanpur in 2013. His teaching interests include Sociological Perspectives, Indian Society and Culture, Ethics and Corporate Social Responsibility, Leadership Insights from Vedic Scriptures (especially Bhagavad Gita), Contemporary Social Issues, Population and Society, Industrial Sociology, Essentials of Human Values and Sociological Theories. His research interest lies in Sociology of Social Movement and Sociology of Development. He has been an active member of the Bhaktivedanta club and took part in all the activities very enthusiastically. He is a very humble and generous person",
    id: ""
}, {
    name: "Sudheer Jillelamoodi",
    pic: "images/Alumini/sarvagyagaurangadas.jpg",
    who1: "Full Time Preacher",
    who2: "ISKCON Ranchi",
    who3: "MTech, EE(2012-14)",
    about: "Mr. Sudheer Jillelamoodi aka Sarvagya Gauranga Das did his MTech in dept. of EE IIT Kanpur from 2012-14.  He worked for Electrohms Pvt. Ltd, Bangalore.  While pursing this masters he came in contact with professor Dr. Laxmidhar Behera and understood the importance of spiritual life and teachings of Bhagavad Gita. In 2016 he started working in Vrindaranyam BGIS campus, Vrindavan for the development of Goshala and agriculture. He also worked for Bhaktivedanta skill development and center, Vrindavan and played a key role in training various skill courses to 500 unemployed youth of the villages in Vrindavan. Since last year he has joined as full time preacher in ISKCON Ranchi and helping in many preaching activities all across Jharkhand. He is also a mentor in LearnGitaLiveGita website in teaching Bhagavad Gita Correspondence Course",
    id: ""
}, {
    name: "Swarandeep Sahoo",
    pic: "images/Alumini/swarandeepsahoo.jpg",
    who1: "Assistant Professor ",
    who2: "Applied Geophysics, IIT Dhanbad",
    who3: "B.Tech-M.Tech Dual, AE(2007-12)",
    about: "Swarandeep Sahoo obtained his B.Tech and M.Tech from IIT Kanpur and then completed his PhD from IISc Bangalore. He is currently an Assistant Professor in Dept. of Applied Geophysics, IIT(ISM) Dhanbad. He got connected to the teachings of Bhagvad Gita during his stay at IIT Kanpur.",
    id: ""
}, {
    name: "Santosh Kumar",
    pic: "images/Alumini/santoshkumar.jpg",
    who1: "Senior Engineer",
    who2: "Qualcomm, Hyderabad",
    who3: "MTech, EE(2009-11)",
    about: "Santosh Kumar did his B-Tech from Jawaharlal Nehru, Technological University in Electronics and Communication Department from 2005-2009 and M-Tech (2009-2011) from IIT Kanpur in the field of Signal Processing. He than worked as Software Engineer at Marvell Semiconductor from 2011-13 and than joined as a Senior Software Engineer at Qualcomm. Besides all these professional achievements, he is a motivational speaker who is expert Vedic Knowledge and has memorized many verses from Vedic Scriptures. He was the core member of Bhaktivedanta Club, IIT Kanpur during his days at IITK.",
    id: ""
}, {
    name: "Devendra Kumar Arya",
    pic: "images/Alumini/devendraarya.jpg",
    who1: "Data Scientist",
    who2: "",
    who3: "BTech-MTech Dual, CSE(2005-10)",
    about: "Devendra Kumar Arya did his B.Tech-MTech Dual Degree from IIT Kanpur in Computer Science and Engineering. He is currently working as a Data Scientist in Gurgaon. He got connected to Sir Prof. Laxmidhar Behera and his teachings of Bhagavad Gita, in his 1st year of undergraduate study. Since then he has been practising this science of Krsna Consciousness and teaching to people in his vicinity, in his circle and at his office about the importance of Chanting, and reading the Bhagavad Gita",
    id: ""
}, {
    name: "Radhakant Das",
    pic: "images/Alumini/radhakantdas.jpg",
    who1: "Chief Administrative Officer",
    who2: "BGIS",
    who3: "BTech(2001-05);MTech(2007-09), AE",
    about: "Rohit Daspuria aka Radhakant Das is a motivational speaker and B-Tech and M-Tech (Department of Aerospace Engineering, 2001 batch) from IIT Kanpur. He was exceptional in his academic life ending up being a Silver Medalist at IIT Kanpur and working with leading organizations such as National Instruments. He left the lucrative job in 2009 to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys . He is currently the Chief Administrative Officer (CAO) of BGIS and has played a key role in establishing the new campus covering over 100 acres and equipped with all modern amenities, located in the beautiful holy land of Sri Vrindavan Dham, the abode of Lord Sri Krishna.. It offers the best of both worlds - traditional alongside modern education. He is a visiting faculty at IMS, Noida, and gives talks on Bhagavad Gita in ISKCON centers across the world.",
    id: ""
}, {
    name: "Dr. Ranjan Behera",
    pic: "images/Alumini/ranjanbehera.png",
    who1: "Associate Professor",
    who2: "Dept of EE, IIT Patna",
    who3: "MTech-PhD, EE(2001-09)",
    about: "Dr. Ranjan Kumar Behera aka Raman Manohar Das is an Associate Professor, Department of Electrical Engineering, IIT Patna, working since May 2009. He received the M. Tech. and Ph.D. degrees from IIT Kanpur, in 2003, and 2009, respectively. He has published 45 papers/articles in international journal and conferences and is a senior IEEE member. He got young scientist award by Department of Science and Technology, Government of India in 2011. In 2014, he was selected for prestigious Bhaskar Advanced Solar Energy (BASE-2014) fellowship award by Department of Science and Technology, Govt. of India and Indo-US science and technology Forum for doing advanced research on Solar Grid Integration in Smart Grid at Tennessee Technological University, Cookeville, TN, USA. Besides all these professional achievements Since 2008, he is leading a student community in IIT Patna for social and spiritual welfare for institute fraternity named as Bhaktivedanta club. Through this club, many students got their way for leading a successful life while serving the society. Not only students but the many people from outside the college got benefitted by the welfare activity like food distribution program, free education program, and old age care program. Recently grain distribution program in villages during pandemic had supported many families. Currently he is helping the village School students by providing them free computer education program. He is often invited by many national reputed engineering institute for delivering the motivational talks on spirituality and Bhagavad Gita . He is a practitioner of Bhakti yoga based on teachings of Bhagavad Gita since last 20 years and having a vast experience of counseling the students for their psychological and life problems.",
    id: ""
}, {
    name: "Shashank Srivastava",
    pic: "images/Alumini/shashanksrivastava.jpg",
    who1: "Assistant Professor",
    who2: "School of Engineering & Technology, IGNOU",
    who3: "MTech, AE(2007-2009)",
    about: "Did masters in aerospace engg. from IIT Kanpur. Worked at DRDO for research and development of life support system for fighter pilots. Completed Phd from IIT Delhi and currently working as senior Asst Prof. in School of Engineering & Technology at Indira Gandhi National Open University, New Delhi. ",
    id: ""
//}, {
    //name: "Piyush Sehgal",
    //pic: "images/Alumini/piyushseghal.jpg",
    //who1: "Chief Coach and Co-founder",
    //who2: "Eagle's cocoon",
    //who3: "",
    //about: "Piyush Sehgal did his BBS in Management from S.S. College of Business Studies(2002-2005), M.A. in Intercultural Leadership in Asia Pacific College, Hawaii (2007-2009) and MBA in strategy and finance from Ivey Business School at Western University. He also became bagged Ivey Excellence Scholarship and  Schulich Entrepreneurship Award Holder. From 2005-2007 he was a Sr. Consultant at Synovate Business Consulting and from 2007-2009, he was a Manager at Corporate Planning & Finance PVR Limited. He also founded the Eagles' Cocoon in 2009.In 2010 he was an Independent Strategy Consultant at Bell and in 2011 he was a senior consultant of Media, Sports & Entertainment Practice at Ernst and Young. Later he joined Magppie Retail Limited as an AVP, Strategist.    Besides all these great corporate world experience, he is a very humble and spiritually inclined person who is a keen reader and a motivational speaker on Bhagavad Gita. He has been teaching Bhagavad Gita to big corporates in the world. He has also played a major role in project Krish where Braj Gopika Vidyamandal was established in Vrindavan for education of poor girls.",
    //id: ""
}, {
    name: "Shailendra Kesarwani",
    pic: "images/Alumini/shailendrakesarwani.jpg",
    who1: "Data Science Consultant",
    who2: " KYC2020",
    who3: "BTech, BSBE(2004-2008)",
    about: "Shailendra Kesarwani did his B Tech in Biological Science and Bioengineering at IIT Kanpur (2004-08). He is currently freelancing as data scientist. He got inspiration to practice Bhagavad Gita from Bhaktivedanta Club during the first year.",
    id: ""
}, {
    name: "Dr. Pawan Goyal",
    pic: "images/Alumini/pawangoyal.jpg",
    who1: "Associate Professor",
    who2: "Dept of CSE, IIT Kharagpur",
    who3: "BTech, EE(2003-07)",
    about: "Dr. Pawan Goyal did his B-Tech from IIT Kanpur in 2003 in department of Electrical Engineering and was one of the toppers in his batch. He was connected to Bhaktivedanta Club from first year itself and took part in all the club activities. He did his Ph.D in Computational Linguistics at University of Ulster, under supervision of Professor Laxmidhar Behera and Prof. T. M. McGinnity. Now he is the youngest associate professor in CSE Department at IIT Kharagpur working in the field of Text Mining, Natural Language Processing, Information Retrieval and Sanskrit Computational Linguistics. He is one of the best researchers of India and has received many prestigious awards such as Google India AI/ML Research Awards 2020, INAE Young Engineer Awards 2020, Facebook AI and Ethics Research Award India, 2019. Besides all these achivements, he practices spirituality very seriously and is a very humble and generous person.",
    id: ""
}, {
    name: "Ram Bahadur Singh",
    pic: "images/Alumini/ramsingh.jpg",
    who1: "Head, Gas Turbine Design",
    who2: "Seimens, India",
    who3: "BTech, ME(2000-04)",
    about: "Ram Bahadur Singh is B-Tech from IIT Kanpur from 2000-2004 batch in department of Mechanical Engineering. He was connected to Bhaktivedanta Club, IIT Kanpur from his initial years and organized large scale programs such as Janmashtami witnessing footfall of thousands. He worked as an Engineer of Gas Turbine at Bharat Heavy Electricals Limited from 2004-2006 and than from 2006 to present he has been working in Seimens taking different roles such as Senior Enginer, Manager and Lead Engineer in Gas Turbine Designs. Presently he is head of Gas Turbine Combustion Design at Seimens, India. Besides this he is very social and politically active and Mentoring Bhaktivedanta Gramin Vikas Shivir since 2005 for holistic development of villages",
    id: ""
}, {
    name: "Harikeshwar Kushwaha",
    pic: "images/Alumini/harikeshwarkushwaha.jpg",
    who1: "Ex-Goldman Sachs",
    who2: "Singapore and USA",
    who3: "BTech, EE(1999-2003)",
    about: "Harikeshwar Kushwaha is B-Tech (Department of Electrical Engineering, 1999-2003) from IIT Kanpur. He came in contact with Bhaktivedanta Club, IIT Kanpur in first year itself and has been practicing the path of Devotional Service since his days in IIT Kanpur. He has worked for Goldman Sachs in USA and Singapore for almost 9 years . He later left his lucrative job to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys as Principal for five years. Currently he runs a centre called ISKCON PEACE (Prayag Eternal Abode of Culture & Education) in Prayagraj where many people come to learn the art of devotional service to Krishna and make their lives joyful with spiritual culture and education",
    id: ""
});


for (var i = 0; i < arrPresent.length; i++) {
    arrPresent[i].id = "sp" + i.toString();
    addspeakerNew(i);
}

//function will add a speaker by using
// the data from the Xth position of the array
function addspeakerNew(x) {
    //creates an model element to be appended to the m_content class=============================

    // The first word in the name of the variables tells
    // about the type of element
    // and the numbers after these tells us about the
    // position with respect to the parent element
    var div1 = document.createElement("div");
    div1.classList.add("md-modal");

    //can change this md-effect-8 class if want an different effect
    div1.classList.add("md-effect-8");
    div1.setAttribute("id", arrPresent[x].id);
    var div11 = document.createElement("div");
    div11.classList.add("md-content");
    var div111 = document.createElement("div");
    div111.classList.add("md-box-wrapper");
    var div112 = document.createElement("div");
    div112.classList.add("md-close-wrapper");
    var button1121 = document.createElement("button");
    button1121.classList.add("md-close");
    button1121.innerText = "Close";
    var div1111 = document.createElement("div");
    div1111.classList.add("md-pic-wrapper");
    var div1112 = document.createElement("div");
    div1112.classList.add("md-disc");
    div1112.innerHTML = arrPresent[x].about;
    var img11111 = document.createElement("img");
    img11111.setAttribute("src", arrPresent[x].pic);
    var h111112 = document.createElement("h2");
    h111112.innerText = arrPresent[x].name;
    var p11 = document.createElement("div");
    var p22 = document.createElement("div");
    var p33 = document.createElement("div");
    p11.innerText = arrPresent[x].who3;
    p22.innerText = arrPresent[x].who1;
    p33.innerText = arrPresent[x].who2;
    div1111.appendChild(img11111);
    div1111.appendChild(h111112);
    div1111.appendChild(p11);
    div1111.appendChild(p22);
    div1111.appendChild(p33);
    div111.appendChild(div1111);
    div111.appendChild(div1112);
    div112.appendChild(button1121);
    div11.appendChild(div111);
    div11.appendChild(div112);
    div1.appendChild(div11);
    m_contents_present.appendChild(div1);
    //-------------------------------------------------------------------

    //Creates a new row if previous row is completely filled
    if (x % 4 == 0) {
        var row = document.createElement("div");
        row.classList.add("row");
        var bgrid = document.createElement("div");
        bgrid.classList.add("bgrid-fourth");
        bgrid.classList.add("s-bgrid-third");
        bgrid.classList.add("tab-bgrid-half");
        bgrid.classList.add("mob-bgrid-whole");
        bgrid.classList.add("group");
        //adds a pseudo class 'row-detect' to detect row
        bgrid.classList.add("row-detect-present");
        row.appendChild(bgrid);
        section_present.appendChild(row);
    }
    //============================================================

    // Creates an element to be appended to the row
    var bid = "b" + arrPresent[x].id;
    var link = "javascript:run_model('" + arrPresent[x].id + "','" + bid + "')";
    var ddiv1 = document.createElement("div");
    ddiv1.classList.add("bgrid");
    ddiv1.classList.add("member");
    var da11 = document.createElement("a");
    da11.setAttribute("id", bid);
    da11.setAttribute("href", link);
    var ddiv111 = document.createElement("div");
    ddiv111.classList.add("speaker-pic-wrapper");
    var dimg1111 = document.createElement("img");
    dimg1111.setAttribute("src", arrPresent[x].pic);
    dimg1111.classList.add("speaker-pic");
    var dh31112 = document.createElement("div");
    dh31112.innerText = "Click to know more";
    dh31112.classList.add("speaker-pic-hover");
    var ddiv112 = document.createElement("div");
    ddiv112.classList.add("speaker-name");
    var dh21121 = document.createElement("h2");
    dh21121.innerText = arrPresent[x].name;
    var p = document.createElement("div");
    var p1 = document.createElement("div");
    var p2 = document.createElement("div");
    p1.innerText = arrPresent[x].who1;
    p2.innerText = arrPresent[x].who2;
    ddiv111.appendChild(dimg1111);
    ddiv111.appendChild(dh31112);
    ddiv112.appendChild(dh21121);
    ddiv112.appendChild(p);
    p.appendChild(p1);
    p.appendChild(p2);
    da11.appendChild(ddiv111);
    da11.appendChild(ddiv112);
    ddiv1.appendChild(da11);

    //Detect The last row by the "row-detect" class
    //and adds the created element
    var sbgrid = document.getElementsByClassName("row-detect-present");
    var num = sbgrid.length - 1;
    sbgrid[num].appendChild(ddiv1);
}