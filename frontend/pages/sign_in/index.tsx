import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { useId } from 'react'

export default function SignIn() {
  const googleOauth2Url = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  googleOauth2Url.searchParams.append('client_id', '')
  googleOauth2Url.searchParams.append('redirect_uri', 'http://localhost:3000/users/auth/google_oauth2/callback')
  googleOauth2Url.searchParams.append('response_type', 'code')
  googleOauth2Url.searchParams.append('scope', 'openid email profile')

  return (
    <div
      className="grid h-screen w-screen place-items-center bg-slate-800 px-4 text-sm font-medium"
    >
      <div className="w-full max-w-sm rounded-lg bg-slate-700/30 shadow">
        <div>
          {/* Link to Go Back */}
          <Link href="/">
            Go Back
          </Link>
        </div>

        <form className="p-4 md:p-5 lg:p-6">
          <div className="grid gap-y-3">
            <button
              className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-400"
            >
              <a href={googleOauth2Url.toString()} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGoogle} width="20" height="20" color="rgb('203, 213, 225')" />

                Sign in with Google
              </a>
            </button>
          </div>

          <div className="my-3 flex items-center px-3">
            <hr className="w-full border-slate-600" />
            <span className="mx-3 text-slate-500">or</span>
            <hr className="w-full border-slate-600" />
          </div>

          <div className="grid gap-y-3">
            <input
              className="focus:border-purple-400 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400"
              placeholder="email@example.com"
            />
            <button
              className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-400"
            >
              <FontAwesomeIcon icon={faEnvelope} width="20" height="20" color="rgb('203, 213, 225')" />
              Sign in with Email
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
