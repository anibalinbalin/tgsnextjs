import React from 'react'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'
import { Gallery6WithText } from '@/components/blocks/gallery6-w-text'
import { ContactSection } from '@/components/contact-section'
import FooterSection from '@/components/footer'

export default function TeamPage() {
    return (
        <>
            <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/1_ourschool/2_team/_DSC0443.jpg)' }}>
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10">
                    <HeroHeader />
                    <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        </div>
                    </section>
                </main>
                </div>
                <DevBadge name="team-page" />
            </div>

            <section className="relative py-16 md:py-32" style={{ backgroundColor: '#95af98' }}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6 text-justify">
                        <p className="text-2xl leading-relaxed font-light" style={{ color: 'white' }}>
                            The competence, professionalism, and human qualities of our team truly set The Garzón School apart. We proudly employ world-class international and local teachers and specialists. With an 8:1 student-to-educator ratio, children benefit from exceptional levels of attention and support. Every team member — whether teacher or administrative staff — is an educator at heart, dedicated to creating a safe, nurturing environment that fosters the inspiring education we are renowned for. From just eight founding dreamers in March 2022, our team has grown into a dynamic group of 29 multidisciplinary professionals as of July 2025. As vibrant and diverse as the students we serve, we represent 10 nationalities and speak as many languages, united by a shared commitment to positive, purposeful learning. It's this blend of expertise, diversity, and heart that makes our school community truly special.
                        </p>
                    </div>
                </div>
                <DevBadge name="content-5-green" />
            </section>

            <section className="relative">
                <Gallery6WithText
                    heading="Senior Leadership Team"
                    showDemo={false}
                    items={[
                        {
                            id: "item-1",
                            title: "Sam",
                            role: "Co-Head of School",
                            flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                            summary: "Sam is a service-driven school leader dedicated to creating an environment where students flourish and faculty feel inspired. His career in education began in homeschooling, shaping The Garzón School's philosophy of student agency and individualised learning. As one of our founding teachers, he is committed to nurturing a school culture where each child feels truly known, supported, and challenged. Within the school community, Sam cultivates a shared sense of purpose among students, faculty, families, and the Board to advance the school's mission. He holds a Certificate in School Management and Leadership (CSML) from Harvard Graduate School of Education.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/SamI.JPG",
                        },
                        {
                            id: "item-2",
                            title: "Leona",
                            role: "Co-Head of School",
                            flag: "🇳🇱",
                            summary: "Leona is a dedicated educator and leader with over 20 years of experience in school start-ups, accreditation, and curriculum design. Holding a Bachelor's in Education and a Master's in Educational Leadership and Management, she is passionate about empowering students and shaping transformative learning experiences. Leona fosters environments where students can discover their strengths, develop a sense of purpose, and engage deeply with their learning. At The Garzón School, she is committed to building a dynamic educational model that integrates academic excellence, well-being, and a connection to nature.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/LeonaD.JPG",
                        },
                        {
                            id: "item-3",
                            title: "Annina",
                            role: "Lower School Coordinator",
                            flag: "🇫🇮",
                            summary: "Hailing from Finland, Annina earned her Master's degree in Education and has over 12 years of experience in international educational settings across Asia. She has implemented various curricula, including Cambridge, IPC, IB, and the Finnish curriculum, in roles ranging from teaching to leadership. Annina believes in learning through hands-on experiences, exploring the natural environment, and fostering creativity and play-based learning as core values in Early Childhood and Primary Education.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Annina.JPG",
                        },
                    ]}
                />
                <DevBadge name="gallery6-w-text-leadership" />
            </section>

            <section className="relative">
                <Gallery6WithText
                    heading="Secondary School Team"
                    showDemo={false}
                    items={[
                        {
                            id: "secondary-1",
                            title: "Santiago Vitale",
                            role: "Technical Director (Secondary)\nSecondary Educator (Global Studies)",
                            flag: "🇺🇾",
                            summary: "Santi is a global citizen and enthusiast of Uruguayan culture, committed to continuous learning. He holds a BA in International Relations and an MA in Global Studies, and is currently pursuing a Bachelor's Degree in Physical Education. His experience in international schools in Switzerland and Saudi Arabia has inspired him to nurture learners with a deep connection to their environment and a broad sense of curiosity. In his role as Technical Director, he ensures The Garzón School is fully compliant with national accreditation standards.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Santi.JPG",
                        },
                        {
                            id: "secondary-2",
                            title: "Fiorella Carrazzone",
                            role: "Language & Literacy Lead\nSecondary Educator (Literature)",
                            flag: "🇺🇾",
                            summary: "Fio joined The Garzón School in 2023 after a decade at the Uruguayan American School in Montevideo, where she led the English Department. Experienced in both American and Uruguayan curricula and school accreditations, she holds a Bachelor's in Education from the University of Montevideo and is pursuing a Master's in English Language and Intercultural Bilingual Education. She has presented at conferences in Brazil and Argentina and was recently selected to present at the World Literacy Summit in Oxford, UK, in 2025.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Fio.JPG",
                        },
                        {
                            id: "secondary-3",
                            title: "Agostina Peterson",
                            role: "Educational Psychologist (Secondary)",
                            flag: "🇺🇾",
                            summary: "After studying early education at the Universidad Católica del Uruguay, Agostina spent nearly a decade teaching before deciding to specialise in the field of educational psychology. With an ongoing desire to deepen her knowledge, she is currently pursuing a Postgraduate Diploma in Neuropsychopedagogy. An enthusiast of music and dance, Agos brings a unique energy to her role. Her steadfast commitment to creating a supportive learning environment is a valuable addition to our School.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Agos.JPG",
                        },
                        {
                            id: "secondary-4",
                            title: "Nicolás Molnar",
                            role: "Secondary Educator (STEM)",
                            flag: "🇦🇷",
                            summary: "Growing up in Patagonia, Nico earned a Master's Degree in Geology from Universidad de Buenos Aires and pursued a PhD in Geosciences in Australia. There, he engaged in science communication and outreach, igniting his passion for creating engaging learning environments. He has taught in Uruguay, Germany, and Spain, fostering curiosity and intrinsic motivation in students. In 2024, Nico relocated to Punta del Este to join The Garzón School, drawn by the connection to nature and the sense of community.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Nicolas.JPG",
                        },
                        {
                            id: "secondary-5",
                            title: "Otto González",
                            role: "Secondary Educator (Art & Design)",
                            flag: "🇨🇺",
                            summary: "Otto's journey in education began alongside his studies in Fine Arts and Design, where he balanced a thriving creative practice with teaching. In 2017, his deep commitment to education led him to transition into full-time international teaching. Since then, he has gained extensive experience in the International Baccalaureate (IB) program and the Cambridge curriculum, where he also serves as an Assessment Specialist. Otto holds teaching certifications from Cambridge University and the University of East London. He believes that learning and creativity are lifelong processes that foster continuous growth and self-improvement.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Otto.JPG",
                        },
                    ]}
                />
                <DevBadge name="gallery6-w-text-secondary" />
            </section>

            <section className="relative">
                <Gallery6WithText
                    heading="Primary School Team"
                    showDemo={false}
                    items={[
                        {
                            id: "primary-1",
                            title: "Talia Cossin",
                            role: "Primary Educator",
                            flag: "🇺🇸",
                            summary: "Talia has worked at a variety of schools in Costa Rica, Panama and the United States. Each one has inspired and molded both her educational and life philosophy. She believes that all humans deserve to know themselves well, understand where food comes from and learn through a constructivist lens. Talia has an undergraduate degree in Latin American Youth, Culture and Education and an M.Ed. in Elementary Education, both from the University of Massachusetts. When not teaching, Talia can be found baking, running, practicing yoga, reading, and exploring Uruguay amongst other introvert-friendly activities.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Talia.JPG",
                        },
                        {
                            id: "primary-2",
                            title: "Jessica Howes",
                            role: "Primary Educator",
                            flag: "🇿🇦",
                            summary: "Born and raised in Cape Town, South Africa, Jess worked in Vietnam and Peru before relocating to Punta del Este in 2019. She entered education having received a Bachelor's in Social Sciences from the University of Cape Town, and completed her Post Graduate Certificate in Education (PGCE) through the University of Nottingham whilst teaching in Peru and Uruguay. Jess believes meaningful learning is dynamic and engaging, and she thoroughly enjoys implementing research-based practice in her classroom to support children in reaching their full potential. In 2024, Jess was accepted into the University of Nottingham School of Education to pursue a Master's in Education, which she will complete remotely whilst teaching at The Garzón School.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Jess.JPG",
                        },
                        {
                            id: "primary-3",
                            title: "Natalia Damián",
                            role: "Technical Director (Primary)\nPrimary Educator",
                            flag: "🇺🇾",
                            summary: "Having graduated from the Instituto de Formación Docente in Maldonado, Natalia is a Primary educator who has worked in a range of public and private schools throughout Uruguay. In her role as Technical Director, she represents the School before the Administración Nacional de Educación Pública (ANEP), ensuring TGS is fully compliant with national accreditation standards. In her spare time, Natalia enjoys travelling and immersing herself in new cultures and experiences, which once even led to her working as a teacher in Dublin, Ireland!",
                            url: "#",
                            image: "/assets/0_mainpage/staff/NataliaD.JPG",
                        },
                        {
                            id: "primary-4",
                            title: "Catalina Garat",
                            role: "Educational Psychologist (Primary)\nDesignated Safeguarding Lead",
                            flag: "🇦🇷",
                            summary: "Having studied in Argentina and worked in private clinics and primary schools, Cata pursued her Master's Degree in Special Education in Australia. There, she expanded her expertise as a positive behaviour support therapist, focusing on autistic children. Cata's experience includes supporting individuals with disabilities in transitioning to mainstream employment. She is a strong advocate for inclusive environments and equal opportunity, emphasising the equal development of students' social, emotional, and academic skills. Cata's relocation to Punta Del Este reflects her desire for nature, balance and community to complement a bright career trajectory.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Catalina.JPG",
                        },
                        {
                            id: "primary-5",
                            title: "Jimena María Bello",
                            role: "Primary Educator",
                            flag: "🇺🇾",
                            summary: "Jimena holds a double Bachelor's in Bilingual Education from the University of Montevideo and a Postgraduate Certificate in Leadership and Educational Management from the Catholic University of Uruguay. She was selected to represent Uruguay in the Study of the U.S. Institutes for Student Leaders and is currently pursuing an M.A. in English Language and Intercultural Bilingual Education. Passionate about innovative learning, Jimena believes in making education enjoyable, meaningful, and interactive, nurturing curiosity and critical thinking in her students.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Jime.JPG",
                        },
                        {
                            id: "primary-6",
                            title: "Juan De Feo",
                            role: "Primary Educator",
                            flag: "🇺🇾",
                            summary: "With over 10 years' experience in education, Juan has made important contributions to prestigious institutions such as The British Schools Montevideo and Woodlands School. Holding a degree in Bilingual Education from the University of Montevideo and a degree in Business Communications and Public Relations from ORT University, Juan focuses on building confident and safe relationships with students. He is dedicated to empowering primary school learners to maximise their capabilities and overcome life's challenges.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/JuanDF.JPG",
                        },
                        {
                            id: "primary-7",
                            title: "Ignacio Croci",
                            role: "Music Specialist (Primary)",
                            flag: "🇺🇾",
                            summary: "Nacho was born in Uruguay and has worked as an educator for nearly a decade. He has a Bachelor's Degree in Musical Therapy from the Cediiap Institute in Montevideo, and is trained as a Music Teacher in the Gordon's Music Learning Theory (MLT). His professional interest lies in using music as a vehicle to advance wellbeing, communication and the acquisition of important values in each child's development. He believes in active listening and providing spaces where children can express themselves naturally, creatively and authentically.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/ignacio.jpg",
                        },
                        {
                            id: "primary-8",
                            title: "Alejandro Correa",
                            role: "Physical Education Specialist (Primary)",
                            flag: "🇺🇾",
                            summary: "Hailing from Rocha, Uruguay, Alejandro is a dynamic Physical Education educator dedicated to integrating movement, teaching, and nature. With a strong academic background in education and sports, he enriches his lessons by connecting them to the environment, fostering curiosity among students. Alejandro has also led significant cultural and educational events in Physical Education. Passionate about candombe, murga, and beach activities, he aspires to pursue advanced studies in Education to inspire others to embrace movement with joy and respect.",
                            url: "#",
                            image: "/images/placeholder/person.svg",
                        },
                        {
                            id: "primary-9",
                            title: "Camila Nóvoa",
                            role: "Primary Educator",
                            flag: "🇺🇾",
                            summary: "Camila was born in Uruguay but has always had a passion for exploring the world. She earned a scholarship to complete a Master's in Outdoor Education at the Universidad de Santiago de Compostela, where she deepened her understanding of nature-based learning. She later worked at a Forest School in Galicia (Spain), gaining hands-on experience in outdoor education. She holds a Bachelor's in Visual Communication Design and a TESOL Diploma, combining both academic worlds to bring art into the classroom and create educational materials as an illustrator and designer. A passionate hiker and devoted mushroom enthusiast, she infuses her teaching with love for nature and exploration.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/CamilaN.JPG",
                        },
                        {
                            id: "primary-10",
                            title: "Carolina Moreno",
                            role: "Learning Support Assistant",
                            flag: "🇦🇷",
                            summary: "Carolina is an Educational Psychologist with a Bachelor's and a Teaching Degree from Universidad del Salvador in Argentina. She supports learning and development of students at The Garzón School through a holistic, student-centred approach; with the focus on English and Spanish as a second language. Her professional journey includes international experience in Germany and Australia, which has shaped her inclusive and culturally responsive practice. Carolina is deeply committed to fostering each child's emotional and educational growth with empathy and care.",
                            url: "#",
                            image: "/images/placeholder/person.svg",
                        },
                        {
                            id: "primary-11",
                            title: "Eugenia Rippe",
                            role: "Educational Psychologist\n(Maternity Cover)",
                            flag: "🇦🇷",
                            summary: "Eugenia is a psychologist with a strong interest in clinical work, trained at the Catholic University. Her career began in early childhood education, where she discovered the lasting impact of shared learning experiences. She later returned to her alma mater as a lecturer in Psychology, deepening her understanding of families as the primary organizing force of society. In her work with children, she embraces an integrative approach that actively involves families. Within the school, she is dedicated to providing a safe space, guidance, and trusted support, fostering each child's growth and well-being.",
                            url: "#",
                            image: "/images/placeholder/person.svg",
                        },
                    ]}
                />
                <DevBadge name="gallery6-w-text-primary" />
            </section>

            <section className="relative">
                <Gallery6WithText
                    heading="Early Years Team"
                    showDemo={false}
                    items={[
                        {
                            id: "early-1",
                            title: "Lucía Capurro",
                            role: "Early Years Educator",
                            flag: "🇺🇾",
                            summary: "A Montevideo native, Lucía explored Fine Arts, Graphic Design, and Architecture before realising her true calling in education and teaching. With over 20 years of classroom experience, she has worked with Early Years and Lower Primary learners in schools from Montevideo and Maldonado, adopting and mastering different methodologies along the way. Her journey to The Garzón School has allowed her to gather the knowledge and tools essential for reaching students of all backgrounds and profiles. Lucía finds great joy in watching children learn, grow, and evolve into wonderful human beings.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Lucia.JPG",
                        },
                        {
                            id: "early-2",
                            title: "Ksenia Irving",
                            role: "Early Years Educator",
                            flag: "🇷🇺",
                            summary: "Ksenia brings a diverse lived experience to The Garzón School, holding a Bachelor's in Business Management from St. Petersburg State University and a Master's in Marketing from the Universidad Politècnica de Catalunya. Furthering her commitment to education, she earned a PGCE from the University of Nottingham while teaching under Uruguay's Plan Ceibal and at International College Punta del Este. Ksenia is passionate about creating inviting, inspiring and individualised learning opportunities for children. She enjoys meandering dog walks, yoga, crocheting, and reading (especially mysteries and biographies!).",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Ksenia.JPG",
                        },
                        {
                            id: "early-3",
                            title: "Camila Ruiz",
                            role: "Early Years Educator",
                            flag: "🇺🇾",
                            summary: "Camila is an early years educator with a passion for fostering meaningful learning experiences in young children. Currently pursuing a Bachelor's in Education at La Universidad de la República (Uruguay), she combines academic knowledge with hands-on experience in the classroom. Beyond the classroom, she has an extensive background in sailing instruction, having worked as a sailing coach and led summer sailing camps. With years of experience teaching both on land and at sea, she brings a unique approach to education, blending active learning with a nature-based approach.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/CamiR.JPG",
                        },
                        {
                            id: "early-4",
                            title: "Verónica Caballero",
                            role: "Early Years Educator",
                            flag: "🇺🇾",
                            summary: "Verónica holds a Bachelor's degree in Early Childhood Education from the Catholic University of Uruguay. She has extensive experience in early years education, having worked in various private institutions in Montevideo and Maldonado. Her deep passion for the arts led her to pursue a Postgraduate Diploma in Visual Arts at the Catholic University of Uruguay. Professionally, she is dedicated to fostering learning experiences that integrate art and nature, providing students with meaningful and enriching opportunities for growth. She enjoys exploring and creating, always seeking inspiration in her surroundings.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Vero.JPG",
                        },
                    ]}
                />
                <DevBadge name="gallery6-w-text-early" />
            </section>

            <section className="relative">
                <Gallery6WithText
                    heading="Administrative & Support Team"
                    showDemo={false}
                    items={[
                        {
                            id: "admin-1",
                            title: "Jacques Paullier de Montenegro",
                            role: "School Bursar\nAdmissions Officer",
                            flag: "🇺🇾",
                            summary: "Jacques serves as both School Bursar and Admissions Officer at The Garzón School, seamlessly connecting our institution with legal advisors, architects, and local authorities. Born in Montevideo and having lived in the Basque Country and New York, he brings a rich multicultural perspective that enhances our community's cultural openness. Jacques is currently completing his thesis for a Bachelor's Degree in International Studies, further enriching his role with global insights.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/jacques.JPG",
                        },
                        {
                            id: "admin-2",
                            title: "Victoria Galvan",
                            role: "Facilities Supervisor",
                            flag: "🇺🇾",
                            summary: "Few people know our premises better than Victoria. She has been attending to guests at Casa Zinc for over a decade, and chose to accompany us as the building transitioned from hotel to school. In her evolved role at The Garzón School, Victoria keeps our spaces presentable and secure, and ensures our children, families, educators and guests are comfortable throughout the day. A mother of two herself, Vicki has loved getting to know all of our children in her supportive capacity.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/vicky.jpg",
                        },
                        {
                            id: "admin-3",
                            title: "Analaura Mussini",
                            role: "Accountant",
                            flag: "🇺🇾",
                            summary: "Analaura, our dedicated accountant, brings a wealth of expertise in financial management, ensuring The Garzón School's financial records are meticulously maintained. Beyond her proficiency with numbers, she enriches our community with her passion for travel and wellness. As a certified hatha yoga instructor, Analaura shares the benefits of yoga, promoting well-being among staff and students alike.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Analaura.JPG",
                        },
                        {
                            id: "admin-4",
                            title: "Bárbara Escala",
                            role: "Family Liaison Officer\nCo-Curricular Coordinator",
                            flag: "🇺🇾",
                            summary: "Bárbara is the friendly voice and welcoming smile behind our school office. With a background in school administration and service-focused industries, she's passionate about making every family's experience smooth and positive. Fluent in Spanish, English, German, Portuguese, and even a little Italian, Bárbara loves connecting with people from all walks of life. Whether she's helping parents or supporting our innovative co-curricular programs, her goal is simple: to ensure every family feels supported, informed, and at home in our community.",
                            url: "#",
                            image: "/images/placeholder/person.svg",
                        },
                        {
                            id: "admin-5",
                            title: "Gerardo Rojas",
                            role: "Groundskeeper",
                            flag: "🇨🇷",
                            summary: "Gerardo grew up on his family's farm in rural Costa Rica, where he learned about farming, tree management and animal husbandry. He was inspired by his agriculture teacher in elementary school who taught him how to make garden beds, start seeds and all things agriculture related. Gera has also lived in Panama where he worked with adults with disabilities and the United States where he had a homestead and his own landscaping business. He's excited to get to know the environment and people of Uruguay and share his love of nature and farming.",
                            url: "#",
                            image: "/assets/0_mainpage/staff/Gerardo.JPG",
                        },
                        {
                            id: "admin-6",
                            title: "Rodrigo Gallardo",
                            role: "Assistant Groundskeeper",
                            flag: "🇦🇷",
                            summary: "Rodrigo supports the grounds maintenance team, ensuring The Garzón School's outdoor spaces remain beautiful and functional for our learning community.",
                            url: "#",
                            image: "/images/placeholder/person.svg",
                        },
                        {
                            id: "admin-7",
                            title: "Rosario Fernandez",
                            role: "Cleaning Assistant",
                            flag: "🇺🇾",
                            summary: "Rosario plays a vital role in maintaining the cleanliness and hygiene of our facilities, creating a welcoming environment for students, staff, and families.",
                            url: "#",
                            image: "/images/placeholder/person.svg",
                        },
                    ]}
                />
                <DevBadge name="gallery6-w-text-admin" />
            </section>

            <ContactSection />
            <FooterSection />
        </>
    )
}
