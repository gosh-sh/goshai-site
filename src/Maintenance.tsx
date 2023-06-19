import './assets/scss/style.scss'

const Maintenance = () => {
  return (
    <div className="maintenance-wrapper flex flex-col h-full w-full items-center justify-center">
      <div className="w-[13rem] md:w-[16.75rem]">
        <img src="/images/logo-ai.svg" alt="logo" className="w-full" />
      </div>
      <div className="mt-6">
        <h1 className="text-4xl md:text-6xl font-medium">Under construction</h1>
      </div>
      <div className="mt-16 flex items-center justify-center gap-x-8">
        <a href="https://blog.gosh.sh/" target="_blank" rel="noreferrer">
          <i className="icon icon-blog align-middle text-4xl" />
        </a>
        <a href="https://t.me/gosh_sh" target="_blank" rel="noreferrer">
          <i className="icon icon-telegram align-middle text-4xl" />
        </a>
      </div>
    </div>
  )
}

export default Maintenance
