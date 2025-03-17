import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { Helmet } from 'react-helmet';
import ChatbotComponent from "../Navbar/ChatbotComponent";
import ScrollToTopButton from "../Navbar/ScrollToTopButton";

import LazyLoad from "react-lazyload";

// // Define image paths using process.env.PUBLIC_URL
// const School1 = '/Images/Schbanner.png';
// const School2 = '/Images/Schbanner1.jpg';
// const School3 = '/Images/Schbanner2.png';
const importantSchool = '/Images/importantSchool.webp';
const boysschol = '/Images/boysschol.webp';
const SocialSkillsDevelopment = '/Images/SocialSkillsDevelopment.webp';
const PersonalGrowth = '/Images/PersonalGrowth.webp';
const PhysicalDevelopment = '/Images/PhysicalDevelopment.webp';
const AdvancedEducation = '/Images/AdvancedEducation.webp';
const CareerPreparation = '/Images/CareerPreparation.webp';
const PersonalIntellectualGrowth = '/Images/PersonalIntellectualGrowth.webp';
const ResearchandInnovation = '/Images/ResearchandInnovation.webp';



//  import School8 from '/Images/AdvancedEducation.jpg';
//  import School8 from '/Images/AdvancedEducation.jpg';



const School = () => {
  return (
    <>  
  <Helmet>
  <title>Why Schools and Colleges Matter | Education & Career Growth</title>
  
  <meta 
    name="description" 
    content="Discover the vital role of schools and colleges in education, career preparation, and innovation. Learn how institutions shape student growth, success, and future opportunities." 
  />

  <meta 
    name="keywords" 
    content="importance of schools and colleges, education system, school management, career success, student growth, research and innovation, academic excellence, social skills development, higher education, business education"
  />
</Helmet>
<ScrollToTopButton/>

<div className='container-fluid'>

{/* <div className='carousel school' >
  <div id="owl-them" className="owl-carousel  owl-theme">
    <div className="item">
    <img src={School1} alt='School images' className="img" height={400} />
    </div>
    <div className="item">
   <img src={School2} alt='School images' className="img" height={400}/> 
    </div>
    <div className="item">
   <img src={School3} alt='School images' className="img" height={400}/> 
    </div>
</div>
</div> */}
 

<div className='sch_content '>
<h1 className='text-center'>The Importance of Schools and Colleges</h1>
  <div className='row d-flex'>
<div className='col-xl-6 py-5'>
<p className='text-justify'>Both schools and colleges are integral to the educational system, providing opportunities for personal, intellectual, and social growth.
Schools and colleges are fundamental institutions that play a crucial role in shaping individuals and society.Schools and colleges play an integral role in shaping the future of individuals and society. They are institutions that go beyond providing academic education; they help mold a person's character, instill values, and prepare individuals to contribute meaningfully to society. These educational institutions are vital for personal growth, social development, and the progress of the nation.</p>
</div>
<div className='col-xl-6 sch_contentimg'>
    {/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={importantSchool} className="img-responsive my-5" loading="lazy"  alt="School images" height={400}/> 
     <source srcSet={importantSchool} type="image/png" />
     <source srcSet={importantSchool} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
         <LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP Format for Better Performance */}
    <source 
      srcSet={`
        ${importantSchool}?w=400&h=300&fit=crop&fm=webp 400w,
        ${importantSchool}?w=800&h=600&fit=crop&fm=webp 800w
      `}
      sizes="(max-width: 600px) 400px, 800px"
      type="image/webp"
    />

    {/* PNG Fallback */}
    <source 
      srcSet={`
        ${importantSchool}?w=400&h=300&fit=crop&fm=png 400w,
        ${importantSchool}?w=800&h=600&fit=crop&fm=png 800w
      `}
      sizes="(max-width: 600px) 400px, 800px"
      type="image/png"
    />

    {/* JPEG Fallback */}
    <source 
      srcSet={`
        ${importantSchool}?w=400&h=300&fit=crop&fm=jpeg 400w,
        ${importantSchool}?w=800&h=600&fit=crop&fm=jpeg 800w
      `}
      sizes="(max-width: 600px) 400px, 800px"
      type="image/jpeg"
    />

    {/* Default img for Unsupported Browsers */}
    <img 
      src={`${importantSchool}?w=800&h=600&fit=crop`} 
      className="responsive-img my-5 lazy-img" 
      loading="lazy"  
      alt="Important School Infrastructure"  
      width={800} 
      height={600}
    />
  </picture>
</LazyLoad>

</div>

</div>
</div>
<div className='container text-center'>
<h2>Why Schools are Important</h2>
<div className='school_contant'>
<h3>Educational Foundation</h3>
<p className='text-justify'><b>Knowledge Development: </b>Schools offer basic education in subjects like mathematics, science, language arts, social studies, and more. This broad curriculum helps students acquire fundamental knowledge necessary for understanding the world around them.<br/>
<b>Cognitive Skills:  </b>In schools, children develop critical thinking, problem-solving, and analytical skills. These skills form the basis of learning and further education.
</p>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={boysschol} className="img-responsive my-5" loading="lazy"  alt="School images" height={400} width={500}/> 
     <source srcSet={boysschol} type="image/png" />
     <source srcSet={boysschol} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${boysschol}?w=400&h=300&fit=crop&fm=webp 400w,
        ${boysschol}?w=800&h=600&fit=crop&fm=webp 800w,
        ${boysschol}?w=1200&h=900&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${boysschol}?w=400&h=300&fit=crop&fm=png 400w,
        ${boysschol}?w=800&h=600&fit=crop&fm=png 800w,
        ${boysschol}?w=1200&h=900&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${boysschol}?w=400&h=300&fit=crop&fm=jpeg 400w,
        ${boysschol}?w=800&h=600&fit=crop&fm=jpeg 800w,
        ${boysschol}?w=1200&h=900&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${boysschol}?w=800&h=600&fit=crop`} 
      className="responsive-img my-5 lazy-img" 
      loading="lazy"  
      alt="High-quality Boys' School Infrastructure"  
      width={500} 
      height={400}
    />
  </picture>
</LazyLoad>

</div>
</div>

<div className='container text-center'>
<div className='school_contant'>
<h4>Social Skills Development</h4>
<p className='text-justify'>
<b>Interpersonal Relationships: </b>Schools are key to developing social skills as students interact with peers, teachers, and staff. They learn communication, teamwork, respect, and conflict resolution—skills that are crucial in later stages of life.<br/>
<b>Cultural Awareness: </b>Through diverse student populations, schools expose children to various cultures, fostering respect for differences and encouraging inclusive attitudes.</p>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={SocialSkillsDevelopment} className="img-responsive " loading="lazy"  alt="School images" height={400} width={500}/> 
     <source srcSet={SocialSkillsDevelopment} type="image/png" />
     <source srcSet={SocialSkillsDevelopment} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${SocialSkillsDevelopment}?w=400&h=300&fit=crop&fm=webp 400w,
        ${SocialSkillsDevelopment}?w=800&h=600&fit=crop&fm=webp 800w,
        ${SocialSkillsDevelopment}?w=1200&h=900&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${SocialSkillsDevelopment}?w=400&h=300&fit=crop&fm=png 400w,
        ${SocialSkillsDevelopment}?w=800&h=600&fit=crop&fm=png 800w,
        ${SocialSkillsDevelopment}?w=1200&h=900&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${SocialSkillsDevelopment}?w=400&h=300&fit=crop&fm=jpeg 400w,
        ${SocialSkillsDevelopment}?w=800&h=600&fit=crop&fm=jpeg 800w,
        ${SocialSkillsDevelopment}?w=1200&h=900&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${SocialSkillsDevelopment}?w=800&h=600&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="Social Skills Development in Schools"  
      width={500} 
      height={400}
    />
  </picture>
</LazyLoad>


</div>
</div>


<div className='container text-center'>
<div className='school_contant'>
<h4>Personal Growth</h4>
<p className='text-justify'>
<b>Discipline: </b>Schools help instill discipline in students, teaching them the importance of punctuality, responsibility, and time management.<br/>
<b>Character Building: </b>Educational institutions play a significant role in shaping character by promoting values like honesty, empathy, and hard work.
</p>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={PersonalGrowth} className="img-responsive " loading="lazy"  alt="School images" height={400} width={500}/> 
     <source srcSet={PersonalGrowth} type="image/png" />
     <source srcSet={PersonalGrowth} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${PersonalGrowth}?w=400&h=300&fit=crop&fm=webp 400w,
        ${PersonalGrowth}?w=800&h=600&fit=crop&fm=webp 800w,
        ${PersonalGrowth}?w=1200&h=900&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${PersonalGrowth}?w=400&h=300&fit=crop&fm=png 400w,
        ${PersonalGrowth}?w=800&h=600&fit=crop&fm=png 800w,
        ${PersonalGrowth}?w=1200&h=900&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${PersonalGrowth}?w=400&h=300&fit=crop&fm=jpeg 400w,
        ${PersonalGrowth}?w=800&h=600&fit=crop&fm=jpeg 800w,
        ${PersonalGrowth}?w=1200&h=900&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${PersonalGrowth}?w=800&h=600&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="Personal Growth in Schools"  
      width={500} 
      height={400}
    />
  </picture>
</LazyLoad>


</div>
</div>


<div className='container text-center'>
<div className='school_contant'>
<h4>Physical Development</h4>
<p className='text-justify'>
<b>Sports and Physical Education: </b>Schools provide physical education, promoting health and fitness, while also teaching teamwork, leadership, and perseverance through sports activities.
</p>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={PhysicalDevelopment} className="img-responsive " loading="lazy"  alt="School images" height={400} width={500}/> 
     <source srcSet={PhysicalDevelopment} type="image/png" />
     <source srcSet={PhysicalDevelopment} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${PhysicalDevelopment}?w=400&h=300&fit=crop&fm=webp 400w,
        ${PhysicalDevelopment}?w=800&h=600&fit=crop&fm=webp 800w,
        ${PhysicalDevelopment}?w=1200&h=900&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${PhysicalDevelopment}?w=400&h=300&fit=crop&fm=png 400w,
        ${PhysicalDevelopment}?w=800&h=600&fit=crop&fm=png 800w,
        ${PhysicalDevelopment}?w=1200&h=900&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${PhysicalDevelopment}?w=400&h=300&fit=crop&fm=jpeg 400w,
        ${PhysicalDevelopment}?w=800&h=600&fit=crop&fm=jpeg 800w,
        ${PhysicalDevelopment}?w=1200&h=900&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${PhysicalDevelopment}?w=800&h=600&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="Physical Development in Schools"  
      width={500} 
      height={400}
    />
  </picture>
</LazyLoad>

</div>
</div>


<div className='container'>
<h3 className='text-center  pt-5'>Why Colleges are Important</h3>
<div className='school_contant'>
<h4 className=' text-center'>Advanced Education</h4>
<div className='row'>
<p><b>Specialization: </b>Colleges offer specialized courses in specific fields like medicine, engineering, law, business, and arts. This allows students to gain in-depth knowledge and expertise in their chosen disciplines.</p>
<div className='col-xl-5'>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={AdvancedEducation} className="img-responsive " loading="lazy"  alt="School images" height={300} width={500}/> 
     <source srcSet={AdvancedEducation} type="image/png" />
     <source srcSet={AdvancedEducation} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${AdvancedEducation}?w=400&h=240&fit=crop&fm=webp 400w,
        ${AdvancedEducation}?w=800&h=480&fit=crop&fm=webp 800w,
        ${AdvancedEducation}?w=1200&h=720&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${AdvancedEducation}?w=400&h=240&fit=crop&fm=png 400w,
        ${AdvancedEducation}?w=800&h=480&fit=crop&fm=png 800w,
        ${AdvancedEducation}?w=1200&h=720&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${AdvancedEducation}?w=400&h=240&fit=crop&fm=jpeg 400w,
        ${AdvancedEducation}?w=800&h=480&fit=crop&fm=jpeg 800w,
        ${AdvancedEducation}?w=1200&h=720&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${AdvancedEducation}?w=800&h=480&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="Advanced Education in Schools"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>


</div>
<div className='col-xl-6 px-4  '>
<p className='text-justify'><b>Higher Learning: </b>Colleges encourage independent thinking, research, and the application of concepts to real-world scenarios, providing students with the critical thinking and problem-solving skills needed in professional careers.</p>
</div>

</div>
</div>
</div>


<div className='container'>
<div className='school_contant'>
<h4 className=' text-center'>Career Preparation</h4>
<div className='row'>
<p><b>Skills for the Workforce: </b>Colleges equip students with professional skills required in various industries. Courses focus not just on theoretical knowledge, but on practical applications and career-oriented training.</p>

<div className='col-xl-6 px-4  '>
<p className='text-justify'><b>Networking Opportunities:</b> College exposes students to a wide range of professionals, professors, and peers, helping them build valuable networks for future employment or entrepreneurial opportunities.</p>
</div>
<div className='col-xl-5'>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={CareerPreparation} className="img-responsive " loading="lazy"  alt="School images" height={300} width={500}/> 
     <source srcSet={CareerPreparation} type="image/png" />
     <source srcSet={CareerPreparation} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${CareerPreparation}?w=400&h=240&fit=crop&fm=webp 400w,
        ${CareerPreparation}?w=800&h=480&fit=crop&fm=webp 800w,
        ${CareerPreparation}?w=1200&h=720&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${CareerPreparation}?w=400&h=240&fit=crop&fm=png 400w,
        ${CareerPreparation}?w=800&h=480&fit=crop&fm=png 800w,
        ${CareerPreparation}?w=1200&h=720&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${CareerPreparation}?w=400&h=240&fit=crop&fm=jpeg 400w,
        ${CareerPreparation}?w=800&h=480&fit=crop&fm=jpeg 800w,
        ${CareerPreparation}?w=1200&h=720&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${CareerPreparation}?w=800&h=480&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="Career Preparation in Schools"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>


</div>

</div>
</div>
</div>



<div className='container'>
<div className='school_contant'>
<h4 className=' text-center'>Personal and Intellectual Growth</h4>
<p><b>Independence and Responsibility:</b> College life teaches students how to manage their time, finances, and responsibilities. They gain confidence in their abilities to make decisions and handle challenges independently.</p>

<div className='row'>
<div className='col-xl-5'>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={PersonalIntellectualGrowth} className="img-responsive " loading="lazy"  alt="School images" height={300} width={500}/> 
     <source srcSet={PersonalIntellectualGrowth} type="image/png" />
     <source srcSet={PersonalIntellectualGrowth} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${PersonalIntellectualGrowth}?w=400&h=240&fit=crop&fm=webp 400w,
        ${PersonalIntellectualGrowth}?w=800&h=480&fit=crop&fm=webp 800w,
        ${PersonalIntellectualGrowth}?w=1200&h=720&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${PersonalIntellectualGrowth}?w=400&h=240&fit=crop&fm=png 400w,
        ${PersonalIntellectualGrowth}?w=800&h=480&fit=crop&fm=png 800w,
        ${PersonalIntellectualGrowth}?w=1200&h=720&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${PersonalIntellectualGrowth}?w=400&h=240&fit=crop&fm=jpeg 400w,
        ${PersonalIntellectualGrowth}?w=800&h=480&fit=crop&fm=jpeg 800w,
        ${PersonalIntellectualGrowth}?w=1200&h=720&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${PersonalIntellectualGrowth}?w=800&h=480&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="Personal Intellectual Growth in Schools"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>


</div>

<div className='col-xl-6 px-4  '>
<p className='text-justify'><b>Intellectual Curiosity: </b>Colleges provide an environment that encourages intellectual exploration. Students can explore diverse subjects, ideas, and interests, fostering a lifelong love for learning.</p>
</div>

</div>
</div>
</div>



<div className='container'>
<div className='school_contant'>
<h4 className=' text-center'>Research and Innovation</h4>
<p><b>Contributions to Knowledge: </b>Many colleges focus on research, where students contribute new knowledge, innovations, and discoveries in their respective fields. This supports scientific, technological, and cultural advancements.</p>

<div className='row'>
<div className='col-xl-6 px-4 '>
<p className='text-justify'><b>Development of Critical Thought: </b>College encourages students to question, analyze, and explore ideas critically, allowing them to form their own opinions and understand complex topics.</p>
</div>
<div className='col-xl-5'>
{/* <LazyLoad height={200} offset={100}>
     <picture>
     
     <img   src={ResearchandInnovation} className="img-responsive " loading="lazy"  alt="School images" height={300} width={500}/> 
     <source srcSet={ResearchandInnovation} type="image/png" />
     <source srcSet={ResearchandInnovation} type="image/jpeg" />
     </picture>
     </LazyLoad> */}
<LazyLoad height={200} offset={100} className="lazyload-container">
  <picture>
    {/* WebP फॉर्मेट (बेहतर परफॉर्मेंस के लिए) */}
    <source 
      srcSet={`
        ${ResearchandInnovation}?w=400&h=240&fit=crop&fm=webp 400w,
        ${ResearchandInnovation}?w=800&h=480&fit=crop&fm=webp 800w,
        ${ResearchandInnovation}?w=1200&h=720&fit=crop&fm=webp 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/webp"
    />

    {/* PNG fallback */}
    <source 
      srcSet={`
        ${ResearchandInnovation}?w=400&h=240&fit=crop&fm=png 400w,
        ${ResearchandInnovation}?w=800&h=480&fit=crop&fm=png 800w,
        ${ResearchandInnovation}?w=1200&h=720&fit=crop&fm=png 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/png"
    />

    {/* JPEG fallback */}
    <source 
      srcSet={`
        ${ResearchandInnovation}?w=400&h=240&fit=crop&fm=jpeg 400w,
        ${ResearchandInnovation}?w=800&h=480&fit=crop&fm=jpeg 800w,
        ${ResearchandInnovation}?w=1200&h=720&fit=crop&fm=jpeg 1200w
      `}
      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
      type="image/jpeg"
    />

    {/* Default img for unsupported browsers */}
    <img 
      src={`${ResearchandInnovation}?w=800&h=480&fit=crop`} 
      className="responsive-img lazy-img" 
      loading="lazy"  
      alt="Research and Innovation in Schools"  
      width={500} 
      height={300}
    />
  </picture>
</LazyLoad>


</div>
</div>
</div>
</div>






</div>
<ChatbotComponent />

    </>

  )
}

export default School
