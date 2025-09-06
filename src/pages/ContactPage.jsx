import { useEffect, useState } from "react"
import ContactCard from "../components/ContactCard"
import CommonInput from "../components/CommonInput"
import { useFormik } from "formik"
import * as Yup from 'yup'

const validationSchema = ()=>{
  return Yup.object().shape({
    contactName:Yup.string().required("Contact Name is reauired"),
    contactPhone:Yup.string().required("Contact Phone is required"),
    contactAddress:Yup.string().required("Contact Address is required")
  })
}
const ContactPage = () => {
  const contacts = [
    {
      id: 1,
      username: "Bala",
      email: 'bkum1223@gmail.com',
      phone: "9876543210"
    },
    {
      id: 2,
      username: "Kumar",
      email: 'kumar@example.com',
      phone: "9876543211"
    }
  ]
  
  const formik = useFormik({
    initialValues:{
      contactName:"",
      contactPhone:"",
      contactAddress:""
    },
    validationSchema,
    onSubmit:(values)=>{
      console.log("Form data",values)
    }
  })
  console.log(formik.errors)

  const [showContactForm, setShowContactForm] = useState(false)
  const inputFields=[
    {
      id:1,
      label:"Contact Name",
      placeholder:"Enter a contact Name",
      disabled:false,
      type:'text',
      value:formik.values.contactName,
      name:"contactName",
      onChange:formik.handleChange
    },
    {
      id:2,
      label:"Contact Phone",
      placeholder:'Enter a Contact Phone',
      type:"text",
      value:formik.values.contactPhone,
      onChange:formik.handleChange,
      disabled:false,
      name:"contactPhone"
    },
    {
      id:3,
      label:"Contact Address",
      placeholder:"Enter you Adress here...",
      type:"textarea",
      value:formik.values.contactAddress,
      onChange:formik.handleChange,
      disabled:false,
      name:"contactAddress"
    }
  ]

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [showContactForm])

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-red-500/80">Contact Page</h1>
        <button className="bg-red-500/80 px-2 py-2 rounded-xl hover:shadow-2xl text-white text-lg font-medium cursor-pointer"
          onClick={() => setShowContactForm(true)}>Add Contact</button>
      </div>
      {
        showContactForm ?
          <div className={`w-1/5 bg-red-300 fixed top-0 right-0 h-screen isolate transform transition-transform duration-300 ease-in-out ${showContactForm ? "translate-x-0" : "translate-x-full"}`}>
            <div className="p-4 flex justify-between items-center text-white">
              <h1 className="text-lg font-bold">Add Contact Form</h1>
              <button onClick={() => {setShowContactForm(false);formik.resetForm()}} className="cursor-pointer text-xl hover:scale-110 font-bold">X</button>
            </div>
            <form onSubmit={formik.handleSubmit}  >

            {
              inputFields.map((val)=>(

                <CommonInput
                name={val.name}
                type={val.type}
                  key={val.id}
                  value={val.value}
                  onChange={val.onChange}
                  label={val.label}
                  placeholder={val.placeholder}
                  disabled={val.disabled}
                  errors={formik.errors[val.name] || ""}
                />
              ))
            }
            <button className="px-2 py-2 text-lg font-bold fixed bottom-5 right-5 rounded bg-red-500 hover:drop-shadow-2xl cursor-pointer text-white" type="submit">Submit</button>
            </form>


          </div> : null
      }
      <ContactCard contacts={contacts} />
    </div>
  )
}

export default ContactPage
