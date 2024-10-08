import { useRef , useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import {styles} from "../styles"
import {EarthCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import {slideIn} from "../utils/motion"


const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setloading] = useState(false)

  const handleChange = (e) =>{
    
  }
  const handleSubmit = (e) =>{

  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left" , "tween" , 0.2 , 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form className="mt-12 flex flex-col gap-8" ref={formRef} onSubmit={handleSubmit} action="">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text"  name="name" value={form.name} onChange={handleChange} placeholder="what's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>

            <input type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} placeholder="what's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>

            <textarea rows="7"
            type="text"
            name="message" 
            value={form.message} 
            onChange={handleChange} placeholder="what do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" variants={slideIn("right","tween" , 0.2 , 1)}>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , "contact")