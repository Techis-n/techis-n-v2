
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import formidable, {Fields,Files,File} from 'formidable'
import fs from 'fs'
import type { SendMailOptions,SentMessageInfo } from 'nodemailer'
import { Html } from 'next/document'
import { Fieldset } from '@headlessui/react'
import dotenv from 'dotenv'
// import { Interface } from 'readline'
// import { error } from 'console'
// import { AttachedBindMode } from 'three'

dotenv.config()

export const config={
    api:{
        bodyParser:false,
    },
}

async function sendemail(to:string|undefined ,body:string, from:string,subject:string,attachments:SendMailOptions['attachments']| undefined):Promise<SentMessageInfo | null>{
    try{
        
        const transporter=nodemailer.createTransport({
            service:'gmail',
            port:587,
            secure:false,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }})
    
        const mailtosend={
            from:from,
            to:to,
            subject:subject,
            html:body,
            attachments:attachments
        }
    
        const sentmail=await transporter.sendMail(mailtosend)
        console.log(sentmail)
    
        return sentmail
    }catch(e){
        console.error('error in sending the email function',e)
        return null
    }
}


export default  async function handler(req:NextApiRequest, res:NextApiResponse){
    try{
        if(req.method !== 'POST') return res.status(405).json({error:"method not allowd,only POST allowed "})
        console.log('entered ..')
        
        const form=formidable({keepExtensions:true, maxFileSize:10*1024*1024,multiples:false})
        console.log('form from formidable...')

        const {fields,files}=await new Promise <{fields:Fields,files:Files}>((resolve,reject)=>{
            form.parse(req, (err:Error |null,fields,files)=>{
                console.log('entered into parsing the request ..')
                if(err){
                    console.error('error in parsing dofm data')
                    return reject(err)
                    // return res.status(500).json({error:'failed to parse form'})
                }
                resolve({fields,files})

        })
    })
            const companyname=fields.companyname as string | undefined
            const secondname= fields.secondname as string |undefined
            const phonenumber=fields.phonenumber as string | undefined
            const email = fields.email as string | undefined
            const chosenservice =fields.chosenservice as string | undefined
            const description = fields.description as string | undefined
            // const {companyname , secondname, phonenumber ,email,chosenservice,description}=fieldstypes
            const actualfile=files.document as File | File[] | undefined
            const phonenumberNum=parseInt(phonenumber ?? '',10) 
            const file=Array.isArray(actualfile)?actualfile[0]:actualfile
            console.log('check  file,',file)
            
            const filecontent=file? fs.readFileSync(file.filepath):null

            //email  to techis-n
            const subject = 'New Client Contact Submission';
            const tech_from ='"Techis-N Contact System" <no-reply@techis-n.com>'
            const body = `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px;">

  <p>Dear Team,</p>

  <p>
    You have received a new contact form submission from a potential client.  
    Below are the details:
  </p>

  <div style="border: 1px solid #ddd; padding: 15px; border-radius: 6px; background: #fafafa;">

    <p><strong>📌 Company Name:</strong> ${companyname}</p>
    <p><strong>👤 Client Name:</strong> ${secondname}</p>
    <p><strong>📧 Email:</strong> ${email}</p>
    <p><strong>📞 Phone Number:</strong> ${phonenumberNum}</p>
    <p><strong>🛠️ Chosen Service:</strong> ${chosenservice}</p>

    <p><strong>📝 Project Description:</strong><br>
    ${description}</p>

  </div>

  <p>
    Please find any attached documents for more context.  
    Kindly follow up with the client at your earliest convenience.
  </p>

  <p>
    Best regards,<br>
    <strong>Techis-N Contact System</strong>
  </p>

</div>
`;

            
            
            const attachments:SendMailOptions['attachments']=file && file.originalFilename && filecontent ? [{
                filename:file.originalFilename,
                content:filecontent
            }]:[]
            
            const techto=process.env.TECH_TO

            const clientsubject = "Thank You for Reaching Out to Techis-N";
            const client_from='"Techis-N Contact System" <techisn25@gmail.com>'
            const clientbody = `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px;">
  
  <p>Dear ${secondname},</p>

  <p>Thank you for contacting <strong>Techis-N</strong>!</p>

  <p>
    We have received your inquiry and our team will be in touch with you shortly
    to discuss your project and how we can support your goals.
  </p>

  <p>
    In the meantime, if you have any additional details or questions, feel free 
    to reply to this email or reach out to us using the contact information below.
  </p>

  <p>
    We appreciate your interest in Techis-N and look forward to speaking with you soon.
  </p>

  <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">

  <p style="font-size: 14px; color: #555;">
    Best regards,<br>
    <strong>The Techis-N Team</strong><br>
    <a href="https://techis-n.com/" style="color: #00c3ffff; text-decoration: none;">
      Techis-N.com
    </a><br>
    <a href="mailto:techisn25@gmail.com" style="color: #007bff; text-decoration: none;">
      techisn25@gmail.com
    </a>
  </p>

</div>

`;

            

            try{
                console.log('sending email...')
                //sending email to the tech team
                const sentres=await sendemail(techto,body,tech_from,subject,attachments)
                console.log('sent response ...',sentres)

                let clientres;

                if (sentres.messageId){  
                    console.log('message sent to company') 
                    // setTimeout(async()=>{
                    console.log('sending to the client...')
                    const attach: SendMailOptions['attachments']=[]
                    clientres=await sendemail(email,clientbody,client_from,clientsubject,attach)
                    console.log('client sent response ...',clientres)
                    if(clientres.messageId){
                        return res.json({ success: true, message: 'Emails sent successfully' });
                    }else{
                        return res.json({success:false,message:"Email failed to send to client"})
                    } 
                    // },5000)
                    
                    // if(clientres){console.log('email sent to client successfuly')} else{console.error('email not sent to client')}
                }else{
                    return res.json({success:false , messsage:'Email to company failed'})
                }

            }catch(e){
                console.error('error in sending an email',e)
            }

        
        

        


    }catch(e){
        console.error('error in sending mail route',e)
        return res.status(500).json({error:"email route error"})
    }
}
