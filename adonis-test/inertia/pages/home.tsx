import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import axios from 'axios'
import env from '#start/env'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Home() {
  console.log('hello', ReCAPTCHA)

  const [captchaToken, setCaptchaToken] = React.useState<string>('')
  const [isClient, setIsClient] = React.useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleCaptchaChange = (token: any) => {
    setCaptchaToken(token)
  }

  const {} = useForm({
    fullName: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!captchaToken) {
      alert('Invalid captcha')
    }

    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: env.get('GOOGLE_CAPTCHA_SECRET_KEY'),
        response: captchaToken,
      },
    })

    console.log('response', response)

    // post('/expert ')

    // reset()
  }

  return (
    <>
      <div className="fixed xl:absolute left-8 right-8 top-0 bottom-0 xl:inset-0 max-w-screen-xl mx-auto before:content-[''] before:[background:repeating-linear-gradient(0deg,var(--sand-5)_0_4px,transparent_0_8px)] before:absolute before:top-0 before:left-0 before:h-full before:w-px after:content-[''] after:[background:repeating-linear-gradient(0deg,var(--sand-5)_0_4px,transparent_0_8px)] after:absolute after:top-0 after:right-0 after:h-full after:w-px">
        <div>Checking code</div>
        <form onSubmit={handleSubmit}>
          {isClient && (
            <div className="bg-slate-950">
              <ReCAPTCHA sitekey="6LeN2ZAqAAAAAFpkfwxaUdObAjgDtUYwgmcOhVGv" />
            </div>
          )}
        </form>
      </div>
    </>
  )
}
