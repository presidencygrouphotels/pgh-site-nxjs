"use client"
import Script from "next/script";
import { FormEvent, FormEventHandler, useState } from "react";
import dotenv from 'dotenv';

dotenv.config();

export default function ContactForm() {
  
    const handleCaptchaVerification = () => {
    };
  
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(document.getElementById("c-form") as HTMLFormElement);
        console.log(formData)
        await fetch('/api/form', {
            method: 'POST',
            body: formData,
          })
      };

      function captchaSubmit(token:string){
        console.log(token)
      }
  
    return (
        <>
        <Script src="https://www.google.com/recaptcha/api.js"/>
      <div className="col-span-full flex flex-col items-center w-full pb-36">
        <form className="bg-pgh-black w-[60%] p-6 mt-8  border-pgh-gold border-[1px] rounded-sm" id="c-form">
          <p className="font-zodiak font-medium text-2xl uppercase text-pgh-gold">
            Contact Form
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="name" className="text-pgh-gold block font-semibold tracking-tight pb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border-pgh-gold border-[2px] border-opacity-35 focus:border-opacity-100 transition-all duration-200 rounded-md focus:bg-pgh-black bg-pgh-gray text-pgh-white"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="name" className="text-pgh-gold block font-semibold tracking-tight pb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border-pgh-gold border-[2px] border-opacity-35 focus:border-opacity-100 transition-all duration-200 rounded-md focus:bg-pgh-black bg-pgh-gray text-pgh-white"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="name" className="text-pgh-gold block font-semibold tracking-tight pb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-pgh-gold border-[2px] border-opacity-35 focus:border-opacity-100 transition-all duration-200 rounded-md focus:bg-pgh-black bg-pgh-gray text-pgh-white"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="name" className="text-pgh-gold block font-semibold tracking-tight pb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full p-3 border-pgh-gold border-[2px] border-opacity-35 focus:border-opacity-100 transition-all duration-200 rounded-md focus:bg-pgh-black bg-pgh-gray text-pgh-white"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="name" className="text-pgh-gold block font-semibold tracking-tight pb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border-pgh-gold border-[2px] border-opacity-35 focus:border-opacity-100 transition-all duration-200 rounded-md focus:bg-pgh-black bg-pgh-gray text-pgh-white"
              />
            </div>

            
          </div>
            <Script id="captcha-script">
            {`function captchaSubmit(token){
              console.log(token)
              let formData = new FormData(document.getElementById('c-form'))
              fetch("/api/form",{
                method:"POST",
                body: formData
              })
            }`}
            </Script>
          <button 
          data-sitekey="6LdbVWQpAAAAAJcE4c84LFmHnLHYEg3DMGNhQnPZ" 
          data-callback="captchaSubmit"
          data-action='submit'
          type="submit" className="g-recaptcha bg-pgh-gold text-pgh-gray py-2 px-4 mt-4 rounded-sm">Submit</button>
        </form>
  
      </div>
      </>
    );
  }