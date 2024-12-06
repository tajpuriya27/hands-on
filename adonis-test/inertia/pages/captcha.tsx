import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import env from '#start/env'

export default function Captcha() {
  console.log('hello')
  const [captchaToken, setCaptchaToken] = React.useState<string>('')

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token || '')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!captchaToken) {
      alert('Invalid captcha')
      return
    }

    const response = await axios.post('/your-server-endpoint', {
      captchaToken,
    })

    console.log(response)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ReCAPTCHA sitekey={env.get('GOOGLE_CAPTCHA_SITE_KEY')} onChange={handleCaptchaChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
