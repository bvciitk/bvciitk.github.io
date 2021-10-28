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
    name: "Dr. Jayant Mohanta",
    pic: "images/Alumini/jayantamohanta.jpg",
    who1: "Assistant Professor,",
    who2: "ME, IIT Jodhpur",
    who3: "Post Doctoral Research(2018-21)",
    about: "Dr. Jayant Kumar Mohanta did his B-Tech in department of Mechanical Engineering at IIT Indore from 2010-14 and later completed his P.h.D in just 4 years from IIT Indore. He than came to IIT Kanpur for Post-doc in Robotics under Prof. Laxmidhar Behera and worked on various interesting projects . He is currently an assistant professor at IIT Jodhpur in the ME Department. He got connected to the teachings of Bhagavad during his undergraduate days and is now very expert to teach that science in a very interesting and thoughtful manner.",
    id: ""
}, {
    name: "Ujjwal Khandelwal",
    pic: "images/Alumini/ujjwalkhandelwal.jpg",
    who1: "Software Engineer",
    who2: "Accenture, Japan",
    who3: "BTech-MTech, ME(2015-20)",
    about: "Ujjwal Khandelwal is a Y15 batch (B-Tech, M-Tech) student in the department of Mechanical Engineering at IIT Kanpur. He is currently working as a Software Engineer in Accenture, Japan. He was one of the toppers in his department and his INTERNSHIP EXPERIENCES includes Tele-Research Intern at National University of Singapore and Machine Learning Intern at ISMRITI. His interests include but are not limited to the field of Machine Learning, NLP, and Data Analysis. He is a core member of the Bhaktivedanta Club, IIT Kanpur and coordinated many times Bhagavad Gita Lecture Series, Janmashtami Programs and various retreats ",
    id: ""
}, {
    name: "Madhav Rijal",
    pic: "images/Alumini/madhavrijal.jpeg",
    who1: "M.Sc. Student",
    who2: "Mechatronics, SDU, Denmark",
    who3: "MTech(2019-2021)",
    about: "Madhav Rijal completed his MTech from IIT-KANPUR in 2021. He came in connection with BVC during his first semester. He was attracted to krishna consciousness due to scientific discourse on Bhagawat Gita presented by Dr. Lila Purushottam DAS. He often used to tell that food prepared at Bhaktivedānta club is entirety different from Normal food. Our prasadam did various magic for him. He appreciated Bhaktivedānta club for bringing positive change in his life as he often quotes ' I was living like animal before coming in the association of club members' . ",
    id: ""
}, {
    name: "Jitendra Soni",
    pic: "images/Alumini/jitendrasoni.jpeg",
    who1: "Ph.D. Student",
    who2: "MSE, IIT Delhi",
    who3: "BTech-MTech, MSE(2015-2020)",
    about: "He completed his B.Tech and M.Tech in the department of Material Science and Engineering at IIT Kanpur from 2015-2020. He was introduced to Bhaktivedanta Club by Keshav Prabhu (his batch mate) in the initial years and since then he is connected with Sir and his teachings of Bhagavad Gita. Currently, he is pursuing his PhD from IIT Delhi.",
    id: ""
}, {
    name: "Ravi Prakash",
    pic: "images/Alumini/raviprakash.jpg",
    who1: "Postdoctoral researcher",
    who2: "TU Delft, Netherlands",
    who3: "PhD, EE(2014-21)",
    about: " Dr. Ravi Prakash was Institute Gold Medalist diring  B-Tech in department of Electrical Engineering at NIT Silchar from 2010-14 and later completed his P.h.D in Robotics from IIT Kanpur under Prof. Laxmidhar Behera and worked on various interesting projects . He is currently an a PostDoc in TU Delft, Netherlands where he works on developing robots that learn from humans. He got connected to the teachings of Bhagavad during the first year of his undergraduate days and is now teaching this science in a lucid and thoughtful manner. He has been preaching this message for more than 10 years now and is very popular in student programs.",
    id: ""
}, {
    name: "Manish Yadav",
    pic: "images/Alumini/manishyadav.jpg",
    who1: "Software Engineer",
    who2: "Nference",
    who3: "BTMT (2015-20)",
    about: "Mr. Manish Yadav did his B-tech in the department of Mechanical Engineering at IIT Kanpur from 2015-19 and later completed his M-tech form IIT Kanpur and Deakin University Australia under Prof. Laxmidhar Behera on machine learning applications for machinical systems. He than joined Nference as a Software Engineer at Bangalore. He got connected with the teachings of Bhagwat Geeta during his third year of undergraduation and now he is teaching bhagwat geeta as a life manual to people who wants to lead a rational and meaningful life",
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
    name: "Pranav Kulkarni",
    pic: "images/Alumini/pranavkulkarni.jpeg",
    who1: "M.Sc. Student",
    who2: " ME, Aalto University, Finland ",
    who3: "BTech, ME(2015-19)",
    about: "Pranav Kulkarni did his B-Tech in the department of Mechanical Engineering at IIT Kanpur from 2015-19 and is currently pursuing his MSc in Mechanical Engineering from Aalto University in Finland. He got connected to the teachings of Bhagavad Gita during his third year of undergraduate studies at IIT Kanpur. He is actively preaching the message of Bhagavad Gita in Marathi and serving at ISKCON Helsinki.",
    id: ""
}, {
    name: "Sunil Kumar Dutta",
    pic: "images/Alumini/sunildutta.jpg",
    who1: "Ph.D. Student",
    who2: "Applied Mechanics, IIT Delhi",
    who3: "MTech, ME(2017-2019)",
    about: "Sunil Kumar Dutta had joined  IIT Kanpur in 2017 for the MTech program in Mechanical Engineering. He came in contact with BVC with the help of his friend. Since then, he has been coming to BVC. He has been part of different festival celebrations, retreats, and morning programs. Currently, he is doing Ph.D. from IIT Delhi in the Department of  Applied Mechanics.",
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
    name: "Krishan Meena",
    pic: "images/Alumini/krishnameena.jpg",
    who1: "Student",
    who2: "",
    who3: "B.Tech, ME(2015-19)",
    about: "Krishan Meena did his B.Tech in the department of Mechanical Engineering at IIT Kanpur from 2015-2019. He came in contact with the BVC-IITK devotees in 6th semester. He was part of various trips and events organised by the club.",
    id: ""
}, {
    name: "Abhishek Panchal",
    pic: "images/Alumini/Abhishek-Panchal.jpg",
    who1: "Ph.D. Student",
    who2: "MSE, NUS, Singapore",
    who3: "BTech, MSE(2015-19)",
    about: "Abhishek Panchal did his BTech from IIT Kanpur(2015-19) in the department of Materials Science and Engineering. He got connected to the teachings of Bhagavad Gita in 3rd year through the programs and trips organized by Prof. Laxmindhar Behera. He was a part of the organizing team for 2018 Janmashtami festival at IIT Kanpur. He is currently pursuing PhD at NUS in area of solid state battery devices and also mentoring others to take advantage of this invaluable science of Bhagavad Gita. ",
    id: ""
}, {
    name: "Himanshu Ranjan",
    pic: "images/Alumini/himanshuranjan.jpg",
    who1: "Maths Faculty",
    who2: "Vidya Mandir Classes, Delhi",
    who3: "B-tech, BSBE, 2015-19",
    about: "He very much enjoyed the spiritual trips to Rishikesh, Mayapur etc.He has taught as a math faculty at Vidya Mandir Classes, Delhi. Currently he is preparing for UPSC CSE exam for last 1.5 yrs.",
    id: ""
}, {
    name: "Dr. Tharun Reddy",
    pic: "images/Alumini/tharunreddy.jpg",
    who1: "Assistant Professor",
    who2: "Dept. of EE, IIT Roorkee",
    who3: "B.tech,M.tech, Ph.D-EE(2009-19)",
    about: "Dr. Tharun Reddy is a Y9 batch Student at IIT Kanpur in Department of Electrical Engineering. After his B-Tech he joined as a Ph.D. Student at IIT Kanpur under Prof. Laxmidhar Behera to work in the field of developing novel algorithms for signal processing in EEG Brain Computer Interfaces. He is broadly interested in machine learning for signal processing. At, IIT Kanpur and UTS, Sydney, He has collaborated with several researchers to develop advanced algorithms in EEG Brain Computer Interfaces. In addition, he has expertise and interest in studying Vedic scriptures, Yoga and Ayurveda. Currently he is serving as an assistant Professor, in the Department of EE at IIT Roorkee)",
    id: ""
}, {
    name: "Shashi Kumar Munda",
    pic: "images/Alumini/shashimunda.png",
    who1: "Student",
    who2: "",
    who3: "BS, MTH(2013-17)",
    about: "During his stay in IIT Kanpur he used to attend every session taken by sir and ready to serve in all circumstances specially calling students personally to program, he is a very good kirtaniya, used to sing different different sweet kirtan melodies, he used to play badminton with sir as well. His mood of preaching is extraordinary , he brought so many wonderful devotees who got inspired and today following footsteps of sir in his personal sanga.Currently preparing for IAS examination.",
    id: ""
}, {
    name: "Rahul Kothari ",
    pic: "images/Alumini/rahulkothari.jpg",
    who1: "Postdoctoral Researcher",
    who2: "Cosmology, UWC, South Africa",
    who3: "Integrated MSc (Physics) 2006 -2011, PhD (Physics) 2011 -- 2017",
    about: "Rahul Kothari was a student in the Integrated MSc, Physics (5 yr program) at IIT Kanpur. He also did his PhD in the Cosmic Microwave Background Radiation (a field of Cosmology) also from IIT Kanpur. Currently, he is a postdoc at the University of the Western Cape in South Africa, where he works on 21cm Cosmology. He first came in contact with Prof. Laxmidhara Behera in 2006. He also served as the chief editor of the Hare Krsna Magazine of ISKCON Kanpur for 2 years.",
    id: ""
}, {
    name: "Manish Kumar Meena",
    pic: "images/Alumini/manishmeena.jpg",
    who1: "Physics Faculty",
    who2: "Shri Sandipani Academy",
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
    name: "Chahat Upreti",
    pic: "images/Alumini/chahatupreti.jpg",
    who1: "Ph.D. Student",
    who2: "Bio., University of Texas, Dallas",
    who3: "BTech-MTech, BSBE(2011-16)",
    about: "Chahat Upreti is Y11 batch (BTech-MTech) student in BSBE at IIT Kanpur. He was selected for prestigious SURGE Research Internship at IIT Kanpur in his 2nd year summers and he joined as a Research Scholar at Mitacs Inc. at Lehbridge Canada in 3rd year summers. Later In Master's thesis, he worked on the extraction of gene modifications in biomedical text and using it to discover new functional genetic networks at IIT Kanpur and is currently pursuing Ph.D. at The University of Texas, Dallas. He was a very active member of Bhaktivedanta Club after coming to IIT Kanpur and is a serious practitioner of Mantra Meditation. His Character and behaviour is exemplary and ideal for everyone",
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
    name: "Dr. Suvendu Samanta",
    pic: "images/Alumini/suvendusamanta-- (1).jpg",
    who1: "Assistant Professor",
    who2: "Department Of EE, IIT Kanpur",
    who3: "M.tech, EE(2013-15)",
    about: "Dr. Suvendu Samanta received the B.E. degree from IIEST Shibpur (formerly Bengal Engineering and Science University), Howrah, India, in 2009, the M.Tech. degree from Indian Institute of Technology Kanpur, India, in 2013, and the Ph.D. degree from Concordia University, Montreal, QC, Canada, in 2018, all in Electrical Engineering. He was with Coal India Ltd. as operation and maintenance engineer of the Electrical and Mechanical section from 2009-2011. From 2014 to 2016, He worked as a Research Engineer in the ECE department, National University of Singapore, Singapore.He also worked as a Postdoctoral Fellow in FREEDM Research Center, North Carolina State University, Raleigh, NC, USA from 2018-2020. He received the prestigious Canadian Government General's Gold Medal award for his Ph.D. Thesis",
    id: ""
}, {
    name: "Sarvatma Shyam Das",
    pic: "images/Alumini/sarvatmadas.jpg",
    who1: "Full Time Preacher",
    who2: "ISKCON Ranchi",
    who3: "MTech, EE (2013-2015)",
    about: "Sarvatma Shyam Das aka Sunil Kumar Reddy was born & brought up in Andhra Pradesh. He did his B-Tech from NIT Raipur in Electrical Engineering from 2009-2013. He joined IIT Kanpur and pursued M-Tech in EE  department from 2013-2015. In his 1st year of M-Tech he attended Bhagavad Gita Lecture series conducted by Prof. Laxmidhar Behera. He was very much impressed by professor's presentation of Bhagavad Gita and got connected with few of the volunteer students there. He continued to regularly attend the Gita classes and became a serious practitioner. He worked under Prof. Laxmidhar Behera during his M-Tech and later joined Petroleum Institute Abu Dhabi, UAE. He continued there for nearly 2 years and later joined Learn Gita Live Gita Project and ISKCON Dehradun project. Currently he is serving full time in ISKCON Ranchi.",
    id: ""
}, {
    name: "Shrikant Awate",
    pic: "images/Alumini/shrikantawate.png",
    who1: "Senior Software Developer",
    who2: "SAP Pune",
    who3: "MTech, CSE(2012-14)",
    about: "Shrikant Awate did his Btech from MIT Pune in department of CSE in 2005-2009. He than joined as Business Technology Associate Consultant at ZS Associates till 2012. He later came for Masters at IIT Kanpur in CSE Department and from 2014 onwards he is working as a Software Developer at SAP, Pune. He was the Janmashtami coordinator of his time and he was the one who coordinated the first Bhagavad Gita Lecture Series of Prof. Laxmidhar Behera at huge scale at IITK in 2013.",
    id: ""
}, {
    name: "Devaki Nandan",
    pic: "images/Alumini/devakinandan.jpg",
    who1: "Assistant Professor",
    who2: "GBPUAT, Pantnagar",
    who3: "MTech, ME (2012-14)",
    about: "Devaki Nandan did his B-Tech in department of Production & Industrial Engineering at MBM Jodhpur from 2004-08 and later completed his M.Tech from IIT Kanpur in 2014. He is currently an assistant professor at GBPUAT, Pantnagar in the Industrial & Production Department. He is trying to serve guru and Vaishnavas since 2005. ",
    id: ""
}, {
    name: "Dr. Akhaya K. Nayak",
    pic: "images/Alumini/akhayanayak.jpg",
    who1: "Faculty",
    who2: "Sociology (HSS), IIM Indore",
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
    who1: "Assistant Professor",
    who2: "App. Geophysics, IIT Dhanbad ",
    who3: "B.Tech-M.Tech Dual, AE(2007-12)",
    about: "Swarandeep Sahoo obtained his B.Tech and M.Tech from IIT Kanpur and then completed his PhD from IISc Bangalore. He is currently an Assistant Professor in Dept. of Applied Geophysics, IIT(ISM) Dhanbad. He got connected to the teachings of Bhagvad Gita during his stay at IIT Kanpur.",
    id: ""
}, {
    name: "Chandrasekhar",
    pic: "images/Alumini/chaitanyadas.jpg",
    who1: "Full time Preacher",
    who2: "ISKCON Raichur",
    who3: "MTech, EE (2010-12)",
    about: "I am Chaitanya Rasasekhara Dasa aka Chandrasekhar did B.Tech from SNIST, Hyderabad during 2005 - 09. I then pursued M. Tech from IIT Kanpur during 2010-12 where I got to learn the sublime teachings of Bhagavad Gita, chanting of Hare Krishna Mahamantra in the sweet memorable association of Prof. Lila Purusottam sir and family and other members from BVC. My association with BVC was the turning point in my life and got connected to ISKCON and in their association I got the most glorious opportunities of visiting to different Holy places like Vrindavan, Mayapur,  Jagannath Puri Dhams which are the Best of the Holy places that I hardly had any idea before! By the blessings of Prof. Lila Purusottam sir and BVC family, I got to regularly chant Hare Krishna Mahamantra and be in the associatiom of devotees. Then I got to work in Bengaluru for Cisco Networks company where I had worked for 1 yr, 4 months. Meanwhile I got a good association of devotees in Bengaluru and by the blessings of Sir, I finally joined ISKCON Sri Narasimha Giridhari Mandir in 2014 as a full time volunteer. Presently, I am serving in ISKCON Raichur center,  Karnataka under the leadership of HG Varadha Krishna prabhu, Temple President. ",
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
    name: "Virendra K. Agrawal",
    pic: "images/Alumini/virendraagrawal.jpg",
    who1: "Physics Faculty & Founder",
    who2: "InfinIITy Academy",
    who3: "BTech, CHE(2006-2010)",
    about: "Virendra Kumar Agrawal did his B.Tech. in Chemical Engineering at IIT Kanpur from 2006-2010. He came in contact with Prof Laxmidhar Behra on first day of admission through his cousin brother Vikas Agrawal. He was with bhakti vedanta Club for all four years.",
    id: ""
}, {
    name: "Radhakant Das",
    pic: "images/Alumini/radhakantdas.jpg",
    who1: "Chief Administrative Officer",
    who2: "BGIS, Vrindavan",
    who3: "BTech(2001-05);MTech(2007-09), AE",
    about: "Rohit Dasrapuria aka Radhakant Das is a motivational speaker and B-Tech and M-Tech (Department of Aerospace Engineering, 2001 batch) from IIT Kanpur. He was exceptional in his academic life ending up being a Silver Medalist at IIT Kanpur and working with leading organizations such as National Instruments. He left the lucrative job in 2009 to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys . He is currently the Chief Administrative Officer (CAO) of BGIS and has played a key role in establishing the new campus covering over 100 acres and equipped with all modern amenities, located in the beautiful holy land of Sri Vrindavan Dham, the abode of Lord Sri Krishna.. It offers the best of both worlds - traditional alongside modern education. He is a visiting faculty at IMS, Noida, and gives talks on Bhagavad Gita in ISKCON centers across the world.",
    id: ""
        // }, {
        //     name: "Piyush Sehgal",
        //     pic: "images/Alumini/piyushseghal.jpg",
        //     who1: "Chief Coach and Co-founder",
        //     who2: "Eagle's cocoon",
        //     who3: "",
        //     about: "Piyush Sehgal did his BBS in Management from S.S. College of Business Studies(2002-2005), M.A. in Intercultural Leadership in Asia Pacific College, Hawaii (2007-2009) and MBA in strategy and finance from Ivey Business School at Western University. He also became bagged Ivey Excellence Scholarship and  Schulich Entrepreneurship Award Holder. From 2005-2007 he was a Sr. Consultant at Synovate Business Consulting and from 2007-2009, he was a Manager at Corporate Planning & Finance PVR Limited. He also founded the Eagles' Cocoon in 2009.In 2010 he was an Independent Strategy Consultant at Bell and in 2011 he was a senior consultant of Media, Sports & Entertainment Practice at Ernst and Young. Later he joined Magppie Retail Limited as an AVP, Strategist.    Besides all these great corporate world experience, he is a very humble and spiritually inclined person who is a keen reader and a motivational speaker on Bhagavad Gita. He has been teaching Bhagavad Gita to big corporates in the world. He has also played a major role in project Krish where Braj Gopika Vidyamandal was established in Vrindavan for education of poor girls.",
        //     id: ""
}, {
    name: "Dr. Ranjan K. Behera",
    pic: "images/Alumini/ranjanbehera.png",
    who1: "Associate Professor",
    who2: "Dept of EE, IIT Patna",
    who3: "MTech-PhD, EE(2001-09)",
    about: "Dr. Ranjan Kumar Behera is an Associate Professor, Department of Electrical Engineering, IIT Patna, working since May 2009. He received the M. Tech. and Ph.D. degrees from IIT Kanpur, in 2003, and 2009, respectively. He has published 45 papers/articles in international journal and conferences and is a senior IEEE member. He got young scientist award by Department of Science and Technology, Government of India in 2011. In 2014, he was selected for prestigious Bhaskar Advanced Solar Energy (BASE-2014) fellowship award by Department of Science and Technology, Govt. of India and Indo-US science and technology Forum for doing advanced research on Solar Grid Integration in Smart Grid at Tennessee Technological University, Cookeville, TN, USA. Besides all these professional achievements Since 2008, he is leading a student community in IIT Patna for social and spiritual welfare for institute fraternity named as Bhaktivedanta club. Through this club, many students got their way for leading a successful life while serving the society. Not only students but the many people from outside the college got benefitted by the welfare activity like food distribution program, free education program, and old age care program. Recently grain distribution program in villages during pandemic had supported many families. Currently he is helping the village School students by providing them free computer education program. He is often invited by many national reputed engineering institute for delivering the motivational talks on spirituality and Bhagavad Gita . He is a practitioner of Bhakti yoga based on teachings of Bhagavad Gita since last 20 years and having a vast experience of counseling the students for their psychological and life problems.",
    id: ""
}, {
    name: "Shashank Srivastava",
    pic: "images/Alumini/shashanksrivastava.jpg",
    who1: "Senior Asst. Professor",
    who2: "IGNOU, New Delhi",
    who3: "MTech, AE(2007-2009)",
    about: "Did masters in aerospace engg. from IIT Kanpur. Worked at DRDO for research and development of life support system for fighter pilots. Completed Phd from IIT Delhi and currently working as senior Asst Prof. at IGNOU New Delhi. ",
    id: ""
}, {
    name: "Trinadh Kottana",
    pic: "images/Alumini/trinadhkottana.jpg",
    who1: "Video Codec Engineer",
    who2: "Apple Inc.",
    who3: "MTech, EE, 2007-2009",
    about: "Thrinadh did his M-Tech in department of Electrical Engineering at IIT Kanpur from 2007-2009. On the first day in campus he felt fortunate to have meet with Ranjan prabhu (currently Asst.Professor in IIT Patna)   and later with the devotees of BhaktiVedanta club and have fundamental understanding of Bhakti through Prof. Laxminder Behera Sir’s teachings which helped him to stay connected to the movement since then. He is currently working as Video Codec Engineer in Apple Inc, Cupertino.",
    id: ""
}, {
    name: "Shailendra Kesarwani",
    pic: "images/Alumini/shailendrakesarwani.jpg",
    who1: "Data Science Consultant",
    who2: " KYC2020",
    who3: "BTech, BSBE(2004-2008)",
    about: "Shailendra Kesarwani did his B Tech in Biological Science and Bioengineering at IIT Kanpur (2004-08). He is currently freelancing as data scientist. He got inspiration to practice Bhagavad Gita from Bhaktivedanta Club during the first year.",
    id: ""
}, {
    name: "Lokeswara Vijanapalli",
    pic: "images/Alumini/lokeswaravijanapalli.jpg",
    who1: "Vice Principal",
    who2: "BGIS, Vrindavan",
    who3: "MTech, EE (2006-08)",
    about: "Lokeswara Kumar V (aka Lila Govinda Das) completed B.E. in Electronics & Communication Engineering from Vasavi College of Engineering, Hyderabad in 2006 and later completed M.Tech. from IIT Kanpur in microelectronics & VLSI technology in 2008. He came in contact with Bhaktivedanta Club through Ramana Manohar Prabhuji (Ranjan Pr) and later under the inspiration of HG Lila Purushothama Prabhuji joined Bhaktivedanta Gurukula & International School (BGIS) in 2010 as a faculty. For the last eight years, he is serving as Vice-Principal. Before joining BGIS he worked as an embedded software engineer in Couth Infotech limited, Hyderabad. Bhaktivedanta Club is like a compass to a ship for him to serve Krishna & spiritual master. There were many retreats, camps, and programmes organized by BVC that helped him to shape his personality. He is very indebted to HG Lila Purushothama Prabhuji for taking the pain to preach youth in IIT Kanpur.",
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
    name: "Ratnesh Tiwari",
    pic: "images/Alumini/ratneshtiwari.jpg",
    who1: "Assistant Research Professor",
    who2: "ME, University of Maryland",
    who3: "B.Tech (2002-2006)",
    about: "Dr. Ratnesh Tiwari did his B-Tech in department of Mechanical Engineering at IIT Kanpur from 2002-06 and later completed his MS/P.h.D from the University of Maryland, College Park. He is currently an assistant research professor at the University of Maryland in the ME Department. He got connected to the teachings of Bhagavad during the first year of his undergraduate days at IIT Kanpur when he got in touch with Prof. Laxmidhar Behera. He is currently involved with the preaching program at the University of Maryland.",
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
    who1: "Full Time Preacher ",
    who2: "ISKCON PEACE, Prayagraj ",
    who3: "BTech, EE(1999-2003)",
    about: "Harikeshwar Kushwaha is B-Tech (Department of Electrical Engineering, 1999-2003) from IIT Kanpur. He came in contact with Bhaktivedanta Club, IIT Kanpur in first year itself and has been practicing the path of Devotional Service since his days in IIT Kanpur. He has worked for Goldman Sachs in USA and Singapore for almost 9 years . He later left his lucrative job to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys as Principal for five years. Currently he runs a centre called ISKCON PEACE (Prayag Eternal Abode of Culture & Education) in Prayagraj where many people come to learn the art of devotional service to Krishna and make their lives joyful with spiritual culture and education",
    id: ""
}, {
    name: "Meher Preetam",
    pic: "images/profile/Dr. Meher Preetam Korukonda.jpg",
    who1: "Postdoctoral researcher",
    who2: "Paris-Saclay University, France",
    who3: "M.Tech-Ph.D, EE, (2012-2021)",
    about: "Harikeshwar Kushwaha is B-Tech (Department of Electrical Engineering, 1999-2003) from IIT Kanpur. He came in contact with Bhaktivedanta Club, IIT Kanpur in first year itself and has been practicing the path of Devotional Service since his days in IIT Kanpur. He has worked for Goldman Sachs in USA and Singapore for almost 9 years . He later left his lucrative job to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys as Principal for five years. Currently he runs a centre called ISKCON PEACE (Prayag Eternal Abode of Culture & Education) in Prayagraj where many people come to learn the art of devotional service to Krishna and make their lives joyful with spiritual culture and education",
    id: ""
}, {
    name: "Chandan Sharma",
    pic: "images/Alumini/chandansharma.jpg",
    who1: "Assistant Engineer",
    who2: "PHED, West Bengal",
    who3: "M Tech, CE(2014-16) not completed thesis.",
    about: "Chandan Sharma did his B-Tech in department of Civil Engineering at Meghnad saha institute of technology in 2012. He than came to IIT Kanpur for M.Tech in Environmental Engineering & Management. He is currently working as assistant engineer in Public health engineering department, government of west bengal. He got connected to the teachings of Bhagavad during the first year of his post-graduate days and is now connected with BVC classes on regular basis.",
    id: ""
}, {
    name: "Vipin Agarwal",
    pic: "images/Alumini/Vipinagarwalfinal.jpg",
    who1: "Postdoctoral Researcher",
    who2: "ME, UMich, USA",
    who3: "BTech-MTech (2006-2011)",
    about: "Dr. Vipin Agarwal did his B.Tech-M.Tech (Dual degree) in the Department of Mechanical Engineering at IIT Kanpur from 2006-2011, and worked with General Electric (GE), and ANSYS. He completed his Ph.D. degree in the Department of Mechanical Engineering at the University of Maryland, College Park, USA. He is currently a Postdoctoral Research Fellow in the Department of Mechanical Engineering at the University of Michigan, Ann Arbor, USA. He felt fortunate to get connected to the teachings of Bhagavad Gita in the loving care of Professor Laxmidhar Behera from the very first day at IIT Kanpur because of his elder brother Vikas Agrawal.",
    id: ""
}, {
    name: "Sanjoy Kumar Parida",
    pic: "images/Alumini/sanjoyparida.jpg",
    who1: "Associate Professor,",
    who2: "Dept. of EE, IIT PATNA",
    who3: "PhD, EE (2004-2009)",
    about: "Dr. Sanjoy Kumar Parida did his PhD from IIT Kanpur. During his stay at IIT Kanpur, he had a glimpse of Bhaktivedanta Club IIT KANPUR. He became attracted to Krishna consciousness in association with devotees later, when Raman Manohar Prabhu joined IIT Patna. However, the seed was planted by Sir during many programs he attended at Bhaktivedanta club IIT KANPUR. Now he is engaged in preaching activities with Raman Manohar Prabhu.",
    id: ""
}, {
    name: "Ajay Kumar Yadav",
    pic: "images/Alumini/ajay_yadav.jpg",
    who1: "Ph.D. Student",
    who2: "Dept. of Maths, BHU",
    who3: "M.Sc. (2-year), Department of mathematics & statistics (2017-19)",
    about: "Mr. Ajay Kumar Yadav did his B.Sc. in department of mathematics at Banaras Hindu University from 2014-17 and then completed M.Sc. in department of mathematics & statistics, IIT Kanpur during 2017-19. Currently he is doing Ph.D. in mathematics from Institute of Science, BHU since 2020.",
    id: ""
}, {
    name: "Raghuveer Prasad ",
    pic: "images/Alumini/Raghuveerprasadnagar.jpg",
    who1: "Dy. Chief Engineer",
    who2: "NPCIL",
    who3: "MTech, CSE (2006-08)",
    about: "Raghuveer Prasad Nagar did his BE in Computer Science & Engineering from MBM Engineering College, Jodhpur.  Later, he came to IIT Kanpur for MTech in Computer Science & Engineering. During his stay at IITK, he got connected to Bhakti Vedant Club (BVC) and learned teaching of lord Chaitanya Mahaprabhu & about Hare Krishna Movement. Now, he is in Hare Krishna Movement from last 12 years.",
    id: ""
}, {
    name: "Devendra Upadhyay",
    pic: "images/Alumini/Devendra_Upadhya.jpg",
    who1: "Senior Process Engineer",
    who2: "Shell",
    who3: "B.Tech-M.Tech (Dual Degree 2003-08)",
    about: "Devendra Upadhyay did his B.Tech- M.Tech (dual degree) in Chemical Engineering at IIT Kanpur from 2003-2008. He received Academic Excellence Award and General Proficiency Gold Medal for his outstanding academic performance at IIT Kanpur. He co-authored three international publications in reputed journals which was published during his M.Tech. thesis.Devendra came in contact with Dr. Laxmidhar Behera (Prof. of Electrical Engineering, IITK) during his first year of undergraduate days and got opportunities to learn Krishna Consciousness along-with other senior devotee friends in the guidance of Prof. Behera. He  was coordinator for 2007 Krishna Janmashtami celebration (Very first Janmashtami at the Land of Sri Sri Radha Madhav Temple, ISKCON Kanpur), which was attended by more than 10000 people from Kanpur city and IIT Kanpur community. Being member of BVC, he got opportunities to join/organize several Krishna Conscious workshops, retreats and most importantly could make several devotee friends for life.In 2008, Devendra joined Shell and currently working as a Senior Process Engineer. He continues to practice Krishna Consciousness/teachings of Bhagavad Gita learnt from Prof. Behera.",
    id: ""
}, {
    name: "Premnath Dalai",
    pic: "images/Alumini/premnathdalai.jpg",
    who1: "Senior Manager",
    who2: "Evalueserve",
    who3: "MSc, Statistics (2010-12)",
    about: "Premnath was a Y10 student pursuing M.SC in Statistics. In 2011, he came in a friendly contact with a devotee at IIT Kanpur. And from a hardcore atheist personality he became a strong believer of the Vedic philosophy and Krishna consciousness culture. Under fortunate guidance of Prof. Laxmidhar Behera, he humbly submitted to the practice of Krishna consciousness. He was actively involved in multiple festivals, activities conducted by Bhaktivedanta club. Currently he is in corporate job.",
    id: ""
}, {
    name: "Ajay Gudla",
    pic: "images/Alumini/Gadhadhar Gauranga Das_reduced.jpg",
    who1: "Full Time Preacher",
    who2: "Iskcon Dehradun",
    who3: "M.Tech, EE",
    about: "Ajay Gudla aka Gadhadhar Gauranga Das did his B.Tech at ANITS Visakhapatnam from 2009-13 and completed his M.Tech in power systems under the guidance of Dr. Saikat Chakraborty from 2013-15 at IITK. He connected to BVC club during janmastami 2013. He was mainly inspired by sir's lectures and with the support of mataji and BVC members like venkat pr, vipul pr, Srikant pr, Sudheer pr, mehar pr, sarvatma pr, the journey in IITK was sweet. He came to IIT with an aspiration of becoming IAS officer, but this journey of 1.5 years in BVC changed his life and helped him to take right decision about future. After that he served in BGIS gurukul for 5 years as a chemistry teacher and did some ashram services also. In 2020, he went to ISKCON Dehradun and right now serving there as Brahmachari.",
    id: ""
}, {
    name: "Jaideep Shingari",
    pic: "images/Alumini/jaideeppr-.jpg",
    who1: "Team Lead",
    who2: "Telus International",
    who3: "Research Associate in Electrical Dept (2002 - 2003)",
    about: "Jaideep Shingari completed his BTech in Electronics and Communication from Punjab in 2001. And he was Research Associate in IIT, Kanpur for one and half years in 2002 - 2003. He is currently working as Software Professional in Telus International, a Canadian Telecom Software MNC in Noida.In 2002 while in IIT, Kanpur, he got introduced to ISKCON and the teachings of Bhagavad Gita under the guidance of HG Lilapurshotam Prabhu Ji. After joining his first job in Noida in 2003, he stayed in different BACEs in Delhi NCR. There he was involved in preaching activities in Delhi under the guidance of HG Ajanma Krishna Prabhu (ISKCON, East of Kailash). These days he does service of Still Photography in ISKCON, East of Kailash Temple Yatras.",
    id: ""
}, {
    name: "Venkata Ratnam",
    pic: "images/Alumini/Pic - Vakacharla Venkata Ratnam jn.jpg",
    who1: "Postdoc Student",
    who2: "University of Windsor, Canada",
    who3: "Visiting Researcher, EE (Jan-Sep, 2020)",
    about: "Dr. Venkata Ratnam Vakacharla has completed his M.Tech from IIT(BHU), Varanasi and Ph.D. from Concordia University, Montreal, Canada, both in Power Electronics (Electrical Engineering). Currently he is serving a postdoctoral appointment with university of Windsor, Canada. During his masters, he has the opportunity to connect to teachings of Bhagavad-Gita and further strengthen the faith upon meeting students of Dr. Lila Purushottam Pr during his Ph.D. He met Dr. Lila Purushottam Pr in IIT Kanpur as visiting researcher and started practicing devotional service seriously. He desires to further practice and help Lila Purushottam Pr spreading the knowledge of Bhagavad-Gita world wide.",
    id: ""
}, {
    name: "Anmol Awasthi",
    pic: "images/Alumini/anmol_awasthi.jpg",
    who1: "Working Employee",
    who2: "Pvt firm",
    who3: "Dual Degree, ChE (2011-16)",
    about: "I completed my dual degree in Chemical Engg in 2016 and currently am working as a researcher at a pvt firm.",
    id: ""
}, {
    name: "Akashdeep Patel",
    pic: "images/Alumini/akashdeep.jpg",
    who1: "Principle Engineer",
    who2: "Cloud4C",
    who3: "B. Tech. - M. Tech. (2009-14)",
    about: "Akash Deep Patel graduated from IIT Kanpur with Bachelors and Masters degree in 2014. Came in contact with the devotees in the first year, 2009, he attended the Gita classes by Dr. Laxmidhar Behera Sir, practiced meditation and sankirtan with the devotees. In the club he loved cooking, sankirtans, book distributions. After college he moved to Bangalore to join Samsung R&D Bangalore. During the stay in IT-hub of the country, he did weekly sankirtans and Gita classes in the Bace, AECS Layout. It has been since college days mantra meditation and devotee association has been there as part of his life.",
    id: ""
}, {
    name: "Malay Naskar",
    pic: "images/Alumini/malay.jpeg",
    who1: "Chemist",
    who2: "ONGC",
    who3: "M. Sc.(Chemistry)(2016-18)",
    about: "Malay Naskar did B.Sc.(Honors) in chemistry from Ramakrishna Mission Residential College Narendrapir, West Bengal(2013-16). Later he came to IIT Kanpur for pursuing M.Sc. in Chemistry (2016-18). He got a job in ONGC as a Chemist in 2019. Towards the end of his 1st year of M.Sc. at IIT Kanpur, he got connected with devotees and got to know the Saturday evening programme of Prof. Laxmidhar Behera Sir's house. Often he came to Sir's house to attend Bhagavad Katha and ecstatic Kirtan.  He also attended Sir's 7days Bhagavad Gita course. That activities in Krishna Consciousness and association with Sir and devotees changed his life style and after passing out from IIT Kanpur still he is connected with devotees there for valuable message and guidance.",
    id: ""
},{
    name: "Yash D. Jaiswal",
    pic: "images/Alumini/Yash Dayashankar Jaiswal.jpg",
    who1: "Assistant Consultant",
    who2: "TCS",
    who3: "BTech, MTech, AE, (2009-14) ",
    about: "Yash D. Jaiswal did his B.Tech - M.Tech (Dual Degree) in the Department of Aerospace Engineering at IIT Kanpur from 2009-14. During the first year of his undergraduate days, he got connected with BVC IITK and Professor Laxmidhar Behera and got inspired by Krishna Consciousness. Thereafter, during his stay at IIT Kanpur, he used to actively participate in multiple festivals and activities conducted by the club. He feels fortunate to get connected to the teachings of Bhagavad Gita in the loving care of Professor Laxmidhar Behera. He is also very indebted to the devotees for their association, and Professor Laxmidhar Behera for lectures and teaching on Bhagwad Gita, Shrimad Bhagwatam, and for motivating us in Krishna Consciousness.",
    id: ""
},{
    name: "Keshav Verma ",
    pic: "images/Alumini/keshav verma.jpg",
    who1: "Full time Preacher",
    who2: "Gaudiya Math",
    who3: "BTech, ME (2015-2019)",
    about: "Keshav Verma completed his BTech in department of Mechanical Engineering at IIT Kanpur from 2015-19. His did his internship in ITC and was selected in OYO during placements. He is now fully dedicated to the mission of spreading sankirtan movement of Sri Caitanya Mahaprabhu worldwide. He is a great artist and also very well versed with different musical instruments like piano, mridanga, flute, etc. He associated with Bhaktivedanta Club, IIT Kanpur in his first year and since then he coordinated many times Bhagavad Gita Lecture Series, Janmashtami Programs, various retreats and cultivated many aspiring devotees.",
    id: ""
},{
    name: "Shubhkrishna Dasa",
    pic: "images/Alumini/shubhakrishna.jpg",
    who1: "Full time Preacher",
    who2: "ISKCON Vrindavan",
    who3: "BTech, ME, (2003-07)",
    about: "Shobhit Sinha aka Shubhkrishna Dasa did his btech in mechanical  engineering from iit kanpur in 2003-07. He worked in NTPC for six months and then joined iskcon vrindavan as a full time volunteer. Various services  he engaged in was HOD of goshala  and also preaching the message of bhagvad gita and bhagvatam. ",
    id: ""
},{
    name: "Praful Anand",
    pic: "images/Alumini/praful_anand.jpg",
    who1: "Senior ML Engineer",
    who2: "Quantiphi",
    who3: "BTech (2015-19)",
    about: "Praful Anand did his B-Tech in the department of Civil Engineering at IIT Kanpur from 2015-19. He is currently working as a Senior ML Engineer at Quantiphi. He came in the association of BVC IITK in his first year. His major interest lies in the field of photography and video making and he utilised his talent in the service of Krsna by recording and capturing tons of the lecture series, festivals, retreats, etc. Also, he liked 'dali seva' very much.",
    id: ""
},{
    name: "Vinayak Goyal",
    pic: "images/Alumini/VinayakIIT - Vinayak Goyal.jpg",
    who1: "Lead Software Er.",
    who2: "Samsung, Bangalore",
    who3: "B.Tech, EE, (2012-16)",
    about: "Vinayak Goyal did his B.Tech in department of Electrical Engineering from IIT Kanpur during 2012-2016. He is currently working as Lead Software Engineer at Samsung Research Institute, Bangalore and have published several patents and research papers. He got connected to the Bhaktivedanta club IITK during his first year here, and since then he is a very active member of the club. He coordinated many festival celebrations at IITK including Janmashtami' 14 & 15. He also organized and managed many camps and retreats including the first Rishikesh trip of BVC. Presently, he is also connected with ISKCON Bangalore and is actively involved in congregational preaching there.",
    id: ""
}, {
    name: "Chandan garg",
    pic: "images/Alumini/chandangargfinal.jpg",
    who1: "ML Engineer",
    who2: "Adobe",
    who3: "BE (2012-16)",
    about: "Chandan Garg did his B-Tech majoring in Civil engineering from IIT Kanpur and later graduated from Columbia University with masters in Statistics. He is currently working as a machine learning engineer with Adobe. He got connected with BVC during the second year of his undergraduate, inspired by the preaching programs by prof. Laxmidhar Behera and student devotees of BVC. He is trying to practice Krishna consciousness by chanting the mahamantra and reading Srila Prabhupada books.",
    id: ""
},{
    name: "Mayank Singh",
    pic: "images/Alumini/mayanksinghff.jpeg",
    who1: "Full TIme Preacher",
    who2: "ISKCON Ranchi",
    who3: "MBA ",
    about: "Mayank Singh aka Madhusudan Mukund Das joined sir's Sanga in Feb 2012. He joined ISKCON immediately after he completed MBA from IITK. He served ISKCON Gurukula for 5 years till 2018. But after he joined ISKCON Dehradun yatra. From September 2020 onwards, he was awarded service for ISKCON Ranchi Yatra. He is also Coordinator of LGLG,  online initiative run under sir's guidance.  ",
    id: ""
},{
    name: "Saurav Prakash",
    pic: "images/Alumini/Saurav Prakash.jpg",
    who1: "Ph.D. Student",
    who2: "USC, Los Angeles",
    who3: "BTech, EE (2012-2016)",
    about: "Saurav is a PhD candidate in the Ming Hsieh Department of Electrical and Computer Engineering at the University of Southern California, working under the guidance of Prof. Salman Avestimehr in the Information Theory and Machine Learning (vITAL) research lab. He has also collaborated closely with Prof. Murali Annavaram, Prof. Keith Chugg, and Prof. Ramtin Pedarsani. Saurav has also gained industry experience through multiple internships. He spent Summer 2018 and Summer 2019 as a Research Intern at Intel Labs under Dr. Shilpa Talwar and Dr. Nageen Himayat respectively. During Summer 2021, he was an Applied Scientist Intern at Amazon Alexa AI under Dr. Clement Chung and Dr. Rahul Gupta. Prior to joining the graduate school, he completed his BTech in 2016 in Electrical Engineering from the Indian Institute of Technology Kanpur, where he worked under Prof. Aditya K. Jagannatham, in the Multimedia Wireless Networks (MWN) Group. He got associated with BVC in his first semester at IIT Kanpur when Prof. Behera taught a class in spirituality and Bhagvad Gita in Hall 5. During his stay at IIT Kanpur, Saurav actively participated in the organization of BVC's events, including the Krishna Janmashtami celebrations. ",
    id: ""
},{
    name: "Prafulla Mallik",
    pic: "images/Alumini/prafullamalik.jpg",
    who1: "Associate Prof. & HOD",
    who2: "Metallurgical & Materials, IGIT",
    who3: "PhD ,MSE (2010-2013)",
    about: "Dr.Prafulla Kumar Mallik did his B.Tech in Department of Metallurgical and Materials Engg, IGIT Sarang, Dhenkanal -759146,Odisha from 1997-2001 and later completed his M.Tech in IITKanpur from 2001-2003 as well as  completed his PhD in  just 3 years from Department of MSE, IIT Kanpur from 2010-2013.He is currently an associate prof and HOD , Metallurgical and Materials Engg, IGIT Sarang, Dhenkanal -759146,Odisha. He got connected to the teachings of Bhagavad during the first year of his graduate days and is now teaching this science in a lucid and thoughtful manner. He has been preaching this message for more than  6 years now and is very popular in student programs.",
    id: ""
},{
    name: "Nitai Sahoo",
    pic: "images/Alumini/Nitai Prasad.jpg",
    who1: "Ph.D. Student",
    who2: "Chemistry, University of Florida ",
    who3: "BS-MS (2014-2019)",
    about: "Nitai Prasad Sahoo completed his Bachelors and Masters in Chemistry from IIT Kanpur in 2019. He has been pursuing his PhD at the University of Florida, Gainesville since then. He used to attend Sunday evening programs and other special programs often and was enthusiastic in playing mridanga and doing kirtans with all the devotees at BVC. He is very grateful to Prof. Laxmidhar Behera and Mother Gopa for providing a wonderful facility to practice Bhakti amidst all the material attractions of IIT. ",
    id: ""
},{
    name: "Nitesh Kumar",
    pic: "images/Alumini/Nitesh.jpg",
    who1: "Assistant Professor",
    who2: "MSE, NIT Hamirpur",
    who3: "PhD, MSE, IIT Kanpur, 2012-2018",
    about: "Dr. Nitesh kumar has done B. Tech in Metallurgical Engineering and Materials Science at NIT Durgapur from 2008-2012. He did PhD in Materials Science and Engineering at IIT Kanpur. He has done his post doctoral research from CSIR Bhubaneswar after which he joined as Assistant Professor at NIT Hamirpur since 2019. He got connected to teachings of Bhagvad gita since his B. Tech days and continued preaching at IIT Kanpur. ",
    id: ""
},{
    name: "Dilip Kumar",
    pic: "images/Alumini/dilipkumar.jpg",
    who1: "Assistant Professor",
    who2: "Maharaja Agrasen College, Delhi",
    who3: "MSc (2013-16)",
    about: "Mr. Dilip Kumar did his M.Sc. from the department of mathematics, IIT KANPUR, from 2013-16, He is currently doing his PhD in the department of Mathematics and working as a assistant professor in Maharaja Agrasen college, university of Delhi. He got connect to the BVC dusing his first year in MSc and started learning the importance of chanting. He motivates his students about the teaching of bhagwat gita, krishna consciousness. ",
    id: ""
},{
    name: "Rajesh Kumar",
    pic: "images/Alumini/rajeshkumar (--3).jpg",
    who1: "Senior Research Engineer",
    who2: "IFP Energies Nouvelles",
    who3: "B.Tech + M.Tech (Dual Degree) ME (2002-2007))",
    about: "Rajesh Kumar studied B.Tech+M.Tech (dual degree) program in Mechanical Engineering at IIT Kanpur during 2002-2007. Later he did his specialization in Automotive Engineering from IFP School, Paris France. Currently he is working with IFP Energies Nouvelles as senior Research Engineer. He got introduced to the science of Krishna Consciousness at Prof. Laxmidhar Behera's (Lila Purushottam Prabhu's) place during later part of his first year at IIT Kanpur. He is indebted for life to his closest friend Dr Amir Shukla and Prashant Goyal for bring him in touch with Dr. Behera. Since 2003 he has been trying to understand the message of Lord Chaitanya but because of his strong attachement with maya, has gotten no success. Because of blessings of Dr. Behera, Mata Ji, and fellow devotees' love, affection and guidance, he has been able to do some service to his lordship at IIT Kanpur and now has been continuing to some at Paris, where he lives. ",
    id: ""
},{
    name: "Susil Mohanty",
    pic: "images/Alumini/---Susil Kumar Mohanty (1) (1).jpg",
    who1: "Ph.D. Student",
    who2: "CSE, IIT Patna",
    who3: "Project Associate (2018)",
    about: "Susil Kumar Mohanty did his M-Tech (AI) in School of Computer and Information Sciences at University of Hyderabad (UoH) from 2016-18. He came to IIT Kanpur in 2018 for the Project Associate in ISCON Lab, EE under Prof. Laxmidhar Behera. After that, he come in contact with Bhaktivedanta Club, IIT Kanpur. Since then, he has been coming to BVC. He has been part of different festival celebrations, retreats, and morning programs. He is currently pursuing his Ph.D. in the Department of Computer Science and Engineering at IIT Patna.",
    id: ""
},{
    name: "Pranjul Yadav",
    pic: "images/Alumini/pranjulyadav_ff.jpg",
    who1: "Assistant Section Officer",
    who2: "Ministry of I&B",
    who3: "BS, Physics (2012-16)",
    about: "Pranjul Yadav did his B.S. in Physics at IIT Kanpur from 2012-2016. In 2012, during Janamastami celebration, he came in contact with Bhaktivedanta Club. Later, as he continued attending sunday programs, he got attracted to the philosophy of Krsna Consciousness. The love and care of devotees made him feel at home, & further fixed his conviction that Krsna Consciousness is the panacea for all problems of the world. During his stay in IIT Kanpur, he served in Fine Arts department of Bhaktivedanta Club, particularly during Janmastami preparation. Later, after graduation, he started writing on online platforms like Quora in order to take the teachings learned in Bhaktivedanta club to larger audience. Currently he is working in the Ministry of Information & Broadcasting. There, under the guidance of devotees, he is trying to preach among colleagues & friends. ",
    id: ""
},{
    name: "Ajay vallabh",
    pic: "images/Alumini/830E43C1-4B70-4733-B30dfsdD-AB767D0F6975 - Ajay Vallabh.jpeg",
    who1: "Ph.D. Student",
    who2: "University of New Hampshire",
    who3: "MS 2017-19 mechanical engineering",
    about: " Ajay Vallabh Prabhu  did his MS in department of mechanical engineering at IIT Kanpur from 2016-19 and currently pursuing  PhD from university of New Hampshire, USA.  He met  Dr. Tharun Prabhuji (Assistant professor in IIT Roorkee) who is one of the senior devotee in BVC. Tharun Prabhu introduce him BVC.  At that time HG Lila Purushottam Prabhu started bhagwatam workshop. He joined that workshop and become active volunteer  of BVC.  Now he is utilizing all his learning not only in academia but also sharing bhagwatam  knowledge with Boston ISKCON  devotees.",
    id: ""
},{
    name: "Rajeev Ranjan",
    pic: "images/Alumini/Rajeev Ranjan.jpg",
    who1: "Scientist",
    who2: "DRDO",
    who3: "MTech (2012-2015), EE",
    about: "Shri Rajeev Ranjan did his M-Tech in department of Electrical Engineering ( Signal Processing and Communications) at IIT, KANPUR From 2012 - 2014. He currently working as Scientist  - D at Research Centre Imarat, Hyderabad.  He is connected to BVC through जन्माष्टमी of 2012. He has given full credit to the pure devotee of Lord HG Lila Purushotam for giving opportunities  to understand the science of Godhead. Sir lectures, Kirtans, Prasadam and visit to Vrindavan transformed his life.",
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

// Smoothscrolling 
var ssSmoothScroll = function() {

    $('.smoothscroll').on('click', function(e) {
        var target = this.hash,
            $target = $(target);

        e.preventDefault();
        e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing').promise().done(function() {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('#header-menu-trigger').trigger('click');
            }

            window.location.hash = target;
        });
    });
};
ssSmoothScroll();
