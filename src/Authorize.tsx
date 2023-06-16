import classNames from 'classnames'

const Authorize = (props: { show: boolean }) => {
  const { show } = props

  return (
    <div className="container h-full flex flex-col items-center justify-center">
      <div
        className={classNames(
          'w-[13.75rem] transition-all duration-700',
          show ? 'scale-100 translate-y-0' : 'scale-50 translate-y-10',
        )}
      >
        <img src="/images/logo-ai.svg" className="w-full" />
      </div>
      <div
        className={classNames(
          'mt-14 transition-all duration-700',
          show ? 'translate-y-0' : 'translate-y-10',
        )}
      >
        <h1 className="text-3xl md:text-4xl font-medium">Welcome to Gosh.AI</h1>
        <div className="mt-1 text-lg text-center">Create account or login with Gosh</div>
      </div>
      <div
        className={classNames(
          'mt-16 flex flex-row flex-wrap gap-4 items-center transition-all duration-700',
          show ? 'scale-100 translate-y-0' : 'scale-50 translate-y-10',
        )}
      >
        <a
          href="https://app.gosh.sh/ai/onboarding"
          rel="noreferrer"
          className="block py-3 px-6 bg-black text-white border border-transparent rounded-[3.5rem]
          hover:bg-white hover:border-black hover:text-black transition-all w-full md:w-auto text-center"
        >
          Create account
        </a>
        <a
          href="https://app.gosh.sh/a/signin?redirect_to=/ai"
          rel="noreferrer"
          className="block py-3 px-6 bg-white text-black border border-black rounded-[3.5rem]
          hover:bg-black hover:text-white transition-all w-full md:w-auto text-center"
        >
          Log in with
          <span className="ml-2">
            <i className="icon icon-gosh align-middle mr-1" />
            Gosh
          </span>
        </a>
      </div>
    </div>
  )
}

export default Authorize
