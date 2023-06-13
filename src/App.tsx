import { useState } from 'react'
import classNames from 'classnames'
import Typewriter from 'typewriter-effect'
import './assets/scss/style.scss'
import Authorize from './Authorize'

function App() {
  const [showAuth, setShowAuth] = useState<boolean>(false)
  const [showBackground, setShowBackground] = useState<boolean>(false)

  const onAuthToggle = () => {
    setShowAuth(!showAuth)
  }

  const onBackgroundToggle = (flag: boolean) => {
    setShowBackground(flag)
  }

  return (
    <div
      className={classNames(
        'main-wrapper flex flex-col relative',
        'before:transition-all after:transition-all',
        showBackground
          ? 'before:opacity-100 after:opacity-100'
          : 'before:opacity-0 after:opacity-0',
      )}
    >
      <div
        className={classNames(
          'auth-wrapper fixed w-screen h-screen left-0 top-0 bg-white',
          showAuth ? 'opacity-100 z-10' : 'opacity-0 -z-10',
        )}
      >
        <Authorize show={showAuth} />
      </div>

      <div className="grow pt-16 pb-10">
        <div className="container flex flex-nowrap items-center">
          <div className="grow flex items-center">
            <a href="/" className="inline-flex flex-nowrap gap-x-3 items-center text-lg">
              <div className="w-9 h-9">
                <img src="/images/logo-gosh.svg" className="w-full" />
              </div>
              gosh
            </a>
          </div>
          <div className="flex items-center justify-end gap-x-8">
            <a href="https://blog.gosh.sh/" target="_blank" rel="noreferrer">
              <i className="icon icon-blog align-middle text-3xl" />
              <span className="ml-3 hidden md:inline-block">Our blog</span>
            </a>
            <a href="https://t.me/gosh_sh" target="_blank" rel="noreferrer">
              <i className="icon icon-telegram align-middle text-3xl" />
              <span className="ml-3 hidden md:inline-block">Our telegram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="container">
          <div className="flex flex-wrap gap-x-6 gap-y-16 items-end">
            <div className="basis-full lg:basis-8/12  min-h-[10rem] md:min-h-[16.875rem]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span class="title-blue">GOSH AI</span> writes code in any language with any complexity',
                    )
                    .pauseFor(1000)
                    .start()
                }}
                options={{
                  autoStart: true,
                  delay: 70,
                  loop: false,
                  wrapperClassName:
                    'text-4xl md:text-6xl leading-tight md:leading-normal font-medium',
                  cursorClassName:
                    'cursor-blue inline-block h-9 md:h-14 w-1 md:w-2.5 ml-3 rounded overflow-hidden text-transparent translate-y-2 md:translate-y-3',
                }}
              />
            </div>
            <div className="grow">
              <button
                className="btn-showauth border border-black bg-gray1 rounded-3xl w-full
                hover:border-transparent text-lg py-3 px-6 transition-all overflow-hidden"
                onClick={onAuthToggle}
                onMouseEnter={() => onBackgroundToggle(true)}
                onMouseLeave={() => onBackgroundToggle(false)}
              >
                Try Gosh AI
              </button>
            </div>
          </div>

          <div className="mt-14 py-12 border-t border-t-black flex flex-wrap justify-between gap-x-4 gap-y-12">
            <div className="basis-full lg:basis-3/12">
              <h4 className="text-2xl font-medium mb-5">
                Meet your team of AI coding assistants
              </h4>
              <div className="text-gray2">
                With GOSH.AI, one person with technical knowledge can now manage and
                deliver complex software in very little time
              </div>
            </div>
            <div className="basis-full lg:basis-3/12">
              <h4 className="text-2xl font-medium mb-5">Simplify your workflow</h4>
              <div className="text-gray2">
                GOSH.AI will create all project files in the repository and write code,
                tests, and deploy scripts
              </div>
            </div>
            <div className="basis-full lg:basis-3/12">
              <h4 className="text-2xl font-medium mb-5">Don't compromise on security</h4>
              <div className="text-gray2">
                Because GOSH.AI runs on the blockchain, the code it generates is
                immutable, timestamped, and stored in a decentralized way
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xs text-gray2">
              GOSH.AI only supports code for asynchronous solidity at the moment
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
