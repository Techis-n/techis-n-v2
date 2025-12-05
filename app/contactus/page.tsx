"use client"

import type React from "react"
import { useEffect, useState } from "react"
import BackgroundEffects from "../components/background-effects"

export default function ContactPage() {
  const [chosenservice, setChosenService] = useState<string>("")
  const [companyname, setCompanyName] = useState<string>("")
  const [secondname, setSecondName] = useState<string>("")
  const [phonenumber, setPhoneNumber] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [document, setDocument] = useState<File | null>(null)
  const [statusMessage, setStatusMessage] = useState("")
  const [statusType, setStatusType] = useState("")

  async function submitform(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()

      if (!phonenumber || phonenumber.trim() === "") {
        setStatusType("error")
        setStatusMessage("Phone number is required.")
        return
      }
      setStatusType('sending')
      setStatusMessage('Sending Request...')

      const formdata = new FormData()
      formdata.append("companyname", companyname)
      formdata.append("secondname", secondname)
      formdata.append("phonenumber", phonenumber)
      formdata.append("email", email)
      formdata.append("chosenservice", chosenservice)
      formdata.append("description", description)

      if (document) {
        formdata.append("document", document)
      }

      // Simulate form submission (replace with actual API call)
      // await new Promise((resolve) => setTimeout(resolve, 1000))
      const contactres=await fetch('/api/route',{
        method:'POST',
        body:formdata
        })
      const response=await contactres.json()
      console.log('response...',response)
      if (response.success===true){

      setStatusType("success")
      setStatusMessage("Thank you! Your request has been submitted.")
      setCompanyName("")
      setSecondName("")
      setEmail("")
      setPhoneNumber("")
      setChosenService("")
      setDescription("")
      setDocument(null)
   }else{
    setStatusMessage("Oops! Something went wrong. Please try again.")
    setStatusType("error")
   }
    } catch (e) {
      console.log("error from backend..", e)
      setStatusMessage("Oops! Something went wrong. Please try again.")
      setStatusType("error")
    }
  }

  useEffect(() => {
    if (statusMessage) {
      setTimeout(() => {
        setStatusMessage("")
        setStatusType("")
      }, 5000)
    }
  }, [statusMessage])

  return (
    <>
      <BackgroundEffects />
      <div className="min-h-screen flex items-center justify-center py-5 sm:px-6 lg:px-8">
        <div
          className="max-w-6xl w-full shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row"
          style={{ borderColor: "var(--borderColorLight)", borderStyle: "solid", borderWidth: "1px" }}
        >
          {/* Left Side - Banner */}
          <div
            className="lg:w-1/2 bg-cover bg-center flex items-center justify-center p-8"
            style={{
              backgroundImage: "url('/modern-technology-office-workspace.jpg')",
            }}
          >
            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-md text-white max-w-md">
              <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--textHighlights)" }}>
                Let's Connect
              </h2>
              <p className="text-sm leading-relaxed">
                Every great partnership begins with a conversation. Reach out — we're ready when you are.
              </p>
              <p className="mt-2 text-xs italic">
                Your success is our priority — let&apos;s build something great together.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 w-full p-8" style={{ background: "var(--background2)" }}>
            <h2 className="text-3xl font-bold mb-1" style={{ color: "var(--textHighlights)" }}>
              Contact Us
            </h2>
            <p className="text-sm text-gray-400 mb-6">Have a question or project in mind? Fill out the form below.</p>

            <form className="space-y-4" onSubmit={submitform}>
              <input
                type="text"
                placeholder="Company Name"
                value={companyname}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{
                  background: "var(--background1)",
                  borderColor: "var(--borderColorLight)",
                  color: "white",
                }}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--textHighlights)")}
              />

              <input
                type="text"
                placeholder="Your Name"
                value={secondname}
                onChange={(e) => setSecondName(e.target.value)}
                style={{
                  background: "var(--background1)",
                  borderColor: "var(--borderColorLight)",
                  color: "white",
                }}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--textHighlights)")}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  background: "var(--background1)",
                  borderColor: "var(--borderColorLight)",
                  color: "white",
                }}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--textHighlights)")}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: "var(--background1)",
                  borderColor: "var(--borderColorLight)",
                  color: "white",
                }}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--textHighlights)")}
                required
              />

              <select
                value={chosenservice}
                onChange={(e) => setChosenService(e.target.value)}
                style={{
                  background: "var(--background1)",
                  borderColor: "var(--borderColorLight)",
                  color: "white",
                }}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--textHighlights)")}
              >
                <option value="">-- Select a Service --</option>
                <option value="software">Software Solutions</option>
                <option value="ai">AI Solutions</option>
                <option value="cloud">Cloud Services</option>
                <option value="data">Data Analytics</option>
                <option value="graphics">Graphics Design</option>
                <option value="testing">Testing and Quality Assurance</option>
                <option value="others">Others</option>
              </select>

              <div className="space-y-1">
                <label className="text-sm text-gray-400">Upload a document for your project (optional)</label>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0 file:text-sm file:font-semibold
                    file:text-white hover:file:cursor-pointer"
                  style={
                    {
                      "--file-bg": "var(--buttons)",
                      "--file-hover-bg": "var(--buttonHover)",
                    } as React.CSSProperties
                  }
                  onChange={(e) => {
                    const filelist = e.target.files
                    if (filelist && filelist.length > 0) {
                      setDocument(filelist[0])
                    }
                  }}
                />
              </div>

              <textarea
                rows={4}
                placeholder="Briefly tell us more about your project or need..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  background: "var(--background1)",
                  borderColor: "var(--borderColorLight)",
                  color: "white",
                }}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--textHighlights)")}
              ></textarea>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2 text-white rounded-md transition shadow-md hover:shadow-lg"
                  style={{
                    background: "var(--buttons)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--buttonHover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--buttons)")}
                >
                  Send
                </button>
              </div>
            </form>

            {statusMessage && (
              <div
                className={`mt-4 p-3 rounded-md text-sm font-medium ${
                  statusType === "success"
                    ? "bg-green-900/30 text-green-400 border border-green-700"
                    :statusType==="sending"
                    ? "bg-yellow-900/30 text-yellow-400 border border-yellow-700"
                    : "bg-red-900/30 text-red-400 border border-red-700"
                }`}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
